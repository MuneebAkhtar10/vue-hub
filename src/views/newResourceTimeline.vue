<template>
  <div>
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
    <div class="calender_container">
      <label><p>Group by:</p></label>
      <datepicker class="group_calender" v-model="date" />
      <!-- <i class="fas fa-caret-down"></i> -->

      <img id="drop_down" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAASCAYAAAA6yNxSAAAABHNCSVQICAgIfAhkiAAAAklJREFUSEutlM1LVFEYxu
      eohJRWmBC08M9w2a5FWdCEmANZQ1YkKEG0kja1adGqUEFDmz6IwU1WbkIQF0G7/gNBGAI/AhstXWjdfs9w7nA6nZm5k3PhYc68973v87zPec8xURRdSKVST8BR8A6MGmPW+
      G34A9cJij4El8FPcM8QXGHRBQz4DebBFURsN1IBPIeplwOXQDOIQEECNlkcd8gk4j0YQsRqI0TA0UGdcdAHmpyaRQmYJpD1XkjdgnVi4yAiLLk67/E41GheArQvkyAdSPhI
      rB8ntv5HBLXb+O4luAi0xfEjctXOloIkagAlQsPhJy6WEo35Wo8Iap4k/1mgc7mrYb+mxspkfHCM4GtwznMi3o4+PigmEWE7f0Puea8h1VLnGWp9Vy2329iJp8QHPBGybAlcr
      eUE5J3k5cDZQI1ZYiPU+BY38pcAux1HnO1ocTqWeomQdYWQE5CfIj4Dznjkv/j/Flz3j/c/AqwIDaYup0wFJ9L+YELeTm7edu7P0RxxHet1X3hQgBWhCR4Doe34ZLtZtrm6yKY
      CnWvrZPtNyH+EXKsowBbW7fUc9HpO6PVnoIGVvR/AaeDW05bJds2Nrt3gU1WAFdHKrwZz0BMhgi9gD3R779T5K6CBq3ql1xTgOPGY9Q1wqFI3Nr7P7wtwp1rncY1EAqwIzYQGM
      +t16+qJ9/x20jsjsQDHiUeshwMiRK6b7y7kOzVcKr+uS4AzExOsdTrie0K26wjegnw3Kbny6hZgRWgO7lsnVENH8EE9ncci/wBoycflkiuubwAAAABJRU5ErkJggg=="
      >
      <div class="card_head" id="card1">
        <td style="min-width: 200px;"><p>Monday, 1 November 2021</p></td>
      </div>
      <div class="card_head" id="card2">
        <td style="min-width: 200px;">Required hours: 52h, 15m</td>
      </div>
      <div class="card_head" id="card3">
        <td style="min-width: 200px;">Booked hours: 48h, 0m</td>
      </div>
    </div>

    <div class="table-area mainContainer">
      <appointment-popup
        v-if="showAppointmentPopup"
        :appointment="appointmentForPopup"
        @close="onCloseAppointmentPopup"
        @delete="deleteAppointment"
        @save="saveAppointment"
      ></appointment-popup>
      <table class="dates">
        <thead>
          <tr>
            <th class="search_box">
              <input
                class="search"
                id="searchId"
                type="text"
                v-model="carerSearchString"
                placeholder="Search Carer"
              />
              <!-- <div class="search_icon"> -->
              <img class="search_icon" src="data:image/png;base64,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
                                TcHG8cbHr4fmyOhEDWp57WjbM3+HRRkM9cBBNRELualwVSyUVw0aIt/ZukZoObwURIZTbx
                                c3cNUqYgXq14gE0cJdnUnU6TTl+QxbRodW1ZY5IqKW/YG4zCCULSeABvGC+OArr0Moc5
                                pi2JaJZm9DZpnNP/GqB3LUPqnaCpqZCyJ7JkxF6ufxBiHmb/T8LpQGfhYS+zeJpYQkQhrMP0kPY
                                KnM8b9v1LzqumTFjvBGYvS0iVIhRIWaabyLYDXlzpMAyKdmgkl+c8JKEARn3jip7QjlItsLw3lum
                                IbAfbIClLKgn03slOTkiVJiSpQEy3uxnYDRi3JCkxg6TnTkhOr2fJoVnZ2NC0PgTmhXNAg/+XgBXoD
                                RNSB/G3GxiTT1JuioXhs5BaFHsh4ZH5GfoA9iMkYz6oUO62hCw91IrmoBbsfi4sSpkCKVMw73i96Su6i0
                                1kUvuS0vtNbhKhQrZV/ggpN8S0yDTMFnVRcF+KVKsjpISBlE7IkiXvdi+9ZWrqrVZJqIKUZ8oWgEVgGU3Nb
                                7WEAqkkuKspnVAst6xt1YQCKR2NaZiOIk9ThoaPwIBWTyiQMtaZhtnmSpOSjLHNbHzickEoRcrukKSUPSHj
                                NcwYc7vlhlAgZYJsaaOmDOgmqgbVSZAxgLf5D/qJkV+COkR3AAAAAElFTkSuQmCC">
              <!-- </div> -->
            </th>

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
                  <div className="carer_name" style="min-width: 200px;">{{ carer.name }}
                  </div>
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
        <div v-for="apt in appointments" :key="apt.id">
          <div
            class="table-area-selected"
            :class="'se-' + apt.id"
            :id="'apt-' + apt.id"
            @dblclick="openAppointmentPopup(apt.id)"
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
  </div>
</template>

<script src="../js/resourceTimeline.js"></script>
<style src="../style/styleSheet.css" />
