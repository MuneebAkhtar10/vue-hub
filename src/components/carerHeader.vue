<template>
  <nav style="background-color:#F0F1F2;z-index:10;margin-bottom:-15px">
    <div class="container-fluid d-flex flex-wrap align-items-center">
      <a
        href="#"
        class="navbar-brand d-lg-block d-md-none d-sm-none d-none leftHeaderLinks"
        style=" color: black;
  font-size: 15px;"
        >Weekly Overview</a
      >
      <a
        href="#"
        class="navbar-brand ms-5 d-lg-block d-md-none d-sm-none d-none"
        style=" color: black;
  font-size: 15px;"
        >Carer Roster</a
      >
      <a
        href="#"
        class="navbar-brand ms-5 d-lg-block d-md-none d-sm-none d-none"
        style=" color: black;
  font-size: 15px;"
        >Client Roster</a
      >
      <a
        href="#"
        class="navbar-brand ms-5 d-lg-block d-md-none d-sm-none d-none"
        style=" color: black;
  font-size: 15px;"
        >Call Monitoring</a
      >
      <a
        href="#"
        class="navbar-brand ms-5 d-lg-block d-md-none d-sm-none d-none"
        style=" color: black;
  font-size: 15px;"
        >Diary</a
      >
      <a
        href="#"
        class="navbar-brand ms-5 d-lg-block d-md-none d-sm-none d-none"
        style=" color: black;
  font-size: 15px;"
        >Training</a
      >
      <a
        href="#"
        class="navbar-brand ms-5 d-lg-block d-md-none d-sm-none d-none"
        style=" color: black;
  font-size: 15px;"
        >Map View</a
      >
      <a
        href="#"
        class="navbar-brand ms-5 d-lg-block d-md-none d-sm-none d-none"
        style=" color: black;
  font-size: 15px;"
        >Live View</a
      >

      <div class="mr-auto d-lg-none d-md-block d-sm-block d-block">
        <button
          class="btn btn-toggler bg-transparent shadow-none p-0"
          @click.prevent="toggleNav()"
        >
          <i class="bi bi-justify-left"></i>
        </button>
      </div>
      <div
        class="d-flex flex-wrap justify-content-end ms-auto align-items-center"
      >
        <ul
          class="list-unstyled d-flex flex-wrap align-items-center mb-0 position-relative"
        >
          <li class="d-inline-block">
            <div class="dropdown-custom ml-auto nav-dropdown">
              <div class="dropdown position-relative">
                <button
                  class="btn dropdown-toggle pe-0"
                  type="button"
                  style="display:flex"
                >
                  <img
                    style="width:20px"
                    src="../images/icons/settings.png"
                    alt="marchart"
                  />
                  <span
                    class="d-lg-inline-block d-md-inline-block d-sm-inline-block ms-lg-2 ms-md-2 ms-sm-2 ms-1 font-xs-13"
                    style=" color: black;
  font-size: 15px;"
                    >Admin User</span
                  >
                </button>
              </div>
            </div>
          </li>
          <li class="d-inline-block">
            <div class="dropdown-custom ml-auto nav-dropdown">
              <div class="dropdown position-relative">
                <button
                  class="btn dropdown-toggle pe-0"
                  type="button"
                  style="display:flex"
                >
                  <img
                    style="width:20px"
                    src="../images/icons/getSupport.png"
                    alt="marchart"
                  />
                  <span
                    class="d-lg-inline-block d-md-inline-block d-sm-inline-block ms-lg-2 ms-md-2 ms-sm-2 ms-1 font-xs-13"
                    style=" color: black;
  font-size: 15px;"
                    >Get Support</span
                  >
                </button>
              </div>
            </div>
          </li>
          <li class="d-inline-block">
            <div class="dropdown-custom ml-auto nav-dropdown">
              <div class="dropdown position-relative">
                <button
                  class="btn dropdown-toggle pe-0"
                  type="button"
                  style="display:flex"
                >
                  <img
                    style="width:20px"
                    src="../images/icons/logout.png"
                    alt="marchart"
                  />
                  <span
                    class="d-lg-inline-block d-md-inline-block d-sm-inline-block ms-lg-2 ms-md-2 ms-sm-2 ms-1 font-xs-13"
                    style=" color: black;
  font-size: 15px;"
                    >Log Out</span
                  >
                </button>
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

<style src="../style/carerHeader.css" />
