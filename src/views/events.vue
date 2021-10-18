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
							<div class="col-12">
								<div class="card bg-white border-0 h-100 mb-4">
									<div class="card-header bg-white d-flex flex-wrap align-items-center">
										<div class="content-card-left">
											<h4 class="card-title">Visits</h4>
										</div>
									</div>
									<div class="card-body bg-white">
										<form class="table-header mx-0 mt-1 mb-3">
											<div class="row m-0 align-items-center position-relative">
												<div class="col-xl-3 col-lg-4 col-md-3 col-sm-6 col-12 order-lg-1 order-md-1 order-sm-3 order-3 text-start mt-lg-0 mt-md-0 mt-sm-3 mt-3 ps-0 px-small-custom">
													<div class="table-length">
														<label for="per-page-select" class="d-inline-block" id="__BVID__22__BV_label_">Results:</label>
														<select class="mx-2 form-select d-inline-block">
															<option selected>1</option>
															<option value="2">10</option>
															<option value="3">15</option>
														</select>
													</div>
												</div>
												<div class="col-xl-4 col-lg-5 col-md-6 col-sm-8 col-12 order-lg-2 order-md-2 order-sm-1 order-2 px-0 text-lg-end text-md-end text-start mt-lg-0 mt-md-0 mt-sm-0 mt-3 ms-lg-auto ms-md-auto">
													<v-date-picker v-model="range" class="custom-calendar header-calendar position-relative left-caret-none" is-range>
														<template v-slot="{ inputValue, inputEvents }">
															<div class="flex justify-center items-center">
																<input
																	:value="inputValue.start"
																	v-on="inputEvents.start"
																	/>
																<i class="bi bi-arrow-right-circle-fill px-2"></i>
																<input
																	:value="inputValue.end"
																	v-on="inputEvents.end"
																	/>
															</div>
														</template>
													</v-date-picker>
												</div>
												<div class="col-xl-1 col-lg-2 col-md-3 col-sm-4 col-12 order-lg-3 order-md-3 order-sm-2 order-1 pe-0 px-small-custom mt-lg-0 mt-md-0 mt-sm-0 mt-3">
													<div class="dropdown-custom ml-auto dropdown-filter">
														<div class="dropdown position-static w-100">
															<button class="btn dropdown-toggle w-100 m-0 filter-height-39" type="button" id="dropfilter" data-bs-toggle="dropdown">
															<i class="bi bi-filter"></i>
															<span>Filters</span>
															</button>
															<ul class="dropdown-menu list-unstyled position-absolute" aria-labelledby="dropfilter" @click.prevent="menuOpen($event)">
																<div class="row m-0 px-lg-2 px-md-2 px-sm-2 px-0">
																	<div class="filter-header pt-2 d-flex flex-wrap align-items-center">
																		<h3 class="d-inline-block">Filter Data</h3>
																		<span class="d-flex flex-wrap align-items-center btn btn-clear-filter ms-auto">
																		<i class="bi bi-x-circle d-lg-inline-block d-md-inline-block d-none me-1"></i>
																		<span>Clear Filter</span>
																		</span>
																	</div>
																	<div class="filter-body mt-4">
										<form class="custom-form" @submit.prevent>
										<div class="row">
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
										<label for="">Single Select</label>
										<Multiselect 
											v-model="value"
											:options="modalOptions"
											class="custom-multiselect"
											placeholder="Select your Single Value"
											:searchable="true"
											:showOptions="true"
											/>
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
										<label for="">Single Select</label>
										<Multiselect 
											v-model="value"
											:options="modalOptions"
											class="custom-multiselect"
											placeholder="Select your Single Value"
											:searchable="true"
											:showOptions="true"
											/>
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
										<label for="">Single Select</label>
										<Multiselect 
											v-model="value1"
											:options="modalOptions"
											class="custom-multiselect"
											placeholder="Select your Single Value"
											:searchable="true"
											:showOptions="true"
											/>
										</div>
										</div>
										</div> 
										</form>
										</div>
										<div class="filter-footer mt-2">
										<button class="btn btn-submit d-flex flex-wrap align-items-center ms-auto px-4">
										<div class="d-inline-block btn-loader"></div>
										Search
										</button>
										</div>
										</div>
										</ul>
										</div>
										</div>
										</div>
										</div>
										</form>
									</div>
								</div>
							</div>
							<div class="col-12 mt-4">
								<div class="card bg-white border-0 h-100 mb-4">
									<div class="card-header bg-white d-flex flex-wrap align-items-center">
										<div class="content-card-left">
											<h4 class="card-title">Visits</h4>
										</div>
									</div>
									<div class="card-body bg-white">
										<form class="table-header mx-0 mt-1 mb-3">
											<div class="row m-0 align-items-center position-relative">
												<div class="col-xl-2 col-lg-3 col-md-6 col-sm-4 col-12 order-lg-1 order-md-4 order-sm-4 order-3 text-lg-start text-md-start text-sm-end text-start mt-lg-0 mt-md-3 mt-sm-3 mt-3 ps-lg-0 ps-md-0 px-small-custom">
													<div class="table-length">
														<label for="per-page-select" class="d-inline-block" id="__BVID__22__BV_label_">Results:</label>
														<select class="mx-2 form-select d-inline-block">
															<option selected>1</option>
															<option value="2">10</option>
															<option value="3">15</option>
														</select>
													</div>
												</div>
												<div class="col-xl-2 col-lg-3 col-md-4 col-sm-8 col-12 ps-0 order-lg-2 order-md-1 order-sm-1 order-1 px-small-custom ms-lg-auto">
													<div label-for="input-1" class="position-relative">
														<input
															id="input-1"
															type="text"
															placeholder="Search By ID#"
															class="form-control search-field"
															>
														<i class="bi bi-search position-absolute"></i>
													</div>
												</div>
												<div class="col-xl-3 col-lg-4 col-md-6 col-sm-8 col-12 order-lg-3 order-md-2 order-sm-3 order-2 mt-lg-0 mt-md-0 mt-sm-3 mt-3 pe-xl-0 ps-lg-0 ps-0 px-small-custom">
													<v-date-picker v-model="range" class="custom-calendar header-calendar position-relative left-caret-none" is-range>
														<template v-slot="{ inputValue, inputEvents }">
															<div class="flex justify-center items-center">
																<input
																	:value="inputValue.start"
																	v-on="inputEvents.start"
																	/>
																<i class="bi bi-arrow-right-circle-fill px-2"></i>
																<input
																	:value="inputValue.end"
																	v-on="inputEvents.end"
																	/>
															</div>
														</template>
													</v-date-picker>
												</div>
												<div class="col-xl-1 col-lg-2 col-md-2 col-sm-4 col-12 order-lg-4 order-md-3 order-sm-2 order-1 px-small-custom mt-lg-0 mt-md-0 mt-sm-0 mt-3 pe-lg-0 pe-md-0">
													<div class="dropdown-custom ml-auto dropdown-filter">
														<div class="dropdown position-static w-100">
															<button class="btn dropdown-toggle w-100 m-0 filter-height-39" type="button" id="dropfilter" data-bs-toggle="dropdown">
															<i class="bi bi-filter"></i>
															<span>Filters</span>
															</button>
															<ul class="dropdown-menu list-unstyled position-absolute" aria-labelledby="dropfilter" @click.prevent="menuOpen($event)">
																<div class="row m-0 px-lg-2 px-md-2 px-sm-2 px-0">
																	<div class="filter-header pt-2 d-flex flex-wrap align-items-center">
																		<h3 class="d-inline-block">Filter Data</h3>
																		<span class="d-flex flex-wrap align-items-center btn btn-clear-filter ms-auto">
																		<i class="bi bi-x-circle d-lg-inline-block d-md-inline-block d-none me-1"></i>
																		<span>Clear Filter</span>
																		</span>
																	</div>
																	<div class="filter-body mt-4">
                                                                    <form class="custom-form" @submit.prevent>
                                                                        <div class="row">
                                                                            <div class="col-lg-3 col-md-3 col-sm-6 col-12 px-3" >
                                                                                <div class="position-relative form-group ">
                                                                                    <label for="">Single Select</label>
                                                                                    <Multiselect 
                                                                                        v-model="value"
                                                                                        :options="modalOptions"
                                                                                        class="custom-multiselect"
                                                                                        placeholder="Select your Single Value"
                                                                                        :searchable="true"
                                                                                        :showOptions="true"
                                                                                        />
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-lg-3 col-md-3 col-sm-6 col-12 px-3" >
                                                                                <div class="position-relative form-group ">
                                                                                    <label for="">Single Select</label>
                                                                                    <Multiselect 
                                                                                        v-model="value1"
                                                                                        :options="modalOptions"
                                                                                        class="custom-multiselect"
                                                                                        placeholder="Select your Single Value"
                                                                                        :searchable="true"
                                                                                        :showOptions="true"
                                                                                        />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </form>
                                                                    </div>
                                                                    <div class="filter-footer mt-2">
                                                                    <button class="btn btn-submit d-flex flex-wrap align-items-center ms-auto px-4">
                                                                    <div class="d-inline-block btn-loader"></div>
                                                                    Search
                                                                    </button>
                                                                    </div>
                                                                    </div>
                                                                    </ul>
                                                                    </div>
                                                                    </div>
                                                                    </div>
                                                                    </div>
                                                                    </form>
									</div>
								</div>
							</div>
							<div class="col-12 my-4">
								<div class="card bg-white border-0 h-100 mb-4">
									<div class="card-header bg-white d-flex flex-wrap align-items-center">
										<div class="content-card-left">
											<h4 class="card-title">Visits</h4>
										</div>
									</div>
									<div class="card-body bg-white">
										<form class="custom-form table-header mx-0 mt-1 mb-3">
											<div class="row dashboard-cards">
												<div class="col-xxl-custom four-items col-xl-3 col-md-4 col-sm-6 col-12" v-for="cards in 4" :key="cards">
													<div class="card clearfix py-3">
														<div class="icon-wrapper d-flex flex-wrap align-items-center justify-content-center float-start">
															<img src="../images/dashboard/hospital.png" alt="Hospital-Icon">
														</div>
														<div class="card-content float-start">
															<h4>Total Branches</h4>
															<h2 class="pt-1">5</h2>
														</div>
													</div>
												</div>
											</div>
											<div class="card bg-white border-0">
												<div class="card-header bg-white d-flex flex-wrap align-items-cenrte py-2">
													<div class="content-card-left">
														<h4 class="card-title small-font mb-0">Filters</h4>
													</div>
													<div class="content-card-right ms-auto">
														<span class="d-flex flex-wrap align-items-center btn btn-clear-filter">
														<i class="bi bi-x-circle d-lg-inline-block d-md-inline-block d-none me-1"></i>
														<span>Clear Filter</span>
														</span>
													</div>
												</div>
												<div class="card-body bg-white">
													<div class="row m-0 align-items-center position-relative">
														<div class="col-12 px-0">
                                                            <div class="row">
                                                                <div class="col-lg-3 col-md-6 col-sm-6 col-12 px-3 mb-3" v-for="filter in 10" :key="filter">
                                                                    <div class="position-relative form-group mb-0">
                                                                        <label for="">Single Select</label>
                                                                        <Multiselect 
                                                                            v-model="value"
                                                                            :options="modalOptions"
                                                                            class="custom-multiselect"
                                                                            placeholder="Select your Single Value"
                                                                            :searchable="true"
                                                                            :showOptions="true"
                                                                            />
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-3 col-md-6 col-sm-6 col-12 px-3 mb-3" >
                                                                    <div class="position-relative form-group mb-0">
                                                                        <label for="">Enter Address</label>
                                                                        <v-date-picker v-model="range" class="custom-calendar header-calendar position-relative left-caret-none" is-range>
                                                                            <template v-slot="{ inputValue, inputEvents }">
                                                                                <div class="flex justify-center items-center">
                                                                                    <input
                                                                                        :value="inputValue.start"
                                                                                        v-on="inputEvents.start"
                                                                                        />
                                                                                    <i class="bi bi-arrow-right-circle-fill px-2"></i>
                                                                                    <input
                                                                                        :value="inputValue.end"
                                                                                        v-on="inputEvents.end"
                                                                                        />
                                                                                </div>
                                                                            </template>
                                                                        </v-date-picker>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-3 col-md-6 col-sm-6 col-12 px-3 filter-footer align-self-center mt-lg-0 mt-md-0 mt-sm-0 mt-2" >
                                                                    <button class="btn btn-submit d-flex flex-wrap align-items-center ms-auto px-4 w-100 justify-content-center">
                                                                        <div class="d-inline-block btn-loader"></div>
                                                                        Search
                                                                    </button>
                                                                </div>
                                                            </div>
														</div>
													</div>
												</div>
											</div>
                                            <div class="card bg-white border-0">
												<div class="card-body bg-white">
                                                    <!-- table upper -->
                                                    <div class="row mx-0 mb-3 align-items-center position-relative">
                                                        <div class="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 order-lg-1 order-md-1 order-sm-3 order-3 text-start mt-lg-0 mt-md-0 mt-sm-3 mt-3 pl-lg-0 px-small-custom">
                                                            <div class="table-length">
                                                                <label for="per-page-select" class="d-inline-block" id="__BVID__22__BV_label_">Results:</label>
                                                                <select class="mx-2 form-select d-inline-block">
                                                                    <option selected>1</option>
                                                                    <option value="2">10</option>
                                                                    <option value="3">15</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="table-responsive mb-0">
                                                        <div class="linepreloder mb-4"></div>
                                                        <table class="table custom-table table-user max-height">
                                                            <thead class="sticky-header">
                                                                <tr>
                                                                    <th>Name</th>
                                                                    <th>Email</th>
                                                                    <th>Role</th>
                                                                    <th>Status</th>
                                                                    <th>Company</th>
                                                                    <th>Creation date</th>
                                                                    <th class="text-center">Actions</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td><a href="#">Jhon Snow</a></td>
                                                                    <td>dummy@gmail.com</td>
                                                                    <td>Admin</td>
                                                                    <td>Carehub</td>
                                                                    <td>
                                                                        <span class="status loading d-inline-block text-center">Loading</span>
                                                                    </td>
                                                                    <td>2021-01-20 16:26:56</td>
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
                                                                <tr>
                                                                    <td><a href="#">Jhon Snow</a></td>
                                                                    <td>dummy@gmail.com</td>
                                                                    <td>Admin</td>
                                                                    <td>Carehub</td>
                                                                    <td>
                                                                        <span class="status inactive d-inline-block text-center">InActive</span>
                                                                    </td>
                                                                    <td>2021-01-20 16:26:56</td>
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
                                                                <tr v-for="tableRows in 10" :key="tableRows">
                                                                    <td><a href="#">Jhon Snow</a></td>
                                                                    <td>dummy@gmail.com</td>
                                                                    <td>Admin</td>
                                                                    <td>Carehub</td>
                                                                    <td>
                                                                        <span class="status active d-inline-block text-center">Active</span>
                                                                    </td>
                                                                    <td>2021-01-20 16:26:56</td>
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
                                                        <ul class="pagination custom-pagination mb-0 d-flex flex-wrap justify-content-center w-100 mt-3">
                                                            <li class="page-item">
                                                                <a class="page-link  d-inline-block text-center " href="#" aria-label="Previous">
                                                                <span aria-hidden="true">&laquo;</span>
                                                                </a>
                                                            </li>
                                                            <li class="page-item active"><a class="page-link d-inline-block text-center " href="#">1</a></li>
                                                            <li class="page-item"><a class="page-link  d-inline-block text-center" href="#">2</a></li>
                                                            <li class="page-item"><a class="page-link  d-inline-block text-center" href="#">3</a></li>
                                                            <li class="page-item"><a class="page-link  d-inline-block text-center" href="#">4</a></li>
                                                            <li class="page-item"><a class="page-link  d-inline-block text-center" href="#">5</a></li>
                                                            <li class="page-item"><a class="page-link  d-inline-block text-center" href="#">6</a></li>
                                                            <li class="page-item"><a class="page-link  d-inline-block text-center" href="#">7</a></li>
                                                            <li class="page-item"><a class="page-link  d-inline-block text-center" href="#">8</a></li>
                                                            <li class="page-item"><a class="page-link  d-inline-block text-center" href="#">9</a></li>
                                                            <li class="page-item"><a class="page-link  d-inline-block text-center" href="#">10</a></li>
                                                            <li class="page-item"><a class="page-link  d-inline-block text-center" href="#">11</a></li>
                                                            <li class="page-item"><a class="page-link  d-inline-block text-center" href="#">12</a></li>
                                                            <li class="page-item"><a class="page-link  d-inline-block text-center" href="#">13</a></li>
                                                            <li class="page-item">
                                                                <a class="page-link  d-inline-block text-center " href="#" aria-label="Next">
                                                                <span aria-hidden="true">&raquo;</span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
												</div>
											</div>
										</form>
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
    import { ref } from 'vue';
	import sidebar from "../components/sidebar";
	import navbar from "../components/nav.vue";
	import "../scss/pages/_clients.scss";
    import "../scss/pages/_dashboard.scss";
    import Multiselect from '@vueform/multiselect';
    import "@vueform/multiselect/themes/default.css";
	export default {
	  components: {
	    sidebar: sidebar,
	    navbar: navbar,
        Multiselect
	  },
	     setup() {
         const value = ref("");
         const value1 = ref("");
         const  modalOptions = ref([ 'Last Month', 'Last Week', 'Yesterday', 'Today', 'This Week', 'This Month', 'Select Date']);
		 const date = new Date();
		 const masks = {
			 		input: 'DD-MM-YYYY'
		  }
	         const range = {
			  start: new Date(2020, 0, 1),
	     		end: new Date(2020, 0, 5)
		  }
		 return {
	               date,
	               masks,
	               range,
                   value,
                   value1,
                   modalOptions
	           }
	  },
	  data() {
	    return {
	
	    }
	  }
	}
</script>