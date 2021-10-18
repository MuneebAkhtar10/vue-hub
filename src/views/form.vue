<template>
	<div class="home">
		<!-- SideBar Component -->
		<sidebar />
		<div class="main-content">
			<!-- nav component start here -->
			<navbar />
			<!-- Inner Content -->
			<div class="inner-content">
				<section>
					<div class="container-fluid mw-1600">
						<div class="row">
							<div cols="12">
								<div class="card bg-white border-0">
									<div class="card-header bg-white d-flex flex-wrap align-items-center">
										<div class="content-card-left">
											<h4 class="card-title">Range Slider</h4>
										</div>
									</div>
									<div class="card-body bg-white">
										<div class="row">
											<div class="col-12 px-3 pb-lg-4 pb-md-4 pb-sm-4">
												<div class="position-relative form-group icon-right">
													<label for="">Select Time</label>
													<vue-slider
														ref="slider"
														v-model="value1"
														v-bind="sliderOptions"
														class="custom-slider mt-2"
													></vue-slider>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="card bg-transparent border-0">
									<div class="card-header bg-white d-flex flex-wrap align-items-center">
										<div class="content-card-left">
											<h4 class="card-title">Forms</h4>
										</div>
									</div>
									<div class="card-body bg-white">
										<form class="custom-form">
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
														<textarea class="form-control" id="exampleFormControlTextarea1" rows="3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nostrum harum alias temporibus eius in molestiae mollitia assumenda quidem aliquam, architecto dolor excepturi praesentium dolorum impedit magnam. Quas pariatur ratione illum asperiores veniam error nisi provident excepturi consectetur, obcaecati eius ipsa, quam maxime deserunt non adipisci quae minus repudiandae, ducimus molestiae nam. Officia optio debitis nostrum magnam dicta aut nihil ex eveniet cumque, itaque, facilis iusto modi? Nam exercitationem eos alias fugiat assumenda debitis perferendis explicabo repellat voluptatum deleniti provident placeat necessitatibus aliquid ipsum, impedit quisquam quidem quo totam aperiam iusto vitae incidunt similique quas! Voluptatem, numquam ratione aliquid culpa libero molestias amet? Reprehenderit voluptate architecto quo deserunt voluptates, ipsa odit explicabo aspernatur vitae! Inventore temporibus consequuntur excepturi, eligendi officia sit asperiores praesentium, dolores voluptas labore fuga mollitia dignissimos rerum? Fuga fugit nam pariatur mollitia expedita facere rem iste voluptate libero, non voluptatem deserunt incidunt iusto, nesciunt minima consequatur rerum, voluptates impedit eum. Vel natus obcaecati molestias rerum inventore, doloribus perspiciatis quia labore officiis itaque deleniti doloremque hic. Sequi eligendi quibusdam amet qui ducimus! Aperiam officiis amet nobis, assumenda voluptas consectetur, temporibus dolore incidunt veritatis exercitationem dicta in commodi vero iure, saepe rerum. Laborum vel adipisci officia esse fugiat quis ipsam, qui perspiciatis cum, amet dicta temporibus! Dolores consectetur illum vitae eius, sit voluptates blanditiis vero natus fugit debitis rem accusantium eligendi, porro ducimus omnis asperiores odit in. Perspiciatis eaque repudiandae vero error eius inventore soluta totam quaerat pariatur asperiores quisquam adipisci a magni, tempora odit laborum? Odio deleniti molestias omnis quidem sed officiis? Aut doloremque et consectetur natus dolore voluptates, autem reiciendis sit repellat quis quisquam officia laudantium culpa numquam obcaecati facere nobis inventore commodi? Ab, nobis nisi sequi iusto beatae est accusamus nam mollitia nemo, numquam dolore fugit cumque dolorum amet repellat inventore velit sint distinctio laudantium et, culpa praesentium perspiciatis veniam. Dolore, aspernatur fugiat obcaecati beatae unde iure hic velit placeat dicta facilis illum magnam laboriosam qui asperiores aliquam recusandae soluta corrupti cum voluptatibus similique exercitationem non? Optio ea aliquam neque expedita dolore minus officia cumque molestiae corporis nulla, eligendi voluptatum amet labore harum ullam reprehenderit iusto fugiat, quaerat beatae provident unde voluptate, quam dignissimos commodi! Velit qui officiis dolor. Explicabo aliquam ipsum, consequuntur placeat et odit mollitia aspernatur quisquam, nostrum culpa temporibus. Nihil consectetur aliquid rem in facere autem officiis voluptas quisquam hic dolorem, sint reiciendis! Quia minus tempora ducimus nostrum aut sunt omnis in modi nisi dolorem, at explicabo dolor fugiat deserunt inventore itaque veritatis ratione? Architecto quod animi aperiam debitis, harum iure? Magni dolore eos eum perspiciatis enim, alias dolorum deserunt placeat hic sit, voluptate eligendi? Adipisci ut natus animi. Ullam quibusdam recusandae ipsam esse, iure quaerat modi illo sit dolores aperiam eligendi libero aspernatur adipisci porro culpa quidem sed incidunt. Mollitia perferendis vitae eius quia impedit, velit sed omnis rem non consequatur nesciunt eos quos dicta, necessitatibus maiores totam facere? Ad ea id aliquid dolorem animi blanditiis qui nesciunt aliquam. Deserunt quibusdam veritatis modi assumenda quae ea ab. Quis nobis libero pariatur dolore quod enim vero architecto? Fuga quidem voluptatem non corporis aliquid ut minima incidunt distinctio expedita, inventore eligendi, laudantium eius. Suscipit eaque ad laudantium magni necessitatibus! Modi culpa hic cupiditate saepe quis ratione corporis doloremque, obcaecati consequatur quos, odio dolores, quaerat amet perferendis nisi tempore aliquam a ab! Nihil deleniti libero, accusamus qui nam omnis dolorem cupiditate et suscipit consectetur, tenetur, nesciunt officiis mollitia voluptatum provident voluptatem. Est, incidunt, sit facere dicta reiciendis similique accusamus nulla quaerat veritatis numquam unde, ad natus quae! Maxime cupiditate voluptatem quas unde culpa voluptates a consequatur sunt perspiciatis magnam sit repellat earum pariatur reprehenderit rem, nulla, consequuntur harum doloribus aut hic ullam. Nihil labore suscipit quis sit vitae eius. Fugiat illo, vero assumenda, ex consectetur ipsam, qui repudiandae dignissimos numquam error atque voluptates. Sunt consequatur fugiat expedita sapiente aliquid illum dolores tempora aliquam rem debitis, facere minima at maiores. Deserunt laborum voluptates voluptatibus nisi amet! Cupiditate vitae debitis, officiis qui impedit soluta reiciendis culpa dolor laudantium ad enim doloremque, nisi fuga quia odio quas quisquam, sapiente id? Commodi, eveniet. Debitis non, ducimus, distinctio nobis autem dolorem architecto obcaecati sequi nemo magni corporis laborum unde recusandae, minus veritatis. Ut quod ad architecto modi eum maiores, natus consectetur et omnis illum sint dicta necessitatibus iure aliquid officiis sapiente facere ipsum incidunt at. Dolore laborum aut, doloremque, dignissimos veniam vero atque aperiam enim nihil libero qui cumque ipsum velit reiciendis quisquam nisi. Voluptatum exercitationem natus optio voluptates nisi explicabo nulla veniam vel libero facere velit iure id reiciendis nesciunt molestias nemo laboriosam mollitia, aperiam ducimus. Inventore ad asperiores, eligendi labore, quisquam quod doloremque doloribus nulla accusamus dolorem exercitationem illum ipsa id fugiat perspiciatis culpa laboriosam fuga modi rem adipisci laudantium? Vel tenetur eligendi, commodi optio distinctio alias saepe ullam incidunt nam eum doloribus deleniti itaque, eius cupiditate pariatur.</textarea>
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
														<label for="">Multiple Select</label>
														<Multiselect 
															v-model="value"
															mode="multiple" 
															:options="options"
															class="custom-multiselect"
															placeholder="Select &amp; Search your Multiple Value"
															:searchable="true"
															/>
													</div>
												</div>
												<div class="col-lg-3 col-md-3 col-sm-6 col-12 px-3" >
													<div class="position-relative form-group ">
														<Multiselect
															v-model="example4.value"
															v-bind="example4"
															class="custom-multiselect multiselect-tag"
															></Multiselect>
													</div>
												</div>
												<div class="col-lg-2 col-md-2 col-sm-6 col-12 px-3" >
													<div class="position-relative form-group ">
														<label for="" class="d-block mb-3">Upload Image Here</label>
														<input type="file" name="" id="upload" hidden @change="fileUpload">
														<label class="upload-label d-inline-block position-relative d-flex flex-wrap align-items-center justify-content-center" for="upload">
															<h2 class="text-center mb-0" v-if="imgUpload == null">200 * 200 </h2>
															<figure class="uploaded-image" v-if="imgUpload">
																<img :src="imgUpload" alt="UploadImage" class="w-100 h-100 rounded shadow">
															</figure>
															<div class="overlay position-absolute d-flex flex-wrap align-items-center justify-content-center">
																<h4 class="text-center mb-0 text-white">
																	<i class="bi bi-cloud-arrow-up text-white d-block"></i>
																	Upload Image
																</h4>
															</div>
														</label>
														<!-- Cancel button -->
														<!-- <a href="#" class="btn btn-cancel rounded-circle p-0 position-absolute" @click.prevent="removeUploadImage()">
															<i class="bi bi-x"></i>
															</a> -->
													</div>
												</div>
											</div>
										</form>
									</div>
								</div>
								<div class="card bg-transparent border-0">
									<div class="card-header bg-white d-flex flex-wrap align-items-center">
										<div class="content-card-left">
											<h4 class="card-title">DatePicker</h4>
										</div>
									</div>
									<div class="card-body bg-white">
										<form class="custom-form">
											<div class="row m-0">
												<div class="col-lg-3 col-md-3 col-sm-6 col-12 px-3" >
													<div class="position-relative form-group ">
														<div class="custom-datepicker">
															<datepicker 
																class="w-100 " 
																v-model="picked"
																inputFormat="dd-MM-yyyy"/>
														</div>
													</div>
												</div>
											</div>
										</form>
									</div>
								</div>
								<div class="card bg-transparent border-0">
									<div class="card-header bg-white d-flex flex-wrap align-items-center">
										<div class="content-card-left">
											<h4 class="card-title">Checkbox</h4>
										</div>
									</div>
									<div class="card-body bg-white">
										<form class="custom-form">
											<div class="row m-0">
												<div class="col-lg-3 col-md-3 col-sm-6 col-12 px-3" >
													<div class="position-relative form-group ">
														<div class="form-check button-checkbox p-0 position-relative">
															<input class="form-check-input p-0 rounded-circle " type="checkbox" value="" id="flexCheckDefault">
															<label class="form-check-label" for="flexCheckDefault">
															Diabetes
															</label>
														</div>
														<input
															class="w-100"
															type="text"
															placeholder="Enter Name"
															>
													</div>
												</div>
												<div class="col-lg-3 col-md-3 col-sm-6 col-12 px-3" >
													<div class="position-relative form-group ">
														<div class="form-check ps-0">
															<input class="form-check-input p-0 ms-0" type="checkbox" value="yes" id="Diabetes" :checked="[value ? 'true': 'false']">
															<label class="form-check-label d-inline-block" for="Diabetes">
																Diabetes
															</label>
														</div>
														<input
															class="w-100"
															type="text"
															placeholder="Enter Name"
															>
													</div>
												</div>
												<div class="col-12">
													<div class="position-relative form-group ">
														<div class="form-check form-check-inline ps-0">
															<input class="form-check-input p-0 ms-0" type="checkbox" value="yes" id="mon" :checked="[value ? 'true': 'false']">
															<label class="form-check-label d-inline-block" for="mon">
															Monday
															</label>
														</div>
														<div class="form-check form-check-inline ps-0">
															<input class="form-check-input p-0 ms-0" type="checkbox" value="yes" id="tue" :checked="[value ? 'true': 'false']">
															<label class="form-check-label d-inline-block" for="tue">
															Tuesday
															</label>
														</div>
														<div class="form-check form-check-inline ps-0">
															<input class="form-check-input p-0 ms-0" type="checkbox" value="yes" id="wed" :checked="[value ? 'true': 'false']">
															<label class="form-check-label d-inline-block" for="wed">
															Wednesday
															</label>
														</div>
														<div class="form-check form-check-inline ps-0">
															<input class="form-check-input p-0 ms-0" type="checkbox" value="yes" id="thu" :checked="[value ? 'true': 'false']">
															<label class="form-check-label d-inline-block" for="thu">
															Thursday
															</label>
														</div>
														<div class="form-check form-check-inline ps-0">
															<input class="form-check-input p-0 ms-0" type="checkbox" value="yes" id="fri" :checked="[value ? 'true': 'false']">
															<label class="form-check-label d-inline-block" for="fri">
															Friday
															</label>
														</div>
														<div class="form-check form-check-inline ps-0">
															<input class="form-check-input p-0 ms-0" type="checkbox" value="yes" id="sat" :checked="[value ? 'true': 'false']">
															<label class="form-check-label d-inline-block" for="sat">
															Saturday
															</label>
														</div>
														<div class="form-check form-check-inline ps-0">
															<input class="form-check-input p-0 ms-0" type="checkbox" value="yes" id="sun" :checked="[value ? 'true': 'false']">
															<label class="form-check-label d-inline-block" for="sun">
															Sunday
															</label>
														</div>
													</div>
												</div>
											</div>
										</form>
									</div>
								</div>
								<div class="card bg-transparent border-0">
									<div class="card-header bg-white d-flex flex-wrap align-items-center">
										<div class="content-card-left">
											<h4 class="card-title">Radio Settings</h4>
										</div>
									</div>
									<div class="card-body bg-white">
										<form class="custom-form">
											<div class="row m-0">
												<div class="col-12" >
													<div class="position-relative form-group ">
														<div class="form-check form-check-inline ps-0">
															<input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
															<label class="form-check-label" for="inlineRadio1">First Radio</label>
														</div>
														<div class="form-check form-check-inline ps-0">
															<input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
															<label class="form-check-label" for="inlineRadio2">Second Radio</label>
														</div>
													</div>
												</div>
												<div class="col-12">
													<h4 class="card-title mb-3">Inline Radio</h4>
													<div class="form-check form-check-inline ps-0">
														<input class="form-check-input" type="radio" name="inlineRadio" id="inline1" value="option1">
														<label class="form-check-label" for="inline1">First</label>
													</div>
													<div class="form-check form-check-inline ps-0">
														<input class="form-check-input" type="radio" name="inlineRadio" id="inline2" value="option2">
														<label class="form-check-label" for="inline2">Second</label>
													</div>
													<div class="form-check form-check-inline ps-0">
														<input class="form-check-input" type="radio" name="inlineRadio" id="inline3" value="option2">
														<label class="form-check-label" for="inline3">Third</label>
													</div>
												</div>
											</div>
										</form>
									</div>
								</div>
								<div class="card bg-transparent border-0">
									<div class="card-header bg-white d-flex flex-wrap align-items-center">
										<div class="content-card-left">
											<h4 class="card-title">Modal Settings</h4>
										</div>
									</div>
									<div class="card-body bg-white">
										<form class="custom-form">
											<div class="row m-0">
												<div class="col-12" >
													<div class="position-relative form-group ">
														<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Open modal</button>
													</div>
												</div>
											</div>
										</form>
									</div>
								</div>
								<div class="card bg-transparent border-0">
									<div class="card-header bg-white d-flex flex-wrap align-items-center">
										<div class="content-card-left">
											<h4 class="card-title">Simple Circles</h4>
										</div>
									</div>
									<div class="card-body bg-white">
										<div class="row m-0 circle-wrapper">
											<div class="col-lg-2 col-md-3 col-sm-4 col-6">
												<div class="circle d-flex flex-wrap align-items-center justify-content-center rounded-circle mx-auto A">
													<span>281797</span>
												</div>
												<h4 class="text-center mb-0 text-uppercase pt-3 fw-normal">administered</h4>
											</div>
											<div class="col-lg-2 col-md-3 col-sm-4 col-6">
												<div class="circle d-flex flex-wrap align-items-center justify-content-center rounded-circle mx-auto R">
													<span>281797</span>
												</div>
												<h4 class="text-center mb-0 text-uppercase pt-3 fw-normal">administered</h4>
											</div>
											<div class="col-lg-2 col-md-3 col-sm-4 col-6">
												<div class="circle d-flex flex-wrap align-items-center justify-content-center rounded-circle mx-auto NA">
													<span>281797</span>
												</div>
												<h4 class="text-center mb-0 text-uppercase pt-3 fw-normal">administered</h4>
											</div>
											<div class="col-lg-2 col-md-3 col-sm-4 col-6">
												<div class="circle d-flex flex-wrap align-items-center justify-content-center rounded-circle mx-auto NR">
													<span>281797</span>
												</div>
												<h4 class="text-center mb-0 text-uppercase pt-3 fw-normal">administered</h4>
											</div>
											<div class="col-lg-2 col-md-3 col-sm-4 col-6">
												<div class="circle d-flex flex-wrap align-items-center justify-content-center rounded-circle mx-auto LO">
													<span>281797</span>
												</div>
												<h4 class="text-center mb-0 text-uppercase pt-3 fw-normal">administered</h4>
											</div>
											<div class="col-lg-2 col-md-3 col-sm-4 col-6">
												<div class="circle d-flex flex-wrap align-items-center justify-content-center rounded-circle mx-auto C">
													<span>281797</span>
												</div>
												<h4 class="text-center mb-0 text-uppercase pt-3 fw-normal">administered</h4>
											</div>
											<div class="col-lg-2 col-md-3 col-sm-4 col-6">
												<div class="circle d-flex flex-wrap align-items-center justify-content-center rounded-circle mx-auto PR">
													<span>281797</span>
												</div>
												<h4 class="text-center mb-0 text-uppercase pt-3 fw-normal">administered</h4>
											</div>
											<div class="col-lg-2 col-md-3 col-sm-4 col-6">
												<div class="circle d-flex flex-wrap align-items-center justify-content-center rounded-circle mx-auto O">
													<span>281797</span>
												</div>
												<h4 class="text-center mb-0 text-uppercase pt-3 fw-normal">administered</h4>
											</div>
											<div class="col-lg-2 col-md-3 col-sm-4 col-6">
												<div class="circle d-flex flex-wrap align-items-center justify-content-center rounded-circle mx-auto M">
													<span>281797</span>
												</div>
												<h4 class="text-center mb-0 text-uppercase pt-3 fw-normal">administered</h4>
											</div>
											<div class="col-lg-2 col-md-3 col-sm-4 col-6">
												<div class="circle d-flex flex-wrap align-items-center justify-content-center rounded-circle mx-auto has-visit">
													<span>281797</span>
												</div>
												<h4 class="text-center mb-0 text-uppercase pt-3 fw-normal">administered</h4>
											</div>
											<div class="col-lg-2 col-md-3 col-sm-4 col-6">
												<div class="circle d-flex flex-wrap align-items-center justify-content-center rounded-circle mx-auto PC">
													<span>281797</span>
												</div>
												<h4 class="text-center mb-0 text-uppercase pt-3 fw-normal">administered</h4>
											</div>
										</div>
									</div>
								</div>
								<div class="card bg-transparent border-0">
									<div class="card-header bg-white d-flex flex-wrap align-items-center">
										<div class="content-card-left">
											<h4 class="card-title">Gradient Circles</h4>
										</div>
									</div>
									<div class="card-body bg-white">
										<div class="row m-0 circle-wrapper gradient">
											<div class="col-lg-2 col-md-3 col-sm-4 col-6">
												<div class="circle d-flex flex-wrap align-items-center justify-content-center rounded-circle mx-auto GA">
													<span>281797</span>
												</div>
												<h4 class="text-center mb-0 text-uppercase pt-3 fw-normal">administered</h4>
											</div>
											<div class="col-lg-2 col-md-3 col-sm-4 col-6">
												<div class="circle d-flex flex-wrap align-items-center justify-content-center rounded-circle mx-auto GR">
													<span>281797</span>
												</div>
												<h4 class="text-center mb-0 text-uppercase pt-3 fw-normal">administered</h4>
											</div>
											<div class="col-lg-2 col-md-3 col-sm-4 col-6">
												<div class="circle d-flex flex-wrap align-items-center justify-content-center rounded-circle mx-auto GNA">
													<span>281797</span>
												</div>
												<h4 class="text-center mb-0 text-uppercase pt-3 fw-normal">administered</h4>
											</div>
											<div class="col-lg-2 col-md-3 col-sm-4 col-6">
												<div class="circle d-flex flex-wrap align-items-center justify-content-center rounded-circle mx-auto GNR">
													<span>281797</span>
												</div>
												<h4 class="text-center mb-0 text-uppercase pt-3 fw-normal">administered</h4>
											</div>
											<div class="col-lg-2 col-md-3 col-sm-4 col-6">
												<div class="circle d-flex flex-wrap align-items-center justify-content-center rounded-circle mx-auto GLO">
													<span>281797</span>
												</div>
												<h4 class="text-center mb-0 text-uppercase pt-3 fw-normal">administered</h4>
											</div>
											<div class="col-lg-2 col-md-3 col-sm-4 col-6">
												<div class="circle d-flex flex-wrap align-items-center justify-content-center rounded-circle mx-auto GC">
													<span>281797</span>
												</div>
												<h4 class="text-center mb-0 text-uppercase pt-3 fw-normal">administered</h4>
											</div>
											<div class="col-lg-2 col-md-3 col-sm-4 col-6">
												<div class="circle d-flex flex-wrap align-items-center justify-0content-center rounded-circle mx-auto GPR">
													<span>281797</span>
												</div>
												<h4 class="text-center mb-0 text-uppercase pt-3 fw-normal">administered</h4>
											</div>
											<div class="col-lg-2 col-md-3 col-sm-4 col-6">
												<div class="circle d-flex flex-wrap align-items-center justify-content-center rounded-circle mx-auto GO">
													<span>281797</span>
												</div>
												<h4 class="text-center mb-0 text-uppercase pt-3 fw-normal">administered</h4>
											</div>
											<div class="col-lg-2 col-md-3 col-sm-4 col-6">
												<div class="circle d-flex flex-wrap align-items-center justify-content-center rounded-circle mx-auto GM">
													<span>281797</span>
												</div>
												<h4 class="text-center mb-0 text-uppercase pt-3 fw-normal">administered</h4>
											</div>
											<div class="col-lg-2 col-md-3 col-sm-4 col-6">
												<div class="circle d-flex flex-wrap align-items-center justify-content-center rounded-circle mx-auto Ghas-visit">
													<span>281797</span>
												</div>
												<h4 class="text-center mb-0 text-uppercase pt-3 fw-normal">administered</h4>
											</div>
											<div class="col-lg-2 col-md-3 col-sm-4 col-6">
												<div class="circle d-flex flex-wrap align-items-center justify-content-center rounded-circle mx-auto GPC">
													<span>281797</span>
												</div>
												<h4 class="text-center mb-0 text-uppercase pt-3 fw-normal">administered</h4>
											</div>
										</div>
									</div>
								</div>
								<div class="card bg-white border-0">
									<div class="card-header bg-white d-flex flex-wrap align-items-center">
										<div class="content-card-left">
											<h4 class="card-title">Visit Summary</h4>
										</div>
									</div>
									<div class="card-body bg-white">
										<div class="row">
											<div class="col-lg-2 col-md-3 col-sm-4 col-6 mt-4">
												<span class="d-block text-center mb-2 text-secondary">Unallocated</span>
												<div class="total-score medium-score d-flex flex-wrap justify-content-center align-items-center position-relative rounded-circle low">
													<h4 class="mb-0">{{earlyScore}}</h4>
													<svg class="position-absolute">
														<circle cx="47" cy="47" r="46" class="score-progress" :stroke-dashoffset="calculateVisits"></circle>
													</svg>
												</div>
												<span class="d-block text-center mt-2">0</span>
											</div>
											<div class="col-lg-2 col-md-3 col-sm-4 col-6 mt-4">
												<span class="d-block text-center mb-2 text-secondary">Early</span>
												<div class="total-score medium-score d-flex flex-wrap justify-content-center align-items-center position-relative rounded-circle medium">
													<h4 class="mb-0">{{earlyScore}}</h4>
													<svg class="position-absolute">
														<circle cx="47" cy="47" r="46" class="score-progress" :stroke-dashoffset="calculateVisits"></circle>
													</svg>
												</div>
												<span class="d-block text-center mt-2">0</span>
											</div>
											<div class="col-lg-2 col-md-3 col-sm-4 col-6 mt-4">
												<span class="d-block text-center mb-2 text-secondary">On time</span>
												<div class="total-score medium-score d-flex flex-wrap justify-content-center align-items-center position-relative rounded-circle">
													<h4 class="mb-0">{{earlyScore}}</h4>
													<svg class="position-absolute">
														<circle cx="47" cy="47" r="46" class="score-progress" :stroke-dashoffset="calculateVisits"></circle>
													</svg>
												</div>
												<span class="d-block text-center mt-2">0</span>
											</div>
											<div class="col-lg-2 col-md-3 col-sm-4 col-6 mt-4">
												<span class="d-block text-center mb-2 text-secondary">Late</span>
												<div class="total-score medium-score d-flex flex-wrap justify-content-center align-items-center position-relative rounded-circle high">
													<h4 class="mb-0">{{earlyScore}}</h4>
													<svg class="position-absolute">
														<circle cx="47" cy="47" r="46" class="score-progress" :stroke-dashoffset="calculateVisits"></circle>
													</svg>
												</div>
												<span class="d-block text-center mt-2">0</span>
											</div>
											<div class="col-lg-2 col-md-3 col-sm-4 col-6 mt-4">
												<span class="d-block text-center mb-2 text-secondary">On time</span>
												<div class="total-score medium-score d-flex flex-wrap justify-content-center align-items-center position-relative rounded-circle A">
													<h4 class="mb-0">{{earlyScore}}</h4>
													<svg class="position-absolute">
														<circle cx="47" cy="47" r="46" class="score-progress" :stroke-dashoffset="calculateVisits"></circle>
													</svg>
												</div>
												<span class="d-block text-center mt-2">0</span>
											</div>
											<div class="col-lg-2 col-md-3 col-sm-4 col-6 mt-4">
												<span class="d-block text-center mb-2 text-secondary">Late</span>
												<div class="total-score medium-score d-flex flex-wrap justify-content-center align-items-center position-relative rounded-circle R">
													<h4 class="mb-0">{{earlyScore}}</h4>
													<svg class="position-absolute">
														<circle cx="47" cy="47" r="46" class="score-progress" :stroke-dashoffset="calculateVisits"></circle>
													</svg>
												</div>
												<span class="d-block text-center mt-2">0</span>
											</div>
											<div class="col-lg-2 col-md-3 col-sm-4 col-6 mt-4">
												<span class="d-block text-center mb-2 text-secondary">On time</span>
												<div class="total-score medium-score d-flex flex-wrap justify-content-center align-items-center position-relative rounded-circle NA">
													<h4 class="mb-0">{{earlyScore}}</h4>
													<svg class="position-absolute">
														<circle cx="47" cy="47" r="46" class="score-progress" :stroke-dashoffset="calculateVisits"></circle>
													</svg>
												</div>
												<span class="d-block text-center mt-2">0</span>
											</div>
											<div class="col-lg-2 col-md-3 col-sm-4 col-6 mt-4">
												<span class="d-block text-center mb-2 text-secondary">Late</span>
												<div class="total-score medium-score d-flex flex-wrap justify-content-center align-items-center position-relative rounded-circle NR">
													<h4 class="mb-0">{{earlyScore}}</h4>
													<svg class="position-absolute">
														<circle cx="47" cy="47" r="46" class="score-progress" :stroke-dashoffset="calculateVisits"></circle>
													</svg>
												</div>
												<span class="d-block text-center mt-2">0</span>
											</div>
											<div class="col-lg-2 col-md-3 col-sm-4 col-6 mt-4">
												<span class="d-block text-center mb-2 text-secondary">On time</span>
												<div class="total-score medium-score d-flex flex-wrap justify-content-center align-items-center position-relative rounded-circle LO">
													<h4 class="mb-0">{{earlyScore}}</h4>
													<svg class="position-absolute">
														<circle cx="47" cy="47" r="46" class="score-progress" :stroke-dashoffset="calculateVisits"></circle>
													</svg>
												</div>
												<span class="d-block text-center mt-2">0</span>
											</div>
											<div class="col-lg-2 col-md-3 col-sm-4 col-6 mt-4">
												<span class="d-block text-center mb-2 text-secondary">Late</span>
												<div class="total-score medium-score d-flex flex-wrap justify-content-center align-items-center position-relative rounded-circle C">
													<h4 class="mb-0">{{earlyScore}}</h4>
													<svg class="position-absolute">
														<circle cx="47" cy="47" r="46" class="score-progress" :stroke-dashoffset="calculateVisits"></circle>
													</svg>
												</div>
												<span class="d-block text-center mt-2">0</span>
											</div>
											<div class="col-lg-2 col-md-3 col-sm-4 col-6 mt-4">
												<span class="d-block text-center mb-2 text-secondary">On time</span>
												<div class="total-score medium-score d-flex flex-wrap justify-content-center align-items-center position-relative rounded-circle PR">
													<h4 class="mb-0">{{earlyScore}}</h4>
													<svg class="position-absolute">
														<circle cx="47" cy="47" r="46" class="score-progress" :stroke-dashoffset="calculateVisits"></circle>
													</svg>
												</div>
												<span class="d-block text-center mt-2">0</span>
											</div>
											<div class="col-lg-2 col-md-3 col-sm-4 col-6 mt-4">
												<span class="d-block text-center mb-2 text-secondary">Late</span>
												<div class="total-score medium-score d-flex flex-wrap justify-content-center align-items-center position-relative rounded-circle O">
													<h4 class="mb-0">{{earlyScore}}</h4>
													<svg class="position-absolute">
														<circle cx="47" cy="47" r="46" class="score-progress" :stroke-dashoffset="calculateVisits"></circle>
													</svg>
												</div>
												<span class="d-block text-center mt-2">0</span>
											</div>
											<div class="col-lg-2 col-md-3 col-sm-4 col-6 mt-4">
												<span class="d-block text-center mb-2 text-secondary">On time</span>
												<div class="total-score medium-score d-flex flex-wrap justify-content-center align-items-center position-relative rounded-circle M">
													<h4 class="mb-0">{{earlyScore}}</h4>
													<svg class="position-absolute">
														<circle cx="47" cy="47" r="46" class="score-progress" :stroke-dashoffset="calculateVisits"></circle>
													</svg>
												</div>
												<span class="d-block text-center mt-2">0</span>
											</div>
											<div class="col-lg-2 col-md-3 col-sm-4 col-6 mt-4">
												<span class="d-block text-center mb-2 text-secondary">Late</span>
												<div class="total-score medium-score d-flex flex-wrap justify-content-center align-items-center position-relative rounded-circle has-visit">
													<h4 class="mb-0">{{earlyScore}}</h4>
													<svg class="position-absolute">
														<circle cx="47" cy="47" r="46" class="score-progress" :stroke-dashoffset="calculateVisits"></circle>
													</svg>
												</div>
												<span class="d-block text-center mt-2">0</span>
											</div>
											<div class="col-lg-2 col-md-3 col-sm-4 col-6 mt-4">
												<span class="d-block text-center mb-2 text-secondary">Late</span>
												<div class="total-score medium-score d-flex flex-wrap justify-content-center align-items-center position-relative rounded-circle PC">
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
				<div class="modal custom-modal popup-animation p-0 slow" id="exampleModal" tabindex="-1" aria-labelledby="exampleModal" aria-hidden="true">
					<div class="modal-dialog modal-dialog-centered modal-lg">
						<div class="modal-content">
							<div class="modal-header">
								<h1 class="modal-title" id="exampleModal">Document</h1>
								<a href="#" class="btn-close rounded-circle bg-custom-gradient p-0 border-0 d-flex flex-wrap justify-content-center ms-auto me-2">
								<i class="bi bi-download"></i>
								</a>
								<button type="button" class="btn-close rounded-circle bg-custom-gradient p-0 border-0 ms-0" data-bs-dismiss="modal" aria-label="Close">
									<i class="bi bi-x"></i>
								</button>
							</div>
							<div class="modal-body">
								<form class="custom-form">
									<div class="row m-0">
										<div class="col-lg-6 col-md-6 col-sm-6 col-12 px-3" >
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
			</div>
		</div>
	</div>
</template>
<script>
	import sidebar from "../components/sidebar";
	import navbar from "../components/nav.vue";
	import "../scss/pages/_form_page.scss";
	import Multiselect from '@vueform/multiselect';
	import Datepicker from 'vue3-datepicker';
	import { ref } from 'vue';
	import { Modal } from 'bootstrap';
	// for Range Slider
	import VueSlider from 'vue-slider-component';
	import 'vue-slider-component/theme/antd.css';
	export default {
	  components: {
	    sidebar: sidebar,
	    navbar: navbar,
	    Multiselect,
	    Datepicker,
		VueSlider
	  },
	  setup() {
	    const picked = ref(new Date());
	    return {
	      picked
	    }
	  },
	  data() {
	    return {
	      value: null,
	        options: [
	          'Batman',
	          'Robin',
	          'Joker',
	        ],
	        modalOptions:[
	          'Batman',
	          'Robin',
	          'Joker',
	          'adas',
	          'sdasda',
	          'jkljljlkj',
	        ],
	        example4: {
	          mode: 'tags',
	          value: ['batman'],
	          options: [
	            { value: 'batman', label: 'Batman' },
	            { value: 'robin', label: 'Robin' },
	            { value: 'joker', label: 'Joker' },
	            { value: 'Javascript', label: 'Javascript' },
	            { value: 'RubiRails', label: 'RubiRails' },
	            { value: 'Codegniter', label: 'Codegniter' },
	          ],
	          searchable: true,
	          createTag: true
	        },
	        imgUpload:null,
	        checked:{
	        },
	        inputType:'password',
	        earlyScore: '100',
			value1: [0, 20],
			sliderOptions: {
				dotSize: 14,
				width: 'auto',
				height: 6,
				direction: 'ltr',
				min: 0,
				max: 24,
				interval: 1,
				clickable: true,
				duration: 0.5,
				adsorb: false,
				lazy: false,
				marks: true,
			}
	    }
	  },
	  methods: {
	    fileUpload(e) {
	      const file = e.target.files[0];
				this.imgUpload = URL.createObjectURL(file);
	    },
	    removeUploadImage() {
	      this.imgUpload = null;
	    },
	    // hideModal() {
	    //   var myModal = new Modal(document.getElementById('exampleModal'), options);
	    //   myModal.show();
	    // }
	  },
	   mounted() {
	     this.calculateVisits = "calc(300 - (-300 *" + this.earlyScore + ") / 100)";
	   }
	}
</script>
<style src="@vueform/multiselect/themes/default.css"></style>