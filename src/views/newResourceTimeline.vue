<template>
  <body>
    <div class="header">
      <a href="#" class="logo">Care Planner Logo</a>
      <div class="header-right">
        <a class="active" href="#home">Dashboard</a>
        <a href="#contact">Carers</a>
        <a href="#contact">Clients</a>
        <a href="#contact">Manage</a>
        <a href="#contact">Reports</a>
        <a href="#contact">Finance</a>
        <a href="#contact">Admin</a>
      </div>
    </div>
  </body>
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
        <!-- table effect -->
        <tr class="head"
          v-for="(carer, carerIndex) in carers"
          :key="carer.id + '-' + carerIndex"
        >
          <td class="name">{{ carer.name }}</td>

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
      <div class="table-area-selected" :id="'apt-' + apt.id">
        {{ apt.patient.name }}
      </div>
    </div>
  </div>
</template>

<script src="../js/resourceTimeline.js"></script>
<style src="../style/styleSheet.css" />
