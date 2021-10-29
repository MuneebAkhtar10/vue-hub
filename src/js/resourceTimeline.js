import _ from "lodash";
import jQuery from "jquery";
import { ref } from "vue";
import APPOINTMENT_POPUP from "../views/appointmentPopup.vue";
import Datepicker from "vue3-datepicker";
export default {
  name: "resource-timeline",
  props: {},
  data() {
    return {
      carers: [
        {
          id: "lorem",
          name: "Lorem ispum",
        },
        {
          id: "lorem1",
          name: "Lorem ispum1",
        },
        {
          id: "lorem2",
          name: "Lorem ispum2",
        },
        {
          id: "lorem3",
          name: "Lorem ispum3",
        },
        {
          id: "lorem4",
          name: "Lorem ispum4",
        },
        {
          id: "lorem5",
          name: "Lorem ispum5",
        },
        {
          id: "lorem6",
          name: "Lorem ispum6",
        },
        {
          id: "lorem7",
          name: "Lorem ispum7",
        },
        {
          id: "lorem8",
          name: "Lorem ispum8",
        },
        {
          id: "lorem9",
          name: "Lorem ispum9",
        },
        {
          id: "lorem10",
          name: "Lorem ispum10",
        },
      ],
      patients: [
        {
          id: "patient",
          name: "Sit Amet",
          carer: { id: "lorem" },
        },
        {
          id: "patient1",
          name: "Sit Amet1",
          carer: { id: "lorem" },
        },
        {
          id: "patient2",
          name: "Sit Amet2",
          carer: { id: "lorem2" },
        },
        {
          id: "patient3",
          name: "Sit Amet3",
          carer: { id: "lorem3" },
        },
        {
          id: "patient4",
          name: "Sit Amet4",
          carer: { id: "lorem4" },
        },
        {
          id: "patient5",
          name: "Sit Amet5",
          carer: { id: "lorem5" },
        },
        {
          id: "patient6",
          name: "Sit Amet6",
          carer: { id: "lorem6" },
        },
        {
          id: "patient7",
          name: "Sit Amet7",
          carer: { id: "lorem7" },
        },
        {
          id: "patient8",
          name: "Sit Amet8",
          carer: { id: "lorem8" },
        },
        {
          id: "patient9",
          name: "Sit Amet9",
          carer: { id: "lorem9" },
        },
        {
          id: "patient10",
          name: "Sit Amet10",
          carer: { id: "lorem10" },
        },
      ],
      appointments: [
        {
          id: "dolore",
          carer: { id: "lorem" },
          patient: { id: "patient", name: "Sit Amet" },
          date: new Date("Oct 29 2021"),
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
      // appointments: [],
      date: ref(new Date()),
      timeRanges: [],
      carerSearchString: "",
      appointmentForPopup: {},
      showAppointmentPopup: false,
      appointmentFixed: true,
      isResizing: false,
    };
  },
  computed: {},
  components: {
    "appointment-popup": APPOINTMENT_POPUP,
    Datepicker,
  },
  created() {
    this.createTimeInterval();
  },
  mounted() {
    this.dataShaper();
    // this.filterAppointments();
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
      const el = document.querySelector("#apt-" + aptId);
      let currentResizer;
      console.log(e);
      currentResizer = e.target;
      this.isResizing = true;

      let prevX = e.clientX;
      // let prevY = e.clientY;

      window.addEventListener("mousemove", mousemove);
      window.addEventListener("mouseup", mouseup);

      function mousemove(e) {
        console.log("...");
        const rect = el.getBoundingClientRect();

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
      }
    },
    openAppointmentPopup: function(appointmentId) {
      var _this = this;
      _this.appointmentForPopup = _.find(_this.appointments, {
        id: appointmentId,
      });
      _this.showAppointmentPopup = true;
    },
    onCloseAppointmentPopup: function() {
      console.log("On close called");
      this.showAppointmentPopup = false;
    },
    deleteAppointment: function(event) {
      var _this = this;
      _this.appointmentFixed = false;
      _this.appointmentFixed = true;
      var aptIndex = _.findIndex(_this.appointments, { id: event });
      _this.appointments.splice(aptIndex, 1);
      _this.showAppointmentPopup = false;
    },
    saveAppointment: function(event) {
      var _this = this;
      // if (this.date == event.date) {
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
      // } else {
      //   var aptIndex = _.findIndex(_this.appointments, { id: event });
      //   _this.appointments.splice(aptIndex, 1);
      // }
      this.showAppointmentPopup = false;
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
    filterAppointments: function() {
      var _this = this;
      // _this.appointments = _.filter(_this.allAppointments, {
      //   date: _this.date,
      // });
      // this.dataShaper();
    },
  },
};
