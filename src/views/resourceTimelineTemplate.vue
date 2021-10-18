<template>
  <div class="container">
    <div class="chart">
      <div class="chart-row chart-period">
        <div class="chart-row-item"></div>
        <span
          v-for="(time, timeIndex) in timeRanges"
          :key="time + '-' + timeIndex"
          >{{ getTwelveHourTime(time) }}</span
        >
      </div>
      <div class="chart-row chart-lines">
        <!-- <span></span><span></span> <span></span><span></span><span></span>
        <span></span><span></span><span></span> <span></span><span></span>
        <span></span> <span></span><span></span><span></span> <span></span
        ><span></span><span></span> <span></span><span></span><span></span>
        <span></span><span></span> <span></span> -->
      </div>
      <div
        v-for="(carer, carerIndex) in carers"
        :key="carer.id + '-' + carerIndex"
        class="chart-row"
      >
        <ul class="chart-row-bars">
          <li class="chart-li-one">Planning</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script src="../js/resourceTimeline.js"></script>
<style src="../style/resourceTimeline.css"></style>
