<template>
  <nav class="headerContainer">
    <div class="container-fluid d-flex flex-wrap align-items-center">
      <a href="#" class="navbar-brand d-lg-block d-md-none d-sm-none d-none"
        ><img
          style="width:180px;"
          src="../images/icons/carehubLogo.png"
          alt="carehubLogo"
      /></a>
      <div
        class="d-flex flex-wrap justify-content-end ms-auto align-items-center"
      >
        <ul
          class="list-unstyled d-flex flex-wrap align-items-center mb-0 position-relative"
        >
          <li class="d-lg-inline-block d-md-inline-block d-none">
            <span class="navListStyle">Dashboard</span>
          </li>
          <li class="d-lg-inline-block d-md-inline-block d-none ms-4">
            <span class="navListStyle">Carers</span>
          </li>
          <li class="d-lg-inline-block d-md-inline-block d-none ms-4">
            <span class="navListStyle">Clients</span>
          </li>
          <div>
            <li
              class="d-lg-inline-block d-md-inline-block d-none ms-4 navListActiveStyle"
            >
              <span class=" ">Manage</span>
            </li>
          </div>

          <li class="d-lg-inline-block d-md-inline-block d-none ms-4">
            <span class="navListStyle">Reports</span>
          </li>
          <li class="d-lg-inline-block d-md-inline-block d-none ms-4">
            <span class="navListStyle">Finance</span>
          </li>
          <li class="d-lg-inline-block d-md-inline-block d-none ms-4">
            <span class="navListStyle">Admin</span>
          </li>
        </ul>
      </div>
      <div
        class="d-flex flex-wrap justify-content-end ms-auto align-items-center"
      >
        <ul
          class="list-unstyled d-flex flex-wrap align-items-center mb-0 position-relative"
        >
          <li class="d-lg-inline-block d-md-inline-block d-none">
            <div>
              <div>
                <img
                  style="width:60px;border:2px solid white;border-radius:60px"
                  src="../images/icons/profileImage.png"
                  alt="profileImage"
                />
              </div>
            </div>
            <div class="ps-5 ms-4 pe-4" style="margin-top:-55px;">
              <div
                style="text-align: center;font-size: 18px;font-weight: bold;color: white;"
              >
                Emma Phillips
              </div>
              <div
                style="text-align: center;font-size: 13px;font-weight: bolder;color: white;margin-left:-10px"
              >
                Designation Here
              </div>
            </div>
          </li>
        </ul>
      </div>

      <!-- <div
        class="overlay-layer position-absolute w-100 h-100 d-lg-none"
        @click="toggleNav()"
      ></div> -->
    </div>
  </nav>
</template>

<style src="../style/blueHeader.css" />
