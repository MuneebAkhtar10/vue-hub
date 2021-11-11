<template>
  <div class="home">
    <sidebar />

    <div class="main-content">
      <navbar />

      <div class="inner-content">
        <div class="calender_container">
          <!-- <label><p>Group by:</p></label> -->
          <div class="card_head" id="card1">
            <select
              id="view-selector"
              class="sortSelect"
              v-model="view"
              style="min-width: 200px;"
            >
              <option value="today">Today</option>
              <option value="week">Week</option>
              <option value="month">Month</option>
            </select>
          </div>
          <datepicker
            @selected="onChangeDate"
            class="group_calender"
            v-model="date"
          />
          <!-- <i class="fas fa-caret-down"></i> -->
          <!-- <div class="card_head" id="card1">
            <td style="min-width: 200px;"><p>Monday, 1 November 2021</p></td>
          </div> -->
          <template v-if="view == 'week'">
            <div class="weekday" @click="addToWeekday(1)">
              <span class="dayname">Mo</span>
            </div>
            <div class="weekday" @click="addToWeekday(2)">
              <span class="dayname">Tu</span>
            </div>
            <div class="weekday" @click="addToWeekday(3)">
              <span class="dayname">We</span>
            </div>
            <div class="weekday" @click="addToWeekday(4)">
              <span class="dayname">Th</span>
            </div>
            <div class="weekday" @click="addToWeekday(5)">
              <span class="dayname">Fr</span>
            </div>
            <div class="weekday" @click="addToWeekday(6)">
              <span class="dayname">Sa</span>
            </div>
            <div class="weekday" @click="addToWeekday(0)">
              <span class="dayname">Su</span>
            </div>
          </template>
          <div class="card_head" id="card2">
            <td style="min-width: 200px;">Required hours: 52h, 15m</td>
          </div>
          <div class="card_head" id="card3">
            <td style="min-width: 200px;">Booked hours: 48h, 0m</td>
          </div>
          <div class="card_head" id="card3">
            <td style="min-width: 200px;">Carers working: 10</td>
          </div>
          <button class="moreBtn">
            more<i class="bi bi-arrow-right" style="margin-left:15px"></i>
          </button>
          <button class="settingBtn">
            <i class="bi bi-gear"></i>
          </button>
          <i class="bi bi-three-dots-vertical threeVerticalDots"></i>
        </div>

        <div class="table-area mainContainer">
          <appointment-popup
            v-if="showAppointmentPopup"
            :appointment="appointmentForPopup"
            :is-existing="existingAppointment"
            :slot-start-time="slotStartTime"
            :slot-end-time="slotEndTime"
            :slot-date="date"
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
                    @input="filterAppointmentsByCarer"
                  />
                  <!-- <div class="search_icon"> -->
                  <img
                    class="search_icon"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAABHNCSVQICAgIfAhkiAAAB/FJREFUaEPVmgeMVUUUhll7772ixt67iRqDxopdQaMCCQpKUyl2RQQi1qAm2DUGUTFIkSgCRlw1YhRFMaixoWIXNYiIWNfvW+eSt5d779x9u0uWSf685b17Z84/58xpQ02bKkZdXd16vLYvOBYcArYF64PVwMqgBvwD/gILwTzwPpgGXgRzampq/qxi6egrLlxqQGIVHtwGnAg6gD3A2kH4UnPw0N/gK1ALxoDXwXzISb5ZRpQQRFZipS3ACaAb2B2s2sTVJaDWngejArEFEKtr4rz1ppE7IKMGDgxEjuFTs4puQiOEUmOfgIfBWDAXUn5X9cgUDiJ+vyE4GXQH+wBNrjnJJEKrlR/BePAQmAWpP6pltJSAgcymTHgm6AV2BCuWXEDhErNJ5i67CYt4dwq4C0yv1mlkEdqYCc8KZHbic4UCMgrvbv4CfgILwG/gX+A5WxNsELBWiY1xLs/VYDCzGmfRgBDaUYD24EqwV4EAEvkdfAbeAx+Aj8F3gZSHXheue28LdgE6k52B2tfR5I3F/PA4GAKhzwuey/xpCaHgzQ7mqetBu4JFFVYixpSp4G3wLVic5aWYVw2vA3YAh4HjgI5GzeWZo5q+A9zCnGq89KgktDVvXQ06gzVyZlArr4DHwAsSYUHNq9SAnFrbG5wWIMm882m8ugSMb4w7rycUtHMOfw4Dm+fsnDulJ7oXzKj20AaNucYp4HygaWeZoBvl5nVhrS9K7VgiOIto148AY02WE9CuJ4CbwOxqDmulQMGTanKSuhjsmbOuFjEQDC+7ZqIhXfQDwEOcHp4Zz8tQoDttUuBLEdOjdgJ9wZbJBlc8o/N5E3Qoq6Uadkv3OhJIKks7n/K9jmJCYw9oxuY0+CpoarugBfPDrLOrg+jN2o/G5vN3Ce3Kp77fHUoP48L94FYm/LLMhI19hvV1Cia8NwDPU9rzaRE6oV5lNlRCF/DwPSDrYBpfrgDPNaeppUkjwyZ8NwScC4yFlUPnYGjohAzKUzgkNJonOmbsjGdHNQ9mIuNOi41geuexwCCwfWohz9HXoB9yWHJECcne5DM9TGdMQe4ro+rYQrHfIWUmMQIcDtJn+We+uw05DCtRQp6NrTKeUiv9gc6gyXVKTBAI6caHA53D6qnnjYE6rktj8U+T04tY96SHmnOCl2PCNMfvyGHpfiOwXDFVqhxJHOyBPPOL1pOQXiQr/Xg1EDIOLJOBLINYqA9QW5XD/sNk0A1CP8QI6UWyksTaQGjWMmHDIhC6io9+YKMcQt0h9H2MkJ2ZLJc9PRCasSwIBU+XaMhSP62hSXxxYRkNaZPrZgj9Lt/1ZQLTnhYfIWMxVzRhTZ9pz9A40BN59L65wzOkN2ub8cRcvrscPFU2MWwK65AgWwOdCiwzKsev/MNGyoBYgJfQazxoszA9nMQdGxHblaYQSd5FDos+CSlLOg5Z3g9Djttja0noQR7qCtKOQWehmgeWSTliCxX9Hly2pqZTsNCslMUYaD3UBzmeia0jIQs71ZnVPDTTvhYYXLXjFhnI0JaJzeXOAOmg6sbaYe2MDPbwCoeEzJ3sDVgOp4fZ9pNgKJPZBGn2wfr2+84Glv92mdKWohfWivojgwVflJAR+m6g2aVtV3V/A8yhRjX3WQqu2hzOnPF4kHYGCq8X7sralv/RkVSslt7WHOmA5gRm3QZXi7wpTOyONcuAkDVYD3ARyOsCmXp1jAXURKCEkIHMmsjEMKtqNfXQG1ob2SAp3enJYw4Zy+8uoDfQEWStq4n1BCPLrpkQMpdT5Zqek6eHpqdm3gBWltPKLrDURP/3zdWMXk34d153dia/tWctG5ilRmVfzqrRQOqOZXm8hJSeRuKjWcj4UHqEcns/XtDETgJeCBS1mm3im9s9EQuoiRCVhJzYdpLB9GiQ1wDU3KxPzPXsFNk7m1dUMwVPZjPERoyVqX+Xuc1wE81YNPWxZUile9t6vCMDKRsWsUa9xKzzXwKao3FLryRpBbbf503fEeBQYIOx7E0Gj9YPSRkyrgPjYqSybh9sJXkvdA2wIySp2JWIi+o4JOi1iI
                                TcHG8cbHr4fmyOhEDWp57WjbM3+HRRkM9cBBNRELualwVSyUVw0aIt/ZukZoObwURIZTbx
                                c3cNUqYgXq14gE0cJdnUnU6TTl+QxbRodW1ZY5IqKW/YG4zCCULSeABvGC+OArr0Moc5
                                pi2JaJZm9DZpnNP/GqB3LUPqnaCpqZCyJ7JkxF6ufxBiHmb/T8LpQGfhYS+zeJpYQkQhrMP0kPY
                                KnM8b9v1LzqumTFjvBGYvS0iVIhRIWaabyLYDXlzpMAyKdmgkl+c8JKEARn3jip7QjlItsLw3lum
                                IbAfbIClLKgn03slOTkiVJiSpQEy3uxnYDRi3JCkxg6TnTkhOr2fJoVnZ2NC0PgTmhXNAg/+XgBXoD
                                RNSB/G3GxiTT1JuioXhs5BaFHsh4ZH5GfoA9iMkYz6oUO62hCw91IrmoBbsfi4sSpkCKVMw73i96Su6i0
                                1kUvuS0vtNbhKhQrZV/ggpN8S0yDTMFnVRcF+KVKsjpISBlE7IkiXvdi+9ZWrqrVZJqIKUZ8oWgEVgGU3Nb
                                7WEAqkkuKspnVAst6xt1YQCKR2NaZiOIk9ThoaPwIBWTyiQMtaZhtnmSpOSjLHNbHzickEoRcrukKSUPSHj
                                NcwYc7vlhlAgZYJsaaOmDOgmqgbVSZAxgLf5D/qJkV+COkR3AAAAAElFTkSuQmCC"
                  />
                  <!-- </div> -->
                  <div>
                    <div class="sortByBox" id="selectBox">
                      <select
                        class="sortSelect"
                        id="view-selector"
                        v-model="sortByAttributeName"
                        @change="sortBy"
                      >
                        <option value="">Sort by</option>
                        <option value="name">Name</option>
                        <option value="designation">Designation</option>
                      </select>
                    </div>
                  </div>
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
                class="tableRow"
              >
                <main class="container">
                  <div class="card">
                    <div class="img"></div>
                    <div class="content">
                      <div className="carerContent" style="min-width: 200px;">
                        <div style="font-size:18px">{{ carer.name }}</div>
                        <div style="margin-top:-9%">
                          {{ carer.designation }}
                        </div>
                      </div>
                    </div>
                  </div>
                </main>
                <div class="carer_timeLine">
                  <hr class="appointmentTimeline" />
                </div>
                <td
                  class="data-cell"
                  v-for="(time, timeIndex) in timeRanges"
                  :key="time + '-' + timeIndex"
                  @dblclick="
                    openAppointmentPopupForNewAppointment(time, timeIndex)
                  "
                >
                  <div v-if="time == currentTimeSlot" class="border">
                    <div class="border-2" />
                    <div class="border-3" />
                    <div class="border-4" />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <template v-if="appointmentFixed">
            <div v-for="apt in appointments" :key="apt.id">
              <div
                class="table-area-selected"
                :class="'se-' + apt.id"
                :id="'apt-' + apt.id"
                @dblclick="openAppointmentPopupForExistingAppointment(apt.id)"
              >
                <p class="patientsName">{{ apt.patient.name }}</p>

                <div
                  class="resizer se"
                  @mousedown="resizingOnMouseDown($event, apt.id)"
                ></div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="../js/resourceTimeline.js"></script>
<style src="../style/styleSheet.css" />
