<template>
  <div class="card mx-auto w-50">
    <div class="p-3 mx-4 text-center card-header">
      <div
        v-if="classIcon"
        :class="icon_bg"
        class="icon icon-shape icon-lg bg-gradient-success shadow text-center border-radius-lg"
      >
        <i class="opacity-10" :class="classIcon" aria-hidden="true"></i>
      </div>
    </div>
    <div class="p-3 pt-0 text-center card-body">
      <h6 class="mb-0 text-center">{{ title }}</h6>
      <span class="text-xs">{{ desc }}</span>
      <hr class="my-3 horizontal dark" />
      <div class="d-flex">
      <div class="d-flex align-items-center justify-content-center mx-auto">
        <argon-button @click="$emit('cancel')" :color="buttonColor === 'danger' ? 'secondary' : 'danger'" size="sm" class="ms-auto">Cancel</argon-button>
      </div>
      <div class="d-flex align-items-center justify-content-center mx-auto">
        <argon-button @click="$emit('clicked')" :color="buttonColor" size="sm" class="ms-auto">{{ button }}</argon-button>
      </div>
      </div>
      <!-- <h5 class="mb-0">{{ price }}</h5> -->
    </div>
  </div>
</template>

<script>
import ArgonButton from "@/components/ArgonButton.vue";

export default {
  name: "default-info-card",
  props: {
    icon_bg: {
      type: String,
      default: "bg-white",
    },
    classIcon: {
      type: String,
    },
    title: String,
    desc: String,
    button: String,
    buttonColor: String
  },
  components: {
    ArgonButton
  }
};
</script>