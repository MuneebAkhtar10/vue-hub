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
							<div class="col-lg-4 col-md-4 col-sm-6 col-12 mb-lg-0 mb-md-0 mb-sm-0 mb-3">
								<div class="card bg-white border-0 h-100 mb-0">
									<div class="card-header bg-white d-flex flex-wrap align-items-center border-0">
										<h4 class="card-title d-inline-block border-custom">Info</h4>
										<a href="#" class="btn p-0 rounded-circle btn-gradient ms-auto">
											<i class="bi bi-pencil-square"></i>
										</a>
									</div>
									<div class="card-body bg-white">
										<div class="user-info mt-2 text-center">
											<img src="../images/profile/user-image.png" alt="User_image">
											<h3 class="my-3">Jimmy Carter</h3>
										</div>
										<div class="user-info-list my-4">
											<ul class="list-unstyled">
												<li class="d-flex flex-wrap align-items-center justify-content-center">
													<i class="bi bi-envelope"></i>
													<span class="d-inline-block text-truncate">
													<a href="mailto:jimmy@gmail.com">Jimmy@gmail.com</a>
													</span>
												</li>
												<li class="d-flex flex-wrap align-items-center justify-content-center">
													<i class="bi bi-calendar-week"></i>
													<span class="d-inline-block ">Jan 20, 1981</span>
												</li>
												<li class="d-flex flex-wrap align-items-center justify-content-center">
													<i class="bi bi-geo-alt"></i>
													<span class="d-inline-block ">New York, USA</span>
												</li>
												<li class="d-flex flex-wrap align-items-center justify-content-center">
													<i class="bi bi-telephone"></i>
													<span class="d-inline-block ">
													+1 (530) 555-12121
													</span>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<!-- Bio Data -->
							<div class="col-lg-8 col-md-8 col-sm-6 col-12">
								<div class="card bg-white border-0 h-100 mb-0 card-height-md">
									<div class="card-header bg-white d-flex flex-wrap align-items-center border-0">
										<h4 class="card-title d-inline-block border-custom">Bio</h4>
									</div>
									<div class="card-body bg-white">
										<div class="row m-0">
											<div class="col-xl-6 col-lg-6 col-md-6 col-12 mb-2">
												<div class="card bg-white border-0 h-100 card-height-md">
													<div class="card-header bg-white d-flex flex-wrap align-items-center border-0 pb-0">
														<h5 class="card-title d-inline-block">
															<a href="#">Past &amp; Present</a>
														</h5>
														<a href="#" class="btn p-0 rounded-circle btn-gradient medium-circle ms-auto">
															<i class="bi bi-pencil-square"></i>
														</a>
													</div>
													<div class="card-body bg-white">
														<div class="bio">
															<p>
																<div>
																	<p>-Stoma - A colostomy is a surgical procedure in which an opening (stoma) is formed by drawing the healthy end of the large intestine or colon through...
																	</p>
																</div>
															</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<!-- Medication Data -->
							<div class="col-lg-4 col-md-4 col-sm-12 col-12 my-3">
								<div class="card bg-white border-0 mb-0 card-height-md">
									<div class="card-header bg-white d-flex flex-wrap align-items-center border-0">
										<h4 class="card-title d-inline-block border-custom">Medication</h4>
										<a href="#" class="btn p-0 rounded-circle btn-gradient ms-auto card-collapse d-flex align-items-center justify-content-center" @click.prevent="collapseCard($event)">
											<i class="bi bi-eye-fill"></i>
										</a>
									</div>
									<div class="card-body bg-white custom-padding height-content">
										<div class="custom-accordion accordion row collapse" id="medicationAccordion">
											<div class="col-12 mb-3">
												<div class="accordion-item accordion-gray-btn btn p-0 w-100">
													<button class="btn bg-transparent accordion-button w-100 clearfix collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#medicationOne" aria-expanded="true" aria-controls="medicationOne">
													<span class="d-inline-block text-truncate">Medication 1</span>
													<i class="bi bi-chevron-down float-end"></i>
													</button>
													<div id="medicationOne" class="accordion-collapse custom-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#medicationAccordion">
														<div class="accordion-body">
                              <ul class="medication">
												        <li class="d-flex">
												          <span class="label d-inline-block">Due Date:</span>
												          <span class="date d-inline-block">19 Feb, 2019</span>
												        </li>
												        <li class="d-flex">
												          <span class="label d-inline-block">Expire Date:</span>
												          <span class="date d-inline-block">19 Feb, 2019</span>
												        </li>
												      </ul>
														</div>
													</div>
												</div>
											</div>
											<div class="col-12 mb-3">
												<div class="accordion-item accordion-gray-btn btn p-0 w-100">
																			<button class="btn bg-transparent accordion-button w-100 clearfix collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#medicationTwo" aria-expanded="false" aria-controls="medicationTwo">
													<span class="d-inline-block text-truncate">Medication 2</span>
													<i class="bi bi-chevron-down float-end"></i>
																			</button>
												<div id="medicationTwo" class="accordion-collapse custom-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#medicationAccordion">
													<div class="accordion-body">
													<ul class="medication">
																				<li class="d-flex">
																				<span class="label d-inline-block">Due Date:</span>
																				<span class="date d-inline-block">19 Feb, 2019</span>
																				</li>
																				<li class="d-flex">
																				<span class="label d-inline-block">Expire Date:</span>
																				<span class="date d-inline-block">19 Feb, 2019</span>
																				</li>
																			</ul>
																				</div>
												</div>
												</div>
											</div>
											<div class="col-12 mb-3">
												<div class="accordion-item accordion-gray-btn btn p-0 w-100">
																			<button class="btn bg-transparent accordion-button w-100 clearfix collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#medicationThree" aria-expanded="false" aria-controls="medicationTwo">
													<span class="d-inline-block text-truncate">Medication 3</span>
													<i class="bi bi-chevron-down float-end"></i>
																			</button>
												<div id="medicationThree" class="accordion-collapse custom-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#medicationAccordion">
													<div class="accordion-body">
													<ul class="medication">
																				<li class="d-flex">
																				<span class="label d-inline-block">Due Date:</span>
																				<span class="date d-inline-block">19 Feb, 2019</span>
																				</li>
																				<li class="d-flex">
																				<span class="label d-inline-block">Expire Date:</span>
																				<span class="date d-inline-block">19 Feb, 2019</span>
																				</li>
																			</ul>
																				</div>
												</div>
												</div>
											</div>
											<div class="col-12 mb-3">
												<div class="accordion-item accordion-gray-btn btn p-0 w-100">
																			<button class="btn bg-transparent accordion-button w-100 clearfix collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#medicationFour" aria-expanded="false" aria-controls="medicationTwo">
													<span class="d-inline-block text-truncate">Medication 4</span>
													<i class="bi bi-chevron-down float-end"></i>
																			</button>
												<div id="medicationFour" class="accordion-collapse custom-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#medicationAccordion">
													<div class="accordion-body">
													<ul class="medication">
																				<li class="d-flex">
																				<span class="label d-inline-block">Due Date:</span>
																				<span class="date d-inline-block">19 Feb, 2019</span>
																				</li>
																				<li class="d-flex">
																				<span class="label d-inline-block">Expire Date:</span>
																				<span class="date d-inline-block">19 Feb, 2019</span>
																				</li>
																			</ul>
																				</div>
												</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<!-- Medication Data -->
							<div class="col-lg-8 col-md-8 col-sm-12 col-12 my-3">
								<div class="card bg-white border-0 mb-0 card-height-md">
									<div class="card-header bg-white d-flex flex-wrap align-items-center border-0">
										<h4 class="card-title d-inline-block border-custom">Medication</h4>
										<a href="#" class="btn p-0 rounded-circle btn-gradient ms-auto card-collapse d-flex align-items-center justify-content-center" @click.prevent="collapseCard($event)">
											<i class="bi bi-eye-fill"></i>
										</a>
									</div>
									<div class="card-body bg-white custom-padding">
										<div class="custom-accordion accordion row collapse" id="medicationAccordion">
											<div class="col-12 mb-3">
												<div class="accordion-item accordion-gray-btn btn p-0 w-100">
													<button class="btn bg-transparent accordion-button w-100 clearfix collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#medicationOne" aria-expanded="true" aria-controls="medicationOne">
													<span class="d-inline-block text-truncate">Medication 1</span>
													<i class="bi bi-chevron-down float-end"></i>
													</button>
													<div id="medicationOne" class="accordion-collapse custom-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#medicationAccordion">
														<div class="accordion-body">
                              <ul class="medication">
												        <li class="d-flex">
												          <span class="label d-inline-block">Due Date:</span>
												          <span class="date d-inline-block">19 Feb, 2019</span>
												        </li>
												        <li class="d-flex">
												          <span class="label d-inline-block">Expire Date:</span>
												          <span class="date d-inline-block">19 Feb, 2019</span>
												        </li>
												      </ul>
														</div>
													</div>
												</div>
											</div>
											<div class="col-12 mb-3">
												<div class="accordion-item accordion-gray-btn btn p-0 w-100">
																			<button class="btn bg-transparent accordion-button w-100 clearfix collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#medicationTwo" aria-expanded="false" aria-controls="medicationTwo">
													<span class="d-inline-block text-truncate">Medication 2</span>
													<i class="bi bi-chevron-down float-end"></i>
																			</button>
												<div id="medicationTwo" class="accordion-collapse custom-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#medicationAccordion">
													<div class="accordion-body">
													<ul class="medication">
																				<li class="d-flex">
																				<span class="label d-inline-block">Due Date:</span>
																				<span class="date d-inline-block">19 Feb, 2019</span>
																				</li>
																				<li class="d-flex">
																				<span class="label d-inline-block">Expire Date:</span>
																				<span class="date d-inline-block">19 Feb, 2019</span>
																				</li>
																			</ul>
																				</div>
												</div>
												</div>
											</div>
											<div class="col-12 mb-3">
												<div class="accordion-item accordion-gray-btn btn p-0 w-100">
																			<button class="btn bg-transparent accordion-button w-100 clearfix collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#medicationThree" aria-expanded="false" aria-controls="medicationTwo">
													<span class="d-inline-block text-truncate">Medication 3</span>
													<i class="bi bi-chevron-down float-end"></i>
																			</button>
												<div id="medicationThree" class="accordion-collapse custom-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#medicationAccordion">
													<div class="accordion-body">
													<ul class="medication">
																				<li class="d-flex">
																				<span class="label d-inline-block">Due Date:</span>
																				<span class="date d-inline-block">19 Feb, 2019</span>
																				</li>
																				<li class="d-flex">
																				<span class="label d-inline-block">Expire Date:</span>
																				<span class="date d-inline-block">19 Feb, 2019</span>
																				</li>
																			</ul>
																				</div>
												</div>
												</div>
											</div>
											<div class="col-12 mb-3">
												<div class="accordion-item accordion-gray-btn btn p-0 w-100">
																			<button class="btn bg-transparent accordion-button w-100 clearfix collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#medicationFour" aria-expanded="false" aria-controls="medicationTwo">
													<span class="d-inline-block text-truncate">Medication 4</span>
													<i class="bi bi-chevron-down float-end"></i>
																			</button>
												<div id="medicationFour" class="accordion-collapse custom-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#medicationAccordion">
													<div class="accordion-body">
													<ul class="medication">
																				<li class="d-flex">
																				<span class="label d-inline-block">Due Date:</span>
																				<span class="date d-inline-block">19 Feb, 2019</span>
																				</li>
																				<li class="d-flex">
																				<span class="label d-inline-block">Expire Date:</span>
																				<span class="date d-inline-block">19 Feb, 2019</span>
																				</li>
																			</ul>
																				</div>
												</div>
												</div>
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
	// importing sidebar Component
	import sidebar from "../components/sidebar";
	import navbar from "../components/nav.vue";
	import "../scss/pages/_profile.scss";
	export default {
	  components: {
	    sidebar: sidebar,
	    navbar: navbar
	  },
	  data() {
	    return {
	    };
	  },
	  methods: {
		  collapseCard(e) {
			let a = e.currentTarget.parentNode.parentNode.children[1];
			if(a.classList.contains("card-body")) {
				a.classList.toggle("show");
			}
		  }
	  }
	};
</script>