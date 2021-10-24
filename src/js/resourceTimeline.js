import _ from "lodash";
import jQuery from "jquery";
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
      ],
      appointmentTime: [
        {
          id: "dolore",
          carer: { id: "lorem" },
          patient: { id: "patient", name: "Sit Amet" },
          time: "5",
          cell: -1,
        },
        {
          id: "dolore1",
          carer: { id: "lorem1" },
          patient: { id: "patient1", name: "Sit Amet1" },
          time: "2",
          cell: -1,
        },
        {
          id: "dolore2",
          carer: { id: "lorem2" },
          patient: { id: "patient2", name: "Sit Amet2" },
          time: "3",
          cell: -1,
        },
        {
          id: "dolore3",
          carer: { id: "lorem3" },
          patient: { id: "patient3", name: "Sit Amet3" },
          time: "4",
          cell: -1,
        },
      ],
      resourceSize: 26,
      timeRanges: [],
      appointmentShapedData: {},
      draggedAppointmentIndex: -1,
      draggedAppointmentCarerIndex: -1,
    };
  },
  computed: {},
  created() {
    this.createTimeInterval();
  },
  mounted() {
    // this.jQueryForArea();
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
      // _.each(_this.appointmentTime, (appointment) => {
      //   if (_this.appointmentShapedData[appointment.carer.id] != undefined) {
      //     _this.appointmentShapedData[appointment.carer.id].push(appointment);
      //   } else {
      //     _this.appointmentShapedData[appointment.carer.id] = [];
      //     _this.appointmentShapedData[appointment.carer.id].push(appointment);
      //   }
      // });
      _.each(_this.appointmentTime, (apt, aptIndex) => {
        var carerIndex = _.findIndex(_this.carers, { id: apt.carer.id });
        apt.cell = carerIndex * 24 + parseInt(apt.time) + 1;
        this.jQueryForArea(apt.cell);
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
    jQueryForArea: function(cellNumber) {
      var isDragging = false;

      var jQueryselected = jQuery(".table-area-selected");

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
      }

      function reposition(jQuerycell) {
        // only reposition if not the last cell in the table (otherwise can't span 2 cols)
        if (isDragging && jQuerycell.hasClass("data-cell")) {
          jQueryselected.css("top", jQuerycell.position().top);
          jQueryselected.css("left", jQuerycell.position().left);
        }
      }
    },
  },
};
