<template>
  <section class="login">
    <div class="container-fluid px-0 h-100">
      <div class="row align-items-center h-100 m-0">
        <div class="col-12 col-sm-12 col-md-6 col-lg-5 h-100">
          <router-link to="/" class="logo clearfix">
            <img
              src="../images/login/logo.jpg"
              alt="logo_image"
              class="rounded-circle float-left"
            />
            <span class="float-left">Carehub</span>
          </router-link>
          <div class="custom-auto">
            <form class="custom-form" @submit.stop.prevent>
              <h1 class="heading">Login</h1>
              <div class="icon-input position-relative mb-4">
                <label for="" class="d-block mb-1">Email Address</label>
                <input
                  type="email"
                  :class="[emailValidation ? 'invalid' : 'valid', 'w-100']"
                  placeholder="Enter Email"
                  v-model="email"
                />
                <i class="bi bi-person-fill position-absolute"></i>
                <p
                  v-if="emailValidation == true"
                  class="invalid-message mb-0 pt-2"
                >
                  Please Enter Email
                </p>
              </div>
              <div class="icon-input position-relative mb-4">
                <div class="d-flex flex-wrap mb-1">
                  <label for="">Password</label>
                  <router-link to="/" class="ms-auto theme-color"
                    >Forgot Password?</router-link
                  >
                </div>
                <input
                  type="email"
                  :class="[passwordValidation ? 'invalid' : 'valid', 'w-100']"
                  placeholder="Enter Password"
                  v-model="password"
                />
                <p
                  v-if="emailValidation == true"
                  class="invalid-message mb-0 pt-2"
                >
                  Please Enter Email
                </p>
                <i class="bi bi-shield-lock-fill position-absolute"></i>
                <p
                  v-if="passwordValidation == true"
                  class="invalid-message mb-0 pt-2"
                >
                  Please Enter Password
                </p>
              </div>
              <button class="btn btn-theme w-100" @click.prevent="loginAuth()">
                Log in
              </button>
            </form>
          </div>
        </div>
        <div
          class="d-lg-flex d-md-flex d-sm-none d-none flex-wrap h-100 position-relative col-12 col-sm-6 col-md-6 col-lg-7 h-100"
        >
          <div class="image-wrapper mx-auto my-auto position-relative">
            <img
              src="../images/login/gallery.png"
              alt="Gallery_Image"
              class="w-100 h-100"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import "../scss/pages/_login.scss";
export default {
  data() {
    return {
      email: "",
      password: "",
      emailValidation: null,
      passwordValidation: null
    };
  },
  methods: {
    loginAuth: function() {
      if (this.email.length == 0) {
        this.emailValidation = true;
      } else if (this.password.length == 0) {
        this.emailValidation = false;
        this.passwordValidation = true;
      } else {
        this.emailValidation = false;
        this.passwordValidation = false;
        this.$router.push("/home");
      }
    },
    bodyBackgroundWhite() {
      let bodybg = document.querySelector("body");
      bodybg.classList.add("bg-white");
    }
  },
  mounted() {
    this.bodyBackgroundWhite();
  }
};
</script>
