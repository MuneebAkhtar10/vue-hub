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
              <div class="12">
                <form class="custom-form">
                    <div class="card bg-transparent border-0">
                        <div class="card-header bg-white d-flex flex-wrap align-items-center">
                            <div class="content-card-left">
                            <h4 class="card-title">User Detail</h4>
                            </div>
                        </div>
                        <div class="card-body bg-white">
                                <div class="row m-0">
                                    <div class="col-lg-3 col-md-3 col-sm-6 col-12 px-3" >
                                    <div class="position-relative form-group icon-right">
                                        <label for="">Enter Name</label>
                                        <input
                                        class="w-100"
                                        :type="inputType"
                                        value="123456"
                                        >
                                        <i v-if="inputType == 'password'" class="bi bi-eye pointer position-absolute" @click="inputType = 'text'"></i>
                                        <i v-if="inputType == 'text'" class="bi bi-eye-slash pointer position-absolute" @click="inputType = 'password'"></i>
                                    </div>
                                    </div>
                                    <div class="col-lg-3 col-md-3 col-sm-6 col-12 px-3" >
                                    <div class="position-relative form-group ">
                                        <label for="">Enter Name</label>
                                        <input
                                        class="w-100"
                                        type="text"
                                        placeholder="Enter Name"
                                        >
                                    </div>
                                    </div>
                                    <div class="col-lg-3 col-md-3 col-sm-6 col-12 px-3" >
                                    <div class="position-relative form-group ">
                                        <label for="">Enter Address</label>
                                        <input
                                        class="w-100"
                                        type="text"
                                        placeholder="Enter Address"
                                        >
                                        
                                    </div>
                                    </div>
                                    <div class="col-lg-3 col-md-3 col-sm-6 col-12 px-3" >
                                    <div class="position-relative form-group ">
                                        <label for="">Enter Email Address</label>
                                        <input
                                        class="w-100"
                                        type="email"
                                        placeholder="Enter Email Address"
                                        >
                                        
                                    </div>
                                    </div>
                                </div> 
                                <div class="row m-0">
                                    <div class="col-12 mb-4">
                                        <div class="card inner-card">
                                            <div class="card-header d-flex flex-wrap align-items-center px-4 py-3">
                                                <div class="content-card-left">
                                                    <div class="d-flex align-items-center">
                                                        <input class="form-check-input p-0 m-0 pt-1" type="checkbox" id="check_branch_all">
                                                        <h4 class="card-title d-inline-block ps-2">Branches</h4>
                                                    </div>
                                                </div>
                                                <div class="content-card-right ms-auto search-field-xs">
                                                    <div label-for="input-1" class="position-relative">
                                                        <input
                                                            id="input-1"
                                                            type="text"
                                                            placeholder="Search..."
                                                            class="form-control search-field"
                                                            >
                                                        <i class="bi bi-search position-absolute"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card-body">
                                                <div class="row m-0">
                                                    <div class="col-lg-2 col-md-4 col-sm-6 col-12 mb-3">
                                                        <div class="position-relative form-group mb-0">
                                                            <input class="form-check-input p-0 ms-0" type="checkbox" id="check_branch_q2" true-value="yes" false-value="no">
                                                            <label class="form-check-label d-inline-block" for="check_branch_q2">&nbsp;Birmingham</label></div>
                                                    </div>
                                                    <div class="col-lg-2 col-md-4 col-sm-6 col-12 mb-3">
                                                        <div class="position-relative form-group mb-0">
                                                            <input class="form-check-input p-0 ms-0" type="checkbox" id="check_branch_r2" true-value="yes" false-value="no">
                                                            <label class="form-check-label d-inline-block" for="check_branch_r2">&nbsp;Chelmsley</label></div>
                                                    </div>
                                                    <div class="col-lg-2 col-md-4 col-sm-6 col-12 mb-3">
                                                        <div class="position-relative form-group mb-0">
                                                            <input class="form-check-input p-0 ms-0" type="checkbox" id="check_branch_s2" true-value="yes" false-value="no">
                                                            <label class="form-check-label d-inline-block" for="check_branch_s2">&nbsp;Dudley</label></div>
                                                    </div>
                                                    <div class="col-lg-2 col-md-4 col-sm-6 col-12 mb-3">
                                                        <div class="position-relative form-group mb-0">
                                                            <input class="form-check-input p-0 ms-0" type="checkbox" id="check_branch_t2" true-value="yes" false-value="no">
                                                            <label class="form-check-label d-inline-block" for="check_branch_t2">&nbsp;DERBY</label></div>
                                                    </div>
                                                    <div class="col-lg-2 col-md-4 col-sm-6 col-12 mb-3">
                                                        <div class="position-relative form-group mb-0">
                                                            <input class="form-check-input p-0 ms-0" type="checkbox" id="check_branch_u2" true-value="yes" false-value="no">
                                                            <label class="form-check-label d-inline-block" for="check_branch_u2">&nbsp;Erdington</label></div>
                                                    </div>
                                                    <div class="col-lg-2 col-md-4 col-sm-6 col-12 mb-3">
                                                        <div class="position-relative form-group mb-0">
                                                            <input class="form-check-input p-0 ms-0" type="checkbox" id="check_branch_v2" true-value="yes" false-value="no">
                                                            <label class="form-check-label d-inline-block" for="check_branch_v2">&nbsp;Northfield</label></div>
                                                    </div>
                                                    <div class="col-lg-2 col-md-4 col-sm-6 col-12 mb-3">
                                                        <div class="position-relative form-group mb-0">
                                                            <input class="form-check-input p-0 ms-0" type="checkbox" id="check_branch_w2" true-value="yes" false-value="no">
                                                            <label class="form-check-label d-inline-block" for="check_branch_w2">&nbsp;Nottingham</label></div>
                                                    </div>
                                                    <div class="col-lg-2 col-md-4 col-sm-6 col-12 mb-3">
                                                        <div class="position-relative form-group mb-0">
                                                            <input class="form-check-input p-0 ms-0" type="checkbox" id="check_branch_x2" true-value="yes" false-value="no">
                                                            <label class="form-check-label d-inline-block" for="check_branch_x2">&nbsp;Solihull</label></div>
                                                    </div>
                                                    <div class="col-lg-2 col-md-4 col-sm-6 col-12 mb-3">
                                                        <div class="position-relative form-group mb-0">
                                                            <input class="form-check-input p-0 ms-0" type="checkbox" id="check_branch_y2" true-value="yes" false-value="no">
                                                            <label class="form-check-label d-inline-block" for="check_branch_y2">&nbsp;Worcester</label></div>
                                                    </div>
                                                    <div class="col-lg-2 col-md-4 col-sm-6 col-12 mb-3">
                                                        <div class="position-relative form-group mb-0">
                                                            <input class="form-check-input p-0 ms-0" type="checkbox" id="check_branch_q2t2" true-value="yes" false-value="no">
                                                            <label class="form-check-label d-inline-block" for="check_branch_q2t2">&nbsp;WOLVERHAMPTON</label></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div class="card bg-transparent border-0">
                        <div class="card-header bg-white d-flex flex-wrap align-items-center">
                            <div class="content-card-left ms-lg-2 ms-md-2 ms-sm-2 ps-lg-1 ps-md-1 ps-sm-1 ms-1">
                                <div class="d-flex align-items-center">
                                    <input class="form-check-input p-0 m-0 pt-1" type="checkbox" id="check_branch_all">
                                    <h4 class="card-title d-inline-block ps-2">Branches</h4>
                                </div>
                            </div>
                            <div class="content-card-right search-field-xs ms-auto ps-1">
                                <div label-for="input-1" class="position-relative">
                                    <input
                                        id="input-1"
                                        type="text"
                                        placeholder="Search..."
                                        class="form-control search-field"
                                        >
                                    <i class="bi bi-search position-absolute"></i>
                                </div>
                            </div>
                        </div>
                        <div class="card-body bg-white">
                                <div class="row my-2 mx-0">
                                    <div class="col-lg-2 col-md-4 col-sm-6 col-12  mb-3">
                                        <div class="position-relative form-group mb-0">
                                            <input class="form-check-input p-0 ms-0" type="checkbox" id="check_branch_q2" true-value="yes" false-value="no">
                                            <label class="form-check-label d-inline-block" for="check_branch_q2">&nbsp;Birmingham</label></div>
                                    </div>
                                    <div class="col-lg-2 col-md-4 col-sm-6 col-12  mb-3">
                                        <div class="position-relative form-group mb-0">
                                            <input class="form-check-input p-0 ms-0" type="checkbox" id="check_branch_r2" true-value="yes" false-value="no">
                                            <label class="form-check-label d-inline-block" for="check_branch_r2">&nbsp;Chelmsley</label></div>
                                    </div>
                                    <div class="col-lg-2 col-md-4 col-sm-6 col-12  mb-3">
                                        <div class="position-relative form-group mb-0">
                                            <input class="form-check-input p-0 ms-0" type="checkbox" id="check_branch_s2" true-value="yes" false-value="no">
                                            <label class="form-check-label d-inline-block" for="check_branch_s2">&nbsp;Dudley</label></div>
                                    </div>
                                    <div class="col-lg-2 col-md-4 col-sm-6 col-12  mb-3">
                                        <div class="position-relative form-group mb-0">
                                            <input class="form-check-input p-0 ms-0" type="checkbox" id="check_branch_t2" true-value="yes" false-value="no">
                                            <label class="form-check-label d-inline-block" for="check_branch_t2">&nbsp;DERBY</label></div>
                                    </div>
                                    <div class="col-lg-2 col-md-4 col-sm-6 col-12  mb-3">
                                        <div class="position-relative form-group mb-0">
                                            <input class="form-check-input p-0 ms-0" type="checkbox" id="check_branch_u2" true-value="yes" false-value="no">
                                            <label class="form-check-label d-inline-block" for="check_branch_u2">&nbsp;Erdington</label></div>
                                    </div>
                                    <div class="col-lg-2 col-md-4 col-sm-6 col-12  mb-3">
                                        <div class="position-relative form-group mb-0">
                                            <input class="form-check-input p-0 ms-0" type="checkbox" id="check_branch_v2" true-value="yes" false-value="no">
                                            <label class="form-check-label d-inline-block" for="check_branch_v2">&nbsp;Northfield</label></div>
                                    </div>
                                    <div class="col-lg-2 col-md-4 col-sm-6 col-12  mb-3">
                                        <div class="position-relative form-group mb-0">
                                            <input class="form-check-input p-0 ms-0" type="checkbox" id="check_branch_w2" true-value="yes" false-value="no">
                                            <label class="form-check-label d-inline-block" for="check_branch_w2">&nbsp;Nottingham</label></div>
                                    </div>
                                    <div class="col-lg-2 col-md-4 col-sm-6 col-12  mb-3">
                                        <div class="position-relative form-group mb-0">
                                            <input class="form-check-input p-0 ms-0" type="checkbox" id="check_branch_x2" true-value="yes" false-value="no">
                                            <label class="form-check-label d-inline-block" for="check_branch_x2">&nbsp;Solihull</label></div>
                                    </div>
                                    <div class="col-lg-2 col-md-4 col-sm-6 col-12  mb-3">
                                        <div class="position-relative form-group mb-0">
                                            <input class="form-check-input p-0 ms-0" type="checkbox" id="check_branch_y2" true-value="yes" false-value="no">
                                            <label class="form-check-label d-inline-block" for="check_branch_y2">&nbsp;Worcester</label></div>
                                    </div>
                                    <div class="col-lg-2 col-md-4 col-sm-6 col-12  mb-3">
                                        <div class="position-relative form-group mb-0">
                                            <input class="form-check-input p-0 ms-0" type="checkbox" id="check_branch_q2t2" true-value="yes" false-value="no">
                                            <label class="form-check-label d-inline-block" for="check_branch_q2t2">&nbsp;WOLVERHAMPTON</label></div>
                                    </div>
                                </div>
                        </div>
                    </div> 
                    <div class="submit-footer position-sticky">
                        <button class="btn btn-submit d-flex flex-wrap align-items-center ms-auto">
                            <div class="d-inline-block btn-loader"></div>
                            Submit Form
                        </button>
                    </div>
                </form> 
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
import "../scss/pages/_users.scss";
export default {
  components: {
    sidebar: sidebar,
    navbar: navbar
  },
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>
