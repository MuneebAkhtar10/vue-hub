import _ from "lodash";
import jQuery from "jquery";
import { ref } from "vue";
import APPOINTMENT_POPUP from "../views/appointmentPopup.vue";
import Datepicker from "vue3-datepicker";
import navbar from "../components/nav.vue";
import sidebar from "../components/sidebar";
import "../scss/pages/_dashboard.scss";

export default {
  name: "resource-timeline",
  props: {},
  data() {
    return {
      allCarers: [
        {
          id: "lorem",
          name: "Lorem ispum",
          designation: "Doctor",
        },
        {
          id: "lorem1",
          name: "Lorem ispum1",
          designation: "Nurse",
        },
        {
          id: "lorem2",
          name: "Lorem ispum2",
          designation: "Laboratory Guy",
        },
        {
          id: "lorem3",
          name: "Lorem ispum3",
          designation: "Oncologist",
        },
        {
          id: "lorem4",
          name: "Lorem ispum4",
          designation: "Optician",
        },
        {
          id: "lorem5",
          name: "Lorem ispum5",
          designation: "Skin Doctor",
        },
        {
          id: "lorem6",
          name: "Lorem ispum6",
          designation: "Lungs",
        },
        {
          id: "lorem7",
          name: "Lorem ispum7",
          designation: "Liver",
        },
        {
          id: "lorem8",
          name: "Lorem ispum8",
          designation: "ENT",
        },
        {
          id: "lorem9",
          name: "Lorem ispum9",
          designation: "Physician",
        },
        {
          id: "lorem10",
          name: "Lorem ispum10",
          designation: "Child Specialist",
        },
      ],
      carers: [],
      patients: [
        {
          id: "patient",
          name: "Sit Amet",
        },
        {
          id: "patient1",
          name: "Sit Amet1",
        },
        {
          id: "patient2",
          name: "Sit Amet2",
        },
        {
          id: "patient3",
          name: "Sit Amet3",
        },
        {
          id: "patient4",
          name: "Sit Amet4",
        },
        {
          id: "patient5",
          name: "Sit Amet5",
        },
        {
          id: "patient6",
          name: "Sit Amet6",
        },
        {
          id: "patient7",
          name: "Sit Amet7",
        },
        {
          id: "patient8",
          name: "Sit Amet8",
        },
        {
          id: "patient9",
          name: "Sit Amet9",
        },
        {
          id: "patient10",
          name: "Sit Amet10",
        },
      ],
      allAppointments: [
        {
          id: "dolore",
          carer: { id: "lorem" },
          patient: { id: "patient", name: "Sit Amet" },
          date: new Date("Oct 30 2021"),
          startTime: "05:00",
          endTime: "06:00",
          cell: -1,
        },
        {
          id: "dolore1",
          carer: { id: "lorem1" },
          patient: { id: "patient1", name: "Sit Amet1" },
          date: new Date("Oct 29 2021"),
          startTime: "02:00",
          endTime: "03:00",
          cell: -1,
        },
        {
          id: "dolore2",
          carer: { id: "lorem2" },
          patient: { id: "patient2", name: "Sit Amet2" },
          date: new Date("Oct 29 2021"),
          startTime: "03:00",
          endTime: "04:00",
          cell: -1,
        },
        {
          id: "dolore3",
          carer: { id: "lorem3" },
          patient: { id: "patient3", name: "Sit Amet3" },
          date: new Date("Oct 29 2021"),
          startTime: "04:00",
          endTime: "05:00",
          cell: -1,
        },
        {
          id: "dolore6",
          carer: { id: "lorem6" },
          patient: { id: "patient6", name: "Muneeb" },
          date: new Date("Oct 29 2021"),
          startTime: "05:00",
          endTime: "06:00",
          cell: -1,
        },
        {
          id: "dolore4",
          carer: { id: "lorem4" },
          patient: { id: "patient4", name: "Sit Amet4" },
          date: new Date("Oct 29 2021"),
          startTime: "06:00",
          endTime: "07:00",
          cell: -1,
        },
        {
          id: "dolore5",
          carer: { id: "lorem5" },
          patient: { id: "patient5", name: "Sit Amet5" },
          date: new Date("Oct 29 2021"),
          startTime: "07:00",
          endTime: "08:00",
          cell: -1,
        },
        {
          id: "dolore7",
          carer: { id: "lorem7" },
          patient: { id: "patient7", name: "Sit Amet7" },
          date: new Date("Oct 29 2021"),
          startTime: "07:00",
          endTime: "08:00",
          cell: -1,
        },
        {
          id: "dolore9",
          carer: { id: "lorem9" },
          patient: { id: "patient9", name: "Sit Amet9" },
          date: new Date("Oct 29 2021"),
          startTime: "01:00",
          endTime: "03:00",
          cell: -1,
        },
      ],
      carerAvailability: [
        {
          carerId: "lorem",
        },
        {
          carerId: "lorem1",
        },
        {
          carerId: "lorem2",
        },
        {
          carerId: "lorem3",
        },
        {
          carerId: "lorem4",
        },
        {
          carerId: "lorem5",
        },
        {
          carerId: "lorem6",
        },
        {
          carerId: "lorem7",
        },
        {
          carerId: "lorem8",
        },
        {
          carerId: "lorem9",
        },
        {
          carerId: "lorem10",
        },
      ],
      appointments: [],
      weekday: [],
      timeRanges: [],
      appointmentForPopup: {},
      date: "",
      view: "today",
      carerSearchString: "",
      slotStartTime: "",
      slotEndTime: "",
      sortByAttributeName: "",
      appointmentFixed: true,
      firstInitializationOfDate: true,
      showAppointmentPopup: false,
      isResizing: false,
      existingAppointment: false,
      sortAsc: true,
      currentWeek: [
        new Date("Oct 25 2021"),
        new Date("Oct 26 2021"),
        new Date("Oct 27 2021"),
        new Date("Oct 28 2021"),
        new Date("Oct 29 2021"),
        new Date("Oct 30 2021"),
        new Date("Oct 31 2021"),
      ],
    };
  },
  watch: {
    date: {
      handler: function(newVal, oldVal) {
        var _this = this;
        if (!_this.firstInitializationOfDate) {
          if (_this.date && _this.date != "") {
            _this.filterAppointments();
            _this.$nextTick(() => {
              _this.dataShaper();
            });
          }
        } else {
          _this.firstInitializationOfDate = false;
        }
      },
      immediate: true,
    },
  },
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
  components: {
    "appointment-popup": APPOINTMENT_POPUP,
    Datepicker,
    navbar: navbar,
    sidebar: sidebar,
  },
  created() {
    var _this = this;
    _this.createTimeInterval();
    _this.date = new Date("Oct 29 2021");
    // _this.date.setHours(0, 0, 0);
    _this.carers = _.cloneDeep(_this.allCarers);
    _this.filterAppointments();
  },
  mounted() {
    this.dataShaper();
  },
  methods: {
    createTimeInterval: function() {
      let items = [];
      for (var hour = 0; hour < 24; hour++) {
        items.push([hour, 0]);
        // items.push([hour, 30]);
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
    getTwelveHourTime: function(timeString) {
      var H = +timeString.substr(0, 2);
      var h = H % 12 || 12;
      var ampm = H < 12 || H === 24 ? "AM" : "PM";
      timeString = h + timeString.substr(2, 3) + ampm;
      return timeString;
    },
    dataShaper: function() {
      var _this = this;
      _.each(_this.appointments, (apt, aptIndex) => {
        var carerIndex = _.findIndex(_this.carers, { id: apt.carer.id });
        var timeCell = apt.startTime.split(":");
        apt.cell = carerIndex * 24 + parseInt(timeCell[0]);
        var duration = _this.calculateDuration(apt.startTime, apt.endTime);
        var colSpan = duration[0] + duration[1] / 60;
        _this.jQueryForArea(apt.cell, apt.id, colSpan);
      });
    },
    dragStart: function(event, apIndex, crIndex) {
      this.draggedAppointmentIndex = apIndex;
      this.draggedAppointmentCarerIndex = crIndex;
      // console.log("Drag started");
    },
    dragEnd: function() {
      // console.log("Drag ended");
    },
    dragOver: function(e) {
      e.preventDefault();
    },
    dragEnter: function() {
      // console.log("DragEnter");
    },
    dragLeave: function() {
      // console.log("DragLeave");
    },
    drop: function(e) {
      console.log("Drop");
      var _this = this;
      const dragableAppointment = document.querySelector(
        "#dragged-appointment-" +
          _this.draggedAppointmentIndex +
          "-" +
          _this.draggedAppointmentCarerIndex
      );
      e.target.append(dragableAppointment);
    },
    newDragOver: function(e, carerIndex) {
      console.log(" New dragOver", e, carerIndex);
    },
    jQueryForArea: function(cellNumber, aptId, colSpan) {
      var _this = this;
      var isDragging = false;
      var jQueryselected = jQuery("#apt-" + aptId);

      var jQuerycells = jQuery("table").find(".data-cell");
      if (!colSpan) {
        colSpan = 1;
      }
      var jQuerycurrentCell = jQuery(jQuerycells[cellNumber]);
      var cellWidth = jQuerycurrentCell.outerWidth();

      jQueryselected.css("width", cellWidth * colSpan);
      jQueryselected.css("height", jQuerycurrentCell.outerHeight() - 2); // fiddle factor
      jQueryselected.css("top", jQuerycurrentCell.position().top);
      jQueryselected.css("left", jQuerycurrentCell.position().left);

      // drag start
      jQueryselected.mousedown(dragStart);

      // drag end
      jQuery(window).mouseup(dragEnd);

      // drag over cells
      jQuerycells.mouseenter(draggingIntoNewCell);
      jQueryselected.mousemove(draggingInSelectedCell);

      function dragStart() {
        isDragging = true;
      }

      function dragEnd() {
        isDragging = false;
      }

      function draggingIntoNewCell() {
        if (!_this.isResizing) {
          jQuerycurrentCell = jQuery(this);
          reposition(jQuerycurrentCell);
        }
      }

      // find if we've moved into the next column under this selection
      function draggingInSelectedCell(e) {
        if (isDragging && !_this.isResizing) {
          // find relative position within selection div
          var relativeXPosition = e.pageX - jQuery(this).offset().left;

          if (relativeXPosition > cellWidth) {
            // moved into next column
            jQuerycurrentCell = jQuerycurrentCell.next();
            reposition(jQuerycurrentCell);
          }
        }
        // console.log("Dragging in selected cell", e);
      }

      function reposition(jQuerycell) {
        // only reposition if not the last cell in the table (otherwise can't span 2 cols)
        if (
          isDragging &&
          jQuerycell.hasClass("data-cell") &&
          !_this.isResizing
        ) {
          jQueryselected.css("top", jQuerycell.position().top);
          jQueryselected.css("left", jQuerycell.position().left);
        }
        // console.log("New cell", jQuerycell);
      }
    },
    resizingOnMouseDown: function(e, aptId) {
      var _this = this;
      var index = _.findIndex(_this.appointments, { id: aptId });
      let currentResizer;
      currentResizer = e.target;
      this.isResizing = true;
      let prevX = e.clientX;
      const el = document.querySelector("#apt-" + aptId);
      var oldWidth = parseFloat(el.style.width);
      var duration = _this.calculateDuration(
        _this.appointments[index].startTime,
        _this.appointments[index].endTime
      );
      var durationInMinutes = duration[0] * 60 + duration[1];
      var pxPerMin = oldWidth / durationInMinutes;
      window.addEventListener("mousemove", mousemove);
      window.addEventListener("mouseup", mouseup);

      function mousemove(e) {
        const rect = el.getBoundingClientRect();
        // console.log("rect.width", rect.width);
        // console.log("el.style.width", el.style.width);

        if (currentResizer.classList.contains("se")) {
          el.style.width = rect.width - (prevX - e.clientX) + "px";
        } else if (currentResizer.classList.contains("ne")) {
          el.style.width = rect.width - (prevX - e.clientX) + "px";
        }
        prevX = e.clientX;
      }

      function mouseup() {
        window.removeEventListener("mousemove", mousemove);
        window.removeEventListener("mouseup", mouseup);
        _this.isResizing = false;
        if (prevX > e.clientX) {
          console.log("increase", el.style.width);
          var minsToAdd = parseInt(
            (parseFloat(el.style.width) - oldWidth) / pxPerMin
          );
          var time = _this.appointments[index].endTime;
          var newTime = new Date(
            new Date("1970/01/01 " + time).getTime() + minsToAdd * 60000
          ).toLocaleTimeString("en-UK", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          });
          console.log(
            "update arr",
            (_this.appointments[index].endTime = newTime)
          );
        }
        if (prevX < e.clientX) {
          console.log("decrease", el.style.width);
          var minsToAdd =
            parseInt(oldWidth - parseFloat(el.style.width)) / pxPerMin;
          var time = _this.appointments[index].endTime;
          var newTime = new Date(
            new Date("1970/01/01 " + time).getTime() - minsToAdd * 60000
          ).toLocaleTimeString("en-UK", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          });
          console.log(
            "update arr",
            (_this.appointments[index].endTime = newTime)
          );
        }
      }
    },
    openAppointmentPopupForExistingAppointment: function(appointmentId) {
      var _this = this;
      _this.appointmentForPopup = _.find(_this.appointments, {
        id: appointmentId,
      });
      _this.existingAppointment = true;
      _this.showAppointmentPopup = true;
    },
    onCloseAppointmentPopup: function() {
      var _this = this;
      _this.showAppointmentPopup = false;
      _this.slotStartTime = "";
      _this.slotEndTime = "";
      _this.appointmentForPopup = {};
    },
    deleteAppointment: function(event) {
      var _this = this;
      _this.appointmentFixed = false;
      _this.appointmentFixed = true;
      var aptIndex = _.findIndex(_this.appointments, { id: event });
      _this.appointments.splice(aptIndex, 1);
      _this.showAppointmentPopup = false;
      _this.slotStartTime = "";
      _this.slotEndTime = "";
      _this.appointmentForPopup = {};
    },
    saveAppointment: function(event) {
      var _this = this;
      if (_this.existingAppointment) {
        if (this.date.toDateString() === event.date.toDateString()) {
          var carerIndex = _.findIndex(_this.carers, { id: event.carer.id });
          var timeCell = event.startTime.split(":");
          event.cell = carerIndex * 24 + parseInt(timeCell[0]);
          var aptIndex = _.findIndex(_this.appointments, { id: event.id });
          _this.appointments[aptIndex] = event;
          var duration = _this.calculateDuration(
            _this.appointments[aptIndex].startTime,
            _this.appointments[aptIndex].endTime
          );
          var colSpan = duration[0] + duration[1] / 60;

          _this.jQueryForArea(
            _this.appointments[aptIndex].cell,
            _this.appointments[aptIndex].id,
            colSpan
          );
        } else {
          var aptIndex = _.findIndex(_this.appointments, { id: event.id });
          _this.appointments.splice(aptIndex, 1);
        }
      } else {
        if (this.date.toDateString() === event.date.toDateString()) {
          var carerIndex = _.findIndex(_this.carers, { id: event.carer.id });
          var timeCell = event.startTime.split(":");
          event.cell = carerIndex * 24 + parseInt(timeCell[0]);
          _this.allAppointments.push(event);
          _this.appointments.push(event);
          var aptIndex = _.findIndex(_this.appointments, { id: event.id });
          var duration = _this.calculateDuration(
            event.startTime,
            event.endTime
          );
          var colSpan = duration[0] + duration[1] / 60;
          _this.$forceUpdate();
          _this.$nextTick(() => {
            _this.jQueryForArea(
              _this.appointments[aptIndex].cell,
              _this.appointments[aptIndex].id,
              colSpan
            );
          });
        } else {
          _this.allAppointments.push(event);
        }
      }
      _this.showAppointmentPopup = false;
      _this.slotStartTime = "";
      _this.slotEndTime = "";
      _this.appointmentForPopup = {};
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
    onChangeDate: function() {
      var _this = this;
      _this.filterAppointments();
      _this.dataShaper();
    },
    filterAppointments: function() {
      var _this = this;
      _this.appointments = _.filter(_this.allAppointments, function(o) {
        return o.date.toDateString() === _this.date.toDateString();
      });
    },
    openAppointmentPopupForNewAppointment: function(time, timeIndex) {
      var _this = this;
      _this.existingAppointment = false;
      _this.slotStartTime = time;
      _this.slotEndTime =
        timeIndex != 23 ? _this.timeRanges[timeIndex + 1] : "23:45";
      _this.showAppointmentPopup = true;
    },
    filterAppointmentsByCarer: function() {
      var _this = this;
      if (_this.carerSearchString.length > 3) {
        _this.appointments = [];
        var carerAppointmentMap = {};
        _this.carers = _.filter(_this.allCarers, (carer) => {
          var carerName = carer.name.toLowerCase();
          var searchString = _this.carerSearchString.toLowerCase();
          return carerName.includes(searchString);
        });
        if (!_.isEmpty(_this.carers)) {
          _.each(_this.allAppointments, (apt) => {
            if (
              apt.carer?.id &&
              apt.date?.toDateString() === _this.date.toDateString()
            ) {
              if (carerAppointmentMap[apt.carer.id]) {
                carerAppointmentMap[apt.carer.id].push(apt);
              } else {
                carerAppointmentMap[apt.carer.id] = [];
                carerAppointmentMap[apt.carer.id].push(apt);
              }
            }
          });
          _.each(_this.carers, (carer) => {
            if (carerAppointmentMap[carer.id]) {
              _this.appointments = _this.appointments.concat(
                carerAppointmentMap[carer.id]
              );
            }
          });
          _this.$nextTick(() => {
            _this.dataShaper();
          });
        }
      } else if (_this.carerSearchString.length == 0) {
        _this.carers = _.cloneDeep(_this.allCarers);
        _this.filterAppointments();
        _this.$nextTick(() => {
          _this.dataShaper();
        });
      }
    },
    addToWeekday: function(day) {
      var _this = this;
      if (_this.weekday.indexOf(day) === -1) {
        _this.weekday.push(day);
      }
      _this.filterAppointmentsBySelectedWeekdays();
    },
    filterAppointmentsBySelectedWeekdays: function() {
      var _this = this;
      var weekdaysString = _.map(_this.currentWeek, (day) => {
        return day.toDateString();
      });
      console.log(weekdaysString);
    },
    sortBy: function() {
      var _this = this;
      _this.appointments = [];
      var carerAppointmentMap = {};
      _this.carers = _.sortBy(_this.carers, [_this.sortByAttributeName]);
      _.each(_this.allAppointments, (apt) => {
        if (
          apt.carer?.id &&
          apt.date?.toDateString() === _this.date.toDateString()
        ) {
          if (carerAppointmentMap[apt.carer.id]) {
            carerAppointmentMap[apt.carer.id].push(apt);
          } else {
            carerAppointmentMap[apt.carer.id] = [];
            carerAppointmentMap[apt.carer.id].push(apt);
          }
        }
      });
      _.each(_this.carers, (carer) => {
        if (carerAppointmentMap[carer.id]) {
          _this.appointments = _this.appointments.concat(
            carerAppointmentMap[carer.id]
          );
        }
      });
      _this.$nextTick(() => {
        _this.dataShaper();
      });
    },
  },
};
