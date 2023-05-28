<template>
  <div v-if="confirm"
    class="position-fixed w-100 h-100 d-flex justify-content-center align-items-center z-index-3 top-0 left-0">
    <info-card class="position-relative z-index-3" @clicked="del(confirm)" @cancel="confirm = 0"
      title="Are you sure?" desc="You are about to delete an existing blog post." button="Delete" buttonColor="danger" />
    <div class="bg-white opacity-5 h-100 w-100 position-absolute top-0 left-0" />
  </div>
  <div class="card">
    <div class="card-header pb-0 d-flex align-items-center justify-content-between">
      <h6>Blog</h6>
      <router-link class="text-white" to="/blog/new">
        <button class="d-flex align-items-center justify-content-center mb-3 btn btn-dark btn-sm w-10 cursor-pointer">
          +
        </button>
      </router-link>
    </div>
    <div class="card-body px-0 pt-0 pb-2">
      <div class="table-responsive p-0 min-height-300">
        <table class="table mb-auto">
          <thead v-if="blog.length">
            <tr>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Post</th>
              <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">ID</th>
              <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Status</th>
              <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Date Modified</th>
              <th class="text-secondary opacity-7"></th>
              <th class="text-secondary opacity-7"></th>
            </tr>
          </thead>
          <tbody v-if="blog.length">
            <tr v-for="post in blog" >
              <td>
                <div class="d-flex px-2 py-1 ps-3">
                  <!-- <div>
                    <img
                      src="../../assets/img/team-2.jpg"
                      class="avatar avatar-sm me-3"
                      alt="user1"
                    />
                  </div> -->
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm limit">{{ post.title }}</h6>
                    <p class="text-xs text-secondary mb-0">{{ post.author }}</p>
                  </div>
                </div>
              </td>
              <td class="align-middle">
                <p class="text-xs font-weight-bold mb-0 text-center">{{ post.slug }}</p>
                <!-- <p class="text-xs text-secondary mb-0">Organization</p> -->
              </td>
              <td class="align-middle text-center text-sm">
                  <span class="badge badge-sm" :class="[post.status === 'published' ? 'bg-gradient-success' : 'bg-gradient-secondary']">{{ post.status }}</span>
                </td>
              <!-- <td class="align-middle text-center text-sm">
                <span class="badge badge-sm bg-gradient-success">Online</span>
              </td> -->
              <td class="align-middle text-center">
                <span class="text-secondary text-xs font-weight-bold">{{ post.date ? formatDate(post.date) : '' }}</span>
              </td>
              <td>
                <router-link :to="`/blog/${post.slug}`" class="btn btn-link text-dark m-0"
                  data-toggle="tooltip" data-original-title="Edit Post">
                  <i class="fas fa-pencil-alt text-dark me-2" aria-hidden="true"></i>Edit
                </router-link>
              </td>
              <td>
                <a @click="confirm = post.slug" class="btn btn-link text-danger text-gradient m-0" data-toggle="tooltip"
                  data-original-title="Delete post">
                  <i class="far fa-trash-alt me-2" aria-hidden="true"></i>Delete
                </a>
              </td>
            </tr>
          </tbody>
          <tbody v-else>
            <td class="align-middle mx-auto text-center w-100">
            No blog post yet...
            </td>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { blogRef, deleteBlog } from '@/firebase'
import { listAll, deleteObject, getStorage, ref as storageRef } from 'firebase/storage'
import { useDatabaseList } from 'vuefire'
import InfoCard from "@/examples/Cards/DefaultInfoCard.vue";

const blog = useDatabaseList(blogRef)
const confirm = ref(0);
const storage = getStorage();

function del (slug)
{
  let err = false;
  listAll(storageRef(storage, `blog/${slug}`)).then((res) =>
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
  deleteBlog(confirm.value);
  confirm.value = 0;
}

function formatDate (value)
{
  let date = new Date(value);
  const day = date.toLocaleString('default', { day: '2-digit' });
  const month = date.toLocaleString('default', { month: 'short' });
  const year = date.toLocaleString('default', { year: 'numeric' });
  return day + ' ' + month + ' ' + year;
}
</script>
