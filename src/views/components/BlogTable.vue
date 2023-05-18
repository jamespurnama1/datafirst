<template>
  <div class="card">
    <div class="card-header pb-0 d-flex align-items-center justify-content-between">
      <h6>Blog</h6>
      <button class="d-flex align-items-center justify-content-center mb-3 btn btn-dark btn-sm w-10 cursor-pointer" @click="writeBlog('Data Analyst with SQL background', 'admin', 'desc', 'Lorem Ipsu ', 'job1', 'dataSQL3831', Date.now())">+</button>
    </div>
    <div class="card-body px-0 pt-0 pb-2">
      <div class="table-responsive p-0">
        <table class="table align-items-center mb-0">
          <thead>
            <tr>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Post</th>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
              >ID</th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >Date Published</th>
              <!-- <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >Employed</th> -->
              <th class="text-secondary opacity-7"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="post in blog">
              <td>
                <div class="d-flex px-2 py-1">
                  <!-- <div>
                    <img
                      src="../../assets/img/team-2.jpg"
                      class="avatar avatar-sm me-3"
                      alt="user1"
                    />
                  </div> -->
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">{{post.title}}</h6>
                    <p class="text-xs text-secondary mb-0">{{post.author}}</p>
                  </div>
                </div>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">Manager</p>
                <!-- <p class="text-xs text-secondary mb-0">Organization</p> -->
              </td>
              <!-- <td class="align-middle text-center text-sm">
                <span class="badge badge-sm bg-gradient-success">Online</span>
              </td> -->
              <td class="align-middle text-center">
                <span class="text-secondary text-xs font-weight-bold">{{ post.date ? formatDate(post.date) : '' }}</span>
              </td>
              <td class="align-middle">
                <a
                  href="javascript:;"
                  class="text-secondary font-weight-bold text-xs"
                  data-toggle="tooltip"
                  data-original-title="Edit user"
                >Edit</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { blogRef, writeBlog } from '@/firebase'
import { useDatabaseList } from 'vuefire'

const blog = useDatabaseList(blogRef)

function formatDate (value)
{
  let date = new Date(value);
  const day = date.toLocaleString('default', { day: '2-digit' });
  const month = date.toLocaleString('default', { month: 'short' });
  const year = date.toLocaleString('default', { year: 'numeric' });
  return day + ' ' + month + ' ' + year;
}
</script>
