<template>
  <div v-if="confirm"
    class="position-fixed w-100 h-100 d-flex justify-content-center align-items-center z-index-3 top-0 left-0">
    <info-card class="position-relative z-index-3" @clicked="del(confirm)" @cancel="confirm = 0"
      title="Are you sure?" desc="You are about to delete an existing job listing." button="Delete" buttonColor="danger" />
    <div class="bg-white opacity-5 h-100 w-100 position-absolute top-0 left-0" />
  </div>
  <div class="card">
    <div class="card-header pb-0 d-flex align-items-center justify-content-between">
      <h6>Job Listings</h6>
      <router-link class="text-white" to="/jobs/new">
      <button class="d-flex align-items-center justify-content-center mb-3 btn btn-dark btn-sm w-10 cursor-pointer">
        +
      </button>
      </router-link>
    </div>
    <div class="card-body px-0 pt-0 pb-2">
      <div class="table-responsive p-0 min-height-300">
        <table class="table mb-auto">
          <thead v-if="jobs.length">
            <tr>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Post</th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >ID</th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >Type</th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >Link</th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >Date Listed</th>
              <th class="text-secondary opacity-7"></th>
              <th class="text-secondary opacity-7"></th>
            </tr>
          </thead>
          <tbody v-if="jobs.length">
            <tr v-for="job in jobs">
              <td class="align-middle">
                <div class="d-flex px-2 py-1 ps-3">
                  <!-- <div>
                    <img
                      src="../../assets/img/team-2.jpg"
                      class="avatar avatar-sm me-3"
                      alt="user1"
                    />
                  </div> -->
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">{{ job.title }}</h6>
                    <p class="text-xs limit text-secondary mb-0">{{ job.desc }}</p>
                  </div>
                </div>
              </td>
              <td class="align-middle">
                <p class="text-xs font-weight-bold mb-0 text-center">{{ job.slug }}</p>
                <!-- <p class="text-xs text-secondary mb-0">Organization</p> -->
              </td>
              <td class="align-middle text-sm text-center">
                <span class="badge badge-sm" :class="badgeClasses(job.type)">{{ job.type.replace(/([A-Z])/g, ' $1').trim() }}</span>
              </td>
              <td class="align-middle text-center">
                <a :href="job.link ? job.link : ''" target="_blank" rel="noreferrer noopener" class="text-secondary text-xs font-weight-bold">{{ job.link ? job.link : '' }}</a>
              </td>
              <td class="align-middle text-center">
                <span class="text-secondary text-xs font-weight-bold">{{ job.date ? formatDate(job.date) : '' }}</span>
              </td>
              <td>
                <router-link :to="`/jobs/${job.slug}`" class="btn btn-link text-dark m-0" data-toggle="tooltip"
                    data-original-title="Edit listing">
                  <i class="fas fa-pencil-alt text-dark me-2" aria-hidden="true"></i>Edit
                </router-link>
              </td>
              <td>
                <a @click="confirm = job.slug" class="btn btn-link text-danger text-gradient m-0" data-toggle="tooltip"
                  data-original-title="Delete post">
                  <i class="far fa-trash-alt me-2" aria-hidden="true"></i>Delete
                </a>
              </td>
            </tr>
          </tbody>
          <tbody v-else>
              <td class="align-middle mx-auto text-center w-100">
              No Job listing yet...
              </td>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { jobsRef, deleteJob } from '@/firebase';
import { listAll, deleteObject, getStorage, ref as storageRef } from 'firebase/storage'
import { useDatabaseList } from 'vuefire';
import InfoCard from "@/examples/Cards/DefaultInfoCard.vue";

const jobs = useDatabaseList(jobsRef);
const confirm = ref(0);
const storage = getStorage();
const badgeClasses = (type) => {
  return {
  "bg-gradient-success":
    type === 'dataAnalyst',
  "bg-gradient-primary":
    type === 'dataEntry',
  "bg-gradient-danger":
    type === 'sales',
  "bg-gradient-warning":
    type === 'customerService',
  "bg-gradient-secondary":
    type === 'others',
  }
};

function del(slug) {
  let err = false;
  listAll(storageRef(storage, `jobs/${slug}`)).then((res) => {
    res.items.forEach((itemRef) => {
      deleteObject(itemRef)
    });
  }).catch((error) => {
    err = true;
    console.error(error)
  });
  if (err) return;
  deleteJob(confirm.value);
  confirm.value = 0;
}

function formatDate(value) {
  let date = new Date(value);
  const day = date.toLocaleString('default', { day: '2-digit' });
  const month = date.toLocaleString('default', { month: 'short' });
  const year = date.toLocaleString('default', { year: 'numeric' });
  return day + ' ' + month + ' ' + year;
};
</script>
