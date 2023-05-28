<template>
  <div v-if="confirm"
    class="position-fixed w-100 h-100 d-flex justify-content-center align-items-center z-index-3 top-0 left-0">
    <info-card class="position-relative z-index-3" @clicked="del(post.slug)" @cancel="confirm = false"
      title="Are you sure?" desc="You are about to delete an existing job listing." button="Delete" buttonColor="danger" />
    <div class="bg-white opacity-5 h-100 w-100 position-absolute top-0 left-0" />
  </div>
  <main>
    <div class="container-fluid mb-5">
      <div class="d-flex gap-5">
        <div class="w-30">
          <label for="title-input" class="form-control-label">Title</label>
          <argon-input @value="(x) => title = x.value" type="text" :value="post ? post.title : ''" />
          <label for="type-input" class="form-control-label">Type</label>
          <div>
            <div class="dropdown mb-6">
              <div
                class="cursor-pointer form-control"
                :class="{ show: showMenu }"
                id="dropdownUsers1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                @click="showMenu = !showMenu"
              >
                <p class="m-0" v-if="post">{{ post.type.charAt(0).toUpperCase() + post.type.slice(1).replace(/([A-Z])/g, ' $1').trim() }}</p>
                <p class="m-0" v-else-if="type">{{ type.charAt(0).toUpperCase() + type.slice(1).replace(/([A-Z])/g, ' $1').trim() }}</p>
                <p class="m-0" v-else>Please Select...</p>
                <!-- <i class="fa fa-ellipsis-h" aria-hidden="true"/> -->
            </div>
              <ul
                class="dropdown-menu px-2 py-3"
                aria-labelledby="dropdownUsers1"
                :class="{ show: showMenu }"
              >
                <li @click="type = 'dataAnalyst'" >
                  <p class="dropdown-item border-radius-md">Data Analyst</p>
                </li>
                <li @click="type = 'dataEntry'" >
                  <p class="dropdown-item border-radius-md">Data Entry</p>
                </li>
                <li @click="type = 'sales'" >
                  <p class="dropdown-item border-radius-md">Sales</p>
                </li>
                <li @click="type = 'customerService'">
                  <p class="dropdown-item border-radius-md">Customer Service</p>
                </li>
                <li @click="type = 'others'" >
                  <p class="dropdown-item border-radius-md">Others</p>
                </li>
              </ul>
            </div>
            <div class="w-30">
              <label for="title-input" class="form-control-label">Link</label>
              <argon-input @value="(x) => link = x.value" type="text" :value="post ? post.link : ''" />
            </div>
          </div>
          <!-- <argon-input @value="(x) => title = x.value" type="text" :value="post ? post.title : ''" /> -->
        </div>
        <div class="d-flex row mb-auto">
          <label for="image-input" class="form-control-label mx-0 p-0">Thumbnail</label>
          <!-- <argon-input ref="imageInput" @value="(x) => compress(x)" type="file" value="" /> -->
          <div class="thumb position-relative avatar-xxl p-0">
            <div @click="open({ accept: 'image/*', multiple: false })" class="upload"><p class="text-xs text-center m-0">Upload Image</p></div>
            <img class="avatar avatar-xxl p-0" v-if="img || post" :src="tempImg ? tempImg : post.img" :alt="`${title} thumbnail`" />
            <img class="avatar avatar-xxl p-0" v-else src="@/assets/img/img-placeholder.jpg" :alt="`${title} thumbnail`" />
          </div>
        </div>
        <a @click.prevent="confirm = true" v-if="post" class="btn btn-link text-danger text-gradient m-0 ms-auto"
          data-toggle="tooltip" data-original-title="Delete Job">
          <i class="far fa-trash-alt me-2" aria-hidden="true"></i>Delete Listing
        </a>
      </div>
      <!-- <QuillEditor class="min-height-300" ref="myQuillEditor" content-type="html" @textChange="() => onEditorChange()"
        :content="html" toolbar="full" /> -->
      <label for="description" class="form-control-label">Description</label>
      <argon-input @value="(x) => desc = x.value" type="text"  el="textarea" :value="post ? post.desc : ''" />
      <div class="d-flex gap-3 w-100">
        <div class="d-flex ms-auto align-items-center">
          <argon-button :disabled="!post && !(title && img && type)" @click="apply('published')" color="success" size="sm"
            class="mt-3 ms-auto">Publish</argon-button>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import InfoCard from "@/examples/Cards/DefaultInfoCard.vue";
import ArgonInput from '../../components/ArgonInput.vue';
import ArgonButton from '../../components/ArgonButton.vue';
import { ref, computed, onUnmounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { jobsRef, writeJobs, deleteJob } from '@/firebase'
import { listAll, deleteObject, getStorage, ref as storageRef } from 'firebase/storage'
import { useDatabaseList, useStorageFile, useFirebaseStorage } from 'vuefire'
import { useFileDialog } from '@vueuse/core'
import Compressor from 'compressorjs';

const storage1 = getStorage();

async function del (slug)
{
  let err = false;
  listAll(storageRef(storage1, `jobs/${slug}`)).then((res) =>
  {
    res.items.forEach((itemRef) =>
    {
      deleteObject(itemRef)
    });
  }).catch((error) =>
  {
    err = true;
    console.error(error)
  });
  if (err) return;
  await deleteJob(slug);
  router.push('/jobs')
}

// const blog = useDatabaseList(blogRef)
const {
  // rename the Ref to something more meaningful
  data: jobs,
  // is the subscription still pending?
  pending,
  // did the subscription fail?
  error,
  // A promise that resolves or rejects when the initial state is loaded
  promise
} = useDatabaseList(jobsRef)
const route = useRoute();
const router = useRouter();
const confirm = ref(false);
const title = ref('');
const desc = ref('');
const post = ref(null);
const img = ref('')
const type = ref('')
const link = ref('')
const random = ref(0)
const showMenu = ref(false)
const { files, open, reset, onChange } = useFileDialog()
const randomGen = () => random.value = Math.floor(100000 + Math.random() * 900000)
while ((route.params.id === 'new' && !random.value) || jobs.value.find(x => x.slug === random.value)) randomGen();

promise.value.then((data) => {
  post.value = data.find(x => decodeURI(x.slug) === route.params.id)
  if (!post.value && route.params.id !== 'new') router.push('/jobs');
})

const storage = useFirebaseStorage()
const fileRef = computed(() => storageRef(storage, `jobs/${random.value ? random.value : route.params.id}/thumbnail${files[0] ? files[0].name.match(/\.[0-9a-z]+$/i)[0].substring(1) : ''}`))
const {
  url,
  uploadProgress,
  uploadError,
  uploadTask,
  upload,
} = useStorageFile(fileRef)
const tempImg = ref('')
const reader = new FileReader()

onChange((files) => {
  new Compressor(files[0], {
    quality: 0.6,
    maxHeight: 480,
    maxWidth: 480,

    // The compression process is asynchronous,
    // which means you have to access the `result` in the `success` hook function.
    success (result)
    {
      reader.readAsDataURL(result)
      reader.onloadend = () => {
        img.value = result;
        tempImg.value = URL.createObjectURL(img.value)
      }
      // Send the compressed image file to server with XMLHttpRequest.

    },
    error (err)
    {
      console.log(err.message);
    },
  });
});



async function apply (state) {
  if (img.value) { upload(new Blob([img.value], { type: img.value.type })).then((x) => xhr())
} else {
  xhr()
}
};

function xhr() {
  setTimeout(async () =>
  {
    await writeJobs(title.value.length ? title.value : post.value.title, desc.value.length ? desc.value : post.value.desc, type.value ? type.value : post.value.type, url.value ? url.value : post.value.img, route.params.id === 'new' ? random.value : route.params.id, link.value ? link.value : post.value.link, Date.now());
    router.push('/jobs');
  }, 500)
}

onUnmounted(() => {
  URL.revokeObjectURL(tempImg.value)
});
</script>

<style lang="scss">
.ql-snow {
  background-color: white;
}
</style>

<style lang="scss" scoped>
.thumb {
  overflow: hidden;

  img {
    transition: all 0.2s ease-in-out;
  }
  .upload {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0%;
    z-index: 1;
    color: white;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
}
.thumb:hover {
  img {
    filter: brightness(50%);
  }
  .upload {
    opacity: 100%;
  }
}
</style>