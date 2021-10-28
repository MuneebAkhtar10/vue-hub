import _ from "lodash";
import jQuery from "jquery";
import APPOINTMENT_POPUP from "../views/appointmentPopup.vue";
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
      ],
      appointments: [
        {
          id: "dolore",
          carer: { id: "lorem" },
          patient: { id: "patient", name: "Sit Amet" },
          startTime: "05:00",
          endTime: "06:00",
          cell: -1,
        },
        {
          id: "dolore1",
          carer: { id: "lorem1" },
          patient: { id: "patient1", name: "Sit Amet1" },
          startTime: "02:00",
          endTime: "03:00",
          cell: -1,
        },
        {
          id: "dolore2",
          carer: { id: "lorem2" },
          patient: { id: "patient2", name: "Sit Amet2" },
          startTime: "03:00",
          endTime: "04:00",
          cell: -1,
        },
        {
          id: "dolore3",
          carer: { id: "lorem3" },
          patient: { id: "patient3", name: "Sit Amet3" },
          startTime: "04:00",
          endTime: "05:00",
          cell: -1,
        },
        {
          id: "dolore6",
          carer: { id: "lorem6" },
          patient: { id: "patient6", name: "Muneeb" },
          startTime: "05:00",
          endTime: "06:00",
          cell: -1,
        },
        {
          id: "dolore4",
          carer: { id: "lorem4" },
          patient: { id: "patient4", name: "Sit Amet4" },
          startTime: "06:00",
          endTime: "07:00",
          cell: -1,
        },
        {
          id: "dolore5",
          carer: { id: "lorem5" },
          patient: { id: "patient5", name: "Sit Amet5" },
          startTime: "07:00",
          endTime: "08:00",
          cell: -1,
        },
      ],
      timeRanges: [],
      appointmentForPopup: {},
      showAppointmentPopup: false,
      appointmentFixed: true,
    };
  },
  computed: {},
  components: {
    "appointment-popup": APPOINTMENT_POPUP,
  },
  created() {
    this.createTimeInterval();
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
        _this.jQueryForArea(apt.cell, apt.id);
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
    jQueryForArea: function(cellNumber, aptId) {
      var isDragging = false;

      var jQueryselected = jQuery("#apt-" + aptId);

      var jQuerycells = jQuery("table").find(".data-cell");
      var colSpan = 1;
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
        jQuerycurrentCell = jQuery(this);
        reposition(jQuerycurrentCell);
      }

      // find if we've moved into the next column under this selection
      function draggingInSelectedCell(e) {
        if (isDragging) {
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
        if (isDragging && jQuerycell.hasClass("data-cell")) {
          jQueryselected.css("top", jQuerycell.position().top);
          jQueryselected.css("left", jQuerycell.position().left);
        }
        // console.log("New cell", jQuerycell);
      }
    },
    openAppointmentPopup: function(appointmentId) {
      var _this = this;
      _this.appointmentForPopup = _.find(_this.appointments, {
        id: appointmentId,
      });
      _this.showAppointmentPopup = true;
    },
    deleteAppointment: function(event) {
      var _this = this;
      _this.appointmentFixed = false;
      _this.appointmentFixed = true;
      var aptIndex = _.findIndex(_this.appointments, { id: event });
      _this.appointments.splice(aptIndex, 1);
      // _.remove(_this.appointments, { id: event });
      _.each(_this.appointments, (apt, aptIndex) => {
        _this.jQueryForArea(apt.cell, apt.id);
      });
      _this.showAppointmentPopup = false;
    },
    saveAppointment: function(event) {
      var _this = this;
      var carerIndex = _.findIndex(_this.carers, { id: event.carer.id });
      var timeCell = event.startTime.split(":");
      event.cell = carerIndex * 24 + parseInt(timeCell[0]);
      var aptIndex = _.findIndex(_this.appointments, { id: event.id });
      _this.appointments[aptIndex] = event;
      _this.jQueryForArea(
        _this.appointments[aptIndex].cell,
        _this.appointments[aptIndex].id
      );
      this.showAppointmentPopup = false;
    },
  },
};
