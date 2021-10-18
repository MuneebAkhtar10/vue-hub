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
					<div class="container-fluid mw-1600 custom-tabs">
						<div class="row tabs-wrapper gx-lg-0">
							<div class="col-lg-3 col-md-12 col-sm-12 col-12">
								<aside class="tabs-container no-gutters position-sticky bg-white">
									<div class="card bg-transparent rounded-0 shadow-none border-0 mb-2 h-auto">
										<div class="card-header d-flex flex-wrap align-items-center rouded-custom rounded-0">
											<div class="content-card-left w-100">
												<h4 class="card-title d-flex flex-wrap align-items-start small-font">
													<router-link to="/home" class="router-link-active btn p-0 small-circle text-white me-2 btn-gradient d-flex flex-wrap align-items-center justify-content-center rounded-circle float-start">
														<i class="bi bi-chevron-double-left"></i>
													</router-link>
													<span class="patient-name d-inline-block float-start">Mrs Rosie May Kirby1</span>
												</h4>
											</div>
										</div>
									</div>
									<div :class="[customDropdown ? 'show':'', 'tabs-list-wrapper']">
										<ul class= 'nav nav-pills left-content-tabs'>
											<li class="nav-item position-relative nav-collapse" role="presentation">
												<button class="d-flex align-items-center btn w-100 text-capitalize" @click="toggleLevel($event); levelTab= 'profile'; levelChild($event);">
												<span class="float-start">Personal details </span>
												</button>
												<i class="bi bi-chevron-down position-absolute"></i>
												<ul class="level level-second nav mb-0">
													<li class="nav-item">
														<button class="d-flex align-items-center btn w-100 border-0 active text-capitalize" @click="toggleActive($event); levelTab= 'profile'; customDropdown= false;">
														<span class="float-start">Personal Profile </span>
														</button>
													</li>
													<li class="nav-item">
														<button class="d-flex align-items-center btn w-100 border-0 text-capitalize" @click="toggleActive($event); levelTab= 'medicationAssesment'; customDropdown= false;">
														<span class="float-start">Medication Assessment</span>
														</button>
													</li>
												</ul>
											</li>
											<li class="nav-item position-relative nav-collapse" role="presentation">
												<button class="d-flex align-items-center btn w-100 text-capitalize" @click="toggleLevel($event); levelTab= 'supportNetwork'; customDropdown= false;">
												<span class="float-start">My Support Network </span>
												</button>
											</li>
											<li class="nav-item position-relative nav-collapse" role="presentation">
												<button class="d-flex align-items-center btn w-100 text-capitalize" @click="toggleLevel($event); levelTab= 'assessment'; threeLevel($event)">
												<span class="float-start">Assessment</span>
												</button>
												<i class="bi bi-chevron-down position-absolute"></i>
												<ul class="level level-second nav mb-0">
													<li class="nav-item position-relative">
														<button class="d-flex align-items-center btn w-100 border-0 text-capitalize" @click="toggleLevel($event); levelTab='assessment'; toggletwolevel($event)">
														<span class="float-start">Personal Profile</span>
														</button>
														<i class="bi bi-chevron-down position-absolute two-level"></i>
														<ul class="level level-third nav mb-0">
															<li class="nav-item">
																<button class="d-flex align-items-center btn w-100 border-0 text-capitalize" @click="toggleActive($event); levelTab= 'assessment'; levelTwoChild($event);customDropdown= false;">
																<span class="float-start">Personal Profile</span>
																</button>
															</li>
															<li class="nav-item">
																<button class="d-flex align-items-center btn w-100 border-0 text-capitalize" @click="toggleActive($event); levelTab= 'medicationAssesment'; levelTwoChild($event); customDropdown= false;">
																<span class="float-start">Medication Assessment</span>
																</button>
															</li>
															<li class="nav-item">
																<button class="d-flex align-items-center btn w-100 border-0 text-capitalize" @click="toggleActive($event); levelTab= 'medications'; levelTwoChild($event); customDropdown= false;">
																<span class="float-start">Medications</span>
																</button>
															</li>
															<li class="nav-item">
																<button class="d-flex align-items-center btn w-100 border-0 text-capitalize" @click="toggleActive($event); levelTab= 'mentalCapacity'; levelTwoChild($event); customDropdown= false;">
																<span class="float-start">Mental Capacity</span>
																</button>
															</li>
															<li class="nav-item">
																<button class="d-flex align-items-center btn w-100 border-0 text-capitalize" @click="toggleActive($event); levelTab= 'behaviourRisk'; levelTwoChild($event); customDropdown= false;">
																<span class="float-start">Behaviour Risks</span>
																</button>
															</li>
															<li class="nav-item">
																<button class="d-flex align-items-center btn w-100 border-0 text-capitalize" @click="toggleActive($event); levelTab= 'skinAssessment'; levelTwoChild($event); customDropdown= false;">
																<span class="float-start">Skin Assessment (Pressure Ulcer &amp; Bruises)</span>
																</button>
															</li>
														</ul>
													</li>
													<li class="nav-item position-relative">
														<button class="d-flex align-items-center btn w-100 border-0 text-capitalize" @click="toggleLevel($event); levelTab='risk'; toggletwolevel($event)">
														<span class="float-start">Risk Assessment</span>
														</button>
														<i class="bi bi-chevron-down position-absolute two-level"></i>
														<ul class="level level-third nav mb-0">
															<li class="nav-item">
																<button class="d-flex align-items-center btn w-100 border-0 text-capitalize" @click="toggleActive($event); levelTab= 'risk'; levelTwoChild($event); customDropdown= false;">
																<span class="float-start">Risk Assessment</span>
																</button>
															</li>
															<li class="nav-item">
																<button class="d-flex align-items-center btn w-100 border-0 text-capitalize" @click="toggleActive($event); levelTab= 'fallRisk'; levelTwoChild($event); customDropdown= false;">
																<span class="float-start">Falls Risk Assessment</span>
																</button>
															</li>
															<li class="nav-item">
																<button class="d-flex align-items-center btn w-100 border-0 text-capitalize" @click="toggleActive($event); levelTab= 'pressureArea'; levelTwoChild($event); customDropdown= false;">
																<span class="float-start">Pressure Area Assessment</span>
																</button>
															</li>
														</ul>
													</li>
													<li class="nav-item position-relative">
														<button class="d-flex align-items-center btn w-100 border-0 text-capitalize" @click="toggleLevel($event); levelTab='moving'; toggletwolevel($event)">
														<span class="float-start">Moving and Handling Assessment</span>
														</button>
														<i class="bi bi-chevron-down position-absolute two-level"></i>
														<ul class="level level-third nav mb-0">
															<li class="nav-item">
																<button class="d-flex align-items-center btn w-100 border-0 text-capitalize" @click="toggleActive($event); levelTab= 'moving'; levelTwoChild($event); customDropdown= false;">
																<span class="float-start">Checklist of Handling Tasks</span>
																</button>
															</li>
															<li class="nav-item">
																<button class="d-flex align-items-center btn w-100 border-0 text-capitalize" @click="toggleActive($event); levelTab= 'equipment'; levelTwoChild($event); customDropdown= false;">
																<span class="float-start">Equipment</span>
																</button>
															</li>
															<li class="nav-item">
																<button class="d-flex align-items-center btn w-100 border-0 text-capitalize" @click="toggleActive($event); levelTab= 'moving-assessment'; levelTwoChild($event); customDropdown= false;">
																<span class="float-start">Assessment</span>
																</button>
															</li>
														</ul>
													</li>
													<li class="nav-item position-relative">
														<button class="d-flex align-items-center btn w-100 border-0 text-capitalize" @click="toggleLevel($event); levelTab='daily'; toggletwolevel($event)">
														<span class="float-start">Daily Activities/ Support Plan </span>
														</button>
														<i class="bi bi-chevron-down position-absolute two-level"></i>
														<ul class="level level-third nav mb-0">
															<li class="nav-item">
																<button class="d-flex align-items-center btn w-100 border-0 text-capitalize" @click="toggleActive($event); levelTab= 'daily'; levelTwoChild($event);customDropdown= false;">
																<span class="float-start">Support Plan Check List</span>
																</button>
															</li>
															<li class="nav-item">
																<button class="d-flex align-items-center btn w-100 border-0 text-capitalize" @click="toggleActive($event); levelTab= 'daily-activity'; levelTwoChild($event);customDropdown= false;">
																<span class="float-start">Daily Activities</span>
																</button>
															</li>
															<li class="nav-item">
																<button class="d-flex align-items-center btn w-100 border-0 text-capitalize" @click="toggleActive($event); levelTab= 'promoting'; levelTwoChild($event);customDropdown= false;">
																<span class="float-start">Promoting Independence</span>
																</button>
															</li>
														</ul>
													</li>
													<li class="nav-item position-relative">
														<button class="d-flex align-items-center btn w-100 border-0 text-capitalize" @click="toggleLevel($event); levelTab='contract'; toggletwolevel($event)">
														<span class="float-start">Contracts</span>
														</button>
														<i class="bi bi-chevron-down position-absolute two-level"></i>
														<ul class="level level-third nav mb-0">
															<li class="nav-item">
																<button class="d-flex align-items-center btn w-100 border-0 text-capitalize" @click="toggleActive($event); levelTab= 'contract'; levelTwoChild($event);customDropdown= false;">
																<span class="float-start">Pharmacy Contract</span>
																</button>
															</li>
															<li class="nav-item">
																<button class="d-flex align-items-center btn w-100 border-0 text-capitalize" @click="toggleActive($event); levelTab= 'debit-contract'; levelTwoChild($event);customDropdown= false;">
																<span class="float-start">Direct Debit Contract</span>
																</button>
															</li>
														</ul>
													</li>
													<li class="nav-item position-relative">
														<button class="d-flex align-items-center btn w-100 border-0 text-capitalize" @click="customDropdown= false; toggleLevel($event); levelTab='consent '; toggletwolevel($event);">
														<span class="float-start">Consent </span>
														</button>
													</li>
												</ul>
											</li>
											<li class="nav-item">
												<button class="d-flex align-items-center btn w-100" @click="customDropdown=false; toggleLevel($event); levelTab= 'mar-chart';levelChild($event);">
												<span class="float-start">Mar Chart </span>
												</button> 
											</li>
											<li class="nav-item">
												<button class="d-flex align-items-center btn w-100" @click="customDropdown= false; toggleLevel($event); levelTab= 'daily-report'; levelChild($event);">
												<span class="float-start">Daily Reporting Sheet</span>
												</button> 
											</li>
											<li class="nav-item">
												<button class="d-flex align-items-center btn w-100" @click="customDropdown= false; toggleLevel($event); levelTab= 'review-form'; levelChild($event);">
												<span class="float-start">Review Form</span>
												</button> 
											</li>
											<li class="nav-item">
												<button class="d-flex align-items-center btn w-100" @click="customDropdown= false; toggleLevel($event); levelTab= 'uploads'; levelChild($event);">
												<span class="float-start">Uploads</span>
												</button> 
											</li>
											<li class="nav-item">
												<button class="d-flex align-items-center btn w-100 border-0" @click="customDropdown= false; toggleLevel($event); levelTab= 'checkbox-multiple'; levelChild($event);">
												<span class="float-start">Checkbox Data</span>
												</button> 
											</li>
										</ul>
									</div>
								</aside>
								<div :class="[customDropdown ? 'show': '' , 'card h-auto bg-white d-lg-none d-flex flex-wrap align-items-center justify-content-between md-dropdown my-3']" @click="customDropdown = !customDropdown">
									<span class="card-title small-font mb-0 text-truncate">Client Information List</span> 
									<i class="bi bi-chevron-down"></i>
								</div>
							</div>
							<div class="col-lg-9 ps-lg-2">
								<div class="tab-content bg-white">
									<div class="tab-pane active show" v-if="levelTab == 'profile'">
										<div class="card bg-transparent rounded-0 shadow-none">
											<div class="card-header d-flex flex-wrap align-items-center rouded-custom">
												<div class="content-card-left">
													<h4 class="card-title">Personal Profile</h4>
												</div>
												<div class="content-card-right ms-auto d-flex flex-wrap justify-content-xl-end justify-content-lg-end justify-content-md-end justify-content-sm-end justify-content-end marchart-content">
													<div class="dropdown-custom ml-auto">
														<div class="dropdown position-relative dropdown-button">
															<button class="btn btn-primary dropdown-toggle d-flex align-items-center flex-wrap" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
																Export <i class="bi bi-chevron-down ms-1"></i>
															</button>
															<ul class="dropdown-menu list-unstyled position-absolute" aria-labelledby="dropdownMenuButton">
																<li>
																	<a class="d-block dropdown-item text-center" href="javascript:void(0)" @click.prevent="exportECMScheduleReport($event)">
																		<i class="bi bi-person me-3"></i>
																		<span class="d-inline-block text-truncate">ECM Schedule Report</span>
																	</a>
																	<a class="d-block dropdown-item text-center" href="javascript:void(0)" @click.prevent="exportClientCommissionedReport($event)">
																		<i class="bi bi-person me-3"></i>
																		<span class="d-inline-block text-truncate">Client Commissioned Report</span>
																	</a>
																</li>
															</ul>
														</div>
													</div>
												</div>
											</div>
											<div class="card-body">
												<form class="custom-form">
													<div class="row">
														<div class="col-lg-6 col-md-6 col-sm-12 col-12 px-3" >
															<div class="position-relative form-group ">
																<label class="label-mental" for="">Enter Name</label>
																<input
																	class="w-100"
																	type="text"
																	placeholder="Enter Name"
																	>
															</div>
														</div>
														<div class="col-lg-6 col-md-6 col-sm-12 col-12 px-3" >
															<div class="position-relative form-group ">
																<label class="label-mental" for="">Enter Address</label>
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
												</form>
											</div>
										</div>
										<div class="submit-footer text-end position-sticky">
											<button class="btn btn-submit">Submit Form</button>
										</div>
									</div>
									<div class="tab-pane active show" v-if="levelTab == 'medicationAssesment'">
										<div class="card bg-transparent rounded-0 shadow-none">
											<div class="card-header d-flex flex-wrap align-items-center rouded-custom">
												<div class="content-card-left">
													<h4 class="card-title">Medication Assessment</h4>
												</div>
												<a href="#" class="btn p-0  card-header-circle btn-gradient ms-auto d-flex flex-wrap align-items-center justify-content-center rounded-circle">
												<i class="bi bi-plus d-inline"></i>
												</a>
											</div>
											<div class="card-body">
												<form class="custom-form">
													<div class="row">
														<div class="col-lg-6 col-md-6 col-sm-12 col-12 mb-4">
															<div class="card inner-card">
																<div class="card-header d-flex flex-wrap align-items-center">
																	<div class="content-card-left">
																		<h4 class="card-title">Medication Prior to Admission / POC Review</h4>
																	</div>
																</div>
																<div class="card-body">
																	<!-- To use this kind of box make sure you call _custom-check.scss -->
																	<div class="form-check custom-select-check d-flex flex-wrap position-relative">
																		<input class="form-check-input position-absolute" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
																		<label class="form-check-label" for="exampleRadios1">
																		Took Medication Independently
																		</label>
																	</div>
																	<div class="form-check custom-select-check d-flex flex-wrap position-relative">
																		<input class="form-check-input position-absolute" type="radio" name="exampleRadios" id="exampleRadios2" value="option1">
																		<label class="form-check-label" for="exampleRadios2">
																		Required Help With Medication
																		</label>
																	</div>
																</div>
															</div>
														</div>
														<div class="col-lg-6 col-md-6 col-sm-12 col-12 mb-4">
															<div class="card inner-card">
																<div class="card-header d-flex flex-wrap align-items-center">
																	<div class="content-card-left">
																		<h4 class="card-title">Knowledge and Purpose of Medication</h4>
																	</div>
																</div>
																<div class="card-body">
																	<div class="form-check p-0 mb-2">
																		<input class="form-check-input" type="radio" name="exampleRadios1" id="exampleRadios3" value="option1" checked>
																		<label class="form-check-label" for="exampleRadios3">
																		Can State The Purpose Of Each Medicine
																		</label>
																	</div>
																	<div class="form-check p-0 mb-2">
																		<input class="form-check-input" type="radio" name="exampleRadios1" id="exampleRadios4" value="option2">
																		<label class="form-check-label" for="exampleRadios4">
																		Can State The Purpose Of Some Medicines
																		</label>
																	</div>
																	<div class="form-check p-0">
																		<input class="form-check-input" type="radio" name="exampleRadios1" id="exampleRadios5" value="option2">
																		<label class="form-check-label" for="exampleRadios5">
																		Has Little Awareness Of Any Of The Medicines
																		</label>
																	</div>
																</div>
															</div>
														</div>
														<div class="col-lg-6 col-md-6 col-sm-12 col-12 mb-4">
															<div class="card inner-card">
																<div class="card-header d-flex flex-wrap align-items-center">
																	<div class="content-card-left">
																		<h4 class="card-title">Total Score</h4>
																	</div>
																</div>
																<div class="card-body">
																	<!-- To use this first make sure you have added _total-score.scss  -->
																	<!-- Change these classes for low, Medium, High -->
																	<div class="total-score d-flex flex-wrap justify-content-center align-items-center  position-relative rounded-circle medium">
																		<h4 class="mb-0">{{totalScore}}</h4>
																		<svg class="position-absolute">
																			<circle cx="75" cy="75" r="75" class="score-progress" :stroke-dashoffset="calculateScore"></circle>
																		</svg>
																	</div>
																</div>
															</div>
														</div>
														<div class="col-lg-6 col-md-6 col-sm-12 col-12 mb-4">
															<div class="card inner-card">
																<div class="card-header d-flex flex-wrap align-items-center">
																	<div class="content-card-left">
																		<h4 class="card-title">Blood Sugar</h4>
																	</div>
																</div>
																<div class="card-body">
																	<div class="row">
																		<div class="col-10">
																			<p class="heading mb-0">Have you ever been diagnosed with diabetes or raised blood sugar?</p>
																		</div>
																		<div class="col-2 ps-0">
																			<div class="form-check form-switch p-0 text-end">
																				<input class="form-check-input m-0 float-none" type="checkbox" id="flexSwitchCheckDefault">
																			</div>
																		</div>
																		<div class="col-12 px-0">
																			<h4 class="inner-heading border-bottom-custom">Service User Last Episode</h4>
																		</div>
																		<div class="col-lg-6 col-md-6 col-sm-6 col-12" >
																			<div class="position-relative form-group ">
																				<label for="">Hypoglycaemia(LOW)</label>
																				<input
																					class="w-100"
																					type="text"
																					placeholder="Enter Here"
																					>
																			</div>
																		</div>
																		<div class="col-lg-6 col-md-6 col-sm-6 col-12" >
																			<div class="position-relative form-group ">
																				<label for="">Hypoglycaemia (HIGH)</label>
																				<input
																					class="w-100"
																					type="text"
																					placeholder="Enter Here"
																					>
																			</div>
																		</div>
																		<div class="col-lg-12 col-md-12 col-sm-12 col-12" >
																			<div class="position-relative form-group ">
																				<label for="">Passed Out or Low Blood Sugar</label>
																				<input
																					class="w-100"
																					type="text"
																					placeholder="Enter Here"
																					>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
														<div class="col-lg-6 col-md-6 col-sm-12 col-12 mb-4">
															<div class="card inner-card">
																<div class="card-header d-flex flex-wrap align-items-center">
																	<div class="content-card-left">
																		<h4 class="card-title">Has the Service User been diagnosed with any of the below ?</h4>
																	</div>
																</div>
																<div class="card-body">
																	<div class="row border-bottom-custom">
																		<div class="col-lg-5 col-md-5 col-sm-5 col-9 d-lg-block d-md-block d-sm-block d-none">
																		</div>
																		<div class="col-lg-3 col-md-3 col-sm-3 col-12">
																			<h4 class="inner-heading m-0 p-0 text-lg-center text-md-center text-sm-center text-end">No/Yes</h4>
																		</div>
																		<div class="col-lg-4 col-md-4 col-sm-4 col-9 d-lg-block d-md-block d-sm-block d-none ps-0">
																			<h4 class="inner-heading m-0 p-0">Date</h4>
																		</div>
																	</div>
																	<div class="row border-bottom-custom align-items-center mt-2">
																		<div class="col-lg-5 col-md-5 col-sm-5 col-9 pe-2">
																			<p class="heading mb-0">Numbness or tingling in the feet</p>
																		</div>
																		<div class="col-lg-3 col-md-3 col-sm-3 col-3 text-lg-center text-md-center text-sm-center text-end">
																			<div class="form-check form-switch p-0 text-end d-inline">
																				<input class="form-check-input m-0 float-none" type="checkbox" id="flexSwitchCheckDefault1">
																			</div>
																		</div>
																		<div class="col-12 d-lg-none d-md-none d-sm-none d-block mt-3">
																			<h4 class="inner-heading m-0 p-0">Date</h4>
																		</div>
																		<div class="col-lg-4 col-md-4 col-sm-4 col-12 ps-lg-0 ps-md-0 ps-sm-0">
																			<input
																				class="w-100"
																				type="text"
																				placeholder="Enter Here"
																				>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</form>
											</div>
										</div>
										<div class="submit-footer text-end position-sticky">
											<button class="btn btn-submit">Submit Form</button>
										</div>
									</div>
									<div class="tab-pane active show" v-if="levelTab == 'supportNetwork'">
										<div class="card bg-transparent rounded-0 shadow-none">
											<div class="card-header d-flex flex-wrap align-items-center rouded-custom">
												<div class="content-card-left">
													<h4 class="card-title">My Support Network</h4>
												</div>
											</div>
											<div class="card-body">
											</div>
										</div>
										<div class="submit-footer text-end position-sticky">
											<button class="btn btn-submit">Submit Form</button>
										</div>
									</div>
									<div class="tab-pane active show" v-if="levelTab == 'assessment'">
										<div class="card bg-transparent rounded-0 shadow-none">
											<div class="card-header d-flex flex-wrap align-items-center rouded-custom">
												<div class="content-card-left">
													<h4 class="card-title">Personal Profile</h4>
												</div>
											</div>
											<div class="card-body">
											</div>
										</div>
										<div class="submit-footer text-end position-sticky">
											<button class="btn btn-submit">Submit Form</button>
										</div>
									</div>
									<div class="tab-pane active show" v-if="levelTab == 'medications'">
										<div class="card bg-transparent rounded-0 shadow-none">
											<div class="card-header d-flex flex-wrap align-items-center rouded-custom">
												<div class="content-card-left">
													<h4 class="card-title">Medications</h4>
												</div>
											</div>
											<div class="card-body">
											</div>
										</div>
										<div class="submit-footer text-end position-sticky">
											<button class="btn btn-submit">Submit Form</button>
										</div>
									</div>
									<div class="tab-pane active show" v-if="levelTab == 'mentalCapacity'">
										<div class="card bg-transparent rounded-0 shadow-none">
											<div class="card-header d-flex flex-wrap align-items-center rouded-custom">
												<div class="content-card-left">
													<h4 class="card-title">Mental Capacity</h4>
												</div>
											</div>
											<div class="card-body">
											</div>
										</div>
										<div class="submit-footer text-end position-sticky">
											<button class="btn btn-submit">Submit Form</button>
										</div>
									</div>
									<div class="tab-pane active show" v-if="levelTab == 'behaviourRisk'">
										<div class="card bg-transparent rounded-0 shadow-none">
											<div class="card-header d-flex flex-wrap align-items-center rouded-custom">
												<div class="content-card-left">
													<h4 class="card-title">Behaviour Risks</h4>
												</div>
											</div>
											<div class="card-body">
												<form class="custom-form">
													<div class="row">
														<div class="col-lg-6 col-md-6 col-sm-12 col-12 px-3">
															<div class="position-relative form-group ">
																<div class="form-check label-behaviour">
																	<input class="form-check-input p-0" type="checkbox" id="selfHarm" name="selfHarm" true-value="yes" false-value="no">
																	<label class="form-check-label  ps-2 pt-0 d-inline-block" for="selfHarm"> History of self-harm </label>
																</div>
																<textarea class="w-100" type="text" placeholder="Enter Details" name="selfHarmDetails"></textarea>
															</div>
														</div>
														<div class="col-lg-6 col-md-6 col-sm-12 col-12 px-3">
															<div class="position-relative form-group ">
																<div class="form-check label-behaviour">
																	<input class="form-check-input p-0" type="checkbox" id="selfHarm" name="selfHarm" true-value="yes" false-value="no">
																	<label class="form-check-label  ps-2 pt-0 d-inline-block" for="selfHarm">  Does the service user have history of verbally/Physically abusive towards care staff or others  </label>
																</div>
																<textarea class="w-100" type="text" placeholder="Enter Details" name="selfHarmDetails"></textarea>
															</div>
														</div>
														<div class="col-lg-6 col-md-6 col-sm-12 col-12 px-3">
															<div class="position-relative form-group ">
																<div class="form-check label-behaviour-small">
																	<input class="form-check-input p-0" type="checkbox" id="selfHarm" name="selfHarm" true-value="yes" false-value="no">
																	<label class="form-check-label  ps-2 pt-0 d-inline-block" for="selfHarm">  Concerns with medication overdosing or risks stocking medication  </label>
																</div>
																<textarea class="w-100" type="text" placeholder="Enter Details" name="selfHarmDetails"></textarea>
															</div>
														</div>
														<div class="col-lg-6 col-md-6 col-sm-12 col-12 px-3">
															<div class="position-relative form-group ">
																<div class="form-check label-behaviour-small">
																	<input class="form-check-input p-0" type="checkbox" id="selfHarm" name="selfHarm" true-value="yes" false-value="no">
																	<label class="form-check-label  ps-2 pt-0 d-inline-block" for="selfHarm">   Concerns with Obsessive Compulsive Disorder   </label>
																</div>
																<textarea class="w-100" type="text" placeholder="Enter Details" name="selfHarmDetails"></textarea>
															</div>
														</div>
													</div>
												</form>
											</div>
										</div>
										<div class="submit-footer text-end position-sticky">
											<button class="btn btn-submit">Submit Form</button>
										</div>
									</div>
									<div class="tab-pane active show" v-if="levelTab == 'skinAssessment'">
										<div class="card bg-transparent rounded-0 shadow-none">
											<div class="card-header d-flex flex-wrap align-items-center rouded-custom">
												<div class="content-card-left">
													<h4 class="card-title">Skin Assessment (Pressure Ulcer &amp; Bruises)</h4>
												</div>
											</div>
											<div class="card-body">
												<form action="" class="custom-form">
													<div class="row">
														<div class="col-12">
															<div class="position-relative form-group">
																<div class="form-check">
																	<input class="form-check-input p-0" type="checkbox" value="yes" id="organisePacks" name="organisePacks" true-value="yes" false-value="no">
																	<label class="form-check-label  ps-2 pt-0 d-inline-block" for="organisePacks"> Inhouse Pharmacy to organise packs? </label>
																</div>
															</div>
														</div>
													</div>
												</form>
											</div>
										</div>
										<div class="submit-footer text-end position-sticky">
											<button class="btn btn-submit">Submit Form</button>
										</div>
									</div>
									<div class="tab-pane active show" v-if="levelTab == 'riskAssessment'">
										<div class="card bg-transparent rounded-0 shadow-none">
											<div class="card-header d-flex flex-wrap align-items-center rouded-custom">
												<div class="content-card-left">
													<h4 class="card-title">Skin Assessment (Pressure Ulcer &amp; Bruises)</h4>
												</div>
											</div>
											<div class="card-body">
											</div>
										</div>
										<div class="submit-footer text-end position-sticky">
											<button class="btn btn-submit">Submit Form</button>
										</div>
									</div>
									<div class="tab-pane active show" v-if="levelTab == 'risk'">
										<div class="card bg-transparent rounded-0 shadow-none">
											<div class="card-header d-flex flex-wrap align-items-center rouded-custom">
												<div class="content-card-left">
													<h4 class="card-title">Risk Assessment</h4>
												</div>
											</div>
											<div class="card-body">
											</div>
										</div>
										<div class="submit-footer text-end position-sticky">
											<button class="btn btn-submit">Submit Form</button>
										</div>
									</div>
									<div class="tab-pane active show" v-if="levelTab == 'fallRisk'">
										<div class="card bg-transparent rounded-0 shadow-none">
											<div class="card-header d-flex flex-wrap align-items-center rouded-custom">
												<div class="content-card-left">
													<h4 class="card-title">Falls Risk Assessment</h4>
												</div>
											</div>
											<div class="card-body">
											</div>
										</div>
										<div class="submit-footer text-end position-sticky">
											<button class="btn btn-submit">Submit Form</button>
										</div>
									</div>
									<div class="tab-pane active show" v-if="levelTab == 'pressureArea'">
										<div class="card bg-transparent rounded-0 shadow-none">
											<div class="card-header d-flex flex-wrap align-items-center rouded-custom">
												<div class="content-card-left">
													<h4 class="card-title">Pressure Area Assessment</h4>
												</div>
											</div>
											<div class="card-body">
											</div>
										</div>
										<div class="submit-footer text-end position-sticky">
											<button class="btn btn-submit">Submit Form</button>
										</div>
									</div>
									<div class="tab-pane active show" v-if="levelTab == 'moving'">
										<div class="card bg-transparent rounded-0 shadow-none">
											<div class="card-header d-flex flex-wrap align-items-center rouded-custom">
												<div class="content-card-left">
													<h4 class="card-title">Checklist of Handling Tasks</h4>
												</div>
											</div>
											<div class="card-body">
												<form class="custom-form">
													<div class="row">
														<div class="col-lg-12 col-md-12 col-sm-12 col-12 mb-4">
															<div class="card inner-card">
																<div class="card-header d-flex flex-wrap align-items-center">
																	<div class="content-card-left">
																		<h4 class="card-title">General</h4>
																	</div>
																</div>
																<div class="card-body">
																	<div class="row border-bottom-custom">
																		<div class="col-lg-3 col-md-3 col-sm-3 col-6">
																			<h4 class="inner-heading m-0 p-0">Task</h4>
																		</div>
																		<div class="col-lg-2 col-md-3 col-sm-3 col-3 ps-small-0">
																			<h4 class="inner-heading m-0 p-0 text-lg-center text-md-center text-sm-center text-end">No/Yes</h4>
																		</div>
																		<div class="col-lg-2 col-md-3 col-sm-3 col-3 ps-small-0">
																			<h4 class="inner-heading m-0 p-0 text-lg-center text-md-center text-sm-center text-end">Variable</h4>
																		</div>
																		<div class="col-lg-5 col-md-3 col-sm-3 col-12 d-lg-block d-md-block d-sm-block d-none ps-0">
																			<h4 class="inner-heading m-0 p-0">Comments</h4>
																		</div>
																	</div>
																	<div class="row border-bottom-custom align-items-center mt-2">
																		<div class="col-lg-3 col-md-3 col-sm-3 col-6 pe-2">
																			<p class="heading mb-0">Turning in bed</p>
																		</div>
																		<div class="col-lg-2 col-md-3 col-sm-3 col-3 text-center ps-small-0">
																			<div class="form-check form-switch p-0 text-end d-inline">
																				<input class="form-check-input m-0 float-none" type="checkbox" id="flexSwitchCheckDefault1">
																			</div>
																		</div>
																		<div class="col-lg-2 col-md-3 col-sm-3 col-3 text-center ps-small-0">
																			<div class="form-check form-switch p-0 text-end d-inline">
																				<input class="form-check-input m-0 float-none" type="checkbox" id="flexSwitchCheckDefault1">
																			</div>
																		</div>
																		<div class="col-12 d-lg-none d-md-none d-sm-none d-block mt-3">
																			<h4 class="inner-heading m-0 p-0">Comments</h4>
																		</div>
																		<div class="col-lg-5 col-md-3 col-sm-3 col-12 ps-lg-0 ps-md-0 ps-sm-0">
																			<input
																				class="w-100"
																				type="text"
																				placeholder="Enter Here"
																				>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</form>
											</div>
										</div>
										<div class="submit-footer text-end position-sticky">
											<button class="btn btn-submit">Submit Form</button>
										</div>
									</div>
									<div class="tab-pane active show" v-if="levelTab == 'equipment'">
										<div class="card bg-transparent rounded-0 shadow-none">
											<div class="card-header d-flex flex-wrap align-items-center rouded-custom">
												<div class="content-card-left">
													<h4 class="card-title">Equipment</h4>
												</div>
											</div>
											<div class="card-body">
											</div>
										</div>
										<div class="submit-footer text-end position-sticky">
											<button class="btn btn-submit">Submit Form</button>
										</div>
									</div>
									<div class="tab-pane active show" v-if="levelTab == 'moving-assessment'">
										<div class="card bg-transparent rounded-0 shadow-none">
											<div class="card-header d-flex flex-wrap align-items-center rouded-custom">
												<div class="content-card-left">
													<h4 class="card-title">Assessment</h4>
												</div>
											</div>
											<div class="card-body">
											</div>
										</div>
										<div class="submit-footer text-end position-sticky">
											<button class="btn btn-submit">Submit Form</button>
										</div>
									</div>
									<div class="tab-pane active show" v-if="levelTab == 'daily'">
										<div class="card bg-transparent rounded-0 shadow-none">
											<div class="card-header d-flex flex-wrap align-items-center rouded-custom">
												<div class="content-card-left">
													<h4 class="card-title">Check List</h4>
												</div>
											</div>
											<div class="card-body">
												<form class="custom-form">
													<div class="card inner-card">
														<div class="card-body meal-card clearfix">
															<div class="row border-bottom-custom">
																<div class="col-lg-3 col-md-4 col-sm-4 col-9">
																	<h4 class="inner-heading m-0 p-0">Personal Care</h4>
																</div>
																<div class="col-lg-1 col-md-2 col-sm-2 col-3 ps-lg-2 ps-md-0 ps-sm-0 ps-0">
																	<h4 class="inner-heading m-0 p-0">No/Yes</h4>
																</div>
																<div class="col-lg-5 col-md-6 col-sm-6 d-lg-block d-md-block d-sm-block d-none">
																	<ul class="list-unstyled m-0 checklist-schedule">
																		<li class="d-inline-block inner-heading p-0 mb-0">Morning</li>
																		<li class="d-inline-block inner-heading p-0 mb-0">Lunch</li>
																		<li class="d-inline-block inner-heading p-0 mb-0">Tea</li>
																		<li class="d-inline-block inner-heading p-0 mb-0">Bed</li>
																	</ul>
																</div>
																<div class="col-lg-3 d-lg-block d-none">
																	<h4 class="inner-heading m-0 p-0">Comments</h4>
																</div>
															</div>
															<div class="row border-bottom-custom align-items-center mt-2">
																<div class="col-lg-3 col-md-4 col-sm-4 col-9 pe-2">
																	<p class="heading mb-0">Body Wash / Bed Bath</p>
																</div>
																<div class="col-lg-1 col-md-2 col-sm-2 col-3">
																	<div class="form-check form-switch p-0 text-end d-inline">
																		<input class="form-check-input m-0 float-none" type="checkbox" id="flexSwitchCheckDefault1">
																	</div>
																</div>
																<div class="col-lg-5 col-md-6 col-sm-6 col-12 checklist-schedule-checkbox">
																	<ul class="list-unstyled m-0 checklist-schedule d-lg-none d-md-none d-sm-none d-block mt-3">
																		<li class="d-inline-block inner-heading p-0 mb-0">Morning</li>
																		<li class="d-inline-block inner-heading p-0 mb-0">Lunch</li>
																		<li class="d-inline-block inner-heading p-0 mb-0">Tea</li>
																		<li class="d-inline-block inner-heading p-0 mb-0">Bed</li>
																	</ul>
																	<div class="form-check form-check-inline">
																		<input class="form-check-input p-0 ms-0" type="checkbox" value="yes" id="mon" >
																	</div>
																	<div class="form-check form-check-inline">
																		<input class="form-check-input p-0 ms-0" type="checkbox" value="yes" id="tue" >
																	</div>
																	<div class="form-check form-check-inline">
																		<input class="form-check-input p-0 ms-0" type="checkbox" value="yes" id="wed" >
																	</div>
																	<div class="form-check form-check-inline">
																		<input class="form-check-input p-0 ms-0" type="checkbox" value="yes" id="thu">
																	</div>
																</div>
																<div class="col-12 d-lg-none d-md-block d-sm-block d-block mt-3 mb-2">
																	<h4 class="inner-heading m-0 p-0">Comments</h4>
																</div>
																<div class="col-lg-3 col-12">
																	<input
																		class="w-100"
																		type="text"
																		placeholder="Enter Here"
																		>
																</div>
															</div>
															<div class="row align-items-center mt-2">
																<div class="col-lg-3 col-md-4 col-sm-4 col-9 pe-2">
																	<p class="heading mb-0">Shower / Bath</p>
																</div>
																<div class="col-lg-1 col-md-2 col-sm-2 col-3">
																	<div class="form-check form-switch p-0 text-end d-inline">
																		<input class="form-check-input m-0 float-none" type="checkbox" id="flexSwitchCheckDefault1">
																	</div>
																</div>
																<div class="col-lg-5 col-md-6 col-sm-6 col-12 checklist-schedule-checkbox">
																	<ul class="list-unstyled m-0 checklist-schedule d-lg-none d-md-none d-sm-none d-block mt-3">
																		<li class="d-inline-block inner-heading p-0 mb-0">Morning</li>
																		<li class="d-inline-block inner-heading p-0 mb-0">Lunch</li>
																		<li class="d-inline-block inner-heading p-0 mb-0">Tea</li>
																		<li class="d-inline-block inner-heading p-0 mb-0">Bed</li>
																	</ul>
																	<div class="form-check form-check-inline">
																		<input class="form-check-input p-0 ms-0" type="checkbox" value="yes" id="mon" >
																	</div>
																	<div class="form-check form-check-inline">
																		<input class="form-check-input p-0 ms-0" type="checkbox" value="yes" id="tue" >
																	</div>
																	<div class="form-check form-check-inline">
																		<input class="form-check-input p-0 ms-0" type="checkbox" value="yes" id="wed" >
																	</div>
																	<div class="form-check form-check-inline">
																		<input class="form-check-input p-0 ms-0" type="checkbox" value="yes" id="thu">
																	</div>
																</div>
																<div class="col-12 d-lg-none d-md-block d-sm-block d-block mt-3 mb-2">
																	<h4 class="inner-heading m-0 p-0">Comments</h4>
																</div>
																<div class="col-lg-3 col-12">
																	<input
																		class="w-100"
																		type="text"
																		placeholder="Enter Here"
																		>
																</div>
															</div>
														</div>
													</div>
												</form>
											</div>
										</div>
										<div class="submit-footer text-end position-sticky">
											<button class="btn btn-submit">Submit Form</button>
										</div>
									</div>
									<div class="tab-pane active show" v-if="levelTab == 'daily-activity'">
										<div class="card bg-transparent rounded-0 shadow-none">
											<div class="card-header d-flex flex-wrap align-items-center rouded-custom">
												<div class="content-card-left">
													<h4 class="card-title">Daily Tasks</h4>
												</div>
											</div>
											<div class="card-body">
												<form class="custom-form">
													<div class="row">
														<div class="col-lg-12 col-md-12 col-sm-12 col-12 mb-4">
															<div class="card inner-card">
																<div class="card-header d-flex flex-wrap align-items-center border-0 px-0 pt-0">
																	<div class="content-card-left w-100">
																		<!-- If you want these kinds of tabs make sure you use _small-tabs.scss -->
																		<ul class="small-custom-tabs d-flex align-items-center">
																			<li :class="[smalltabs=='am' ? 'active': '']" @click="smalltabs = 'am'">
																				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sunrise" viewBox="0 0 16 16">
																					<path d="M7.646 1.146a.5.5 0 0 1 .708 0l1.5 1.5a.5.5 0 0 1-.708.708L8.5 2.707V4.5a.5.5 0 0 1-1 0V2.707l-.646.647a.5.5 0 1 1-.708-.708l1.5-1.5zM2.343 4.343a.5.5 0 0 1 .707 0l1.414 1.414a.5.5 0 0 1-.707.707L2.343 5.05a.5.5 0 0 1 0-.707zm11.314 0a.5.5 0 0 1 0 .707l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zM8 7a3 3 0 0 1 2.599 4.5H5.4A3 3 0 0 1 8 7zm3.71 4.5a4 4 0 1 0-7.418 0H.499a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-3.79zM0 10a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 0 10zm13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
																				</svg>
																				<span>Am</span>
																			</li>
																			<li :class="[smalltabs=='lunch' ? 'active': '']" @click="smalltabs = 'lunch'">
																				<i class="bi bi-brightness-alt-high"></i>
																				<span>lunch</span>
																			</li>
																			<li :class="[smalltabs=='tea' ? 'active': '']" @click="smalltabs = 'tea'">
																				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sunset" viewBox="0 0 16 16">
																					<path d="M7.646 4.854a.5.5 0 0 0 .708 0l1.5-1.5a.5.5 0 0 0-.708-.708l-.646.647V1.5a.5.5 0 0 0-1 0v1.793l-.646-.647a.5.5 0 1 0-.708.708l1.5 1.5zm-5.303-.51a.5.5 0 0 1 .707 0l1.414 1.413a.5.5 0 0 1-.707.707L2.343 5.05a.5.5 0 0 1 0-.707zm11.314 0a.5.5 0 0 1 0 .706l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zM8 7a3 3 0 0 1 2.599 4.5H5.4A3 3 0 0 1 8 7zm3.71 4.5a4 4 0 1 0-7.418 0H.499a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-3.79zM0 10a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 0 10zm13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
																				</svg>
																				<span>Tea</span>
																			</li>
																			<li :class="[smalltabs=='bed' ? 'active': '']" @click="smalltabs = 'bed'">
																				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon-stars" viewBox="0 0 16 16">
																					<path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"/>
																					<path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"/>
																				</svg>
																				<span>Bed</span>
																			</li>
																			<li :class="[smalltabs=='bed' ? 'active': '']" @click="smalltabs = 'bed'">
																				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon-stars" viewBox="0 0 16 16">
																					<path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"/>
																					<path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"/>
																				</svg>
																				<span>Other Activities</span>
																			</li>
																		</ul>
																	</div>
																</div>
																<div class="card-body daily-task-weeks clearfix mt-1" v-if="smalltabs == 'am'">
																	<!-- To use this html please use _week-days.scss -->
																	<div class="single-task float-start">
																		<div class="form-check form-switch p-0 text-end d-flex flex-wrap align-items-center">
																			<input class="form-check-input m-0 float-none small-switch " type="checkbox" id="monday">
																			<label class="form-check-label pt-0" for="monday">Monday</label>
																		</div>
																		<div class="position-relative form-group mb-0 pe-2">
																			<input
																				class="w-100 shadow-none"
																				type="time"
																				placeholder="Enter Name"
																				>
																		</div>
																	</div>
																	<div class="single-task float-start">
																		<div class="form-check form-switch p-0 text-end d-flex flex-wrap align-items-center">
																			<input class="form-check-input m-0 float-none small-switch" type="checkbox" id="tuesday">
																			<label class="form-check-label pt-0" for="tuesday">Tuesday</label>
																		</div>
																		<div class="position-relative form-group mb-0 pe-2">
																			<input
																				class="w-100 shadow-none"
																				type="time"
																				placeholder="Enter Name"
																				>
																		</div>
																	</div>
																	<div class="single-task float-start">
																		<div class="form-check form-switch p-0 text-end d-flex flex-wrap align-items-center">
																			<input class="form-check-input m-0 float-none small-switch" type="checkbox" id="wednesday">
																			<label class="form-check-label pt-0" for="wednesday">Wednesday</label>
																		</div>
																		<div class="position-relative form-group mb-0 pe-2">
																			<input
																				class="w-100 shadow-none"
																				type="time"
																				placeholder="Enter Name"
																				>
																		</div>
																	</div>
																	<div class="single-task float-start">
																		<div class="form-check form-switch p-0 text-end d-flex flex-wrap align-items-center">
																			<input class="form-check-input m-0 float-none small-switch" type="checkbox" id="thursday">
																			<label class="form-check-label pt-0" for="thursday">Thursday</label>
																		</div>
																		<div class="position-relative form-group mb-0 pe-2">
																			<input
																				class="w-100 shadow-none"
																				type="time"
																				placeholder="Enter Name"
																				>
																		</div>
																	</div>
																	<div class="single-task float-start">
																		<div class="form-check form-switch p-0 text-end d-flex flex-wrap align-items-center">
																			<input class="form-check-input m-0 float-none small-switch" type="checkbox" id="friday">
																			<label class="form-check-label pt-0" for="friday">Friday</label>
																		</div>
																		<div class="position-relative form-group mb-0 pe-2">
																			<input
																				class="w-100 shadow-none"
																				type="time"
																				placeholder="Enter Name"
																				>
																		</div>
																	</div>
																	<div class="single-task float-start">
																		<div class="form-check form-switch p-0 text-end d-flex flex-wrap align-items-center">
																			<input class="form-check-input m-0 float-none small-switch" type="checkbox" id="saturday">
																			<label class="form-check-label pt-0" for="saturday">Saturday</label>
																		</div>
																		<div class="position-relative form-group mb-0 pe-2">
																			<input
																				class="w-100 shadow-none"
																				type="time"
																				placeholder="Enter Name"
																				>
																		</div>
																	</div>
																	<div class="single-task float-start">
																		<div class="form-check form-switch p-0 text-end d-flex flex-wrap align-items-center">
																			<input class="form-check-input m-0 float-none small-switch" type="checkbox" id="sunday">
																			<label class="form-check-label pt-0" for="sunday">Sunday</label>
																		</div>
																		<div class="position-relative form-group mb-0 pe-2">
																			<input
																				class="w-100 shadow-none"
																				type="time"
																				placeholder="Enter Name"
																				>
																		</div>
																	</div>
																</div>
																<div class="card-body daily-task-weeks clearfix mt-1" v-if="smalltabs == 'lunch'">
																	<!-- To use this html please use _week-days.scss -->
																	<div class="single-task float-start">
																		<div class="form-check form-switch p-0 text-end d-flex flex-wrap align-items-center">
																			<input class="form-check-input m-0 float-none small-switch " type="checkbox" id="monday">
																			<label class="form-check-label pt-0" for="monday">Monday</label>
																		</div>
																		<div class="position-relative form-group mb-0 pe-2">
																			<input
																				class="w-100 shadow-none"
																				type="time"
																				placeholder="Enter Name"
																				>
																		</div>
																	</div>
																	<div class="single-task float-start">
																		<div class="form-check form-switch p-0 text-end d-flex flex-wrap align-items-center">
																			<input class="form-check-input m-0 float-none small-switch" type="checkbox" id="tuesday">
																			<label class="form-check-label pt-0" for="tuesday">Tuesday</label>
																		</div>
																		<div class="position-relative form-group mb-0 pe-2">
																			<input
																				class="w-100 shadow-none"
																				type="time"
																				placeholder="Enter Name"
																				>
																		</div>
																	</div>
																	<div class="single-task float-start">
																		<div class="form-check form-switch p-0 text-end d-flex flex-wrap align-items-center">
																			<input class="form-check-input m-0 float-none small-switch" type="checkbox" id="wednesday">
																			<label class="form-check-label pt-0" for="wednesday">Wednesday</label>
																		</div>
																		<div class="position-relative form-group mb-0 pe-2">
																			<input
																				class="w-100 shadow-none"
																				type="time"
																				placeholder="Enter Name"
																				>
																		</div>
																	</div>
																	<div class="single-task float-start">
																		<div class="form-check form-switch p-0 text-end d-flex flex-wrap align-items-center">
																			<input class="form-check-input m-0 float-none small-switch" type="checkbox" id="thursday">
																			<label class="form-check-label pt-0" for="thursday">Thursday</label>
																		</div>
																		<div class="position-relative form-group mb-0 pe-2">
																			<input
																				class="w-100 shadow-none"
																				type="time"
																				placeholder="Enter Name"
																				>
																		</div>
																	</div>
																	<div class="single-task float-start">
																		<div class="form-check form-switch p-0 text-end d-flex flex-wrap align-items-center">
																			<input class="form-check-input m-0 float-none small-switch" type="checkbox" id="friday">
																			<label class="form-check-label pt-0" for="friday">Friday</label>
																		</div>
																		<div class="position-relative form-group mb-0 pe-2">
																			<input
																				class="w-100 shadow-none"
																				type="time"
																				placeholder="Enter Name"
																				>
																		</div>
																	</div>
																	<div class="single-task float-start">
																		<div class="form-check form-switch p-0 text-end d-flex flex-wrap align-items-center">
																			<input class="form-check-input m-0 float-none small-switch" type="checkbox" id="saturday">
																			<label class="form-check-label pt-0" for="saturday">Saturday</label>
																		</div>
																		<div class="position-relative form-group mb-0 pe-2">
																			<input
																				class="w-100 shadow-none"
																				type="time"
																				placeholder="Enter Name"
																				>
																		</div>
																	</div>
																	<div class="single-task float-start">
																		<div class="form-check form-switch p-0 text-end d-flex flex-wrap align-items-center">
																			<input class="form-check-input m-0 float-none small-switch" type="checkbox" id="sunday">
																			<label class="form-check-label pt-0" for="sunday">Sunday</label>
																		</div>
																		<div class="position-relative form-group mb-0 pe-2">
																			<input
																				class="w-100 shadow-none"
																				type="time"
																				placeholder="Enter Name"
																				>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</form>
											</div>
										</div>
										<div class="submit-footer text-end position-sticky">
											<button class="btn btn-submit">Submit Form</button>
										</div>
									</div>
									<div class="tab-pane active show" v-if="levelTab == 'promoting'">
										<div class="card bg-transparent rounded-0 shadow-none">
											<div class="card-header d-flex flex-wrap align-items-center rouded-custom">
												<div class="content-card-left">
													<h4 class="card-title">Promoting Independence</h4>
												</div>
											</div>
											<div class="card-body">
											</div>
										</div>
										<div class="submit-footer text-end position-sticky">
											<button class="btn btn-submit">Submit Form</button>
										</div>
									</div>
									<div class="tab-pane active show" v-if="levelTab == 'contract'">
										<div class="card bg-transparent rounded-0 shadow-none">
											<div class="card-header d-flex flex-wrap align-items-center rouded-custom">
												<div class="content-card-left">
													<h4 class="card-title">Pharmacy Contract</h4>
												</div>
											</div>
											<div class="card-body">
											</div>
										</div>
										<div class="submit-footer text-end position-sticky">
											<button class="btn btn-submit">Submit Form</button>
										</div>
									</div>
									<div class="tab-pane active show" v-if="levelTab == 'debit-contract'">
										<div class="card bg-transparent rounded-0 shadow-none">
											<div class="card-header d-flex flex-wrap align-items-center rouded-custom">
												<div class="content-card-left">
													<h4 class="card-title">Direct Debit</h4>
												</div>
											</div>
											<div class="card-body">
											</div>
										</div>
										<div class="submit-footer text-end position-sticky">
											<button class="btn btn-submit">Submit Form</button>
										</div>
									</div>
									<div class="tab-pane active show" v-if="levelTab == 'Consent'">
										<div class="card bg-transparent rounded-0 shadow-none">
											<div class="card-header d-flex flex-wrap align-items-center rouded-custom">
												<div class="content-card-left">
													<h4 class="card-title">Consent</h4>
												</div>
											</div>
											<div class="card-body">
											</div>
										</div>
										<div class="submit-footer text-end position-sticky">
											<button class="btn btn-submit">Submit Form</button>
										</div>
									</div>
									<div class="tab-pane active show" v-if="levelTab == 'mar-chart'">
										<div class="card bg-transparent rounded-0 shadow-none">
											<div class="card-header d-flex flex-wrap align-items-xl-center rouded-custom">
												<div class="content-card-left">
													<h4 class="card-title">MAR Chart</h4>
												</div>
												<div class="content-card-right ms-auto d-flex flex-wrap justify-content-xl-end justify-content-lg-end justify-content-md-end justify-content-sm-end justify-content-end marchart-content">
													<a href="#" class="btn px-3 py-0 bg-custom-gradient me-3 font-14 d-flex flex-wrap align-items-center justify-content-center icon-text" >
														<i class="bi bi-search me-lg-2 me-md-2 me-sm-2"></i>
														<span class="d-lg-inline d-md-inline d-sm-inline d-none">Add Med</span> 
													</a>
													<a href="#" class="btn px-3 py-0 bg-custom-gradient me-3 font-14 d-flex flex-wrap align-items-center justify-content-center icon-text" >
														<i class="bi bi-clipboard-data me-lg-2 me-md-2 me-sm-2"></i>
														<span class="d-lg-inline d-md-inline d-sm-inline d-none">Audit
													</span> 										</a>
													<a href="#" class="btn px-3 py-0 rounded  bg-custom-gradient me-xl-3 me-lg-0 me-md-0 me-sm-0 me-0 font-14 d-flex flex-wrap align-items-center justify-content-center icon-text">
														<i class="bi bi-printer me-lg-2 me-md-2 me-sm-2"></i>
														<span class="d-lg-inline d-md-inline d-sm-inline d-none">Print</span> 	
													</a>
												</div>
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
											<div class="card-body marchart-wrapper">
												<div class="d-flex flex-wrap align-items">
													<div class="marchart-box text-center px-2 d-inline-block A ">
														<p class="mb-0 d-inline">Administrator</p>
													</div>
													<div class="marchart-box text-center px-2 d-inline-block R ">
														<p class="mb-0 d-inline">Refusal</p>
													</div>
													<div class="marchart-box text-center px-2 d-inline-block NA ">
														<p class="mb-0 d-inline">Not Avail</p>
													</div>
													<div class="marchart-box text-center px-2 d-inline-block NR ">
														<p class="mb-0 d-inline">Not Required</p>
													</div>
													<div class="marchart-box text-center px-2 d-inline-block LO">
														<p class="mb-0 d-inline">Left Out</p>
													</div>
													<div class="marchart-box text-center px-2 d-inline-block C ">
														<p class="mb-0 d-inline">Cancelled</p>
													</div>
													<div class="marchart-box text-center px-2 d-inline-block PR ">
														<p class="mb-0 d-inline">PRN</p>
													</div>
													<div class="marchart-box text-center px-2 d-inline-block has-visit">
														<p class="mb-0 d-inline">Missed</p>
													</div>
													<div class="marchart-box text-center px-2 d-inline-block O">
														<p class="mb-0 d-inline">Other</p>
													</div>
												</div>
												<div class="row">
													<div class="col-lg-12 col-md-12 col-sm-12 col-12 mt-4 mb-4">
														<div class="card inner-card">
															<div class="card-header d-flex flex-wrap align-items-center">
																<div class="content-card-left">
																	<h4 class="card-title medicine-name">IBJ</h4>
																</div>
																<a href="#" class="btn p-0 bg-custom-gradient ms-auto d-flex flex-wrap align-items-center justify-content-center rounded-circle card-header-circle font-14" @click.prevent="toggleUpload();">
																<i class="bi bi-eye-fill button-icon"></i>
																</a>
															</div>
															<div class="card-body marchart-body clearfix">
																<ul class="list-unstyle medicine-time d-inline-block float-start">
																	<li class="d-flex flex-wrap align-items-center day">
																		Date
																	</li>
																	<li class="d-flex flex-wrap align-items-center morning">
																		<i class="bi bi-brightness-high-fill morning"></i> Morning
																	</li>
																	<li class="d-flex flex-wrap align-items-center">
																		<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-sunset-fill lunch" viewBox="0 0 16 16">
																			<path d="M7.646 4.854a.5.5 0 0 0 .708 0l1.5-1.5a.5.5 0 0 0-.708-.708l-.646.647V1.5a.5.5 0 0 0-1 0v1.793l-.646-.647a.5.5 0 1 0-.708.708l1.5 1.5zm-5.303-.51a.5.5 0 0 1 .707 0l1.414 1.413a.5.5 0 0 1-.707.707L2.343 5.05a.5.5 0 0 1 0-.707zm11.314 0a.5.5 0 0 1 0 .706l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zM11.709 11.5a4 4 0 1 0-7.418 0H.5a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-3.79zM0 10a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 0 10zm13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
																		</svg>
																		Lunch
																	</li>
																	<li class="d-flex flex-wrap align-items-center">
																		<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-moon-stars-fill bed" viewBox="0 0 16 16">
																			<path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
																			<path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"/>
																		</svg>
																		Bed
																	</li>
																</ul>
																<div class="medicine-table float-start">
																	<table class="w-100">
																		<thead>
																			<tr class="d-flex align-items-center border-0">
																				<th v-for="week in weekDays" :key="week" class="weekdays">
																					{{week}}
																				</th>
																			</tr>
																			<tr class="d-flex align-items-center">
																				<th v-for="day in days" :key="day">
																					{{day}}
																				</th>
																			</tr>
																		</thead>
																		<tbody>
																			<tr class="d-flex align-items-center">
																				<td v-for="date in days" :key="date">
																					<span class="A text-capitalize text-center w-100 d-inline-block">a</span>
																				</td>
																			</tr>
																			<tr class="d-flex align-items-center">
																				<td class="R text-capitalize text-center" v-for="date in days" :key="date">
																					a
																				</td>
																			</tr>
																			<tr class="d-flex align-items-center">
																				<td class="NA text-capitalize text-center" v-for="date in days" :key="date">
																					a
																				</td>
																			</tr>
																		</tbody>
																	</table>
																</div>
															</div>
														</div>
													</div>
													<div class="col-lg-12 col-md-12 col-sm-12 col-12 mb-4">
														<div class="card inner-card">
															<div class="card-header d-flex flex-wrap align-items-center">
																<div class="content-card-left">
																	<h4 class="card-title medicine-name">IBJ</h4>
																</div>
																<a href="#" class="btn p-0 bg-custom-gradient ms-auto d-flex flex-wrap align-items-center justify-content-center rounded-circle card-header-circle font-14" @click.prevent="toggleUpload();">
																<i class="bi bi-eye-fill button-icon"></i>
																</a>
															</div>
															<div class="card-body marchart-body clearfix">
																<ul class="list-unstyle medicine-time d-inline-block float-start">
																	<li class="d-flex flex-wrap align-items-center day">
																		Date
																	</li>
																	<li class="d-flex flex-wrap align-items-center morning">
																		<i class="bi bi-brightness-high-fill morning"></i> Morning
																	</li>
																	<li class="d-flex flex-wrap align-items-center">
																		<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-sunset-fill lunch" viewBox="0 0 16 16">
																			<path d="M7.646 4.854a.5.5 0 0 0 .708 0l1.5-1.5a.5.5 0 0 0-.708-.708l-.646.647V1.5a.5.5 0 0 0-1 0v1.793l-.646-.647a.5.5 0 1 0-.708.708l1.5 1.5zm-5.303-.51a.5.5 0 0 1 .707 0l1.414 1.413a.5.5 0 0 1-.707.707L2.343 5.05a.5.5 0 0 1 0-.707zm11.314 0a.5.5 0 0 1 0 .706l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zM11.709 11.5a4 4 0 1 0-7.418 0H.5a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-3.79zM0 10a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 0 10zm13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
																		</svg>
																		Lunch
																	</li>
																	<li class="d-flex flex-wrap align-items-center">
																		<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-moon-stars-fill bed" viewBox="0 0 16 16">
																			<path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
																			<path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"/>
																		</svg>
																		Bed
																	</li>
																</ul>
																<div class="medicine-table float-start">
																	<table class="w-100">
																		<thead>
																			<tr class="d-flex align-items-center border-0">
																				<th v-for="week in weekDays" :key="week" class="weekdays">
																					{{week}}
																				</th>
																			</tr>
																			<tr class="d-flex align-items-center">
																				<th v-for="day in days" :key="day">
																					{{day}}
																				</th>
																			</tr>
																		</thead>
																		<tbody>
																			<tr class="d-flex align-items-center">
																				<td class="A text-capitalize text-center" v-for="date in days" :key="date">
																					a
																				</td>
																			</tr>
																			<tr class="d-flex align-items-center">
																				<td class="R text-capitalize text-center" v-for="date in days" :key="date">
																					a
																				</td>
																			</tr>
																			<tr class="d-flex align-items-center">
																				<td class="NA text-capitalize text-center" v-for="date in days" :key="date">
																					a
																				</td>
																			</tr>
																		</tbody>
																	</table>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="tab-pane active show" v-if="levelTab == 'daily-report'">
										<div class="card bg-transparent rounded-0 shadow-none">
											<div class="card-header d-flex flex-wrap align-items-center rouded-custom">
												<div class="content-card-left">
													<h4 class="card-title">Daily Reporting Visits</h4>
												</div>
											</div>
											<div class="card-header d-flex flex-wrap align-items-center rouded-custom">
												<div class="col-lg-4 col-md-5 col-sm-6 col-12">
													<div class="dropdown-custom ml-auto">
														<div class="dropdown position-relative rounded-dropdown">
															<button class="btn dropdown-toggle m-0 position-relative w-100 text-start d-flex flex-wrap align-items-center" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
															<span class="text-truncate d-inline-block">{{Dropdowntext}}</span>
															<i class="bi bi-chevron-down position-absolute"></i>
															</button>
															<ul class="dropdown-menu list-unstyled position-absolute" aria-labelledby="dropdownMenuButton">
																<li class="dropdown-item d-flex flex-wrap align-items-center" @click="textExchange($event)">
																	<span class="text-truncate">Initial Assesment (11/09/2020)</span>
																	<a href="#" class="p-0 d-inlin-block w-auto ms-auto bg-transparent shadow-none">
																	<i class="bi bi-trash"></i> 							
																	</a>
																</li>
																<li class="dropdown-item d-flex flex-wrap align-items-center" @click="textExchange($event)">
																	<span class="text-truncate">Amended Care plan (11/09/2020)</span>
																	<a href="#" class="p-0 d-inlin-block w-auto ms-auto bg-transparent shadow-none" @click.prevent="check()">
																	<i class="bi bi-trash"></i> 							
																	</a>
																</li>
															</ul>
														</div>
													</div>
												</div>
											</div>
											<div class="card-body">
											</div>
										</div>
										<div class="submit-footer text-end position-sticky">
											<button class="btn btn-submit">Submit Form</button>
										</div>
									</div>
									<div class="tab-pane active show" v-if="levelTab == 'review-form'">
										<div class="card bg-transparent rounded-0 shadow-none">
											<div class="card-header d-flex flex-wrap align-items-center rouded-custom">
												<div class="content-card-left">
													<h4 class="card-title">Review Form</h4>
												</div>
											</div>
											<div class="card-body">
												<form class="table-header mx-0 mt-1 mb-3">
													<div class="row m-0 align-items-center position-relative">
														<div class="col-xl-3 col-lg-4 col-md-3 col-sm-12 col-12 order-lg-1 order-md-1 order-sm-3 order-3 text-start mt-lg-0 mt-md-0 mt-sm-3 mt-3 pl-lg-0 px-small-custom">
															<div class="table-length">
																<label for="per-page-select" class="d-inline-block" id="__BVID__22__BV_label_">Results:</label>
																<select class="mx-2 form-select d-inline-block">
																	<option selected>1</option>
																	<option value="2">10</option>
																	<option value="3">15</option>
																</select>
															</div>
														</div>
														<div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 ps-0 order-lg-2 order-md-2 order-sm-1 order-1 ms-lg-auto ms-md-auto ms-sm-auto px-small-custom">
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
														<div class="col-xl-4 col-lg-5 col-md-5 col-sm-6 col-12 order-lg-3 order-md-3 order-sm-2 order-2 px-0 text-lg-end text-md-end text-sm-end mt-lg-0 mt-md-0 mt-sm-0 mt-3">
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
												</form>
												<div class="table-responsive mb-0">
													<table class="table custom-table table-user">
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
															<tr>
																<td><a href="#">Jhon Snow</a></td>
																<td>dummy@gmail.com</td>
																<td>Admin</td>
																<td>Carehub</td>
																<td>
																	<span class="status inactive d-inline-block text-center">Inactive</span>
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
															<tr>
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
															<tr>
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
															<tr>
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
															<tr>
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
															<tr>
																<td><a href="#">Jhon Snow</a></td>
																<td>dummy@gmail.com</td>
																<td>Admin</td>
																<td>Carehub</td>
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
																	<span class="status inactive d-inline-block text-center">Inactive</span>
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
											</div>
										</div>
										<div class="submit-footer text-end position-sticky">
											<button class="btn btn-submit">Submit Form</button>
										</div>
									</div>
									<div class="tab-pane active show" v-if="levelTab == 'uploads'">
										<div class="card bg-transparent rounded-0 shadow-none">
											<div class="card-header d-flex flex-wrap align-items-center rouded-custom">
												<div class="content-card-left">
													<h4 class="card-title">Uploads</h4>
												</div>
											</div>
											<div class="card-body">
											</div>
										</div>
										<div class="submit-footer text-end position-sticky">
											<button class="btn btn-submit">Submit Form</button>
										</div>
									</div>
									<div class="tab-pane active show" v-if="levelTab == 'checkbox-multiple'">
										<div class="card bg-transparent rounded-0 shadow-none">
											<div class="card-header d-flex flex-wrap align-items-center rouded-custom">
												<div class="content-card-left">
													<h4 class="card-title">Checkbox Multiple</h4>
												</div>
											</div>
											<div class="card-body">
												<form class="custom-form">
													<!-- RadioBox with 3 data and second text is long -->
													<div class="card inner-card px-0 mb-4">
														<div class="card-body meal-card clearfix">
															<div class="row border-bottom-custom">
																<div class="custom-col-7 col-lg-7 col-md-6 col-sm-6 col-12">
																	<h4 class="inner-heading m-0 p-0">Performance Factor</h4>
																</div>
																<div class="custom-col-5 col-lg-5 col-md-6 col-sm-6 d-lg-block d-md-block d-sm-none d-none">
																	<ul class="list-unstyled m-0 checklist-schedule radio-schedule-long-3 radio-second-long">
																		<li class="d-inline-block inner-heading p-0 mb-0">Met</li>
																		<li class="d-inline-block inner-heading p-0 mb-0">Requires improvements</li>
																		<li class="d-inline-block inner-heading p-0 mb-0">Not Met</li>
																	</ul>
																</div>
															</div>
															<div class="row border-bottom-custom align-items-center mt-2">
																<div class="custom-col-7 col-lg-7 col-md-6 col-sm-12 col-12 pe-2">
																	<p class="heading mb-0">
																		Company Procedures 
																		<span class="d-block">
																			Adheres to the organisation values and guidelines and code of conduct.
																		</span>
																	</p>
																</div>
																<div class="custom-col-5 col-lg-5 col-md-6 col-sm-12 col-12 checklist-schedule-checkbox radio-schedule-long-3 radio-second-long">
																	<ul class="list-unstyled m-0 checklist-schedule radio-schedule-long-3 radio-second-long d-lg-none d-md-none d-sm-block d-block mt-3">
																		<li class="d-inline-block inner-heading p-0 mb-0 text-custom-center">Met</li>
																		<li class="d-inline-block inner-heading p-0 mb-0 text-custom-center">Requires improvements</li>
																		<li class="d-inline-block inner-heading p-0 mb-0 text-custom-center">Not Met</li>
																	</ul>
																	<div class="form-check form-check-inline text-custom-center">
																		<input class="form-check-input p-0 ms-0" type="radio" name="weeks" value="yes" id="mon" >
																	</div>
																	<div class="form-check form-check-inline text-custom-center">
																		<input class="form-check-input p-0 ms-0" type="radio" name="weeks" value="yes" id="tue" >
																	</div>
																	<div class="form-check form-check-inline text-custom-center">
																		<span class="d-xs-430 mt-2 pb-1">Not Met</span>
																		<input class="form-check-input p-0 ms-0" type="radio" name="weeks" value="yes" id="wed" >
																	</div>
																</div>
															</div>
														</div>
													</div>
													<!-- RadioBox with 3 data -->
													<div class="card inner-card px-0 mb-4">
														<div class="card-body meal-card clearfix">
															<div class="row border-bottom-custom">
																<div class="col-xl-7 col-lg-6 col-md-6 col-sm-5 col-12">
																	<h4 class="inner-heading m-0 p-0">My Office Manager/Care Manager</h4>
																</div>
																<div class="col-xl-5 col-lg-6 col-md-6 col-sm-7 d-lg-block d-md-block d-sm-block d-none">
																	<ul class="list-unstyled m-0 checklist-schedule radio-schedule-3">
																		<li class="d-inline-block inner-heading p-0 mb-0">Strongly Agree</li>
																		<li class="d-inline-block inner-heading p-0 mb-0">Agree</li>
																		<li class="d-inline-block inner-heading p-0 mb-0">Dis Agree</li>
																	</ul>
																</div>
															</div>
															<div class="row border-bottom-custom align-items-center mt-2">
																<div class="col-xl-7 col-lg-6 col-md-6 col-sm-5 col-12 pe-2">
																	<p class="heading mb-0">
																		My Manager Communicates Well With Me
																	</p>
																</div>
																<div class="col-xl-5 col-lg-6 col-md-6 col-sm-7 col-12 checklist-schedule-checkbox radio-schedule-3">
																	<ul class="list-unstyled m-0 checklist-schedule radio-schedule-3 d-lg-none d-md-none d-sm-none d-block mt-3">
																		<li class="d-inline-block inner-heading p-0 mb-0 text-center">Strongly Agree</li>
																		<li class="d-inline-block inner-heading p-0 mb-0 text-center">Agree</li>
																		<li class="d-inline-block inner-heading p-0 mb-0 text-center">Dis Agree</li>
																	</ul>
																	<div class="form-check form-check-inline text-center pt-lg-0 pt-md-0 pt-sm-0 pt-2 mw-100">
																		<input class="form-check-input p-0 ms-0" type="radio" name="aggrement" value="yes" id="mon" >
																	</div>
																	<div class="form-check form-check-inline text-center pt-lg-0 pt-md-0 pt-sm-0 pt-2">
																		<input class="form-check-input p-0 ms-0" type="radio" name="aggrement" value="yes" id="tue" >
																	</div>
																	<div class="form-check form-check-inline text-center pt-lg-0 pt-md-0 pt-sm-0 pt-2">
																		<input class="form-check-input p-0 ms-0" type="radio" name="aggrement" value="yes" id="wed" >
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div class="card inner-card px-0">
														<div class="card-body meal-card clearfix">
															<div class="row border-bottom-custom">
																<div class="col-lg-7 col-md-6 col-sm-6 col-9">
																	<h4 class="inner-heading m-0 p-0">Personal Care</h4>
																</div>
																<div class="col-lg-5 col-md-6 col-sm-6 d-lg-block d-md-block d-sm-block d-none">
																	<ul class="list-unstyled m-0 checklist-schedule">
																		<li class="d-inline-block inner-heading p-0 mb-0">Morning</li>
																		<li class="d-inline-block inner-heading p-0 mb-0">Lunch</li>
																		<li class="d-inline-block inner-heading p-0 mb-0">Tea</li>
																		<li class="d-inline-block inner-heading p-0 mb-0">Bed</li>
																	</ul>
																</div>
															</div>
															<div class="row border-bottom-custom align-items-center mt-2">
																<div class="col-lg-7 col-md-6 col-sm-6 col-9 pe-2">
																	<p class="heading mb-0">Body Wash / Bed Bath</p>
																</div>
																<div class="col-lg-5 col-md-6 col-sm-6 col-12 checklist-schedule-checkbox">
																	<ul class="list-unstyled m-0 checklist-schedule d-lg-none d-md-none d-sm-none d-block mt-3">
																		<li class="d-inline-block inner-heading p-0 mb-0">Morning</li>
																		<li class="d-inline-block inner-heading p-0 mb-0">Lunch</li>
																		<li class="d-inline-block inner-heading p-0 mb-0">Tea</li>
																		<li class="d-inline-block inner-heading p-0 mb-0">Bed</li>
																	</ul>
																	<div class="form-check form-check-inline">
																		<input class="form-check-input p-0 ms-0" type="checkbox" value="yes" id="mon" >
																	</div>
																	<div class="form-check form-check-inline">
																		<input class="form-check-input p-0 ms-0" type="checkbox" value="yes" id="tue" >
																	</div>
																	<div class="form-check form-check-inline">
																		<input class="form-check-input p-0 ms-0" type="checkbox" value="yes" id="wed" >
																	</div>
																	<div class="form-check form-check-inline">
																		<input class="form-check-input p-0 ms-0" type="checkbox" value="yes" id="thu">
																	</div>
																</div>
															</div>
														</div>
													</div>
													<!-- checkbox with 5 data  -->
													<div class="card inner-card px-0 mt-4">
														<div class="card-body meal-card clearfix">
															<div class="row border-bottom-custom">
																<div class="col-lg-4 col-md-4 col-sm-4 col-9">
																	<h4 class="inner-heading m-0 p-0">Personal Care</h4>
																</div>
																<div class="col-lg-8 col-md-8 col-sm-8 d-lg-block d-md-block d-sm-block d-none">
																	<ul class="list-unstyled m-0 checklist-schedule checklist-schedule-5">
																		<li class="d-inline-block inner-heading p-0 mb-0">Morning</li>
																		<li class="d-inline-block inner-heading p-0 mb-0">Lunch</li>
																		<li class="d-inline-block inner-heading p-0 mb-0">Tea</li>
																		<li class="d-inline-block inner-heading p-0 mb-0">Bed</li>
																		<li class="d-inline-block inner-heading p-0 mb-0">Over Night Sevice</li>
																	</ul>
																</div>
															</div>
															<div class="row border-bottom-custom align-items-center mt-2">
																<div class="col-lg-4 col-md-4 col-sm-4 col-9 pe-2">
																	<p class="heading mb-0">Body Wash / Bed Bath</p>
																</div>
																<div class="col-lg-8 col-md-8 col-sm-8 col-12 checklist-schedule-checkbox checklist-schedule-5">
																	<ul class="list-unstyled m-0 checklist-schedule checklist-schedule-5 d-lg-none d-md-none d-sm-none d-block mt-3">
																		<li class="d-inline-block inner-heading p-0 mb-0">Morning</li>
																		<li class="d-inline-block inner-heading p-0 mb-0">Lunch</li>
																		<li class="d-inline-block inner-heading p-0 mb-0">Tea</li>
																		<li class="d-inline-block inner-heading p-0 mb-0">Bed</li>
																		<li class="d-inline-block inner-heading p-0 mb-0">Over Night Sevice</li>
																	</ul>
																	<div class="form-check form-check-inline">
																		<input class="form-check-input p-0 ms-0" type="checkbox" value="yes" id="mon" >
																	</div>
																	<div class="form-check form-check-inline">
																		<input class="form-check-input p-0 ms-0" type="checkbox" value="yes" id="tue" >
																	</div>
																	<div class="form-check form-check-inline">
																		<input class="form-check-input p-0 ms-0" type="checkbox" value="yes" id="wed" >
																	</div>
																	<div class="form-check form-check-inline">
																		<input class="form-check-input p-0 ms-0" type="checkbox" value="yes" id="thu">
																	</div>
																	<div class="form-check form-check-inline">
																		<h4 class="checkbox-xss-5 inner-heading p-0 mb-0">Over Night Sevice</h4>
																		<input class="form-check-input p-0 ms-0" type="checkbox" value="yes" id="thu">
																	</div>
																</div>
															</div>
														</div>
													</div>
												</form>
											</div>
										</div>
										<div class="submit-footer text-end position-sticky">
											<button class="btn btn-submit">Submit Form</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
		<!-- Right Side Content -->
		<div class="side-client-medication position-fixed">
			<div class="side-client-overlay position-absolute" @click.prevent="toggleUpload();"></div>
			<div :class="[side_inner ? 'side-client-hide': '', 'side-content position-absolute']">
				<div class="side-header d-flex flex-wrap align-items-center">
					<h4 class="mb-0">Medication Details</h4>
					<i class="d-inline-block ms-auto bi bi-x" @click.prevent="toggleUpload();"></i>
				</div>
				<div class="side-body">
					<ul class="list-unstyled client-medicine">
						<li>
							<span class="label">Description:</span>
							<span class="medicine-detail">Ibu Profen Gel</span>
						</li>
						<li>
							<span class="label">Self Aister:</span>
							<span class="medicine-detail">Ibu Profen Gel</span>
						</li>
						<li>
							<span class="label">PRN Medication:</span>
							<span class="medicine-detail">Ibu Profen Gel</span>
						</li>
						<li>
							<span class="label">Medication Date:</span>
							<span class="medicine-detail">Ibu Profen Gel</span>
						</li>
						<li>
							<span class="label">Medication End Date:</span>
							<span class="medicine-detail">Ibu Profen Gel</span>
						</li>
						<li>
							<span class="label">Medication Days:</span>
							<span class="medicine-detail">Mon, Tue, Wed, Thu, Fri, Sat Sun</span>
						</li>
						<li>
							<span class="label">Instructions:</span>
						</li>
					</ul>
				</div>
				
			</div>
		</div>
	</div>
</template>
<script>
	// importing sidebar Component
	import sidebar from "../components/sidebar";
	import navbar from "../components/nav.vue";
	import "../scss/pages/_clients.scss";
	export default {
	  components: {
	    sidebar: sidebar,
	    navbar: navbar
	  },
	  data() {
	    return {
	           levelTab:['profile'],
	           totalScore:8,
	           calculateScore: "",
	           days:31,
			   side_inner:false,
			   smalltabs:'am',
			   weekDays: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We'],
			   Dropdowntext:'Amended Care Plan (30/12/2020)',
			   customDropdown:false 
	    };
	  },
	  setup() {
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
				range
			}
	  },
	  methods: {
		toggleLevel(e) {
		let activeLi =  e.currentTarget.parentNode;
		let deleteActive = e.currentTarget.parentNode.parentNode.children;
		deleteActive.forEach(node=>{
			if(node != activeLi) {
				if(node.classList.contains("show")) {
					node.classList.remove("show"); 
					node.children[0].classList.remove("active");
				}
				else {
					node.children[0].classList.remove("active");
				}
			}
		});
		activeLi.classList.toggle("show");
		let currentActive = e.currentTarget;
		currentActive.classList.add("active");
		},
		levelChild(e) {
			let deleteActive = document.querySelectorAll(".level li > button");
			deleteActive.forEach(node => {
				node.classList.remove("active");
			});
			let active = e.currentTarget.parentNode.lastChild.firstChild.lastChild;
			active.classList.add("active");
			
		},
		toggleActive(e) {
		let levelSecond = document.querySelectorAll('.level-second li > button');
		levelSecond.forEach(node => {
			node.classList.remove("active");
		})
		e.currentTarget.classList.add("active");
		},
		threeLevel(e) {
			let deleteChildrenShow = e.currentTarget.parentNode.lastChild.children;
			deleteChildrenShow.forEach(node=> {
				if(node.classList.contains("show")) {
					node.classList.remove("show");
				}
			})
			let deleteActiveClass = document.querySelectorAll('.level-second li > button');
			deleteActiveClass.forEach(node=> {
				node.classList.remove("active");
			})
			let activefirstChild = e.currentTarget.parentNode.lastChild.firstChild;
			if(!activefirstChild.classList.contains("show")) {
				activefirstChild.classList.add("show");
				activefirstChild.firstChild.classList.add("active");
				activefirstChild.lastChild.firstChild.firstChild.classList.add("active");
			}
		},
		toggletwolevel(e) {
			let deleteChildActive = e.currentTarget.parentNode.lastChild.children;
			deleteChildActive.forEach(node=> {
				if(node.firstChild.classList.contains("active")) {
					node.firstChild.classList.remove("active");
				}
			})
			deleteChildActive[0].firstChild.classList.add("active");
		},
		levelTwoChild(e) {
			let childParent = e.currentTarget.parentNode.parentNode.parentNode.firstChild;
			childParent.classList.add("active");
		},
		toggleUpload() {
		var btn_toggler = document.querySelector('.side-client-medication');
		var body_overflow = document.querySelector('body');
		if (btn_toggler.classList.contains('side-upload-show')) {
				this.side_inner = true;
				body_overflow.classList.remove('overflow');
				setTimeout(function(){
					btn_toggler.classList.remove('side-upload-show');
				}, 300);
			}
		else {
			this.side_inner=false;
			body_overflow.classList.add('overflow');
			btn_toggler.classList.add('side-upload-show');
		}
		},
		textExchange(e) {
			let text = e.currentTarget.firstChild.innerHTML;
			this.Dropdowntext = text;
		}
	  },
	     mounted() {
	         this.calculateScore = "calc(560 - (-560 *" + this.totalScore + ") / 28)";
	     }
	};
</script>