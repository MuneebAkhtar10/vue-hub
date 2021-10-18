<template>
  <div class="home">
    <!-- SideBar Component -->
    <sidebar />
    <div class="main-content">
      <!-- nav component here -->
      <navbar />
      <!-- Inner Content -->
      <div class="inner-content">
        <section>
          <div class="container-fluid mw-1600">
            <div class="row">
              <div cols="12">
                <div class="card bg-transparent border-0">
                  <div class="card-header bg-white d-flex flex-wrap align-items-center">
                    <div class="content-card-left">
                      <h4 class="card-title">Signature</h4>
                    </div>
                  </div>
                  <div class="card-body bg-white">
                    <form class="custom-form">
                      <div class="row m-0">
                         <div class="col-lg-4 col-md-4 col-sm-6 col-12 px-3" >
                            <div class="card inner-card">
                                <div class="card-header d-flex flex-wrap align-items-center">
                                    <div class="content-card-left">
                                        <h4 class="card-title">User Signature</h4>
                                    </div>
                                    <a href="#" class="btn p-0 rounded-circle card-header-circle bg-custom-gradient ms-auto me-2 d-flex flex-wrap align-items-center justify-content-center" @click.prevent="clear">
                                        <i class="bi bi-download"></i>
                                    </a>
                                    <a href="#" class="btn p-0 rounded-circle card-header-circle bg-custom-gradient me-2 d-flex flex-wrap align-items-center justify-content-center" @click.prevent="clear">
                                        <i class="bi bi-arrow-counterclockwise"></i>
                                    </a>
                                    <a href="#" class="btn p-0 rounded-circle card-header-circle bg-custom-cancel d-flex flex-wrap align-items-center justify-content-center" @click.prevent="clear">
                                        <i class="bi bi-x"></i>
                                    </a>
                                </div>
                                <div class="card-body">
                                    <vueSignature  ref="signature" :sigOption="option" :h="'102px'" class="border-bottom" @click.prevent="pensize($event)"></vueSignature>
                                </div>
                            </div>
                        </div>
                      </div> 
                    </form>
                  </div>
                </div>
                <div class="submit-footer position-sticky">
                  <button class="btn btn-submit d-flex flex-wrap align-items-center ms-auto">
                    <div class="d-inline-block btn-loader"></div>
                     Submit Form
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
<script>
import sidebar from "../components/sidebar";
import navbar from "../components/nav.vue";
import "../scss/pages/_form_page.scss";
import vueSignature from "vue-signature";
export default {
	name: "app",
	components:{
        sidebar: sidebar,
        navbar: navbar,
		    vueSignature
	},
	data() {
		return {
			option:{
				penColor:"rgb(67, 122, 234)",
				backgroundColor:"rgb(255,255,255)"
			},
            disabled:false
		};
	},
	methods:{
		clear(){
			this.$refs.signature.clear();
		},
        pensize(e) {
            let targetPen = e.currentTarget.firstChild;
            let ctx = targetPen.getContext("2d");
            ctx.fillStyle = "#fff";
            console.log(ctx.fillStyle);
        }
	}
};
</script>
