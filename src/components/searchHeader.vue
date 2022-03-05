<template>
  <nav v-if="false" style="background-color: white; z-index: 10">
    <div class="container-fluid d-flex flex-wrap align-items-center">
      <div class="calanderMainContainer">
        <div class="calanderTimelineViewName">
          <i class="calandarIconBtn" />
          <p class="calanderTextBtn">Weekly</p>
          <a href="javascript:void(0);">
            <i class="bi bi-chevron-down calanderDownIcon" />
          </a>
          <a href="javascript:void(0);">
            <i class="bi bi-chevron-up calanderUpIcon" />
          </a>
        </div>
        <div class="weekTimeSelector">
          <p style="padding: 0px 8px 0px 8px">21 Jan - 27 Jan,2022</p>
        </div>
      </div>
      <div
        class="d-flex flex-wrap justify-content-end ms-auto align-items-center"
      >
        <form class="example mt-1">
          <input
            type="text"
            placeholder="Birmigham city council(carer)"
            name="search"
          />
          <div class="dropdown">
            <button class="dropbtn">
              Radius: 40 Miles
              <i style="color: #028fa9" class="bi bi-chevron-down" />
            </button>
            <div class="dropdown-content">
              <a href="#">Radius: 20 Miles</a>
              <a href="#">Radius: 80 Miles</a>
              <a href="#">Radius: 10 Miles</a>
            </div>
          </div>
          <button type="submit" class="searchBtn">Search</button>
        </form>

        <button class="searchHeaderMoreBtn" style="cursor: pointer">
          <i class="bi bi-funnel"></i>
        </button>
        <button class="searchHeaderSettingBtn">
          <i class="bi bi-gear"></i>
        </button>
        <i class="bi bi-three-dots-vertical searchHeaderThreeVerticalDots"> </i>
      </div>

      <div
        class="overlay-layer position-absolute w-100 h-100 d-lg-none"
        @click="toggleNav()"
      ></div>
    </div>
  </nav>
  <nav v-if="false" style="background-color: white; z-index: 10">
    <div class="container-fluid">
      <div class="calanderMainContainer ms-1 mb-3">
        <div class="filterDropdown">
          <button class="filterdropbtn">
            All Contract Types
            <i style="color: #028fa9" class="bi bi-chevron-down ps-3" />
          </button>
          <div class="filter-dropdown-content">
            <a href="#">Radius: 20 Miles</a>
            <a href="#">Radius: 80 Miles</a>
            <a href="#">Radius: 10 Miles</a>
          </div>
        </div>
        <div class="filterDropdown ms-3">
          <button class="filterdropbtn">
            All Funder Codes
            <i style="color: #028fa9" class="bi bi-chevron-down ps-3" />
          </button>
          <div class="filter-dropdown-content">
            <a href="#">Radius: 20 Miles</a>
            <a href="#">Radius: 80 Miles</a>
            <a href="#">Radius: 10 Miles</a>
          </div>
        </div>
        <div class="ms-4 me-3" style="width: 100%">
          <form class="example" style="width: 100%">
            <input
              type="text"
              placeholder="Add tags"
              name="search"
              style="
                width: 100%;
                padding: 11px;
                border: 1px solid rgb(224, 224, 224);
              "
            />
            <button
              class="mt-2"
              style="background: white; color: white; border: none"
            >
              <i
                class="bi bi-search"
                style="color: #028fa9; margin-left: -50px; font-size: 23px"
              ></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  </nav>

  <!-- header with search bar in dropdown -->
  <nav v-if="true" style="background-color: white; z-index: 10;box-shadow:2px 1px rgb(224, 222, 222)">
    <div class="container-fluid d-flex flex-wrap align-items-center">
      <div class="calanderMainContainer">
        <div class="calanderTimelineViewName">
          <i class="calandarIconBtn" />
          <p class="calanderTextBtn pe-1">Period 12</p>
          <a href="javascript:void(0);">
            <i class="bi bi-chevron-down calanderDownIcon" />
          </a>
          <a href="javascript:void(0);">
            <i class="bi bi-chevron-up calanderUpIcon pe-2" />
          </a>
        </div>
        <div class="weekTimeSelector">
          <p style="padding: 0px 15px 0px 15px;font-weight:bolder">21 Jan - 27 Jan,2022</p>
        </div>
      </div>
      <div
        class="d-flex flex-wrap justify-content-end ms-auto align-items-center"
      >
        <div class="weekTimeSelector">
          <p style="padding: 0px 15px 0px 15px;font-weight:bolder">Total Invoices: 50</p>
        </div>

        <div class="weekTimeSelector">
          <p style="padding: 0px 15px 0px 15px;font-weight:bolder">Planned Invoices: 60</p>
        </div>

        <div class="weekTimeSelector">
          <p style="padding: 0px 15px 0px 15px;font-weight:bolder">Actual Invoices: 45</p>
        </div>

        <div class="weekTimeSelector">
          <p style="padding: 0px 15px 0px 15px;font-weight:bolder">Total Amount: $90</p>
        </div>

        <div
          class="pt-2 ms-2 me-2"
          style="
            background: white;
            color: white;
            border: 1px solid #dedede;
            height: 40px;
            border-radius: 5px;
            cursor: pointer;
          "
        >
          <i
            class="bi bi-search"
            style="color: #028fa9; font-size: 23px; padding: 15px 8px 5px 8px"
          ></i>
        </div>

        <form class="example mt-5 pt-5 ps-5" style="position:absolute;width:55%">
          <input
            type="text"
            placeholder="Birmigham city council(carer)"
            name="search"
          />
          <button type="submit" class="searchBtn" style="background-color:#43DA9F">Search</button>
        </form>

        <button class="searchHeaderMoreBtn" style="cursor: pointer">
          <span class="pe-2" style="vertical-align: 2.8px;">more</span>
          <i class="bi bi-arrow-right"/>
        </button>
        <button class="searchHeaderSettingBtn">
          <i class="bi bi-gear"></i>
        </button>
        <i class="bi bi-three-dots-vertical searchHeaderThreeVerticalDots"> </i>
      </div>

      <div
        class="overlay-layer position-absolute w-100 h-100 d-lg-none"
        @click="toggleNav()"
      ></div>
    </div>
  </nav>
</template>

<style src="../style/searchHeader.css" />
<style src="../style/styleSheet.css" />
