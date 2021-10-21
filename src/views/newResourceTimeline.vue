<template>
  <h1>Hello Plunker!</h1>

  <div class="table-area">
    <table>
      <thead>
        <tr>
          <th>someDate</th>
          <th
            v-for="(time, timeIndex) in timeRanges"
            :key="time + '-' + timeIndex"
          >
            {{ time }}
          </th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="(carer, carerIndex) in carers"
          :key="carer.id + '-' + carerIndex"
        >
          <td>
            {{ carer.name }}
          </td>
          <td
            v-for="(time, timeIndex) in timeRanges"
            :key="time + '-' + timeIndex"
          ></td>
        </tr>
      </tbody>
    </table>

    <div class="table-area-selected"></div>
    <div class="table-area-selected"></div>
  </div>
</template>

<script src="../js/resourceTimeline.js"></script>
<style src="../style/styleSheet.css" />
