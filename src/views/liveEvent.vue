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
							<div class="col-xl-6 col-12">
								<div class="card bg-white border-0 h-100 mb-4">
									<div class="card-header bg-white d-flex flex-wrap align-items-center">
										<div class="content-card-left">
											<h4 class="card-title">Visits</h4>
										</div>
									</div>
									<div class="card-body bg-white">
										<form class="table-header mx-0 mt-1 mb-3">
											<div class="row m-0 align-items-center position-relative">
                                                    <div class="col-lg-4 col-md-4 col-sm-4 col-12 order-lg-1 order-md-1 order-sm-1 order-3 text-lg-start text-md-start text-sm-start text-end ps-0 px-small-custom mt-lg-0 mt-md-0 mt-sm-0 mt-3">
                                                        <div class="table-length">
                                                            <label for="per-page-select" class="d-inline-block" id="__BVID__22__BV_label_">Results:</label>
                                                            <select class="mx-2 form-select d-inline-block">
                                                                <option selected>1</option>
                                                                <option value="2">10</option>
                                                                <option value="3">15</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-4 col-md-4 col-sm-4 col-12 order-lg-2 order-md-2 order-sm-2 order-2 ms-auto pe-0 px-small-custom mt-lg-0 mt-md-0 mt-sm-0 mt-3">
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
                                                    <div class="col-lg-4 col-md-4 col-sm-4 col-12 order-lg-2 order-md-2 order-sm-2 order-1 pe-0 px-small-custom">
                                                        <v-date-picker v-model="date" class="custom-calendar header-calendar position-relative left-caret-none custom-icon">
                                                            <template v-slot="{ inputValue, inputEvents }">
                                                                <i class="bi bi-calendar4-week position-absolute"></i>
                                                                <input
                                                                :value="inputValue"
                                                                v-on="inputEvents"
                                                                class="w-100 mw-100"
                                                                />
                                                            </template>
                                                        </v-date-picker>
                                                    </div>
                                                    <div class="col-12">
                                                        <vue-slider
                                                            v-model="value1"
                                                            :adsorb="true"
                                                            :interval="10"
                                                            :marks="true"
                                                        ></vue-slider>
                                                    </div>
                                            </div>
										</form>
										<div class="table-responsive mb-0">
											<table class="table custom-table table-employee">
												<thead>
													<tr>
														<th></th>
														<th>Employee</th>
														<th>Early</th>
														<th>Late</th>
														<th>Missed</th>
                                                        <th>Ontime</th>
														<th>Total</th>
														<th class="text-center">Actions</th>
													</tr>
												</thead>
												<tbody>
													<tr v-for="tableRows in dataTable" :key="tableRows">
														<td>
															<a href="#" @click.prevent>
                                                                <img src="../images/profile/user-image.png" class="rounded-circle table-img" alt="Emplloyee_image">
															</a>
														</td>
                                                        <td>
															<span class="d-block">Mark Burtoon</span>
                                                            <span class="d-inline-block text-uppercase designation mt-2">Care Worker</span>
														</td>
                                                        <td>
                                                            <div class="total-score small-score d-flex flex-wrap justify-content-center align-items-center mx-0 position-relative rounded-circle low">
                                                                <h4 class="mb-0">{{lateScore}}</h4>
                                                                <svg class="position-absolute">
                                                                    <circle cx="31" cy="31" r="25" class="score-progress" :stroke-dashoffset="calculateLate"></circle>
                                                                </svg>
                                                            </div>
                                                            <span class="d-block text-center mw-40 mt-2 pt-1">0</span>
                                                        </td>
                                                        <td>
                                                            <div class="total-score small-score d-flex flex-wrap justify-content-center align-items-center mx-0 position-relative rounded-circle medium">
                                                                <h4 class="mb-0">{{earlyScore}}</h4>
                                                                <svg class="position-absolute">
                                                                    <circle cx="31" cy="31" r="25" class="score-progress" :stroke-dashoffset="calculateEarly"></circle>
                                                                </svg>
                                                            </div>
                                                            <span class="d-block text-center mw-40 mt-2 pt-1">0</span>
                                                        </td>
                                                        <td>
                                                            <div class="total-score small-score d-flex flex-wrap justify-content-center align-items-center mx-0 position-relative rounded-circle">
                                                                <h4 class="mb-0">{{missedScore}}</h4>
                                                                <svg class="position-absolute">
                                                                    <circle cx="31" cy="31" r="25" class="score-progress" :stroke-dashoffset="calculateMissed"></circle>
                                                                </svg>
                                                            </div>
                                                            <span class="d-block text-center mw-40 mt-2 pt-1">2</span>
                                                        </td>
                                                        <td>
                                                            <div class="total-score small-score d-flex flex-wrap justify-content-center align-items-center mx-0 position-relative rounded-circle low">
                                                                <h4 class="mb-0">{{timeScore}}</h4>
                                                                <svg class="position-absolute">
                                                                    <circle cx="31" cy="31" r="25" class="score-progress" :stroke-dashoffset="calculateTime"></circle>
                                                                </svg>
                                                            </div>
                                                            <span class="d-block text-center mw-40 mt-2 pt-1">2</span>
                                                        </td>
                                                        <td>
                                                            <div class="total-score small-score d-flex flex-wrap justify-content-center align-items-center mx-0 position-relative rounded-circle high">
                                                                <h4 class="mb-0">{{totalScore}}</h4>
                                                                <svg class="position-absolute">
                                                                    <circle cx="31" cy="31" r="25" class="score-progress" :stroke-dashoffset="calculateTotal"></circle>
                                                                </svg>
                                                            </div>
                                                            <span class="d-block text-center mw-40 mt-2 pt-1">2</span>
                                                        </td>
														<td>
															<div class="dropdown table-dropdown text-center">
																<button class="btn dropdown-toggle p-0 shadow-none" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
																<i class="bi bi-three-dots"></i>
																</button>
																<ul class="dropdown-menu  dropdown-menu-start" aria-labelledby="dropdownMenuButton">
																	<li>
																		<a class="dropdown-item" href="#">
																		<i class="bi bi-pencil"></i>Edit
																		</a>
																	</li>
																	<li>
																		<a class="dropdown-item" href="#edit" data-bs-toggle="modal" @click="deleteModal = false">
																		<i class="bi bi-trash"></i>Delete
																		</a>
																	</li>
																</ul>
															</div>
														</td>
													</tr>
												</tbody>
											</table>
										</div>
										<div class="table-footer bg-white d-flex flex-wrap m-0 pb-0 border-0 bg-transparent justify-content-center">
											<p class="d-block text-secondary mt-lg-0 mt-md-0 mt-sm-0">
												Showing 1 to 10 of 10 entries.
											</p>
										</div>
									</div>
								</div>
							</div>
                            <div class="col-xl-6 col-12">
								<div class="card bg-white border-0">
									<div class="card-header bg-white d-flex flex-wrap align-items-center">
										<div class="content-card-left">
											<h4 class="card-title">Visit Summary</h4>
										</div>
									</div>
									<div class="card-body bg-white">
										<form class="table-header mx-0 mt-1 mb-3">
											<div class="row m-0 align-items-center position-relative">
                                                    <div class="col-lg-4 col-md-4 col-sm-4 col-12 order-lg-1 order-md-1 order-sm-1 order-2 text-lg-start text-md-start text-sm-start text-end ps-0 px-small-custom mt-lg-0 mt-md-0 mt-sm-0 mt-3">
                                                        <div class="table-length">
                                                            <label for="per-page-select" class="d-inline-block" id="__BVID__22__BV_label_">Results:</label>
                                                            <select class="mx-2 form-select d-inline-block">
                                                                <option selected>1</option>
                                                                <option value="2">10</option>
                                                                <option value="3">15</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-4 col-md-4 col-sm-4 col-12 order-lg-2 order-md-2 order-sm-2 order-1 ms-auto pe-0 px-small-custom">
                                                        <v-date-picker v-model="date" class="custom-calendar header-calendar position-relative left-caret-none custom-icon">
                                                            <template v-slot="{ inputValue, inputEvents }">
                                                                <i class="bi bi-calendar4-week position-absolute"></i>
                                                                <input
                                                                :value="inputValue"
                                                                v-on="inputEvents"
                                                                class="w-100 mw-100"
                                                                />
                                                            </template>
                                                        </v-date-picker>
                                                    </div>
                                            </div>
										</form>
                                        <div class="row mt-5">
                                            <div class="col-lg-3 col-md-3 col-6 mb-lg-0 mb-md-0 mb-4">
                                                <span class="d-block text-center mb-2 text-secondary">Unallocated</span>
                                                <div class="total-score medium-score d-flex flex-wrap justify-content-center align-items-center position-relative rounded-circle low">
                                                    <h4 class="mb-0">{{earlyScore}}</h4>
                                                    <svg class="position-absolute">
                                                        <circle cx="47" cy="47" r="46" class="score-progress" :stroke-dashoffset="calculateVisits"></circle>
                                                    </svg>
                                                </div>
                                                <span class="d-block text-center mt-2">0</span>
                                            </div>
                                            <div class="col-lg-3 col-md-3 col-6 mb-lg-0 mb-md-0 mb-4">
                                                <span class="d-block text-center mb-2 text-secondary">Early</span>
                                                <div class="total-score medium-score d-flex flex-wrap justify-content-center align-items-center position-relative rounded-circle medium">
                                                    <h4 class="mb-0">{{earlyScore}}</h4>
                                                    <svg class="position-absolute">
                                                        <circle cx="47" cy="47" r="46" class="score-progress" :stroke-dashoffset="calculateVisits"></circle>
                                                    </svg>
                                                </div>
                                                <span class="d-block text-center mt-2">0</span>
                                            </div>
                                             <div class="col-lg-3 col-md-3 col-6">
                                                <span class="d-block text-center mb-2 text-secondary">On time</span>
                                                <div class="total-score medium-score d-flex flex-wrap justify-content-center align-items-center position-relative rounded-circle">
                                                    <h4 class="mb-0">{{earlyScore}}</h4>
                                                    <svg class="position-absolute">
                                                        <circle cx="47" cy="47" r="46" class="score-progress" :stroke-dashoffset="calculateVisits"></circle>
                                                    </svg>
                                                </div>
                                                <span class="d-block text-center mt-2">0</span>
                                            </div>
                                            <div class="col-lg-3 col-md-3 col-6">
                                                <span class="d-block text-center mb-2 text-secondary">Late</span>
                                                <div class="total-score medium-score d-flex flex-wrap justify-content-center align-items-center position-relative rounded-circle high">
                                                    <h4 class="mb-0">{{earlyScore}}</h4>
                                                    <svg class="position-absolute">
                                                        <circle cx="47" cy="47" r="46" class="score-progress" :stroke-dashoffset="calculateVisits"></circle>
                                                    </svg>
                                                </div>
                                                <span class="d-block text-center mt-2">0</span>
                                            </div>
                                        </div>
									</div>
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
	import "../scss/pages/_visits.scss";
	export default {
	  components: {
	    sidebar: sidebar,
	    navbar: navbar,
        VueSlider
	  },
      setup() {
		 const date = new Date();
		 const masks = {
			 		input: 'DD-MM-YYYY'
		  }
		 return {
                date,
                masks
            }
	  },
	  data() {
	    return {
            dataTable: 5,
            earlyScore:100,
            lateScore:50,
            missedScore:33,
            timeScore:70,
            totalScore:25,
            calculateEarly: "",
            calculateLate: "",
            calculateMissed:"",
            calculateTime:"",
            calculateTotal:"",
            calculateVisits:"",
            value1: 0
	    }
	  },
      mounted() {
        this.calculateEarly = "calc(176 - (-176 *" + this.earlyScore + ") / 100)";
        this.calculateLate = "calc(176 - (-176 *" + this.lateScore + ") / 100)";
        this.calculateMissed = "calc(176 - (-176 *" + this.missedScore + ") / 100)";
        this.calculateTime = "calc(176 - (-176 *" + this.timeScore + ") / 100)";
        this.calculateTotal = "calc(176 - (-176 *" + this.totalScore + ") / 100)";
        this.calculateVisits = "calc(300 - (-300 *" + this.earlyScore + ") / 100)";
        
        }
	}
</script>