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
								<div class="card bg-white border-0">
									<div class="card-header bg-white d-flex flex-wrap align-items-center">
										<div class="content-card-left">
											<h4 class="card-title">Calendar</h4>
										</div>
									</div>
									<div class="card-body bg-white">
										<div class="row">
											<div class="col-12 px-3 pb-lg-4 pb-md-4 pb-sm-4">
												<div class="custom-full-calendar">
													<FullCalendar :options="calendarOptions" />
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
		<!-- Client Detail Modal -->
		<div class="modal custom-modal popup-animation p-0 slow" id="clientModal" tabindex="-1" aria-labelledby="clientModal" >
			<div class="modal-dialog modal-dialog-centered modal-lg modal-custom-xs">
				<div class="modal-content card">
					<div class="modal-header justify-content-start flex-lg-nowrap flex-md-nowrap flex-wrap">
						<h1 class="modal-title" id="clientModal">Client Details</h1>
						<div class="ms-auto d-flex flex-wrap align-items-center client-buttons mt-lg-0 mt-md-0 mt-3">
							<button class="btn px-3 py-0 header-btn bg-custom-gradient me-lg-3 me-md-3 me-sm-3 me-1 font-14 d-flex flex-wrap align-items-center justify-content-center icon-text shadow-none" >
								<i class="bi bi-pencil me-lg-2 me-md-2 me-sm-2 btn-static-icon d-lg-inline-block d-md-inline-block d-none"></i>
								<span class="btn-text">Edit Visit</span> 
							</button>
							<button class="d-flex flex-wrap header-btn align-items-center btn btn-clear-filter me-lg-3 me-md-3 me-sm-3 me-1">
								<i class="bi bi-x-circle d-lg-inline-block d-md-inline-block d-none me-lg-2 me-md-2 me-sm-2 btn-static-icon"></i>
								<span class="btn-text">Delete Visit</span>
							</button>
							<div class="dropdown-custom me-lg-3 me-md-3 me-sm-3">
								<div class="dropdown position-relative dropdown-button">
									<button class="btn bg-custom-gradient dropdown-toggle d-flex align-items-center flex-wrap header-btn ms-0" id="dropdownMenuButton" data-bs-toggle="dropdown">
									<i class="bi bi-files me-lg-2 me-md-2 me-sm-2 btn-static-icon d-lg-inline-block d-md-inline-block d-none"></i>	<span class="btn-text">Copy</span> <i class="bi bi-chevron-down ms-1"></i>
									</button>
									<ul class="dropdown-menu list-unstyled position-absolute" aria-labelledby="dropdownMenuButton">
										<li>
											<a class="d-block dropdown-item text-center" href="#" data-bs-dismiss="modal" @click.prevent="copyVisit()">
												<i class="bi bi-files me-3"></i>
												<span class="d-inline-block text-truncate">Copy Visit</span>
											</a>
											<a class="d-block dropdown-item text-center" href="#" data-bs-dismiss="modal" @click.prevent="copyDay()">
												<i class="bi bi-files me-3"></i>
												<span class="d-inline-block text-truncate">Copy Entire Day</span>
											</a>
											<a class="d-block dropdown-item text-center" href="#" data-bs-dismiss="modal" @click.prevent="copyVisit()">
												<i class="bi bi-files me-3"></i>
												<span class="d-inline-block text-truncate">Copy Visit to another CA</span>
											</a>
											<a class="d-block dropdown-item text-center" href="#" data-bs-dismiss="modal" @click.prevent="moveVisit()">
												<i class="bi bi-files me-3"></i>
												<span class="d-inline-block text-truncate">Move Visit to another CA</span>
											</a>
										</li>
									</ul>
								</div>
							</div>
							<button type="button" class="btn-close rounded-circle bg-custom-gradient p-0 border-0 ms-0" data-bs-dismiss="modal" aria-label="Close">
								<i class="bi bi-x"></i>
							</button>
						</div>
					</div>
					<div class="modal-body">
						<form class="custom-form">
							<div class="row m-0">
								<div class="col-lg-6 col-md-6 col-12 px-3 mb-4 even-column">
									<div class="position-relative form-group info row mb-0">
										<div class="col-lg-4 px-0 align-self-center">
											<label class="dark-color ">Carer Code</label>
										</div>
										<div class="col-lg-8 px-lg-2 px-0 mt-lg-0 mt-2">
											<input
												class="w-100 mt-0 light-disable"
												type="text"
												placeholder="Enter Name"
												value="CA001(Mrs Ruth Jones)"
												disabled
											>
										</div>
									</div>
								</div>
								<div class="col-lg-6 col-md-6 col-12 px-3 mb-4 even-column">
									<div class="position-relative form-group info row mb-0">
										<div class="col-lg-4 px-0 align-self-center">
											<label class="dark-color ">Client Code</label>
										</div>
										<div class="col-lg-8 px-lg-2 px-0 mt-lg-0 mt-2">
											<input
												class="w-100 mt-0 light-disable"
												type="text"
												placeholder="Enter Name"
												value="C001(Mrs linda Woods)"
												disabled
											>
										</div>
									</div>
								</div>
								<div class="col-lg-6 col-md-6 col-12 px-3 mb-4 even-column">
									<div class="position-relative form-group info row mb-0">
										<div class="col-lg-4 px-0 align-self-center">
											<label class="dark-color ">Schedule Number</label>
										</div>
										<div class="col-lg-8 px-lg-2 px-0 mt-lg-0 mt-2">
											<input
												class="w-100 mt-0 light-disable"
												type="text"
												placeholder="Enter Name"
												value="S00047"
												disabled
											>
										</div>
									</div>
								</div>
								<div class="col-lg-6 col-md-6 col-12 px-3 mb-4 even-column">
									<div class="position-relative form-group info row mb-0">
										<div class="col-lg-4 px-0 align-self-center">
											<label class="dark-color ">Invoice Number</label>
										</div>
										<div class="col-lg-8 px-lg-2 px-0 mt-lg-0 mt-2">
											<input
												class="w-100 mt-0 light-disable"
												type="text"
												placeholder=""
												value=""
												disabled
											>
										</div>
									</div>
								</div>
								<div class="col-lg-6 col-md-6 col-12 px-3 mb-4 even-column">
									<div class="position-relative form-group info row mb-0">
										<div class="col-lg-4 px-0 align-self-center">
											<label class="dark-color ">Date</label>
										</div>
										<div class="col-lg-8 px-lg-2 px-0 mt-lg-0 mt-2">
											<input
												class="w-100 mt-0 light-disable"
												type="text"
												placeholder="Enter Name"
												value="19/07/2021 (Monday)"
												disabled
											>
										</div>
									</div>
								</div>
								<div class="col-lg-6 col-md-6 col-12 px-3 mb-4 even-column">
									<div class="position-relative form-group info row mb-0">
										<div class="col-lg-4 px-0 align-self-center">
											<label class="dark-color ">Time</label>
										</div>
										<div class="col-lg-8 px-lg-2 px-0 mt-lg-0 mt-2">
											<input
												class="w-100 mt-0 light-disable"
												type="text"
												placeholder="Enter Name"
												value="00:15 - 04:00"
												disabled
											>
										</div>
									</div>
								</div>
								<div class="col-lg-6 col-md-6 col-12 px-3 mb-4 even-column">
									<div class="position-relative form-group info row mb-0">
										<div class="col-lg-4 px-0 align-self-center">
											<label class="dark-color ">NPC</label>
										</div>
										<div class="col-lg-8 px-lg-2 px-0 mt-lg-0 mt-2">
											<input
												class="w-100 mt-0 light-disable"
												type="text"
												placeholder="Enter Name"
												value=""
												disabled
											>
										</div>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
		<!-- Copy Day Modal -->
		<div class="modal custom-modal popup-animation p-0 slow" id="copyDayModal" tabindex="-1" aria-labelledby="copyDayModal">
			<div class="modal-dialog modal-dialog-centered modal-lg modal-custom-xs">
				<div class="modal-content card">
					<div class="modal-header justify-content-start">
						<h1 class="modal-title" id="clientModal">Copy Day</h1>
						<button type="button" class="btn-close rounded-circle bg-custom-gradient p-0 border-0 ms-auto" data-bs-dismiss="modal" aria-label="Close"  @click.prevent="timeEventClicked()">
							<i class="bi bi-x"></i>
						</button>
					</div>
					<div class="modal-body copy-modal">
						<h4 class="mb-0 lh-base">You are copying schedule entries from Monday to the days checked below:</h4>
						<form action="" class="custom-form my-4">
							<div class="row mx-0">
								<div class="col-lg-3 col-md-3 col-sm-4 col-6 col-xs-12 name-checkbox position-relative mb-3 ps-0 pe-2" v-for="day in days" :key="day">
									<input type="checkbox"  :id="day.weekday" :checked="day.check" hidden>
									<label class="d-flex flex-wrap justify-content-center position-static" :for="day.weekday">
										{{day.weekday}}
									</label>
								</div>
								<div class="col-12 px-lg-1 note mt-2">
									<i class="bi bi-book icon me-2"></i><span class="icon-text">Note</span>
									<p class="mb-0 note-text p-3 mt-2">
										Select the days you wish to copy to by checking dates within the list above. You may copy to more than one day at once. Once you have made your choice, click ok to copy the current day to the days you have checked. To abort this whole operation, click Cancel
									</p>
								</div>
							</div>
						</form>
					</div>
					<div class="modal-footer justify-content-end pt-3">
						<button type="button" class="btn btn-secondary-theme px-4 shadow" data-bs-dismiss="modal">ok</button>
						<button type="button" class="btn btn-theme px-4 shadow" @click="hideModal()">Cancel</button>
					</div>
				</div>
			</div>
		</div>
		<!-- Copy Visit Modal -->
		<div class="modal custom-modal popup-animation p-0 slow" id="copyVisit" tabindex="-1" aria-labelledby="copyVisit" >
			<div class="modal-dialog modal-dialog-centered modal-custom-xs">
				<div class="modal-content card">
					<div class="modal-header justify-content-start">
						<h1 class="modal-title pe-lg-0 pe-md-0 pe-sm-0 pe-2" id="clientModal">Copy Visit to another care worker</h1>
						<button type="button" class="btn-close rounded-circle bg-custom-gradient p-0 border-0 ms-auto" data-bs-dismiss="modal" aria-label="Close" @click.prevent="timeEventClicked()">
							<i class="bi bi-x"></i>
						</button>
					</div>
					<div class="modal-body copy-modal">
						<div class="row mx-0">
							<div class="col-12 px-lg-1 note mt-2">
								<p class="mb-0 note-text p-3 mt-2 lh-base side-by-side clearfix">
									<i class="bi bi-book icon me-2 float-start pt-1 icon-gray"></i>
									<span class="float-start right-content mt-lg-0 mt-md-0 mt-sm-0 mt-1">
										Copy Schedule Entry for Miss Enda Woods on 21/07/2021 from 00:15 to 04:00
									</span>
								</p>
							</div>
						</div>
						<form action="" class="custom-form mt-4 mb-2">
							<div class="row mx-0">
								<div class="col-lg-12 col-12 mb-4">
									<div class="position-relative form-group info row mb-0">
										<div class="col-lg-2 col-md-2 align-self-center">
											<label class="dark-color ">From:</label>
										</div>
										<div class="col-lg-4 col-md-4 px-lg-2 mt-lg-0 mt-md-0 mt-3">
											<input
												class="w-100 mt-0 light-disable"
												type="text"
												placeholder="Enter Name"
												value="CA001"
												disabled
											>
										</div>
										<div class="col-lg-6 col-md-6 px-lg-2 mt-lg-0 mt-md-0 mt-3">
											<input
												class="w-100 mt-0 light-disable"
												type="text"
												placeholder="Enter Name"
												value="Mrs Ruth Jones"
												disabled
											>
										</div>
									</div>
								</div>
								<div class="col-lg-12 col-12">
									<div class="position-relative form-group info row mb-0">
										<div class="col-lg-2 col-md-2 align-self-center">
											<label class="dark-color ">To:</label>
										</div>
										<div class="col-lg-10 col-md-10 px-lg-2 mt-lg-0 mt-md-0 mt-3">
											<select class="form-select d-inline-block mt-0">
												<option selected>Select</option>
												<option value="2">10</option>
												<option value="3">15</option>
											</select>
										</div>
									</div>
								</div>
							</div>
						</form>
					</div>
					<div class="modal-footer justify-content-end pt-3">
						<button type="button" class="btn btn-secondary-theme px-4 shadow" data-bs-dismiss="modal">Cancel</button>
						<button type="button" class="btn btn-theme px-4 shadow">Copy</button>
					</div>
				</div>
			</div>
		</div>
		<!-- Move Visit Modal -->
		<div class="modal custom-modal popup-animation p-0 slow" id="moveVisit" tabindex="-1" aria-labelledby="moveVisit" >
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content card">
					<div class="modal-header justify-content-start">
						<h1 class="modal-title" id="clientModal">Move Visit to another worder</h1>
						<button type="button" class="btn-close rounded-circle bg-custom-gradient p-0 border-0 ms-auto" data-bs-dismiss="modal" aria-label="Close"  @click.prevent="timeEventClicked()">
							<i class="bi bi-x"></i>
						</button>
					</div>
					<div class="modal-body copy-modal">
						<div class="row mx-0">
							<div class="col-12 px-lg-1 note mt-2">
								<p class="mb-0 note-text p-3 mt-2 lh-base side-by-side clearfix">
									<i class="bi bi-arrows-move me-2 float-start icon-gray"></i>
									<span class="float-start right-content">
										Move Schedule Entry for Miss Enda Woods on 21/07/2021 from 00:15 to 04:00
									</span>
								</p>
							</div>
						</div>
						<form action="" class="custom-form mt-4 mb-2">
							<div class="row mx-0">
								<div class="col-lg-12 col-12 mb-4">
									<div class="position-relative form-group info row mb-0">
										<div class="col-lg-2 col-md-2 align-self-center">
											<label class="dark-color ">From:</label>
										</div>
										<div class="col-lg-4 col-md-4 px-lg-2 mt-lg-0 mt-md-0 mt-3">
											<input
												class="w-100 mt-0 light-disable"
												type="text"
												placeholder="Enter Name"
												value="CA001"
												disabled
											>
										</div>
										<div class="col-lg-6 col-md-6 px-lg-2 mt-lg-0 mt-md-0 mt-3">
											<input
												class="w-100 mt-0 light-disable"
												type="text"
												placeholder="Enter Name"
												value="Mrs Ruth Jones"
												disabled
											>
										</div>
									</div>
								</div>
								<div class="col-lg-12 col-12">
									<div class="position-relative form-group info row mb-0">
										<div class="col-lg-2 col-md-2 align-self-center">
											<label class="dark-color ">To:</label>
										</div>
										<div class="col-lg-10 col-md-10 px-lg-2 mt-lg-0 mt-md-0 mt-3">
											<select class="form-select d-inline-block mt-0">
												<option selected>Select</option>
												<option value="2">10</option>
												<option value="3">15</option>
											</select>
										</div>
									</div>
								</div>
							</div>
						</form>
					</div>
					<div class="modal-footer justify-content-end pt-3">
						<button type="button" class="btn btn-secondary-theme px-4 shadow" data-bs-dismiss="modal">Cancel</button>
						<button type="button" class="btn btn-theme px-4 shadow">Move</button>
					</div>
				</div>
			</div>
		</div>
		<!-- Schedule Modal -->
		<div class="modal custom-modal popup-animation p-0 slow" id="scheduleModal" tabindex="-1" aria-labelledby="scheduleModal">
			<div class="modal-dialog modal-dialog-centered modal-xl modal-dialog-scrollable">
				<div class="modal-content card">
					<div class="modal-header justify-content-start">
						<h1 class="modal-title" id="clientModal">Schedule</h1>
						<button type="button" class="btn-close rounded-circle bg-custom-gradient p-0 border-0 ms-auto" data-bs-dismiss="modal" aria-label="Close">
							<i class="bi bi-x"></i>
						</button>
					</div>
					<div class="modal-body copy-modal">
						<form action="" class="custom-form my-2">
							<div class="row mx-0">
								<div class="col-lg-3 col-md-3 col-sm-6 col-12 px-3" v-for="schedule in 90" :key="schedule">
									<div class="position-relative form-group ">
										<label for="">Enter Address</label>
										<input
											class="w-100"
											type="text"
											placeholder="Enter Address"
											>
									</div>
								</div>
							</div>
						</form>
					</div>
					<div class="modal-footer justify-content-end pt-3">
						<button type="button" class="btn btn-secondary-theme px-4 shadow" data-bs-dismiss="modal">Close</button>
						<button type="button" class="btn btn-theme px-4 shadow" @click="hideModal()">Save Changes</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import sidebar from "../components/sidebar";
	import navbar from "../components/nav.vue";
	import "../scss/pages/_full-calendar.scss";
	// For Full Calendar 
	import FullCalendar, { CalendarOptions, EventApi, DateSelectArg, EventClickArg } from '@fullcalendar/vue3';
	import dayGridPlugin from '@fullcalendar/daygrid';
	import timeGridPlugin from '@fullcalendar/timegrid';
	import interactionPlugin from '@fullcalendar/interaction';
	import { Modal } from 'bootstrap';
	export default {
	  components: {
	    sidebar: sidebar,
	    navbar: navbar,
		FullCalendar,
	  },
	  data() {
	    return {
			calendarOptions: {
				plugins: [ 
					dayGridPlugin, 
					interactionPlugin,
					timeGridPlugin 
				],
				headerToolbar: {
					left: 'today',
					center: 'title,prev,next',
					right: 'dayGridMonth,timeGridWeek,timeGridDay'
				},
				views: {
					dayGridMonth: { 
						titleFormat: {month: 'long', year: 'numeric' },
						selectable: true,
						dateClick: this.dayWeekClick,
						eventClick: this.dayEventClicked
					},
					timeGridWeek: {
						selectable: true,
						dateClick: this.timeWeekClick,
						slotEventOverlap: true,
						allDaySlot: false,
						eventClick: this.timeEventClicked
					},
					timeGridDay: {
						allDaySlot: false,
						selectable: true,
						dateClick: this.timeWeekClick,
						eventClick: this.timeEventClicked
					}
				},
				initialView: 'dayGridMonth',
				events: [
					{ id:'hour', title: '6 Hours', date: '2021-08-20' },
					{ title:'Testing Event', start:'2021-08-27T24:00:00', end:'2021-08-27T24:30:00', backgroundColor:'#a3b4f9', allDay:  false },
					{ title:'Testing Event checking this test and changing color', start:'2021-08-23T24:00:00', end:'2021-08-23T24:45:00', backgroundColor:'#5b6ac0', allDay:  false },
					{ title:'Lorem ipsum dolor sit amet consectetur adipisicing elit', start:'2021-08-26T24:00:00', end:'2021-08-26T24:50:00', backgroundColor:'#ff888c', allDay:  false },
					{ title:'Lorem ipsum dolor sit amet consectetur adipisicing elit', start:'2021-08-26T00:50:00', end:'2021-08-26T01:50:00', backgroundColor:'#158af3', allDay:  false },
					{ title:'Testing long', start:'2021-08-22T00:00:00', end:'2021-08-22T01:50:00', backgroundColor:'#158af3', allDay:  false },
				],
			},
			days: [	
				{ weekday:'Tuesday 20/07/2021', check: true},
				{ weekday:'Wednesday 20/07/2021', check:false},
				{ weekday:'Thursday 20/07/2021', check:false},
				{ weekday:'Friday 20/07/2021', check:true},
				{ weekday:'Saturday 20/07/2021', check:false}
			]
	    }
	  },
	  methods: {
		  dayWeekClick() {
			  this.timeWeekClick();
		  },
		  timeWeekClick() {
			var myModal = new Modal(document.getElementById('scheduleModal'));
	     	myModal.show();
		  },
		  dayEventClicked() {
			  this.timeEventClicked();
		  },
		  timeEventClicked() {
			var myModal = new Modal(document.getElementById('clientModal'));
	     	myModal.show();
		  },
		  copyVisit() {
			  var copyDayModal = new Modal(document.getElementById('copyVisit'));
			  copyDayModal.show();
		  },
		  copyDay() {
			  var visitModal = new Modal(document.getElementById('copyDayModal'));
			  visitModal.show();
		  },
		  moveVisit() {
			  var moveVisit = new Modal(document.getElementById('moveVisit'));
			  moveVisit.show();
		  }
	  }
	}
</script>