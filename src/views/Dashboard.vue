<template>
  <div v-if="props.signedIn" class="py-4 container-fluid">
    <div class="row">
       <div class="col-12">
          <jobs-table />
        </div>
      </div>
      <div class="mt-4 row">
        <div class="col-12">
          <blog-table />
        </div>
    </div>
    <!-- <div class="mt-4 row" v-if="store.state.user.uid === superAdmin">
          <div class="col-12">
            <users-table />
          </div>
      </div> -->
  </div>
</template>
<script setup>
import JobsTable from "./components/JobsTable.vue";
import BlogTable from "./components/BlogTable.vue";
// import UsersTable from "./components/UsersTable.vue";
// import Card from "@/examples/Cards/Card.vue";
// import GradientLineChart from "@/examples/Charts/GradientLineChart.vue";
// import Carousel from "./components/Carousel.vue";
// import CategoriesCard from "./components/CategoriesCard.vue";
import { ref, defineProps } from 'vue';
import { useStore } from 'vuex';

import US from "@/assets/img/icons/flags/US.png";
import DE from "@/assets/img/icons/flags/DE.png";
import GB from "@/assets/img/icons/flags/GB.png";
import BR from "@/assets/img/icons/flags/BR.png";

const props = defineProps(['signedIn'])
const store = useStore()
const superAdmin = ref('ES68S2SIKWbS97tjBXTQ3J1kVbe2')


      const stats = {
        money: {
          title: "Today's Money",
          value: "$53,000",
          percentage: "+55%",
          iconClass: "ni ni-money-coins",
          detail: "since yesterday",
          iconBackground: "bg-gradient-primary",
        },
        users: {
          title: "Today's Users",
          value: "2,300",
          percentage: "+3%",
          iconClass: "ni ni-world",
          iconBackground: "bg-gradient-danger",
          detail: "since last week",
        },
        clients: {
          title: "New Clients",
          value: "+3,462",
          percentage: "-2%",
          iconClass: "ni ni-paper-diploma",
          percentageColor: "text-danger",
          iconBackground: "bg-gradient-success",
          detail: "since last quarter",
        },
        sales: {
          title: "Sales",
          value: "$103,430",
          percentage: "+5%",
          iconClass: "ni ni-cart",
          iconBackground: "bg-gradient-warning",
          detail: "than last month",
        },
      }
      const sales = {
        us: {
          country: "United States",
          sales: 2500,
          value: "$230,900",
          bounce: "29.9%",
          flag: US,
        },
        germany: {
          country: "Germany",
          sales: "3.900",
          value: "$440,000",
          bounce: "40.22%",
          flag: DE,
        },
        britain: {
          country: "Great Britain",
          sales: "1.400",
          value: "$190,700",
          bounce: "23.44%",
          flag: GB,
        },
        brasil: {
          country: "Brasil",
          sales: "562",
          value: "$143,960",
          bounce: "32.14%",
          flag: BR,
        },
      // },
    };
//   },
//   components: {
//     Card,
//     GradientLineChart,
//     Carousel,
//     CategoriesCard,
//   },
// };
</script>
