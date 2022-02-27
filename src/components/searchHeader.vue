<template>
  <nav style="background-color: white; z-index: 10">
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
            <button class="dropbtn">Radius: 40 Miles <i style="color:#028fa9" class="bi bi-chevron-down" /> </button>
            <div class="dropdown-content">
              <a href="#">Radius: 20 Miles</a>
              <a href="#">Radius: 80 Miles</a>
              <a href="#">Radius: 10 Miles</a>
            </div>
          </div>
          <button type="submit" class="searchBtn">Search</button>
        </form>

        <button class="searchHeaderMoreBtn">
          more<i class="bi bi-arrow-right" style="font-size: 12px"></i>
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
