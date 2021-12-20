<template>
  <div class="home">
    <sidebar />

    <div class="main-content">
      <navbar />
      <carerHeader />

      <div class="inner-content">
        <div class="calender_container">
          <div class="timelineViewName">
            <i class="calendarIcon" />
            <p class="calender_text">
              {{ view.charAt(0).toUpperCase() + view.slice(1) }}
            </p>
            <a href="javascript:void(0);" @click="viewChange('up')">
              <i class="bi bi-chevron-down downIcon" />
            </a>
            <a href="javascript:void(0);" @click="viewChange('down')">
              <i class="bi bi-chevron-up upIcon" />
            </a>
          </div>
          <datepicker
            v-if="view == 'today'"
            @selected="onChangeDate"
            class="group_calender"
            v-model="date"
            :inputFormat="'EEEE, dd MMMM yyyy'"
          />
          <!-- <i class="fas fa-caret-down"></i> -->
          <div v-if="view == 'week'" class="weekSelector" id="weekCard">
            <i
              class="bi bi-chevron-left"
              style="color:#43da9f;cursor:pointer"
              @click="getPreviousWeekDayRange"
            ></i>
            <p style="margin: 0px 5px 0px 5px">
              {{ dateFormatter(firstWeekday) }} -
              {{ dateFormatter(lastWeekday) }}
            </p>
            <i
              class="bi bi-chevron-right"
              style="color:#43da9f;cursor:pointer;"
              @click="getNextWeekDayRange"
            ></i>
          </div>
          <div v-if="view == 'month'" class="weekSelector" id="weekCard">
            <i
              class="bi bi-chevron-left"
              style="color:#43da9f;cursor:pointer"
              @click="getPreviousMonth"
            ></i>
            <p style="margin: 0px 5px 0px 5px">
              {{ month }}, {{ yearForMonth }}
            </p>
            <i
              class="bi bi-chevron-right"
              style="color:#43da9f;cursor:pointer;"
              @click="getNextMonth"
            ></i>
          </div>
          <template v-if="view == 'week'">
            <div
              class="weekday"
              @click="addToWeekday(0)"
              :style="{ background: dayExists(0) ? dayColors[0] : '' }"
            >
              <span
                class="dayname"
                :style="{ color: dayExists(0) ? 'white' : '' }"
                >Mon</span
              >
            </div>
            <div
              class="weekday"
              @click="addToWeekday(1)"
              :style="{ background: dayExists(1) ? dayColors[1] : '' }"
            >
              <span
                class="dayname"
                :style="{ color: dayExists(1) ? 'white' : '' }"
                >Tue</span
              >
            </div>
            <div
              class="weekday"
              @click="addToWeekday(2)"
              :style="{ background: dayExists(2) ? dayColors[2] : '' }"
            >
              <span
                class="dayname"
                :style="{ color: dayExists(2) ? 'white' : '' }"
                >Wed</span
              >
            </div>
            <div
              class="weekday"
              @click="addToWeekday(3)"
              :style="{ background: dayExists(3) ? dayColors[3] : '' }"
            >
              <span
                class="dayname"
                :style="{ color: dayExists(3) ? 'white' : '' }"
                >Thur</span
              >
            </div>
            <div
              class="weekday"
              @click="addToWeekday(4)"
              :style="{ background: dayExists(4) ? dayColors[4] : '' }"
            >
              <span
                class="dayname"
                :style="{ color: dayExists(4) ? 'white' : '' }"
                >Fri</span
              >
            </div>
            <div
              class="weekday"
              @click="addToWeekday(5)"
              :style="{ background: dayExists(5) ? dayColors[5] : '' }"
            >
              <span
                class="dayname"
                :style="{ color: dayExists(5) ? 'white' : '' }"
                >Sat</span
              >
            </div>
            <div
              class="weekday"
              @click="addToWeekday(6)"
              :style="{ background: dayExists(6) ? dayColors[6] : '' }"
            >
              <span
                class="dayname"
                :style="{ color: dayExists(6) ? 'white' : '' }"
                >Sun</span
              >
            </div>
          </template>
          <div class="card_head" id="card2">
            <td @click="onShowWeeklyViewPopup" style="min-width: 200px;">
              Required hours: 52h, 15m
            </td>
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
          <div class="threeVerticalDots__wrapper">
            <i class="bi bi-three-dots-vertical threeVerticalDots ">
              <div class="threeVerticalDots__content">
                <div
                  class="row justify-content-start ps-2 firstHeader firstOption"
                  style="cursor:pointer;font-weight:bolder"
                >
                  Apply Template
                </div>
                <div
                  class="row justify-content-center"
                  style="margin-top:-5px;margin-bottom:-5px"
                >
                  <hr class="threeVerticalDotsDropDown_line" />
                </div>
                <div
                  class="row justify-content-start ps-2 firstHeader firstOption"
                  style="cursor:pointer; font-weight:bolder"
                >
                  Auto Assign Unallocated Visit
                </div>
              </div>
            </i>
          </div>
        </div>

        <div class="table-area mainContainer">
          <popup-appointment
            v-if="showAppointmentPopup"
            :appointment="appointmentForPopup"
            :is-existing="existingAppointment"
            :slot-start-time="slotStartTime"
            :slot-end-time="slotEndTime"
            :slot-date="date"
            :slot-carer="slotCarer"
            @close="onCloseAppointmentPopup"
            @delete="deleteAppointment"
            @save="saveAppointment"
          ></popup-appointment>

          <allocate-carer
            v-if="showAllocatePopup"
            :appointment="appointmentForPopup"
            :is-existing="existingAppointment"
            :slot-start-time="slotStartTime"
            :slot-end-time="slotEndTime"
            :slot-date="date"
            :slot-carer="slotCarer"
            @close="onCloseAllocatePopup"
            @save="saveAppointmentConfirm"
          ></allocate-carer>

          <carer-profile-popup
            v-if="showCarerDetailPopup"
            :slot-carer="slotCarer"
            @close="onCloseCarerDetailPopup"
          ></carer-profile-popup>

          <weekly-view-popup
            v-if="showWeeklyViewPopup"
            :week-start="firstWeekday"
            :week-end="lastWeekday"
            :slot-carer="slotCarer"
            @close="onCloseWeeklyViewPopup"
            @save="saveAppointment"
          ></weekly-view-popup>

          <div v-if="showCover" class="cover"></div>

          <!-- <div class="loaderOverlay">
            <div class="loader"></div>
          </div> -->

          <table class="dates">
            <thead>
              <tr>
                <th class="search_box table_header">
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
                    src="data:image/png;base64,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
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
                  <div
                    @click="sortBy"
                    :class="
                      sortCarers
                        ? 'filterContainerSelected'
                        : 'filterContainerUnSelected'
                    "
                  >
                    <i class="bi bi-funnel filterIcon"></i>
                  </div>
                </th>
                <template v-if="view != 'month'">
                  <th
                    v-for="(time, timeIndex) in timeRanges"
                    :key="time + '-' + timeIndex"
                    class=" table_header"
                  >
                    <div v-if="time == currentTimeSlot">
                      <i
                        style="font-size:30px;color:darkgray;margin-top:-40px;position:absolute"
                        class="bi bi-caret-down-fill"
                      ></i>
                    </div>

                    <div>
                      {{ time }}
                    </div>
                    <template
                      v-for="carer in carers"
                      :key="'slot-line-' + carer.id"
                    >
                      <div v-if="time == currentTimeSlot">
                        <div class="verticalLine" />
                      </div>
                    </template>
                  </th>
                </template>
                <!-- Monthly table header -->
                <template v-else>
                  <th
                    v-for="dayIndex in 7"
                    :key="dayIndex"
                    class="monthlyViewHeader"
                  >
                    <div class="monthlyViewHeaderText">
                      {{ getDay(dayIndex) }}
                    </div>
                  </th>
                </template>
              </tr>
            </thead>
            <tbody>
              <!-- <template v-if="view != 'month'"> -->
              <tr
                v-for="(carer, carerIndex) in carers"
                :key="carer.id + '-' + carerIndex"
                class="tableRow"
                @click="selectCarer(carer.id)"
              >
                <main
                  class="container"
                  :class="{
                    'selected-carer':
                      carer.id == selectedCarerId &&
                      (view == 'week' || view == 'month'),
                  }"
                >
                  <div class="card">
                    <div @click="onShowCarerDetailPopup" class="img"></div>
                    <div class="content">
                      <div className="carerContent" style="min-width: 200px;">
                        <div class="carerName">
                          <p>{{ carer.name }}</p>
                        </div>
                        <div class="carerDesignation" style="margin-top:-9%">
                          {{ carer.designation }}
                        </div>
                      </div>
                    </div>
                  </div>
                </main>
                <div class="carer_timeLine" v-if="view == 'today'">
                  <hr class="appointmentTimeline" />
                </div>
                <template v-if="view == 'today'">
                  <td
                    class="data-cell"
                    v-for="(time, timeIndex) in timeRanges"
                    :key="calculateKey(carerIndex, time)"
                    @dblclick="
                      openAppointmentPopupForNewAppointment(
                        time,
                        timeIndex,
                        carerIndex
                      )
                    "
                  ></td>
                </template>
                <template v-else-if="view == 'week' && carerIndex < 7">
                  <td
                    class="data-cell"
                    v-for="(time, timeIndex) in timeRanges"
                    :class="dayExists(carerIndex) ? 'data-cell-selected' : ''"
                    :key="calculateKey(carerIndex, time)"
                    @dblclick="
                      openAppointmentPopupForNewAppointment(
                        time,
                        timeIndex,
                        carerIndex
                      )
                    "
                  ></td>
                </template>
                <!-- monthly slots -->
                <template v-if="view == 'month'">
                  <td
                    class="monthlyDataCell"
                    v-for="day in getCellRowForMonthView(carerIndex)"
                    :key="'day-' + day"
                  >
                    {{ day }}
                  </td>
                </template>
              </tr>
              <!-- </template> -->
            </tbody>

            <div
              v-if="view == 'week' || view == 'month'"
              class="statsContainer row"
            >
              <div class="leftStatsContainerSide col-2"></div>
              <div class="rightStatsContainerSide col">
                <div class="row pt-4">
                  <div class="col border-end border-2">
                    <div class="row justify-content-center statsValue">12</div>
                    <div class="row justify-content-center">
                      <hr class="statsTextUnderline" />
                    </div>
                    <div class="row justify-content-center statsText">
                      Shifts Drop
                    </div>
                  </div>
                  <div class="col border-end border-2">
                    <div class="row justify-content-center statsValue">200</div>
                    <div class="row justify-content-center">
                      <hr class="statsTextUnderline" />
                    </div>
                    <div class="row justify-content-center statsText">
                      Total Shifts
                    </div>
                  </div>
                  <div class="col border-end border-2">
                    <div class="row justify-content-center statsValue">50</div>
                    <div class="row justify-content-center">
                      <hr class="statsTextUnderline" />
                    </div>
                    <div class="row justify-content-center statsText">
                      Cancelled
                    </div>
                  </div>
                  <div class="col border-end border-2">
                    <div class="row justify-content-center">
                      <img
                        class="statsMeter"
                        src="../images/icons/blueMeter.png"
                        alt="blueMeter"
                      />
                    </div>
                    <div class="row justify-content-center statsText">
                      Punctuality
                    </div>
                  </div>
                  <div class="col border-end border-2">
                    <div class="row justify-content-center">
                      <img
                        class="statsMeter"
                        src="../images/icons/greenMeter.png"
                        alt="blueMeter"
                      />
                    </div>
                    <div class="row justify-content-center statsText">
                      Duration Spent
                    </div>
                  </div>
                  <div class="col">
                    <div class="row justify-content-center mt-2">
                      <div class="col-3">
                        <img
                          class="lastColumnIcon"
                          src="../images/icons/Planned-Time.png"
                          alt="blueMeter"
                        />
                      </div>
                      <div class="col-6 lastColumnText">Planned Time</div>
                      <div class="col-3 lastColTime">01:30 hrs</div>
                    </div>
                    <div class="row justify-content-center mt-3">
                      <div class="col-3">
                        <img
                          class="lastColumnIcon"
                          src="../images/icons/Actual-Time.png"
                          alt="blueMeter"
                        />
                      </div>
                      <div class="col-6 lastColumnText">Actual Time</div>
                      <div class="col-3 lastColTime">02:20 hrs</div>
                    </div>
                    <div class="row justify-content-center mt-3">
                      <div class="col-3">
                        <img
                          class="lastColumnIcon"
                          src="../images/icons/Travel-Time.png"
                          alt="blueMeter"
                        />
                      </div>
                      <div class="col-6 lastColumnText">Travel Time</div>
                      <div class="col-3 lastColTime">00:04 mins</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </table>

          <template v-if="appointmentFixed && view != 'month'">
            <div v-for="apt in appointments" :key="apt.id">
              <div
                class="table-area-selected popover__wrapper "
                :class="'se-' + apt.id"
                :id="'apt-' + apt.id"
                @dblclick="openAppointmentPopupForExistingAppointment(apt.id)"
              >
                <p class="patientsName ">{{ apt.patient.name }}</p>
                <!-- <div class="popover__content">
                  <div class="row justify-content-between firstHeader">
                    <div
                      @click="
                        openAppointmentPopupForExistingAppointment(apt.id)
                      "
                      class="col-10 firstOption"
                    >
                      Allocate Someone Else
                    </div>
                  </div>
                  <div class="row justify-content-center">
                    <hr class="optionalTextUnderline" />
                  </div>
                  <div class="row justify-content-between firstHeader">
                    <div class="col-10 firstOption">
                      View Visit Details
                    </div>
                    <div class="col-2"></div>
                  </div>
                </div> -->

                <!-- Allocate Carer Profile -->
                <div class="allocateCarerProfilePopover">
                  <div class="row justify-content-end firstHeader">
                    <div class="col-2 pt-1">
                      <a @click="$emit('close')">
                        <i class="bi bi-x popoverCross"></i
                      ></a>
                    </div>
                  </div>
                  <div class="row justify-content-center">
                    <img
                      class="profileImage"
                      src="../images/icons/profileImage.png"
                      alt="profileImage"
                    />
                  </div>
                  <div class="row justify-content-center carerNameHead">
                    <h3>Emma Phillips</h3>
                  </div>
                  <div
                    class="row justify-content-center carerDesignationHead"
                    style="margin-top:-15px"
                  >
                    <h3>Designation here</h3>
                  </div>
                  <div
                    class="row justify-content-center"
                    style="margin-top:-15px"
                  >
                    <hr class="profileTextUnderline" />
                  </div>
                  <div class="row justify-content-center mt-2 ps-3">
                    <div class="col-2 justify-content-start ps-4">
                      <img
                        class="phoneIcon"
                        src="../images/icons/phoneIcon.png"
                        alt="phoneIcon"
                      />
                    </div>
                    <div
                      class="col-10 justify-content-start carerPhoneNumber"
                      style="text-align:start;"
                    >
                      <p style="margin-top:-10px">
                        +44 123 4567 890
                      </p>
                    </div>
                  </div>
                  <div class="row justify-content-center ps-3">
                    <div class="col-2 justify-content-start ps-4">
                      <img
                        class="locationIcon"
                        src="../images/icons/location.png"
                        alt="locationIcon"
                      />
                    </div>
                    <div
                      class="col-10 justify-content-start carerPhoneNumber"
                      style="text-align:start;"
                    >
                      <p style="margin-top:-10px">Lorem ispum ninem instant</p>
                    </div>
                  </div>
                </div>
                <div
                  class="resizer se"
                  @mousedown="resizingOnMouseDown($event, apt.id)"
                ></div>
              </div>
            </div>
          </template>
          <template v-if="appointmentFixed && view == 'month'">
            <template v-for="(apt, aptIndex) in appointmentsForMonthlyView">
              <div
                v-if="apt.length > 0"
                :key="aptIndex"
                :id="'monthly-apt-' + aptIndex"
                class="table-area-selected"
              >
                <p class="patientsName ">Appointments # {{ apt.length }}</p>
              </div>
            </template>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="../js/resourceTimeline.js"></script>
<style src="../style/styleSheet.css" />
<style src="../style/monthlyView.css" />
<style src="../style/stats.css" />
