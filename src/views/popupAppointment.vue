<template>
  <div class="ms-5 mt-5 popoverContainer">
    <!-- <a class="close" @click="onClosePopup()" href="#">&times;</a> -->
    <div>
      <div class="row justify-content-between firstHeader">
        <div class="col-10 pt-4 firstHeaderHeading">
          Allocate New Client
        </div>
        <div class="col-1" style="margin-right:-43px">
          <a href="javascript:void(0)" @click="$emit('close')">
            <i class="bi bi-x popoverCross"></i
          ></a>
        </div>
      </div>
      <div class="row justify-content-between SecondHeader mt-2">
        <div
          class="col-8 mt-2"
          v-if="slotCarer && Object.keys(slotCarer).length > 0"
        >
          <i class="bi bi-person personIcon ps-3"></i>
          <span style="font-size:15px;padding-left:7px">{{
            slotCarer.name
          }}</span>
        </div>
        <div class="col-4 search_input">
          <input
            v-model="searchQuery"
            class="searchInput"
            type="text"
            placeholder="Search"
            @input="filterPatients"
          />
          <i class="bi bi-search search_input_icon"></i>
        </div>
      </div>
      <div class="row justify-content-center timeRow mt-2">
        <div class="col-12 mt-2  mainContainer2">
          <table class="dates">
            <thead>
              <tr>
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
              <tr class="tableRow">
                <td
                  class="data-cell-popup"
                  v-for="(time, timeIndex) in timeRanges"
                  :key="time + '-' + timeIndex"
                ></td>
              </tr>
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

      <div class="row justify-content-center clientTableContainer mt-2">
        <table class="clientDetailsTable">
          <thead class="clientDetailsTableHeader">
            <tr>
              <th class="clientTableHeader">
                Clients<i class="bi bi-chevron-down downChivronStyle" /><i
                  class="bi bi-chevron-up upChivronStyle"
                />
              </th>
              <th class="clientTableHeader">
                Availability<i class="bi bi-chevron-down downChivronStyle" /><i
                  class="bi bi-chevron-up upChivronStyle"
                />
              </th>
              <th class="clientTableHeader">
                Continuity<i class="bi bi-chevron-down downChivronStyle" /><i
                  class="bi bi-chevron-up upChivronStyle"
                />
              </th>
              <th class="clientTableHeader">
                Capacity<i class="bi bi-chevron-down downChivronStyle" /><i
                  class="bi bi-chevron-up upChivronStyle"
                />
              </th>
              <th class="clientTableHeader">
                Distance<i class="bi bi-chevron-down downChivronStyle" /><i
                  class="bi bi-chevron-up upChivronStyle"
                />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(patient, patientIndex) in filteredPatients"
              :key="patient.id + '-' + patientIndex"
              @click="selectClient(patient, patientIndex)"
              :style="[
                selectedClient && selectedClient.id == patient.id
                  ? { 'background-color': 'yellow' }
                  : '',
              ]"
            >
              <td
                class="clientTableData carerNameCol"
                :class="{
                  clientTableRow:
                    selectedClient && selectedClient.id == patient.id,
                }"
              >
                <div class="row justify-content-center">
                  <div class="col-3">
                    <img
                      class="carerIcons"
                      src="../images/icons/user-image.png"
                      alt="marchart"
                    />
                  </div>
                  <div class="col-6 carers_name">
                    {{ patient.name }}
                  </div>
                </div>
              </td>
              <td
                class="clientTableData"
                :class="{
                  clientTableRow:
                    selectedClient && selectedClient.id == patient.id,
                }"
              >
                <i class="bi bi-check-circle availabilityIcon"></i>
              </td>
              <td
                class="clientTableData"
                :class="{
                  clientTableRow:
                    selectedClient && selectedClient.id == patient.id,
                }"
              >
                0%
              </td>
              <td
                class="clientTableData"
                :class="{
                  clientTableRow:
                    selectedClient && selectedClient.id == patient.id,
                }"
              >
                2 hours
              </td>
              <td
                class="clientTableData"
                :class="{
                  clientTableRow:
                    selectedClient && selectedClient.id == patient.id,
                }"
              >
                1.2 miles
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="row mt-4">
        <div class="col-9">
          <div class="pagination">
            <a href="#"
              ><i
                style="color:rgba(67, 218, 159, 1)"
                class="bi bi-chevron-left"
              ></i
            ></a>
            <a href="#">1</a>
            <a class="active" href="#">2</a>
            <a href="#">3</a>
            <a href="#">4</a>
            <a href="#"
              ><i
                style="color:rgba(67, 218, 159, 1)"
                class="bi bi-chevron-right"
              ></i
            ></a>
          </div>
        </div>
        <div class="col-3">
          <button
            :disabled="!selectedClient || !selectedClient.id"
            @click="saveAppointment"
            type="button"
            class="btn btn-primary ms-5 mb-4 assignClientBtn"
            style="cursor: pointer;background-color: rgba(67, 218, 159, 1);border-radius: 10px;border-color: rgba(67, 218, 159, 1);"
          >
            Assign Client
          </button>
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

export default {
  name: "popup-appointment",
  props: {
    appointment: {
      type: Object,
      default: function() {
        return {};
      },
    },
    slotCarer: {
      type: Object,
      default: function() {
        return {};
      },
    },
    isExisting: {
      type: Boolean,
      default: function() {
        return false;
      },
    },
    slotStartTime: {
      type: String,
      default: function() {
        return "09:00";
      },
    },
    slotEndTime: {
      type: String,
      default: function() {
        return "17:00";
      },
    },
    slotDate: {
      type: Date,
      default: function() {
        return new Date();
      },
    },
  },
  data() {
    return {
      startTime: "",
      endTime: "",
      carerId: "",
      duration: "",
      searchQuery: "",
      date: ref(new Date()),
      patient: {},
      selectedClient: {},
      timeRanges: [],
      carerAppointments: [],
      allPatients: [],
      filteredPatients: [],
    };
  },
  components: {
    VueTimepicker,
    Datepicker,
  },
  created() {
    var _this = this;
    _this.createTimeInterval();
    _this.allPatients = _this.$parent.patients;
    _this.filteredPatients = _.cloneDeep(_this.allPatients);
  },
  mounted() {
    this.modelData();
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
      if (!_.isEmpty(_this.appointment)) {
        _this.startTime = _this.appointment.startTime;
        _this.endTime = _this.appointment.endTime;
        _this.carerId = _this.appointment.carer.id;
        _this.date = new Date(_this.appointment.date);
        _this.calculateDuration();
      } else {
        _this.startTime = _this.slotStartTime;
        _this.endTime = _this.slotEndTime;
        _this.date = new Date(_this.slotDate);
      }
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
    deleteAppointment: function() {
      var _this = this;
      _this.$emit("delete", _this.appointment.id);
    },
    saveAppointment: function() {
      var requestBody = {};
      if (this.isExisting) {
        requestBody.carer = { id: this.carerId };
        requestBody.patient = this.appointment.patient;
        requestBody.startTime = this.startTime;
        requestBody.endTime = this.endTime;
        requestBody.id = this.appointment.id;
        requestBody.date = this.date;
        requestBody.date.setHours(0, 0, 0);
      } else {
        requestBody.carer = { id: this.slotCarer.id };
        requestBody.patient = this.selectedClient;
        requestBody.startTime = this.startTime;
        requestBody.endTime = this.endTime;
        requestBody.id = this.create_UUID();
        requestBody.date = this.date;
        requestBody.date.setHours(0, 0, 0);
      }
      this.$emit("save", requestBody);
    },
    create_UUID: function() {
      var dt = new Date().getTime();
      var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
        /[xy]/g,
        function(c) {
          var r = (dt + Math.random() * 16) % 16 | 0;
          dt = Math.floor(dt / 16);
          return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
        }
      );
      return uuid;
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
    selectClient: function(client, clientIndex) {
      var _this = this;
      _this.selectedClient = client;
      _this.$forceUpdate();
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
      var slotApt = {
        id: "slotApt",
        // carer: { id: "lorem" },
        patient: {
          id: "patient",
          name: _this.slotStartTime + "-" + _this.slotEndTime,
        },
        date: _this.slotDate,
        startTime: _this.slotStartTime,
        endTime: _this.slotEndTime,
        cell: -1,
      };
      _this.carerAppointments.push(slotApt);

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
    filterPatients: function() {
      var _this = this;
      _this.filteredPatients = _.filter(_this.allPatients, (patient) => {
        var patientName = patient.name.toLowerCase();
        var searchString = _this.searchQuery.toLowerCase();
        return patientName.includes(searchString);
      });
    },
  },
};
</script>

<style src="../style/popup.css" />
