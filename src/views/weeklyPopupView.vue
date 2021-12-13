<template>
  <div class="ms-5 mt-5 popoverContainer">
    <!-- <a class="close" @click="onClosePopup()" href="#">&times;</a> -->
    <div>
      <div class="row justify-content-between firstHeader">
        <div class="col-10 pt-4 firstHeaderHeading">
          Schedule
        </div>
        <div class="col-1" style="margin-right:-43px">
          <a href="javascript:void(0)" @click="$emit('close')">
            <i class="bi bi-x popoverCross"></i
          ></a>
        </div>
      </div>
      <div class="row justify-content-between SecondHeader mt-2">
        <div
          class="col-6 mt-2"
          v-if="slotCarer && Object.keys(slotCarer).length > 0"
        >
          <i class="bi bi-person personIcon ps-3"></i>
          <span style="font-size:15px;padding-left:7px">{{
            slotCarer.name
          }}</span>
        </div>
        <div class="col-3">
          <div class="timelineViewName" style="width: 90%">
            <i class="calendarIcon" />
            <p class="calender_text">
              Week
              <!-- {{ view.charAt(0).toUpperCase() + view.slice(1) }} -->
            </p>
            <a href="javascript:void(0);">
              <i class="bi bi-chevron-down downIcon" />
            </a>
            <a href="javascript:void(0);">
              <i class="bi bi-chevron-up upIcon" />
            </a>
          </div>
        </div>
        <div class="col-3">
          <div class="weekSelector" id="weekCard">
            <i
              class="bi bi-chevron-left"
              style="color:#43da9f;cursor:pointer"
              @click="getPreviousWeekDayRange"
            ></i>
            <p style="margin: 0px 5px 0px 5px">
              <!-- 6th Dec - 12th Dec -->
              {{ dateFormatter(firstWeekday) }} -
              {{ dateFormatter(lastWeekday) }}
            </p>
            <i
              class="bi bi-chevron-right"
              style="color:#43da9f;cursor:pointer;"
              @click="getNextWeekDayRange"
            ></i>
          </div>
        </div>
      </div>
      <div class="row justify-content-center timeRow mt-2">
        <div class="col-12 mt-2  mainContainer2" style="height:auto">
          <table class="dates">
            <thead>
              <tr>
                <th class="weeklyDaysHeader"></th>
                <th
                  v-for="(time, timeIndex) in timeRanges"
                  :key="time + '-' + timeIndex"
                  class=" table_header"
                >
                  <div v-if="time == currentTimeSlot">
                    <i
                      style="font-size:30px;color:darkgray;margin-top:-30px;position:absolute"
                      class="bi bi-caret-down-fill"
                    ></i>
                  </div>

                  <div>
                    {{ time }}
                  </div>
                  <div v-if="time == currentTimeSlot">
                    <div class="verticalLine" />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="index in 7" class="tableRow" :key="'day-' + index">
                <td class="weeklyDaysHeader">{{ getDay(index) }}</td>
                <td
                  class="data-cell-popup weeklyDaysHeader"
                  v-for="(time, timeIndex) in timeRanges"
                  :key="time + '-' + timeIndex"
                ></td>
              </tr>
              <!-- <tr class="tableRow">
                <td class="weeklyDaysHeader">Tuesday</td>
                <td
                  class="data-cell-popup weeklyDaysHeader"
                  v-for="(time, timeIndex) in timeRanges"
                  :key="time + '-' + timeIndex"
                ></td>
              </tr> -->
            </tbody>
          </table>
          <div
            v-for="apt in carerAppointments"
            :id="'popup-apt-' + apt.id"
            :key="'popup-apt-' + apt.id"
            class="table-area-selected"
          >
            <p class="patientsName">{{ apt.patient.name }}</p>
          </div>
        </div>
      </div>

      <div class="row mt-4 justify-content-end">
        <div class="col-4" style="margin-right:-6%">
          <button
            :disabled="!selectedClient || !selectedClient.id"
            @click="saveAppointment"
            type="button"
            class="btn btn-primary ms-5 mb-4 assignClientBtn"
            style="cursor: pointer;background-color: rgba(67, 218, 159, 1);border-radius: 10px;border-color: rgba(67, 218, 159, 1);height:85%"
          >
            Apply template to
          </button>
        </div>
        <div class="col-4">
          <div class="weekSelector" id="weekCard">
            <i
              class="bi bi-chevron-left"
              style="color:#43da9f;cursor:pointer"
              @click="getPreviousApplyToWeekDayRange"
            ></i>
            <p style="margin: 0px 5px 0px 5px">
              <!-- 6th Dec - 12th Dec -->
              {{ dateFormatter(applyToFirstWeekday) }} -
              {{ dateFormatter(applyToLastWeekday) }}
            </p>
            <i
              class="bi bi-chevron-right"
              style="color:#43da9f;cursor:pointer;"
              @click="getNextApplyToWeekDayRange"
            ></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import VueTimepicker from "vue3-timepicker/src/VueTimepicker.vue";
import Datepicker from "vue3-datepicker";
import { ref } from "vue";
import _ from "lodash";
import jQuery from "jquery";
import { startOfWeek, endOfWeek } from "date-fns";

export default {
  name: "popup-appointment",
  props: {
    slotCarer: {
      type: Object,
      default: function() {
        return {};
      },
    },
    weekStart: {
      type: Date,
      default: function() {
        return "";
      },
    },
    weekEnd: {
      type: Date,
      default: function() {
        return "";
      },
    },
  },
  data() {
    return {
      startTime: "",
      endTime: "",
      carerId: "",
      duration: "",
      firstWeekday: "",
      lastWeekday: "",
      applyToLastWeekday: "",
      applyToFirstWeekday: "",
      date: ref(new Date()),
      timeRanges: [],
    };
  },
  components: {
    VueTimepicker,
    Datepicker,
  },
  created() {
    var _this = this;
    _this.createTimeInterval();
    this.modelData();
    // _this.allPatients = _this.$parent.patients;
    // _this.filteredPatients = _.cloneDeep(_this.allPatients);
  },
  mounted() {
    this.filterAppointments();
  },
  emits: ["close", "delete", "save"],
  computed: {
    currentTimeSlot: function() {
      var date = new Date();
      date.setHours(date.getHours() + Math.round(date.getMinutes() / 60));
      date.setMinutes(0, 0, 0);
      return date.toLocaleTimeString([], {
        hourCycle: "h23",
        hour: "2-digit",
        minute: "2-digit",
      });
    },
  },
  methods: {
    modelData: function() {
      var _this = this;
      _this.firstWeekday = _this.weekStart;
      _this.lastWeekday = _this.weekEnd;
      _this.getCurrentApplyToWeekDayRange();
    },
    timeChange: function(type) {
      if (type == "start") {
        this.calculateDuration();
      } else if (type == "end") {
        this.calculateDuration();
      }
    },
    calculateDuration: function() {
      if (this.startTime != "" && this.endTime != "") {
        var ary1 = this.startTime;
        ary1 = ary1.split(":");
        // console.log(ary1);
        var ary2 = this.endTime;
        ary2 = ary2.split(":");
        // console.log(ary2);
        if (
          ary1[0] != "HH" &&
          ary1[1] != "mm" &&
          ary2[0] != "HH" &&
          ary2[1] != "mm"
        ) {
          var minsdiff =
            parseInt(ary2[0], 10) * 60 +
            parseInt(ary2[1], 10) -
            parseInt(ary1[0], 10) * 60 -
            parseInt(ary1[1], 10);
          var duration =
            String(100 + Math.floor(minsdiff / 60)).substr(1) +
            ":" +
            String(100 + (minsdiff % 60)).substr(1);
          duration = duration.split(":");
          this.duration = duration[0] + " hours, " + duration[1] + " minutes";
        }
      }
    },
    onClosePopup: function() {
      this.$emit("close");
    },
    createTimeInterval: function() {
      let items = [];
      for (var hour = 0; hour < 24; hour++) {
        items.push([hour, 0]);
      }

      var date = new Date();
      var formatter = new Intl.DateTimeFormat("en-US", {
        hour: "numeric",
        minute: "numeric",
        hourCycle: "h23",
      });

      this.timeRanges = items.map((time) => {
        const [hour, minute] = time;
        date.setHours(hour);
        date.setMinutes(minute);

        return formatter.format(date);
      });
    },
    filterAppointments: function() {
      var _this = this;
      _this.carerAppointments = _.filter(
        _this.$parent.allAppointments,
        function(o) {
          return (
            o.date.toDateString() === _this.date.toDateString() &&
            o.carer.id == _this.slotCarer.id
          );
        }
      );
      _this.$nextTick(() => {
        _.each(_this.carerAppointments, (apt, aptIndex) => {
          var timeCell = apt.startTime.split(":");
          apt.cell = parseInt(timeCell[0]);
          var duration = _this.calculateDuration(apt.startTime, apt.endTime);
          var colSpan = duration[0] + duration[1] / 60;
          _this.jQueryForArea(apt.cell, apt.id, colSpan);
        });
      });
    },
    jQueryForArea: function(cellNumber, aptId, colSpan) {
      var jQueryselected = jQuery("#popup-apt-" + aptId);

      var jQuerycells = jQuery("table").find(".data-cell-popup");
      if (!colSpan) {
        colSpan = 1;
      }
      var jQuerycurrentCell = jQuery(jQuerycells[cellNumber]);
      var cellWidth = jQuerycurrentCell.outerWidth();

      jQueryselected.css("width", cellWidth * colSpan);
      jQueryselected.css("height", jQuerycurrentCell.outerHeight() - 2); // fiddle factor
      jQueryselected.css("top", jQuerycurrentCell.position().top);
      jQueryselected.css("left", jQuerycurrentCell.position().left);
    },
    calculateDuration: function(startTime, endTime) {
      var ary1 = startTime;
      ary1 = ary1.split(":");
      var ary2 = endTime;
      ary2 = ary2.split(":");
      var minsdiff =
        parseInt(ary2[0], 10) * 60 +
        parseInt(ary2[1], 10) -
        parseInt(ary1[0], 10) * 60 -
        parseInt(ary1[1], 10);
      var duration =
        String(100 + Math.floor(minsdiff / 60)).substr(1) +
        ":" +
        String(100 + (minsdiff % 60)).substr(1);
      duration = duration.split(":");
      duration[0] = parseInt(duration[0]);
      duration[1] = parseInt(duration[1]);
      return duration;
    },
    dateFormatter: function(date) {
      // date = new Date(date);
      if (typeof date == "number") {
        date = new Date(date);
      }
      var shortMonth = date.toLocaleString("en-us", { month: "short" });
      const english_ordinal_rules = new Intl.PluralRules("en", {
        type: "ordinal",
      });
      const suffixes = {
        one: "st",
        two: "nd",
        few: "rd",
        other: "th",
      };
      var dayOfMonth = date.getDate();
      const suffix = suffixes[english_ordinal_rules.select(dayOfMonth)];
      return dayOfMonth + suffix + " " + shortMonth;
    },
    getCurrentApplyToWeekDayRange: function() {
      var _this = this;
      var date;
      if (typeof _this.lastWeekday == "number") {
        date = new Date(_this.lastWeekday);
      } else {
        date = _this.lastWeekday;
      }
      this.applyToFirstWeekday = startOfWeek(date, { weekStartsOn: 1 });
      this.applyToLastWeekday = endOfWeek(date, { weekStartsOn: 1 });
    },
    getPreviousWeekDayRange: function() {
      var _this = this;
      var date;
      if (typeof _this.firstWeekday == "number") {
        date = new Date(_this.firstWeekday);
      } else {
        date = _this.firstWeekday;
      }
      var dummy = date.getDay();
      dummy = dummy + 6;
      _this.firstWeekday = date.setDate(date.getDate() - dummy);
      _this.lastWeekday = date.setDate(date.getDate() + 6);

      _this.firstWeekday = new Date(_this.firstWeekday);
      _this.lastWeekday = new Date(_this.lastWeekday);

      _this.appointments = _.filter(_this.allAppointments, function(o) {
        return (
          o.date.getTime() <= _this.lastWeekday.getTime() &&
          o.date.getTime() >= _this.firstWeekday.getTime() &&
          // o.date.toDateString() === _this.date.toDateString() &&
          o.carer.id === _this.selectedCarerId
        );
      });
      _this.$nextTick(() => {
        _this.dataShaperForWeekView();
      });
    },
    getNextWeekDayRange: function() {
      var _this = this;
      var date;
      if (typeof _this.firstWeekday == "number") {
        date = new Date(_this.firstWeekday);
      } else {
        date = _this.firstWeekday;
      }
      var nextweek = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate() + 7
      );
      _this.firstWeekday = startOfWeek(nextweek, { weekStartsOn: 1 });
      _this.lastWeekday = endOfWeek(nextweek, { weekStartsOn: 1 });
      _this.appointments = _.filter(_this.allAppointments, function(o) {
        return (
          o.date.getTime() <= _this.lastWeekday.getTime() &&
          o.date.getTime() >= _this.firstWeekday.getTime() &&
          // o.date.toDateString() === _this.date.toDateString() &&
          o.carer.id === _this.selectedCarerId
        );
      });
      _this.$nextTick(() => {
        _this.dataShaperForWeekView();
      });
    },
    getPreviousApplyToWeekDayRange: function() {
      var _this = this;
      var date;
      if (typeof _this.applyToFirstWeekday == "number") {
        date = new Date(_this.applyToFirstWeekday);
      } else {
        date = _this.applyToFirstWeekday;
      }
      var dummy = date.getDay();
      dummy = dummy + 6;
      _this.applyToFirstWeekday = date.setDate(date.getDate() - dummy);
      _this.applyToLastWeekday = date.setDate(date.getDate() + 6);

      _this.applyToFirstWeekday = new Date(_this.applyToFirstWeekday);
      _this.applyToLastWeekday = new Date(_this.applyToLastWeekday);
    },
    getNextApplyToWeekDayRange: function() {
      var _this = this;
      var date;
      if (typeof _this.applyToFirstWeekday == "number") {
        date = new Date(_this.applyToFirstWeekday);
      } else {
        date = _this.applyToFirstWeekday;
      }
      var nextweek = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate() + 7
      );
      _this.applyToFirstWeekday = startOfWeek(nextweek, { weekStartsOn: 1 });
      _this.applyToLastWeekday = endOfWeek(nextweek, { weekStartsOn: 1 });
    },
    getDay: function(dayNumber) {
      var weekday = new Array(7);
      weekday[1] = "Monday";
      weekday[2] = "Tuesday";
      weekday[3] = "Wednesday";
      weekday[4] = "Thursday";
      weekday[5] = "Friday";
      weekday[6] = "Saturday";
      weekday[7] = "Sunday";
      return weekday[dayNumber];
    },
  },
};
</script>

<style src="../style/popup.css" />
