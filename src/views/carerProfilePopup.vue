<template>
  <div class="ms-5 mt-5 carerPopoverContainer">
    <div>
      <div class="row justify-content-end firstHeader">
        <div class="col-1">
          <a @click="$emit('close')"> <i class="bi bi-x popoverCross"></i></a>
        </div>
      </div>
      <div class="row justify-content-center">
        <img
          class="profileImage"
          src="../images/icons/profileImage.png"
          alt="profileImage"
        />
      </div>
      <div class="row justify-content-center carerNameHead pt-3">
        <h3>Emma Phillips</h3>
      </div>
      <div class="row justify-content-center carerDesignationHead pt-1">
        <h3>Designation here</h3>
      </div>
      <div class="row justify-content-center">
        <hr class="profileTextUnderline" />
      </div>
      <div class="row justify-content-center mt-4">
        <div class="col-2 justify-content-start ps-5">
          <img
            class="phoneIcon"
            src="../images/icons/phoneIcon.png"
            alt="phoneIcon"
          />
        </div>
        <div class="col-10 justify-content-start carerPhoneNumber">
          <p>+44 123 4567 890</p>
        </div>
      </div>
      <div class="row justify-content-center mt-2 mb-4">
        <div class="col-2 justify-content-start ps-5">
          <img
            class="locationIcon"
            src="../images/icons/location.png"
            alt="locationIcon"
          />
        </div>
        <div class="col-10 justify-content-start carerPhoneNumber">
          <p>Lorem ispum ninem instant</p>
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
  name: "carer-profile-popup",
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
      carer: {},
      selectedCarer: {},
      timeRanges: [],
      carerAppointments: [],
      allCarers: [],
      filteredCarers: [],
    };
  },
  components: {
    VueTimepicker,
    Datepicker,
  },
  created() {
    var _this = this;
    _this.allCarers = _this.$parent.carers;
    _this.filteredCarers = _.cloneDeep(_this.allCarers);
  },
  mounted() {
    this.modelData();
  },
  emits: ["close", "save"],
  methods: {
    modelData: function() {
      var _this = this;
      if (!_.isEmpty(_this.appointment)) {
        _this.startTime = _this.appointment.startTime;
        _this.endTime = _this.appointment.endTime;
        _this.carerId = _this.appointment.carer.id;
        _this.date = new Date(_this.appointment.date);
        _this.calculateDuration(_this.startTime, _this.endTime);
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
        requestBody.carer = { id: this.selectedCarer.id };
        requestBody.patient = this.appointment.patient;
        requestBody.startTime = this.startTime;
        requestBody.endTime = this.endTime;
        requestBody.id = this.appointment.id;
        requestBody.date = this.date;
        requestBody.date.setHours(0, 0, 0);
      } else {
        requestBody.carer = { id: this.slotCarer.id };
        requestBody.patient = this.appointment.patient;
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
    selectCarer: function(carer, carerIndex) {
      var _this = this;
      _this.selectedCarer = carer;
      _this.$forceUpdate();
    },
    filterCarers: function() {
      var _this = this;
      _this.filteredCarers = _.filter(_this.allCarers, (carer) => {
        var carerName = carer.name.toLowerCase();
        var searchString = _this.searchQuery.toLowerCase();
        return carerName.includes(searchString);
      });
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
  },
};
</script>

<style src="../style/popup.css" />
