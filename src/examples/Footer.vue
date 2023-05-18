<template>
  <footer class="py-3 footer">
    <div class="container-fluid">
      <div class="row align-items-center justify-content-lg-between">
        <!-- <div class="mb-4 col-lg-6 mb-lg-0">
          <div
            class="text-sm text-center copyright text-muted"
            :class="this.$store.state.isRTL ? 'text-lg-end' : 'text-lg-start'"
          >
            ©
            {{ new Date().getFullYear() }}, made with
            <i class="fa fa-heart"></i> by
            <a
              href="https://www.creative-tim.com"
              class="font-weight-bold"
              target="_blank"
              >Creative Tim</a
            >
            for a better web.
          </div>
        </div> -->
        <div class="col-lg-6">
          <ul
            class="nav nav-footer justify-content-center justify-content-lg-end"
          >
            <li class="nav-item">
              <a
                href="https://github.com/jamespurnama1/datafirst"
                class="nav-link text-muted"
                target="_blank"
                >GitHub</a
              >
            </li>
            <li class="nav-item">
              <a
                href="https://vercel.com/jamespurnama1/datafirst/"
                class="nav-link text-muted"
                target="_blank"
                >Vercel</a
              >
            </li>
            <li class="nav-item">
              <a
                href="https://console.firebase.google.com/u/0/project/datafirst-538f9/"
                class="nav-link text-muted"
                target="_blank"
                >Firebase</a
              >
            </li>
            <li class="nav-item">
              <a
                href="https://dcc.godaddy.com/control/dns?domainName=datafirstservices.com"
                class="nav-link pe-0 text-muted"
                target="_blank"
                >GoDaddy</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "app-footer",
};
</script>
