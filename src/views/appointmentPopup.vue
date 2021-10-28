<template>
  <body>
    <div>
      <div>
        <a class="active" href="#home">Appointment</a>
        <a href="#contact">Care Required</a>
        <a href="#contact">Finance</a>
        <a href="#contact">Notes</a>
        <a href="#contact">Travel</a>
        <a href="#contact">History</a>
      </div>
    </div>
  </body>
  <div>
    <a href="javascript:void(0)" title="Close" @click="onClosePopup()">X</a>
  </div>
  <div>Client: {{ appointment.patient.name }}</div>
  <div>
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
  <div>
    <label>Duration</label>
    <span>{{ duration }}</span>
  </div>
  <div>
    <label>Carer 1</label>
    <select v-model="carerId">
      <option
        v-for="carer in $parent.carers"
        :value="carer.id"
        :key="carer.id"
        >{{ carer.name }}</option
      >
    </select>
    <button>Recommend</button>
  </div>
  <div>
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
  </div>
  <div>
    <label>Shadow</label>
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
  </div>
  <div>
    <a href="javascript:void(0)" title="Cancel" @click="$emit('close')"
      >Cancel</a
    >
  </div>
  <div>
    <a href="javascript:void(0)" title="Delete" @click="deleteAppointment"
      >Delete</a
    >
  </div>
  <div>
    <a href="javascript:void(0)">View in Schedule</a>
  </div>
  <div>
    <a href="javascript:void(0)" @click="saveAppointment">Save</a>
  </div>
  <div>
    <a href="javascript:void(0)" @click="saveAppointment"
      >Save & update Schedule</a
    >
  </div>
</template>
<script>
import VueTimepicker from "vue3-timepicker/src/VueTimepicker.vue";
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
    };
  },
  components: {
    VueTimepicker,
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
      this.$emit("save", requestBody);
    },
  },
};
</script>
