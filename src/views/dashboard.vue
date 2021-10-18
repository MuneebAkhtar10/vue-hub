<template>
	<div class="home">
		<!-- SideBar Component -->
		<sidebar />
		<div class="main-content">
			<!-- nav component here -->
			<navbar />
			<!-- Inner Content -->
			<div class="inner-content">
				<section class="dashboard">
					<div class="container-fluid mw-1600">
						<div class="row">
							<!-- Graph Dashboard -->
							<div class="col-12">
								<div class="card bg-transparent border-0">
									<div class="card-header bg-white d-flex flex-wrap align-items-center">
										<div class="content-card-left">
											<h4 class="card-title">Dashboard</h4>
										</div>
									</div>
									<div class="card-body bg-white">
										<div class="row dashboard-header-graph">
											<div class="col-xl-3 col-md-6 col-sm-6 col-12">
												<div class="card clearfix">
													<div class="card-content float-start">
														<h4 class="mb-2">Total Branches</h4>
														<h2 class="pt-1">423, 964</h2>
														<h4 class="mt-2 pt-1">
															<span class="d-inline-block graph high me-2">
																<i class="bi bi-graph-up me-1"></i>
																1.25%
															</span>
															<span class="gray">From 29.1%</span>
														</h4>
													</div>
													<div class="graph-wrapper float-end">
														<LineChart/>
													</div>
												</div>
											</div>
											<div class="col-xl-3 col-md-6 col-sm-6 col-12">
												<div class="card clearfix">
													<div class="card-content float-start">
														<h4 class="mb-2">Total Branches</h4>
														<h2 class="pt-1">423, 964</h2>
														<h4 class="mt-2 pt-1">
															<span class="d-inline-block graph low me-2">
																<i class="bi bi-graph-down me-1"></i>
																1.25%
															</span>
															<span class="gray">From 68.6%</span>
														</h4>
													</div>
													<div class="graph-wrapper float-end">
														<LineChart/>
													</div>
												</div>
											</div>
											<div class="col-xl-3 col-md-6 col-sm-6 col-12">
												<div class="card clearfix">
													<div class="card-content float-start">
														<h4 class="mb-2">Total Branches</h4>
														<h2 class="pt-1">423, 964</h2>
														<h4 class="mt-2 pt-1">
															<span class="d-inline-block graph high me-2">
																<i class="bi bi-graph-up me-1"></i>
																1.25%
															</span>
															<span class="gray">From 29.1%</span>
														</h4>
													</div>
													<div class="graph-wrapper float-end">
														<LineChart/>
													</div>
												</div>
											</div>
											<div class="col-xl-3 col-md-6 col-sm-6 col-12">
												<div class="card clearfix">
													<div class="card-content float-start">
														<h4 class="mb-2">Total Branches</h4>
														<h2 class="pt-1">423, 964</h2>
														<h4 class="mt-2 pt-1">
															<span class="d-inline-block graph low me-2">
																<i class="bi bi-graph-down me-1"></i>
																1.25%
															</span>
															<span class="gray">From 68.6%</span>
														</h4>
													</div>
													<div class="graph-wrapper float-end">
														<LineChart/>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<!-- Dashboard -->
							<div class="col-12">
								<div class="card bg-transparent border-0">
									<div class="card-header bg-white d-flex flex-wrap align-items-center">
										<div class="content-card-left">
											<h4 class="card-title">Dashboard</h4>
										</div>
									</div>
									<div class="card-body bg-white">
										<div class="row dashboard-cards">
											<div class="col-xxl-custom col-xl-3 col-md-4 col-sm-6 col-12">
												<div class="card clearfix dark-blue">
													<div class="icon-wrapper d-flex flex-wrap align-items-center justify-content-center float-start">
														<img src="../images/dashboard/hospital.png" alt="Hospital-Icon">
													</div>
													<div class="card-content float-start">
														<h4>Total Branches</h4>
														<h2 class="pt-1">5</h2>
													</div>
												</div>
											</div>
											<div class="col-xxl-custom col-xl-3 col-md-4 col-sm-6 col-12">
												<div class="card clearfix light-blue">
													<div class="icon-wrapper d-flex flex-wrap align-items-center justify-content-center float-start">
														<img src="../images/dashboard/carer.png" alt="Carer-Icon">
													</div>
													<div class="card-content float-start">
														<h4>Total Carers</h4>
														<h2 class="pt-1">456</h2>
													</div>
												</div>
											</div>
											<div class="col-xxl-custom col-xl-3 col-md-4 col-sm-6 col-12">
												<div class="card clearfix light-green">
													<div class="icon-wrapper d-flex flex-wrap align-items-center justify-content-center float-start">
														<img src="../images/dashboard/patients.png" alt="Carer-Icon">
													</div>
													<div class="card-content float-start">
														<h4>Total Clients</h4>
														<h2 class="pt-1">1,456</h2>
													</div>
												</div>
											</div>
											<div class="col-xxl-custom col-xl-3 col-md-4 col-sm-6 col-12">
												<div class="card clearfix yellow">
													<div class="icon-wrapper d-flex flex-wrap align-items-center justify-content-center float-start">
														<img src="../images/dashboard/report.png" alt="Carer-Icon">
													</div>
													<div class="card-content float-start">
														<h4>Weekly Visits</h4>
														<h2 class="pt-1">20,893</h2>
													</div>
												</div>
											</div>
											<div class="col-xxl-custom col-xl-3 col-md-4 col-sm-6 col-12">
												<div class="card clearfix light-purple">
													<div class="icon-wrapper d-flex flex-wrap align-items-center justify-content-center float-start">
														<img class="weekly" src="../images/dashboard/weekly.png" alt="Carer-Icon">
													</div>
													<div class="card-content float-start">
														<h4>Weekly Hours</h4>
														<h2 class="pt-1">12,438</h2>
													</div>
												</div>
											</div>
											<div class="col-xxl-custom col-xl-3 col-md-4 col-sm-6 col-12">
												<div class="card clearfix red">
													<div class="icon-wrapper d-flex flex-wrap align-items-center justify-content-center float-start">
														<img class="weekly" src="../images/dashboard/cancel.png" alt="Cancel-Icon">
													</div>
													<div class="card-content float-start">
														<h4>Cancelled</h4>
														<h2 class="pt-1">14</h2>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<!-- Line Chart -->
							<div class="col-lg-6 col-md-12 col-sm-12 col-12 mb-3">
								<div class="card border-0 h-100 bg-white">
									<div class="card-header bg-white d-flex flex-wrap align-items-center">
										<div class="col-lg-9 col-md-9 col-7 content-card-left pe-2">
											<h4 class="card-title card-18">Branchwise Overview</h4>
										</div>
										<div class="col-lg-3 col-md-3 col-5 content-card-right ms-auto">
											<form class="custom-form">
												<Multiselect 
													v-model="value"
													:options="modalOptions"
													placeholder="Yesterday"
													class="custom-multiselect custom-multiselect-small mt-0"
													:searchable="true"
													:showOptions="true"
													/>
											</form>
										</div>
									</div>
									<div class="card-body bg-white">
										<div class="row">
											<div class="col-12">
												<BarChart/>
											</div>
										</div>
									</div>
								</div>
							</div>
							<!-- Hours Completion -->
							<div class="col-lg-6 col-md-12 col-sm-12 col-12 mb-3">
								<div class="card border-0 h-100 bg-white">
									<div class="card-header bg-white d-flex flex-wrap align-items-center">
										<div class="col-lg-9 col-md-9 col-7 content-card-left pe-2">
											<h4 class="card-title card-18">Hours - Completion ( 20% )</h4>
										</div>
										<div class="col-lg-3 col-md-3 col-5 content-card-right ms-auto">
											<form class="custom-form">
												<Multiselect 
													v-model="value"
													:options="modalOptions"
													placeholder="Yesterday"
													class="custom-multiselect custom-multiselect-small mt-0"
													:searchable="true"
													:showOptions="true"
													/>
											</form>
										</div>
									</div>
									<div class="card-body bg-white">
										<div class="row">
											<div class="col-12">
												<SimpleBar/>
											</div>
										</div>
									</div>
								</div>
							</div>
							<!-- Donut Chart -->
							<div class="col-lg-6 col-md-12 col-sm-12 col-12 mb-3">
								<div class="card border-0 h-100 bg-white">
									<div class="card-header bg-white d-flex flex-wrap align-items-center">
										<div class="col-lg-9 col-md-9 col-7 content-card-left pe-2">
											<h4 class="card-title card-18">Branch Wise - Vists Allocation</h4>
										</div>
										<div class="col-lg-3 col-md-3 col-5 content-card-right ms-auto">
											<form class="custom-form">
												<Multiselect 
													v-model="value"
													:options="modalOptions"
													placeholder="Yesterday"
													class="custom-multiselect custom-multiselect-small mt-0"
													:searchable="true"
													:showOptions="true"
													/>
											</form>
										</div>
									</div>
									<div class="card-body bg-white">
										<div class="row">
											<div class="col-12">
												<PieChart/>
											</div>
										</div>
									</div>
								</div>
							</div>
							<!-- Table Card -->
							<div class="col-lg-6 col-md-12 col-sm-12 col-12 mb-3">
								<div class="card border-0 h-100 bg-white">
									<div class="card-header bg-white d-flex flex-wrap align-items-center">
										<div class="col-lg-9 col-md-9 col-7 content-card-left pe-2">
											<h4 class="card-title card-18">Unallocated Visits</h4>
										</div>
										<div class="col-lg-3 col-md-3 col-5 content-card-right ms-auto">
											<form class="custom-form">
												<Multiselect 
													v-model="value"
													:options="modalOptions"
													placeholder="Yesterday"
													class="custom-multiselect custom-multiselect-small mt-0"
													:searchable="true"
													:showOptions="true"
													/>
											</form>
										</div>
									</div>
									<div class="card-body bg-white px-0 pt-0">
										<div class="row gx-0">
											<div class="col-12">
												<div class="table-responsive mb-0 dashboard-table">
													<table class="table custom-table table-user">
														<thead class="border-0">
															<tr>
																<th class="ps-4">Branch</th>
																<th>ID</th>
																<th>Client</th>
																<th>Start - End</th>
															</tr>
														</thead>
														<tbody>
															<tr v-for="tableRows in dataTable" :key="tableRows">
																<td class="ps-4"><a href="#">BIR</a></td>
																<td>13726680</td>
																<td>Miss Margaret Higgins</td>
																<td>00:19:00 - 00:19:30</td>
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
								</div>
							</div>
							<!-- Visits Completion -->
							<div class="col-lg-6 col-md-12 col-sm-12 col-12 mb-3">
								<div class="card border-0 h-100 bg-white">
									<div class="card-header bg-white d-flex flex-wrap align-items-center">
										<div class="col-lg-9 col-md-9 col-7 content-card-left pe-2">
											<h4 class="card-title card-18">Visits - Completion ( 40% )</h4>
										</div>
										<div class="col-lg-3 col-md-3 col-5 content-card-right ms-auto">
											<form class="custom-form">
												<Multiselect 
													v-model="value"
													:options="modalOptions"
													placeholder="Yesterday"
													class="custom-multiselect custom-multiselect-small mt-0"
													:searchable="true"
													:showOptions="true"
													/>
											</form>
										</div>
									</div>
									<div class="card-body bg-white">
										<div class="row">
											<div class="col-12">
												<HorizontalBar/>
											</div>
										</div>
									</div>
								</div>
							</div>
							<!-- Area Chart -->
							<div class="col-lg-6 col-md-12 col-sm-12 col-12 mb-3">
								<div class="card border-0 h-100 bg-white">
									<div class="card-header bg-white d-flex flex-wrap align-items-center">
										<div class="col-lg-9 col-md-9 col-7 content-card-left pe-2">
											<h4 class="card-title card-18">Overview - Visits ( Punctuality - Duration )</h4>
										</div>
										<div class="col-lg-3 col-md-3 col-5 content-card-right ms-auto">
											<form class="custom-form">
												<Multiselect 
													v-model="value"
													:options="modalOptions"
													placeholder="Yesterday"
													class="custom-multiselect custom-multiselect-small mt-0"
													:searchable="true"
													:showOptions="true"
													/>
											</form>
										</div>
									</div>
									<div class="card-body bg-white">
										<div class="row">
											<div class="col-12">
												<AreaChart/>
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
	import Multiselect from '@vueform/multiselect';
	import PieChart from "../components/pieChart.vue";
	import BarChart from '../components/barChart';
	import AreaChart from '../components/areaChart';
	import HorizontalBar from '../components/horizontalBarChart';
	import SimpleBar from '../components/SimpleBarChart';
	import LineChart from '../components/LineChart';
	import "../scss/pages/_dashboard.scss";
	import "@vueform/multiselect/themes/default.css";
	export default {
	  components: {
	    sidebar: sidebar,
	    navbar: navbar,
		PieChart,
		Multiselect,
		BarChart,
		AreaChart,
		HorizontalBar,
		SimpleBar,
		LineChart
	  },
	  data() {
	    return {
			modalOptions:[ 'Last Month', 'Last Week', 'Yesterday', 'Today', 'This Week', 'This Month'],
			dataTable: 7
	    };
	  }
	};
</script>