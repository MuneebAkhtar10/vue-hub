<template>
  <div class="table-area mainContainer">
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
          <td>{{ carer.name }}</td>

          <td
            class="data-cell"
            v-for="(time, timeIndex) in timeRanges"
            :key="time + '-' + timeIndex"
          ></td>
        </tr>
      </tbody>
    </table>

    <div
      v-for="(apt, aptIndex) in appointmentTime"
      :key="apt.id + '-' + aptIndex"
    >
      <div class="table-area-selected"></div>
    </div>
  </div>
</template>

<script src="../js/resourceTimeline.js"></script>
<style src="../style/styleSheet.css" />
