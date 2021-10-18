<template>
	<nav>
		<div class="container-fluid d-flex flex-wrap align-items-center">
			<a href="#" class="navbar-brand d-lg-block d-md-none d-sm-none d-none"
				>Dashboard</a>
			<div class="mr-auto d-lg-none d-md-block d-sm-block d-block">
				<button class="btn btn-toggler bg-transparent shadow-none p-0"  @click.prevent="toggleNav()">
				<i class="bi bi-justify-left"></i>
				</button>
			</div>
			<div class="d-flex flex-wrap justify-content-end ms-auto align-items-center">
				<ul class="list-unstyled d-flex flex-wrap align-items-center mb-0 position-relative">
					<li class="d-lg-inline-block d-md-inline-block d-none">
						<span style="font-family: system-ui !important;"><i class="bi bi-clock"></i> Friday, June 18th 2021, 11:11:32 PM</span>
					</li>
					<li class="d-inline-block">
						<div class="dropdown-custom ml-auto nav-dropdown">
							<div class="dropdown position-relative">
								<button class="btn dropdown-toggle pe-0" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
								<i class="bi bi-person-bounding-box font-xs-14"></i>
								<span class="d-lg-inline-block d-md-inline-block d-sm-inline-block ms-lg-2 ms-md-2 ms-sm-2 ms-1 font-xs-13">Switch Account</span>
								</button>
								<ul class="dropdown-menu list-unstyled position-absolute right-xs-negative" aria-labelledby="dropdownMenuButton">
									<li v-for="list in 5" :key="list">
										<a class="d-block dropdown-item text-center" href="#">
										<i class="bi bi-person me-3"></i>
										<span class="d-inline-block text-truncate">chelmsley</span> 							</a>
									</li>
								</ul>
							</div>
						</div>
					</li>
					<li class="d-inline-block">
						<div class="dropdown-custom ml-auto nav-dropdown">
							<div class="dropdown position-relative">
								<button class="btn dropdown-toggle pe-0" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
								<i class="bi bi-person font-xs-14"></i>
								<span class="d-lg-inline-block d-md-inline-block d-sm-inline-block ms-lg-2 ms-md-2 ms-sm-2 ms-1 font-xs-13">Super Admin</span>
								</button>
								<ul class="dropdown-menu list-unstyled position-absolute" aria-labelledby="dropdownMenuButton">
									<li>
										<a class="d-block dropdown-item text-center" href="#">
										<i class="bi bi-person me-3"></i>
										<span class="d-inline-block text-truncate">Profile</span> 							</a>
									</li>
									<li>
										<a class="d-block dropdown-item text-center" href="#">
										<i class="bi bi-box-arrow-right me-3"></i>
										<span class="d-inline-block text-truncate">Logout</span> 						</a>
									</li>
								</ul>
							</div>
						</div>
					</li>
				</ul>
			</div>
			<div
				class="overlay-layer position-absolute w-100 h-100 d-lg-none"
				@click="toggleNav()"
				></div>
		</div>
	</nav>
</template>
<script>
	import "../scss/layout/_nav.scss";
	export default {
	  components: {},
	  data() {
	    return {};
	  },
	  methods: {
	    toggleNav: function() {
	      var menu = document.querySelector("body");
	      if (menu.classList.contains("nav-toggle")) {
	        menu.classList.remove("nav-toggle");
	      } else {
	        menu.classList.add("nav-toggle");
	      }
	    }
	  }
	};
</script>