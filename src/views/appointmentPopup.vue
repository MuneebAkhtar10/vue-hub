<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <a class="close" @click="onClosePopup()" href="#">&times;</a>
        <div class="modal-header">
          <div>
            <a class="active" href="#home">Appointment</a>
            <a href="#contact">Care Required</a>
            <a href="#contact">Finance</a>
            <a href="#contact">Notes</a>
            <a href="#contact">Travel</a>
            <a href="#contact">History</a>
            <!-- 
            <div>
              <a
                href="javascript:void(0)"
                title="Cancel"
                @click="$emit('close')"
                >Cancel</a
              >
            </div>
            <div>
              <a
                href="javascript:void(0)"
                title="Delete"
                @click="deleteAppointment"
                >Delete</a
              >
            </div> -->
            <div>
              <a href="javascript:void(0)">View in Schedule</a>
            </div>
          </div>
        </div>
        
        <div class="modal-body">
          <div class="e-start-end-row">
            <label>Client: </label>
            <div style="margin-left: 52px">{{ appointment.patient.name }}</div>
          </div>

          <div class="e-start-end-row">
            <label style="line-height: 30px">Date:  </label>
            <datepicker v-model="date" class="date_pick"/>
          </div>

          <div class="e-start-end-row">
            <label style="line-height: 55px">Time: </label>
            <div style="margin-left: 52px">
              <label>Start Time</label>
              <vue-timepicker
                v-model="startTime"
                :minute-interval="15"
                close-on-complete
                @change="timeChange('start')"
              ></vue-timepicker>
            </div>
            <div>
              <label>End Time</label>
              <vue-timepicker
                v-model="endTime"
                :minute-interval="15"
                close-on-complete
                @change="timeChange('end')"
              ></vue-timepicker>
            </div>
          </div>
          <div class="duration">
            <label>Duration: </label>
            <span style="margin-left: 30px">{{ duration }}</span>
          </div>
          <div class="carer1">
            <label>Carer </label>
            <select class="carer_select" v-model="carerId">
              <option
                v-for="carer in $parent.carers"
                :value="carer.id"
                :key="carer.id"
                >{{ carer.name }}</option
              >
            </select>
            <button class="recommend">Recommend</button>
          </div>
          <!-- <div>
            <label>Carer 2</label>
            <select>
              <option value="Not Required">Not Required</option>
              <option
                v-for="carer in $parent.carers"
                :value="carer.id"
                :key="carer.id"
                >{{ carer.name }}</option
              >
            </select>
            <button>Recommend</button>
          </div> -->
          <div class="carer1">
            <label>Shadow</label>
            <select class="shadow_select">
              <option value="Not Required">Not Required</option>
              <option
                v-for="carer in $parent.carers"
                :value="carer.id"
                :key="carer.id"
                >{{ carer.name }}</option
              >
            </select>
            <button class="recommend">Recommend</button>
          </div>
        </div>
        <!-- footer -->
        <div class="modal-footer">
          <div class="delete">
            <a
              href="javascript:void(0)"
              title="Delete"
              @click="deleteAppointment"
              >Delete</a
            >
          </div>
          <!-- <div>
            <button
              class="modal-default-button"
              href="javascript:void(0)"
              @click="saveAppointment"
            >
              Save
            </button>
          </div> -->
          <div>
            <button
              class="modal-default-button"
              href="javascript:void(0)"
              @click="saveAppointment"
            >
              Save
            </button>
          </div>
          <div>
            <a
              href="javascript:void(0)"
              title="Cancel"
              class="cancel"
              @click="$emit('close')"
            >
              Cancel
            </a>
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

export default {
  name: "appointment-popup",
  props: {
    appointment: {
      type: Object,
      default: function() {
        return {};
      },
    },
  },
  data() {
    return {
      startTime: "",
      endTime: "",
      carerId: "",
      duration: "",
      date: ref(new Date()),
    };
  },
  components: {
    VueTimepicker,
    Datepicker,
  },
  created() {},
  mounted() {
    this.modelData();
  },
  emits: ["close", "delete", "save"],
  computed: {},
  methods: {
    modelData: function() {
      this.startTime = this.appointment.startTime;
      this.endTime = this.appointment.endTime;
      this.carerId = this.appointment.carer.id;
      this.date = new Date(this.appointment.date);
      this.calculateDuration();
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
      requestBody.carer = { id: this.carerId };
      requestBody.patient = this.appointment.patient;
      requestBody.startTime = this.startTime;
      requestBody.endTime = this.endTime;
      requestBody.id = this.appointment.id;
      requestBody.date = this.date;
      this.$emit("save", requestBody);
    },
  },
};
</script>
