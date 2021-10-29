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

  <!-- <div class="col-md-4 col-md-offset-1 vsa">
    <div class="row main">
      <span class="Circle sidebar span1" style="padding:29px 12px;">Verify</span> 
      <div class="page-wrap">
        Verify your student status using your institute ID card or Email ID.
      </div>
    </div>
  </div> -->

  <!-- <table class="carer_table">
    <tbody>
      <tr 
        v-for="(carer, carerIndex) in carers"
        :key="carer.id + '-' + carerIndex"
      >
        <div class="card">
          <div class="card_img"> 
            <img class="image">
          </div>
          <div class="card_info"> 
            <td>{{ carer.name }}</td>
          </div>
        </div>
      </tr>
    </tbody>
  </table> -->

  <!-- <tbody>
    <tr class="head"
      v-for="(carer, carerIndex) in carers"
      :key="carer.id + '-' + carerIndex"
    >
      <main class="container">
        <div class="card">
          <div class="img"></div>
          <div class="content">
            <td>{{ carer.name }}</td>
          </div>
        </div>
      </main>
    </tr>
  </tbody> -->
  <div class="table-area mainContainer">
    <appointment-popup
      v-if="showAppointmentPopup"
      :appointment="appointmentForPopup"
      @close="showAppointmentPopup = false"
      @delete="deleteAppointment"
      @save="saveAppointment"
    ></appointment-popup>
    <table class="dates">
      <thead>
        <tr>
          <th>Search functionality</th>
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
          <main class="container">
            <div class="card">
              <div class="img"></div>
              <div class="content">
                <td style="min-width: 200px;">{{ carer.name }}</td>
              </div>
            </div>
          </main>

          <td
            class="data-cell"
            v-for="(time, timeIndex) in timeRanges"
            :key="time + '-' + timeIndex"
          ></td>
        </tr>
      </tbody>
    </table>
    <template v-if="appointmentFixed">
      <div
        v-for="(apt, aptIndex) in appointments"
        :key="apt.id + '-' + aptIndex"
      >
        <div
          class="table-area-selected"
          :class="'se-' + apt.id"
          :id="'apt-' + apt.id"
          @click="openAppointmentPopup(apt.id)"
        >
          {{ apt.patient.name }}
          <div
            class="resizer se"
            @mousedown="resizingOnMouseDown($event, apt.id)"
          ></div>
        </div>
      </div>
    </template>
  </div>
</template>

<script src="../js/resourceTimeline.js"></script>
<style src="../style/styleSheet.css" />
