<template>
  <div class="container top-0 position-sticky z-index-sticky">
    <div class="row">
      <div class="col-12">
        <navbar
          isBlur="blur  border-radius-lg my-3 py-2 start-0 end-0 mx-4 shadow"
          v-bind:darkMode="true"
          isBtn="bg-gradient-success"
        />
      </div>
    </div>
  </div>
  <main class="mt-0 main-content">
    <section>
      <div class="page-header min-vh-100">
        <div class="container">
          <div class="row w-100 align-items-center justify-content-center">
            <div class="mx-auto col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0">
              <div class="card card-plain">
                <div class="pb-0 card-header text-start">
                  <h4 class="font-weight-bolder">Sign In</h4>
                  <p class="mb-0">Enter your email and password to sign in</p>
                </div>
                <div class="card-body">
                  <form role="form">
                    <div class="mb-3">
                      <argon-input @value="(em) => email = em.value" type="email" placeholder="Email" name="email" size="lg" />
                    </div>
                    <div class="mb-3">
                      <argon-input @value="(pass) => password = pass.value" type="password" placeholder="Password" name="password" size="lg" />
                    </div>
                    <argon-switch @change="(e) => remember = e.target.checked" id="rememberMe">Remember me</argon-switch>

                    <div class="text-center">
                      <argon-button
                        class="mt-4"
                        variant="gradient"
                        color="success"
                        fullWidth
                        size="lg"
                        @click.prevent="signInFunc(email, password)"
                      >Sign in</argon-button>
                    </div>
                  </form>
                </div>
                <div class="px-1 pt-0 text-center card-footer px-lg-2">
                  <p class="mx-auto mb-4 text-sm">
                    Forgot your password?
                    <router-link
                      to="/reset"
                      class="text-success text-gradient font-weight-bold"
                    >Reset password</router-link>
                  </p>
                </div>
              </div>
            </div>
            <!-- <div
              class="top-0 my-auto text-center col-6 d-lg-flex d-none h-100 pe-0 position-absolute end-0 justify-content-center flex-column"
            >
              <div
                class="position-relative bg-gradient-primary h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center overflow-hidden"
                style="background-image: url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/signin-ill.jpg');
          background-size: cover;"
              >
                <span class="mask bg-gradient-success opacity-6"></span>
                <h4
                  class="mt-5 text-white font-weight-bolder position-relative"
                >"Attention is the new currency"</h4>
                <p
                  class="text-white position-relative"
                >The more effortless the writing looks, the more effort the writer actually put into the process.</p>
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
  import { onBeforeUnmount, ref, defineProps } from 'vue';
  import { useStore } from 'vuex';
  import { useRoute, useRouter } from 'vue-router';
  import  { signIn, persistence } from '@/firebase'
  import Navbar from "@/examples/PageLayout/Navbar.vue";
  import ArgonInput from "@/components/ArgonInput.vue";
  import ArgonSwitch from "@/components/ArgonSwitch.vue";
  import ArgonButton from "@/components/ArgonButton.vue";

  const body = document.getElementsByTagName("body")[0];
  const store = useStore();
  const route = useRoute();
  const router = useRouter();
  const email = ref('');
  const password = ref('');
  const errorCode = ref('');
  const errorMessage = ref('');
  const props = defineProps(['signedIn'])
  const loading = ref(false)

  store.state.hideConfigButton = true;
  store.state.showNavbar = false;
  store.state.showSidenav = false;
  store.state.showFooter = false;
  body.classList.remove("bg-gray-100");

  // function signIn(j, k) {
  //   console.log(j, k)
  //   signInWithEmailAndPassword(auth, j, k).then((userCredential) => {
  //       console.log(route.query.redirect, userCredential)
  //       router.push(route.query.redirect || '/')
  //       // const user = userCredential.user;
  //     }).catch((error) => {
  //       errorCode.value = error.code;
  //       errorMessage.value = error.message;
  //     });
  // }

  const remember = ref(false)

  async function signInFunc(j, k) {
    let repeat;
    try {
      remember.value ? null : persistence()
      await signIn(j, k)
      repeat = setInterval(() => {
        store.dispatch('incrementProgress');
      }, 1000)
      // console.log(route.query.redirect)
      // // setTimeout(() => {
      //   await nextTick()
      //   router.push(route.query.redirect || '/')
      // }, 500)
    } catch(error) {
      store.dispatch('errorProgress');
      console.error(error)
    }
    repeat ? clearInterval(repeat) : null;
  }

  onBeforeUnmount(() => {
    store.state.hideConfigButton = false;
    store.state.showNavbar = true;
    store.state.showSidenav = true;
    store.state.showFooter = true;
    body.classList.add("bg-gray-100");
  })
</script>
