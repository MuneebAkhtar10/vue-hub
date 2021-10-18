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
											<h4 class="card-title">Visits</h4>
										</div>
										<div class="content-card-right ms-auto col-lg-6">
											<form class="custom-form">
												<div class="row m-0 align-items-center justify-content-end position-relative">
													<div class="col-lg-6 col-12 px-small-custom d-flex align-items-center two-input px-0">
														<i class="bi bi-arrow-left-circle-fill px-2 text-primary"></i>
														<div class="position-relative form-group mb-0 mx-2">
															<input
																class="w-100 mt-0"
																type="text"
																placeholder="Friday"
															>
														</div>
														<div class="position-relative form-group mb-0 mx-2">
															<input
																class="w-100 mt-0"
																type="text"
																placeholder="9/12/2021"
															>
														</div>
														<i class="bi bi-arrow-right-circle-fill px-2 text-primary"></i>
													</div>
												</div>
											</form>
										</div>
									</div>
									<div class="card-body bg-white">
										<form class="table-header mx-0 mt-1 mb-2 ">
											<div class="row m-0 align-items-center position-relative">
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
												<div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 mb-lg-2 mb-md-2 mt-lg-1 mt-md-1 px-0 order-lg-3 order-md-2 order-sm-1 order-1 ms-lg-auto ms-md-auto ms-sm-auto px-small-custom">
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
										</form>
										<ul class="stack-buttons mx-0 p-0 d-flex align-items-center mb-3">
											<li>
												<a href="#" class="btn btn-copy">
													<i class="bi bi-files d-inline-block me-2"></i>
													<span class="d-inline-block">Copy Day</span>
												</a>
											</li>
											<li>
												<a href="#" class="btn btn-remove">
													<i class="bi bi-journal-x d-inline-block me-2"></i>
													<span class="d-inline-block">Delete Day</span>
												</a>
											</li>
											<li>
												<a href="#" class="btn btn-assign">
													<i class="bi bi-file-earmark-spreadsheet d-inline-block me-2"></i>
													<span class="d-inline-block">Assign Timesheet Number</span>
												</a>
											</li>
											<li>
												<a href="#" class="btn btn-move">
													<i class="bi bi-arrows-move d-inline-block me-2"></i>
													<span class="d-inline-block">Move Entire Schedule</span>
												</a>
											</li>
											<li>
												<a href="#" class="btn btn-primary d-flex flex-wrap align-items-center">
													<div class="d-inline-block btn-loader"></div>
													<span class="d-inline-block">Save</span>
												</a>
											</li>
										</ul>
										<div class="table-responsive mb-0">
											<table class="table custom-table table-user max-height max-height-8">
												<thead class="sticky-header">
													<tr>
														<th>NvisitInfoe</th>
														<th>Email</th>
														<th>Role</th>
														<th>Status</th>
														<th>Company</th>
														<th>Planned</th>
														<th class="text-center">Actions</th>
													</tr>
												</thead>
												<tbody>
													<tr v-for="tableRows in 10" :key="tableRows">
														<td><a href="#">Jhon Snow</a></td>
														<td>dummy@gmail.com</td>
														<td>Admin</td>
														<td>Carehub</td>
														<td>
															<span class="status active d-inline-block text-center">Active</span>
														</td>
														<td>
															<a href="#visitDetail" class="text-primary" data-bs-toggle="modal">
																2021-01-20 16:26:56
															</a></td>
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
									</div>
								</div>
								<ul class="stack-buttons mx-0 mt-3 p-0 d-flex align-items-center position-fixed ps-3">
									<li>
										<a href="#" class="btn btn-copy">
											<i class="bi bi-files d-inline-block me-2"></i>
											<span class="d-inline-block">Copy Day</span>
										</a>
									</li>
									<li>
										<a href="#" class="btn btn-remove">
											<i class="bi bi-journal-x d-inline-block me-2"></i>
											<span class="d-inline-block">Delete Day</span>
										</a>
									</li>
									<li>
										<a href="#" class="btn btn-assign">
											<i class="bi bi-file-earmark-spreadsheet d-inline-block me-2"></i>
											<span class="d-inline-block">Assign Timesheet Number</span>
										</a>
									</li>
									<li>
										<a href="#" class="btn btn-move">
											<i class="bi bi-arrows-move d-inline-block me-2"></i>
											<span class="d-inline-block">Move Entire Schedule</span>
										</a>
									</li>
									<li>
										<a href="#" class="btn btn-primary d-flex flex-wrap align-items-center">
											<div class="d-inline-block btn-loader"></div>
											<span class="d-inline-block">Save</span>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	</div>
	<!-- Visit Detail Modal -->
	<div class="modal custom-modal popup-animation p-0 slow" id="visitDetail" tabindex="-1" aria-labelledby="exvisitInfopleModal" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered modal-lg modal-custom-xs">
			<div class="modal-content">
				<div class="modal-header">
					<h1 class="modal-title" id="exvisitInfopleModal">Visit Detail</h1>
					<button type="button" class="btn-close rounded-circle bg-custom-gradient p-0 border-0 ms-0" data-bs-dismiss="modal" aria-label="Close">
						<i class="bi bi-x"></i>
					</button>
				</div>
				<div class="modal-body px-0">
					<div class="modal-tabs-wrapper">
						<!-- if you want to use it with 3 or 2 list change class width-list-4 to width-list-3 for 3  and width-list-2 for 2 -->
						<ul class="small-custom-tabs d-flex align-items-center modal-tabs width-list-4 position-relative border-bottom">
							<li :class="[visitTabs=='visitInfo' ? 'active': '', 'bg-transparent border-0 px-0 pb-3 text-center']" @click="visitTabs='visitInfo'">
								<span>Visit Information</span>
							</li>
							<li :class="[visitTabs=='visitNotes' ? 'active': '', 'bg-transparent border-0 px-0 pb-3 text-center']" @click="visitTabs='visitNotes'">
								<span>Visit Notes</span>
							</li>
							<li :class="[visitTabs=='tea' ? 'active': '', 'bg-transparent border-0 px-0 pb-3 text-center']" @click="visitTabs = 'tea'">
								<span>Visit Detail</span>
							</li>
							<li :class="[visitTabs=='bed' ? 'active': '', 'bg-transparent border-0 px-0 pb-3 text-center']" @click="visitTabs = 'bed'">
								<span>Visit Manual</span>
							</li>
						</ul>
					</div>
					<form class="custom-form mt-3 px-3" v-if="visitTabs == 'visitInfo'">
						<div class="row m-0">
							<div class="col-lg-6 col-md-6 col-sm-6 col-12 px-3" v-for="columns in 5" :key="columns">
								<div class="position-relative form-group ">
									<label for="">Single Select</label>
									<Multiselect 
										v-model="value"
										:options="modalOptions"
										class="custom-multiselect"
										placeholder="Select your Single Value"
										:searchable="true"
										:showOptions="true"
										:mode="single"
										/>
								</div>
							</div>
						</div>
					</form>
					<form class="custom-form mt-3 px-3" v-if="visitTabs == 'visitNotes'">
						<div class="row m-0">
							<div class="col-lg-6 col-md-6 col-sm-6 col-12 px-3" v-for="columns in 5" :key="columns">
								<div class="position-relative form-group ">
									<label for="">Single Select</label>
									<Multiselect 
										v-model="value"
										:options="modalOptions"
										class="custom-multiselect"
										placeholder="Select your Single Value"
										:searchable="true"
										:showOptions="true"
										:mode="single"
										/>
								</div>
							</div>
						</div>
					</form>
				</div>
				<div class="modal-footer justify-content-end pt-3">
					<button type="button" class="btn btn-secondary-theme px-4 shadow" data-bs-dismiss="modal">Cancel</button>
					<button type="button" class="btn btn-theme px-4 shadow" @click="hideModal()">Delete</button>
				</div>
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
	import "../scss/pages/_visits.scss";
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
		 const masks = { input: 'DD-MM-YYYY'};
	     const range = { start: new Date(2020, 0, 1), end: new Date(2020, 0, 5)};
		 const visitTabs = ref("visitInfo");
		 return {
	               date,
	               masks,
	               range,
                   value,
                   value1,
				   visitTabs,
                   modalOptions
	           }
	  },
	  data() {
	    return {
	
	    }
	  }
	}
</script>