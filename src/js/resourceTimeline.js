import _ from "lodash";
import jQuery from "./jQuery";
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
        },
        {
          id: "dolore1",
          carer: { id: "lorem1" },
          patient: { id: "patient1", name: "Sit Amet1" },
          time: "2",
        },
        {
          id: "dolore2",
          carer: { id: "lorem2" },
          patient: { id: "patient2", name: "Sit Amet2" },
          time: "3",
        },
        {
          id: "dolore3",
          carer: { id: "lorem3" },
          patient: { id: "patient3", name: "Sit Amet3" },
          time: "4",
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
    this.dataShaper();
  },
  mounted() {
    this.jQueryForArea();
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
      _.each(_this.appointmentTime, (appointment) => {
        if (_this.appointmentShapedData[appointment.carer.id] != undefined) {
          _this.appointmentShapedData[appointment.carer.id].push(appointment);
        } else {
          _this.appointmentShapedData[appointment.carer.id] = [];
          _this.appointmentShapedData[appointment.carer.id].push(appointment);
        }
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
      // console.log("old drag", e);
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
    jQueryForArea: function() {
      var dragging = false;
      var selected = null;
      var cell = $("table").find(".data-cell");

      $(".table-area-selected").each(function(index) {
        $(this).css("top", $(cell.get(index)).position().top);
        $(this).css("left", $(cell.get(index)).position().left);

        $(this).css("width", $(cell.get(index)).innerWidth());
        $(this).css("height", $(cell.get(index)).innerHeight());
      });

      $(".table-area-selected").on("mousedown", function(event) {
        console.log("mousedown");
        selected = $(this);
        dragging = true;
      });

      $(window).on("mouseup", function(event) {
        console.log("mouseup");
        selected = null;
        dragging = false;
      });

      $(".data-cell").on("mouseover", function(event) {
        var cell = $(this);
        if (dragging) {
          selected.css("top", cell.position().top);
          selected.css("left", cell.position().left);

          selected.css("width", cell.innerWidth());
          selected.css("height", cell.innerHeight());
          console.log("dragged a selection box : " + selected);
        }
      });
    },
  },
};
