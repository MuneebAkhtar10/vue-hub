<template>
    <section class="simple">
        <div class="container-fluid mw-1600 px-0 mb-5">
            <div class="row mx-0">
                <div class="col-12 px-0">
                    <div class="d-flex flex-wrap align-items-center bg-white px-lg-5 px-md-5 px-3 py-3 shadow-simple">
                        <figure class="logo mb-0">
                            <img src="../images/login/logo.jpg" class="w-100 h-100" alt="logo_img">
                        </figure>
                        <h4 class="mb-0 d-inline-block mx-auto name">Client Name</h4>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row justify-content-between mx-0">
                <div class="col-lg-5 col-md-6 col-12 mb-lg-0 mb-sm-0 mb-4" v-for="cards in 2" :key="cards">
                    <a href="#" class="hover-effect d-inline-block w-100" @click.prevent>
                        <div class="card bg-white border-0 py-5">
                            <div class="content-card-right w-100 text-center mb-4">
                                <img class="heading-icon align-middle" src="../images/icons/mar-chart.png" alt="marchart">
                            </div>
                            <div class="content-card-left w-100 text-center">
                                <h4 class="card-title d-inline-block font-20">Mar Chart</h4>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
	import "../scss/pages/_simple.scss";
	export default {
	  components: {

	  },
	  data() {
	    return {

	    }
	  },
	  methods: {

	  }
	}
</script>
<style scoped>
 body, html {
     background-color: #fff !important;
 }
</style>