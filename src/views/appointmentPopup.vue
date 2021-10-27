<template>
  <div>Client: {{ appointment.patient.name }}</div>
  <label>Start Time</label>
  <vue-timepicker
    v-model="startTime"
    :minute-interval="15"
    close-on-complete
    @change="timeChange('start')"
  ></vue-timepicker>
  <label>End Time</label>
  <vue-timepicker
    v-model="endTime"
    :minute-interval="15"
    close-on-complete
    @change="timeChange('end')"
  ></vue-timepicker>
  <label>Duration</label>
  <span>{{ duration }}</span>
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
  computed: {},
  methods: {
    modelData: function() {
      this.startTime = this.appointment.startTime;
      this.endTime = this.appointment.endTime;
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
  },
};
</script>
