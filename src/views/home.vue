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
											<h4 class="card-title">Users</h4>
										</div>
									</div>
									<div class="card-body bg-white">
										<form class="table-header mx-0 mt-1 mb-3">
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
												<div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 mb-lg-2 mb-md-2 mt-lg-1 mt-md-1 ps-0 order-lg-3 order-md-2 order-sm-1 order-1 ms-lg-auto ms-md-auto ms-sm-auto px-small-custom">
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
												<div class="col-xl-1 col-lg-2 col-md-4 col-sm-6 col-12 mb-lg-2 mb-md-2 mt-lg-1 mt-md-1 order-lg-3 order-md-3 order-sm-2 order-2 px-0 mt-lg-0 mt-md-0 mt-sm-0 mt-3">
													<div class="dropdown-custom ml-auto dropdown-filter">
														<div class="dropdown position-static w-100">
															<button class="btn dropdown-toggle w-100 m-0" type="button" id="dropfilter" data-bs-toggle="dropdown">
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
																				<button class="btn btn-submit d-flex flex-wrap align-items-center ms-auto px-4" @click="hideDropdown()">
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
										<div class="table-responsive mb-0">
											<div class="linepreloder mb-4"></div>
											<table class="table custom-table table-user max-height">
												<thead class="sticky-header">
													<tr>
														<th></th>
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
													<tr v-for="tableRows in dataTable" :key="tableRows">
														<td>
															<a href="#" class="rounded-circle toggle-row d-flex flex-wrap align-items-center justify-content-center" @click.prevent="toggleRow($event)">
															<i class="bi bi-plus"></i>
															<i class="bi bi-dash"></i>
															</a>
														</td>
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
													<!-- <tr class="hidden-row border-0">
														<td colspan="8">
															<div class="collapse">
																<div class="p-3">
																	<p class="mb-2">No : <span>2</span></p>
																	<p class="mb-2">Date : <span>12 Jan 2018</span> </p>
																	<p class="mb-2">Description : <span>Good</span> </p>
																	<p class="mb-2">Credit : <span>$150.00</span> </p>
																	<p class="mb-2">Debit : <span></span></p>
																	<p class="mb-2">Balance : <span>$150.00</span></p>
																</div>
															</div>
														</td>
													</tr> -->
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
							</div>
						</div>
						<!-- <Alert/> -->
					</div>
				</section>
			</div>
		</div>
	</div>
	<!-- Edit Modal -->
	<div class="modal custom-modal popup-animation p-0" id="edit" tabindex="-1" aria-labelledby="editLabel">
		<div class="modal-dialog modal-dialog-centered">
			<div class="modal-content">
				<div class="modal-body">
					<div class="text-center warning-wrapper rounded-circle d-flex flex-wrap align-items-center justify-content-center" v-if="deleteModal == false">
						<i class="bi bi-exclamation-triangle-fill"></i>
					</div>
					<div class="text-center warning-wrapper success rounded-circle d-flex flex-wrap align-items-center justify-content-center" v-if="deleteModal == true">
						<i class="bi bi-check2-all"></i>
					</div>
					<div class="warning-title text-center" v-if="deleteModal == false">
						<h2 class="mb-2">Are you sure?</h2>
						<p>You won't be able to revert this!</p>
					</div>
					<div class="warning-title text-center" v-if="deleteModal == true">
						<h2 class="mb-2">Deleted</h2>
						<p>Your file has been deleted.</p>
					</div>
				</div>
				<div class="modal-footer justify-content-center border-0 pt-0">
					<button type="button" class="btn btn-theme px-4 shadow" v-if="deleteModal == false" @click="deleteModal = true;">Delete</button>
					<button type="button" class="btn btn-secondary-theme px-4 shadow" v-if="deleteModal == false" data-bs-dismiss="modal">Cancel</button>
					<button type="button" class="btn btn-theme px-4 shadow" v-if="deleteModal == true" data-bs-dismiss="modal" @click="deleteModal=false">Ok</button>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	// importing sidebar Component
	import sidebar from "../components/sidebar";
	import navbar from "../components/nav.vue";
	import Alert from "../components/alert";
	import Multiselect from '@vueform/multiselect';
	import "@vueform/multiselect/themes/default.css";
	import "../scss/pages/_home.scss";
	export default {
	  components: {
	    sidebar: sidebar,
	    navbar: navbar,
	     Alert,
		 Multiselect
	  },
	  data() {
	    return {
			deleteModal:false,
			dataTable:20,
			modalOptions:[
				'Batman',
				'Robin',
				'Joker',
				'adas',
				'sdasda',
				'jkljljlkj',
				]
	    };
	  },
	  methods: {
		toggleRow(e) {
			let toggleRow = e.currentTarget.parentNode.parentNode;
			let togglebtn = document.querySelectorAll(".toggle-row");
			let collapsedRow = document.querySelectorAll(".show-hidden-row");
			collapsedRow.forEach(node=> {
				if(node != toggleRow) {
					node.classList.remove("show-hidden-row");
				}
			})
			togglebtn.forEach(TogglerBtn=> {
				if(TogglerBtn != e.currentTarget) {
					TogglerBtn.classList.remove("show");
				}
			})
			toggleRow.classList.toggle('show-hidden-row');
			e.currentTarget.classList.toggle('show');
		},
		menuOpen(e) {
			e.stopPropagation();
		},
		hideDropdown() {
			const dropdownToggleEl = document.querySelector('#dropfilter')
			const dropdownList = new bootstrap.Dropdown(dropdownToggleEl);
			dropdownList.hide();
		}
	  },
	  created() {
		 
	  }
	};
</script>