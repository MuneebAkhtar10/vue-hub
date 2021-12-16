import _ from "lodash";
import jQuery from "jquery";
import { ref } from "vue";
import moment from "moment";
import POPUP_APPOINTMENT from "../views/popupAppointment.vue";
import ALLOCATE_CARER from "../views/allocateCarerPopup.vue";
import CARER_PROFILE_POPUP from "../views/carerProfilePopup.vue";
import OPTIONAL_POPUP from "../views/optionalPopup.vue";
import WEEKLY_VIEW_POPUP from "../views/weeklyPopupView.vue";
import Datepicker from "vue3-datepicker";
import navbar from "../components/nav.vue";
import carerHeader from "../components/carerHeader.vue";
import sidebar from "../components/sidebar";
import "../scss/pages/_dashboard.scss";
import { startOfWeek, endOfWeek } from "date-fns";

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
          startTime: "05:20",
          endTime: "06:00",
          cell: -1,
        },
        {
          id: "dolore1",
          carer: { id: "lorem1" },
          patient: { id: "patient1", name: "Sit Amet1" },
          date: new Date("Oct 29 2021"),
          startTime: "02:10",
          endTime: "03:00",
          cell: -1,
        },
        {
          id: "dolore2",
          carer: { id: "lorem2" },
          patient: { id: "patient2", name: "Sit Amet2" },
          date: new Date("Oct 29 2021"),
          startTime: "03:40",
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
        {
          id: "dolore10",
          carer: { id: "lorem" },
          patient: { id: "patient", name: "Sit Amet" },
          date: new Date("Oct 30 2021"),
          startTime: "06:00",
          endTime: "07:00",
          cell: -1,
        },
        {
          id: "dolore11",
          carer: { id: "lorem1" },
          patient: { id: "patient1", name: "Sit Amet1" },
          date: new Date("Oct 29 2021"),
          startTime: "05:00",
          endTime: "06:00",
          cell: -1,
        },
        {
          id: "dolore12",
          carer: { id: "lorem2" },
          patient: { id: "patient2", name: "Sit Amet2" },
          date: new Date("Oct 29 2021"),
          startTime: "08:00",
          endTime: "09:00",
          cell: -1,
        },
        {
          id: "dolore13",
          carer: { id: "lorem3" },
          patient: { id: "patient3", name: "Sit Amet3" },
          date: new Date("Oct 29 2021"),
          startTime: "07:00",
          endTime: "07:35",
          cell: -1,
        },
        {
          id: "dolore14",
          carer: { id: "lorem4" },
          patient: { id: "patient4", name: "Sit Amet4" },
          date: new Date("Oct 29 2021"),
          startTime: "00:00",
          endTime: "02:00",
          cell: -1,
        },
        {
          id: "dolore15",
          carer: { id: "lorem5" },
          patient: { id: "patient5", name: "Sit Amet5" },
          date: new Date("Oct 29 2021"),
          startTime: "10:00",
          endTime: "11:30",
          cell: -1,
        },
        {
          id: "dolore16",
          carer: { id: "lorem6" },
          patient: { id: "patient6", name: "Muneeb" },
          date: new Date("Oct 29 2021"),
          startTime: "01:00",
          endTime: "03:00",
          cell: -1,
        },
        {
          id: "dolore17",
          carer: { id: "lorem7" },
          patient: { id: "patient7", name: "Sit Amet7" },
          date: new Date("Oct 29 2021"),
          startTime: "05:00",
          endTime: "06:10",
          cell: -1,
        },
        {
          id: "dolore18",
          carer: { id: "lorem8" },
          patient: { id: "patient8", name: "Sit Amet8" },
          date: new Date("Oct 29 2021"),
          startTime: "02:00",
          endTime: "04:00",
          cell: -1,
        },
        {
          id: "dolore19",
          carer: { id: "lorem9" },
          patient: { id: "patient9", name: "Sit Amet9" },
          date: new Date("Oct 29 2021"),
          startTime: "05:00",
          endTime: "06:00",
          cell: -1,
        },
        {
          id: "dolore20",
          carer: { id: "lorem" },
          patient: { id: "patient", name: "Sit Amet" },
          date: new Date("Oct 25 2021"),
          startTime: "06:00",
          endTime: "07:00",
          cell: -1,
        },
        {
          id: "dolore21",
          carer: { id: "lorem1" },
          patient: { id: "patient1", name: "Sit Amet1" },
          date: new Date("Oct 25 2021"),
          startTime: "05:00",
          endTime: "06:00",
          cell: -1,
        },
        {
          id: "dolore22",
          carer: { id: "lorem2" },
          patient: { id: "patient2", name: "Sit Amet2" },
          date: new Date("Oct 25 2021"),
          startTime: "08:00",
          endTime: "09:00",
          cell: -1,
        },
        {
          id: "dolore23",
          carer: { id: "lorem3" },
          patient: { id: "patient3", name: "Sit Amet3" },
          date: new Date("Oct 25 2021"),
          startTime: "07:00",
          endTime: "07:35",
          cell: -1,
        },
        {
          id: "dolore24",
          carer: { id: "lorem4" },
          patient: { id: "patient4", name: "Sit Amet4" },
          date: new Date("Oct 25 2021"),
          startTime: "00:00",
          endTime: "02:00",
          cell: -1,
        },
        {
          id: "dolore25",
          carer: { id: "lorem5" },
          patient: { id: "patient5", name: "Sit Amet5" },
          date: new Date("Oct 25 2021"),
          startTime: "10:00",
          endTime: "11:30",
          cell: -1,
        },
        {
          id: "dolore26",
          carer: { id: "lorem6" },
          patient: { id: "patient6", name: "Muneeb" },
          date: new Date("Oct 25 2021"),
          startTime: "01:00",
          endTime: "03:00",
          cell: -1,
        },
        {
          id: "dolore27",
          carer: { id: "lorem7" },
          patient: { id: "patient7", name: "Sit Amet7" },
          date: new Date("Oct 25 2021"),
          startTime: "05:00",
          endTime: "06:10",
          cell: -1,
        },
        {
          id: "dolore28",
          carer: { id: "lorem8" },
          patient: { id: "patient8", name: "Sit Amet8" },
          date: new Date("Oct 25 2021"),
          startTime: "02:00",
          endTime: "04:00",
          cell: -1,
        },
        {
          id: "dolore29",
          carer: { id: "lorem9" },
          patient: { id: "patient9", name: "Sit Amet9" },
          date: new Date("Oct 25 2021"),
          startTime: "05:00",
          endTime: "06:00",
          cell: -1,
        },
        {
          id: "dolore30",
          carer: { id: "lorem" },
          patient: { id: "patient", name: "Sit Amet" },
          date: new Date("Oct 26 2021"),
          startTime: "02:00",
          endTime: "04:00",
          cell: -1,
        },
        {
          id: "dolore31",
          carer: { id: "lorem1" },
          patient: { id: "patient1", name: "Sit Amet1" },
          date: new Date("Oct 26 2021"),
          startTime: "04:00",
          endTime: "05:00",
          cell: -1,
        },
        {
          id: "dolore32",
          carer: { id: "lorem2" },
          patient: { id: "patient2", name: "Sit Amet2" },
          date: new Date("Oct 26 2021"),
          startTime: "00:00",
          endTime: "01:00",
          cell: -1,
        },
        {
          id: "dolore33",
          carer: { id: "lorem3" },
          patient: { id: "patient3", name: "Sit Amet3" },
          date: new Date("Oct 26 2021"),
          startTime: "08:00",
          endTime: "09:35",
          cell: -1,
        },
        {
          id: "dolore34",
          carer: { id: "lorem4" },
          patient: { id: "patient4", name: "Sit Amet4" },
          date: new Date("Oct 26 2021"),
          startTime: "00:00",
          endTime: "02:00",
          cell: -1,
        },
        {
          id: "dolore35",
          carer: { id: "lorem5" },
          patient: { id: "patient5", name: "Sit Amet5" },
          date: new Date("Oct 26 2021"),
          startTime: "10:00",
          endTime: "11:30",
          cell: -1,
        },
        {
          id: "dolore36",
          carer: { id: "lorem6" },
          patient: { id: "patient6", name: "Muneeb" },
          date: new Date("Oct 26 2021"),
          startTime: "01:00",
          endTime: "03:00",
          cell: -1,
        },
        {
          id: "dolore37",
          carer: { id: "lorem7" },
          patient: { id: "patient7", name: "Sit Amet7" },
          date: new Date("Oct 26 2021"),
          startTime: "05:00",
          endTime: "06:10",
          cell: -1,
        },
        {
          id: "dolore38",
          carer: { id: "lorem8" },
          patient: { id: "patient8", name: "Sit Amet8" },
          date: new Date("Oct 26 2021"),
          startTime: "02:00",
          endTime: "04:00",
          cell: -1,
        },
        {
          id: "dolore39",
          carer: { id: "lorem9" },
          patient: { id: "patient9", name: "Sit Amet9" },
          date: new Date("Oct 26 2021"),
          startTime: "05:00",
          endTime: "06:00",
          cell: -1,
        },
      ],
      dayColors: [
        "#5973a1",
        "#931d95",
        "#b70d4b",
        "#40c1c7",
        "#40c744",
        "#b8c740",
        "#936b11",
      ],
      carerTimeSlots: {
        lorem: { startTime: "02:00", endTime: "07:00" },
        lorem1: { startTime: "05:00", endTime: "12:00" },
        lorem2: { startTime: "04:00", endTime: "08:00" },
        lorem3: { startTime: "06:05", endTime: "10:45" },
        lorem4: { startTime: "07:10", endTime: "12:00" },
        lorem5: { startTime: "01:15", endTime: "08:15" },
        lorem6: { startTime: "00:00", endTime: "04:00" },
        lorem7: { startTime: "14:54", endTime: "22:00" },
        lorem8: { startTime: "15:00", endTime: "19:20" },
        lorem9: { startTime: "18:00", endTime: "23:00" },
        lorem10: { startTime: "11:00", endTime: "22:30" },
      },
      viewsList: ["today", "week", "month"],
      viewsIndex: 0,
      appointments: [],
      weekday: [],
      timeRanges: [],
      daysForMonthlyView: [],
      appointmentForPopup: {},
      slotCarer: {},
      date: "",
      view: "today",
      carerSearchString: "",
      slotStartTime: "",
      slotEndTime: "",
      selectedCarerId: "",
      firstWeekday: "",
      lastWeekday: "",
      month: "",
      yearForMonth: 0,
      appointmentFixed: true,
      firstInitializationOfDate: true,
      showAppointmentPopup: false,
      showAllocatePopup: false,
      showCarerDetailPopup: false,
      showOptionsPopup: false,
      showWeeklyViewPopup: false,
      isResizing: false,
      existingAppointment: false,
      sortCarers: false,
    };
  },
  watch: {
    date: {
      handler: function(newVal, oldVal) {
        var _this = this;
        if (!_this.firstInitializationOfDate) {
          if (_this.date && _this.date != "") {
            _this.month = _this.date.toLocaleString("default", {
              month: "long",
            });
            _this.yearForMonth = _this.date.getFullYear();
            _this.filterAppointments();
            _this.$nextTick(() => {
              _this.dataShaperForTodayView();
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
    dayExists: function() {
      return function(dayNumber) {
        return this.weekday.indexOf(dayNumber) > -1;
      };
    },
    showCover: function() {
      return (
        this.showAppointmentPopup ||
        this.showAllocatePopup ||
        this.showCarerDetailPopup ||
        this.showWeeklyViewPopup
      );
    },
  },
  components: {
    "popup-appointment": POPUP_APPOINTMENT,
    "allocate-carer": ALLOCATE_CARER,
    "carer-profile-popup": CARER_PROFILE_POPUP,
    "optional-popup": OPTIONAL_POPUP,
    "weekly-view-popup": WEEKLY_VIEW_POPUP,
    Datepicker,
    navbar: navbar,
    carerHeader: carerHeader,
    sidebar: sidebar,
  },
  created() {
    var _this = this;
    _this.createTimeInterval();
    _this.date = new Date("Oct 29 2021");
    _this.yearForMonth = _this.date.getFullYear();
    _this.month = _this.date.toLocaleString("default", { month: "long" });
    // _this.date.setHours(0, 0, 0);
    _this.view = _this.viewsList[_this.viewsIndex];
    _this.carers = _.cloneDeep(_this.allCarers);
    _this.filterAppointments();
  },
  mounted() {
    this.dataShaperForTodayView();
    this.getCurrentWeekDayRange();
    this.calculateMonthDays();
  },
  methods: {
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
    getTwelveHourTime: function(timeString) {
      var H = +timeString.substr(0, 2);
      var h = H % 12 || 12;
      var ampm = H < 12 || H === 24 ? "AM" : "PM";
      timeString = h + timeString.substr(2, 3) + ampm;
      return timeString;
    },
    dataShaperForTodayView: function() {
      var _this = this;
      _.each(_this.appointments, (apt, aptIndex) => {
        var carerIndex = _.findIndex(_this.carers, { id: apt.carer.id });
        var timeCell = apt.startTime.split(":");
        apt.cell = carerIndex * 24 + parseInt(timeCell[0]);
        var duration = _this.calculateDuration(apt.startTime, apt.endTime);
        var colSpan = duration[0] + duration[1] / 60;
        if (_this.view != "month")
          _this.jQueryForArea(apt.cell, apt.id, colSpan);
      });
      // _.each(_this.carers, (carer, carerIndex) => {
      //   var startTime = _this.carerTimeSlots[carer.id].startTime;
      //   var timeCell = startTime.split(":");
      //   var endTime = _this.carerTimeSlots[carer.id].endTime;
      //   var duration = _this.calculateDuration(startTime, endTime);
      //   var cell = carerIndex * 24 + parseInt(timeCell[0]);
      //   var colSpan = duration[0] + duration[1] / 60;
      //   _this.jQueryForCarerSlots(cell, carer.id, colSpan);
      // });
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
      var cellWidthPerMin = cellWidth / 60;
      var apt = _.find(_this.appointments, { id: aptId });
      var startTime = apt.startTime;
      startTime = startTime.split(":");
      var startTimeMins = parseInt(startTime[1]);

      jQueryselected.css("width", cellWidth * colSpan);
      jQueryselected.css("height", jQuerycurrentCell.outerHeight() - 2); // fiddle factor
      jQueryselected.css("top", jQuerycurrentCell.position().top);
      jQueryselected.css(
        "left",
        jQuerycurrentCell.position().left + cellWidthPerMin * startTimeMins
      );
      // if (_this.view == "today") {
      //   jQuerycurrentCell.addClass("data-cell-selected");
      // }
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
        if (isDragging) {
          isDragging = false;
          var cellNumber = jQuerycurrentCell[0].__vnode.key;
          var time = cellNumber % 24;
          var carerIndex = (cellNumber - time) / 24;
          var aptIndex = _.findIndex(_this.appointments, { id: aptId });
          var apt = _this.appointments[aptIndex];
          var duration = _this.calculateDuration(apt.startTime, apt.endTime);
          apt.startTime = moment.utc(time * 3600 * 1000).format("HH:mm");
          var endTimeHours = time + duration[0] + duration[1] / 60;
          apt.endTime = moment.utc(endTimeHours * 3600 * 1000).format("HH:mm");
          if (carerIndex > 0) {
            var aptDate = new Date(_this.firstWeekday);
            aptDate.setDate = aptDate.setDate(aptDate.getDate() + carerIndex);
            apt.date = aptDate;
          } else if (carerIndex == 0) {
            apt.date = _this.firstWeekday;
          }
          if (_this.view == "today") {
            apt.carer = { id: _this.carers[carerIndex].id };
          }
          _this.appointments[aptIndex] = apt;
          console.log("Updated Appointment", _this.appointments[aptIndex]);
          console.log("Reposition", jQuerycurrentCell[0].__vnode.key);
        }
      }

      function draggingIntoNewCell() {
        if (!_this.isResizing) {
          jQuerycurrentCell = jQuery(this);
          // console.log("dragging into new cell", jQuerycurrentCell);
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
            console.log("dragging in selected cell", jQuerycurrentCell);
            reposition(jQuerycurrentCell);
          }
        }
      }

      function reposition(jQuerycell) {
        // only reposition if not the last cell in the table (otherwise can't span 2 cols)
        if (
          isDragging &&
          jQuerycell.hasClass("data-cell") &&
          !_this.isResizing
        ) {
          // console.log("Reposition", jQuerycurrentCell);
          jQueryselected.css("top", jQuerycell.position().top);
          jQueryselected.css("left", jQuerycell.position().left);
          // console.log("Elemnt key", jQuerycurrentCell[0].$vnode.key);
        }
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

        if (currentResizer.classList.contains("se")) {
          el.style.width = rect.width - (prevX - e.clientX) + "px";
        }
        prevX = e.clientX;
      }

      function mouseup() {
        window.removeEventListener("mousemove", mousemove);
        window.removeEventListener("mouseup", mouseup);
        _this.isResizing = false;
        if (prevX > e.clientX) {
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
      var carerIndex = _.findIndex(_this.carers, {
        id: this.appointmentForPopup.carer.id,
      });
      _this.slotCarer = _this.carers[carerIndex];
      _this.existingAppointment = true;
      _this.showAllocatePopup = true;
    },
    onCloseAppointmentPopup: function() {
      var _this = this;
      _this.showAppointmentPopup = false;
      _this.slotStartTime = "";
      _this.slotEndTime = "";
      _this.appointmentForPopup = {};
    },
    onCloseAllocatePopup: function() {
      var _this = this;
      _this.showAllocatePopup = false;
      _this.slotStartTime = "";
      _this.slotEndTime = "";
      _this.appointmentForPopup = {};
    },
    deleteAppointmentConfirm: function(event) {
      var _this = this;
      var html = "This will delete the appointment.";
      _this.showSweetAlert(html, _this.deleteAppointment, event);
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
    saveAppointmentConfirm: function(event) {
      var _this = this;
      var html = "This will save the appointment.";
      _this.showSweetAlert(html, _this.saveAppointment, event);
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
          _this.$forceUpdate();
          _this.$nextTick(() => {
            _this.jQueryForArea(
              _this.appointments[aptIndex].cell,
              _this.appointments[aptIndex].id,
              colSpan
            );
          });
        } else {
          var aptIndex = _.findIndex(_this.appointments, { id: event.id });
          var aptIndexInAllApts = _.findIndex(_this.allAppointments, {
            id: event.id,
          });
          _this.allAppointments[aptIndexInAllApts] = event;
          _this.appointments.splice(aptIndex, 1);
        }
        _this.showAllocatePopup = false;
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
        _this.showAppointmentPopup = false;
      }
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
      _this.dataShaperForTodayView();
    },
    filterAppointments: function() {
      var _this = this;
      _this.appointments = _.filter(_this.allAppointments, function(o) {
        return o.date.toDateString() === _this.date.toDateString();
      });
    },
    openAppointmentPopupForNewAppointment: function(
      time,
      timeIndex,
      carerIndex
    ) {
      var _this = this;
      _this.existingAppointment = false;
      _this.slotStartTime = time;
      _this.slotEndTime =
        timeIndex != 23 ? _this.timeRanges[timeIndex + 1] : "23:45";
      _this.slotCarer = _this.carers[carerIndex];
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
            _this.dataShaperForTodayView();
          });
        }
      } else if (_this.carerSearchString.length == 0) {
        _this.carers = _.cloneDeep(_this.allCarers);
        _this.filterAppointments();
        _this.$nextTick(() => {
          _this.dataShaperForTodayView();
        });
      }
    },
    addToWeekday: function(day) {
      var _this = this;
      var dayIndex = _this.weekday.indexOf(day);
      if (dayIndex === -1) {
        _this.weekday.push(day);
      } else {
        _this.weekday.splice(dayIndex, 1);
      }
      // _this.filterAppointmentsBySelectedWeekdays();
    },
    sortBy: function() {
      var _this = this;
      _this.sortCarers = !_this.sortCarers;
      _this.appointments = [];
      var carerAppointmentMap = {};
      if (_this.sortCarers) {
        _this.carers = _.sortBy(_this.carers, ["name", "designation"]);
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
          _this.dataShaperForTodayView();
        });
      } else {
        _this.carers = _.cloneDeep(_this.allCarers);
        _this.filterAppointments();
        _this.$nextTick(() => {
          _this.dataShaperForTodayView();
        });
      }
    },
    timelineViewChange: function() {
      var _this = this;
      if (_this.view === "week") {
        _this.selectedCarerId = _this.carers[0].id;
        _this.appointments = _.filter(_this.allAppointments, function(o) {
          return (
            o.date.getTime() <= _this.lastWeekday.getTime() &&
            o.date.getTime() >= _this.firstWeekday.getTime() &&
            // o.date.toDateString() === _this.date.toDateString() &&
            o.carer.id === _this.selectedCarerId
          );
        });
        // _this.appointments = _.filter(_this.appointments, (apt) => {
        //   return apt.carer.id === _this.selectedCarerId;
        // });
        _this.$nextTick(() => {
          _this.dataShaperForWeekView();
        });
      }
    },
    selectCarer: function(carerId) {
      var _this = this;
      _this.selectedCarerId =
        _this.view === "week" || _this.view === "month" ? carerId : "";
      if (_this.view === "week") {
        // _this.selectedCarerId = carerId;
        _this.appointments = _.filter(_this.allAppointments, function(o) {
          return (
            o.date.getTime() <= _this.lastWeekday.getTime() &&
            o.date.getTime() >= _this.firstWeekday.getTime() &&
            // o.date.toDateString() === _this.date.toDateString() &&
            o.carer.id === _this.selectedCarerId
          );
        });
        _this.$nextTick(() => {
          _this.dataShaperForWeekView();
        });
      }
    },
    viewChange: function(type) {
      var _this = this;
      if (type == "up") {
        _this.viewsIndex =
          _this.viewsIndex < 2 ? _this.viewsIndex + 1 : _this.viewsIndex;
        _this.view = _this.viewsList[_this.viewsIndex];
        _this.timelineViewChange();
      } else if (type == "down") {
        _this.viewsIndex =
          _this.viewsIndex > 0 ? _this.viewsIndex - 1 : _this.viewsIndex;
        _this.view = _this.viewsList[_this.viewsIndex];
        _this.timelineViewChange();
      }
    },
    showSweetAlert: function(html, successCallback, event) {
      var _this = this;
      _this
        .$swal({
          title: "<strong>Are You Sure?</strong>",
          icon: "info",
          html: html,
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "OK",
        })
        .then(function(result) {
          if (result.value) {
            successCallback(event);
          } else if (result.dismiss == "cancel") {
            console.log("cancel");
          }
        });
    },
    getCurrentWeekDayRange: function() {
      var curr = new Date(); // get current date
      this.firstWeekday = startOfWeek(curr, { weekStartsOn: 1 });
      this.lastWeekday = endOfWeek(curr, { weekStartsOn: 1 });
    },
    dateFormatter: function(date) {
      // date = new Date(date);
      if (this.view == "week") {
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
      } else if (this.view == "month") {
      }
    },
    getPreviousWeekDayRange: function() {
      var _this = this;
      var date;
      if (typeof _this.firstWeekday == "number") {
        date = new Date(_this.firstWeekday);
      } else {
        date = _this.firstWeekday;
      }
      var dummy = date.getDay();
      dummy = dummy + 6;
      _this.firstWeekday = date.setDate(date.getDate() - dummy);
      _this.lastWeekday = date.setDate(date.getDate() + 6);

      _this.firstWeekday = new Date(_this.firstWeekday);
      _this.lastWeekday = new Date(_this.lastWeekday);

      _this.appointments = _.filter(_this.allAppointments, function(o) {
        return (
          o.date.getTime() <= _this.lastWeekday.getTime() &&
          o.date.getTime() >= _this.firstWeekday.getTime() &&
          // o.date.toDateString() === _this.date.toDateString() &&
          o.carer.id === _this.selectedCarerId
        );
      });
      _this.$nextTick(() => {
        _this.dataShaperForWeekView();
      });
    },
    getNextWeekDayRange: function() {
      var _this = this;
      var date;
      if (typeof _this.firstWeekday == "number") {
        date = new Date(_this.firstWeekday);
      } else {
        date = _this.firstWeekday;
      }
      var nextweek = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate() + 7
      );
      _this.firstWeekday = startOfWeek(nextweek, { weekStartsOn: 1 });
      _this.lastWeekday = endOfWeek(nextweek, { weekStartsOn: 1 });
      _this.appointments = _.filter(_this.allAppointments, function(o) {
        return (
          o.date.getTime() <= _this.lastWeekday.getTime() &&
          o.date.getTime() >= _this.firstWeekday.getTime() &&
          // o.date.toDateString() === _this.date.toDateString() &&
          o.carer.id === _this.selectedCarerId
        );
      });
      _this.$nextTick(() => {
        _this.dataShaperForWeekView();
      });
    },
    jQueryForCarerSlots: function(cellNumber, carerId, colSpan) {
      var _this = this;
      var isDragging = false;
      var jQueryselected = jQuery("#timeline-length-" + carerId);

      var jQuerycells = jQuery("table").find(".data-cell");
      if (!colSpan) {
        colSpan = 1;
      }
      var jQuerycurrentCell = jQuery(jQuerycells[cellNumber]);
      var cellWidth = jQuerycurrentCell.outerWidth();
      jQueryselected.css("width", cellWidth * colSpan);
      // jQueryselected.css("position", "absolute");
      // jQueryselected.css("border", "2px solid #e3165b");
      // jQueryselected.css("border-radius", "5px");
    },
    dataShaperForWeekView: function() {
      var _this = this;
      _.each(_this.appointments, (apt, aptIndex) => {
        //Instead of carer index we use day number to get the timeslot
        var dayIndex = apt.date.getDay();
        dayIndex = dayIndex == 0 ? 6 : dayIndex - 1;
        var timeCell = apt.startTime.split(":");
        apt.cell = dayIndex * 24 + parseInt(timeCell[0]);
        var duration = _this.calculateDuration(apt.startTime, apt.endTime);
        var colSpan = duration[0] + duration[1] / 60;
        _this.jQueryForArea(apt.cell, apt.id, colSpan);
      });
    },
    calculateKey: function(carerIndex, time) {
      var timeCell = time.split(":");
      var cell = carerIndex * 24 + parseInt(timeCell[0]);
      return cell;
    },
    onShowCarerDetailPopup: function() {
      var _this = this;
      _this.showCarerDetailPopup = true;
    },
    onShowOptionsPopup: function() {
      var _this = this;
      _this.showOptionsPopup = true;
    },
    onCloseCarerDetailPopup: function() {
      var _this = this;
      _this.showCarerDetailPopup = false;
    },
    onCloseOptionsPopup: function() {
      var _this = this;
      _this.showOptionsPopup = false;
    },
    onShowWeeklyViewPopup: function() {
      var _this = this;
      _this.slotCarer = _.find(_this.carers, { id: _this.selectedCarerId });
      _this.showWeeklyViewPopup = true;
    },
    onCloseWeeklyViewPopup: function() {
      var _this = this;
      _this.showWeeklyViewPopup = false;
    },
    getDay: function(dayNumber) {
      var weekday = new Array(7);
      weekday[1] = "Monday";
      weekday[2] = "Tuesday";
      weekday[3] = "Wednesday";
      weekday[4] = "Thursday";
      weekday[5] = "Friday";
      weekday[6] = "Saturday";
      weekday[7] = "Sunday";
      return weekday[dayNumber];
    },
    calculateMonthDays: function() {
      var _this = this;
      var months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      var monthNumber = months.indexOf(_this.month) + 1;
      var monday = moment(
        "01-" + monthNumber + "-" + _this.yearForMonth,
        "DD/MM/YYYY"
      )
        .startOf("month")
        .day("Monday");
      var previousMonthDate = monday.date();
      if (previousMonthDate > 22) {
        var previousMonthNumber = monday.month();
        var daysInMonth = new Date(
          _this.yearForMonth,
          previousMonthNumber + 1,
          0
        ).getDate();
        for (var i = previousMonthDate; i <= daysInMonth; i++) {
          _this.daysForMonthlyView.push(i);
        }
        monday.add(7, "d");
      }
      var nextMonthNumber = monday.month();
      var daysInMonth = new Date(
        _this.yearForMonth,
        nextMonthNumber + 1,
        0
      ).getDate();
      for (i = 1; i <= daysInMonth; i++) {
        _this.daysForMonthlyView.push(i);
      }
      var month = monday.month();
      while (month === monday.month()) {
        monday.add(7, "d");
      }
      if (monday.date() != 1) {
        for (i = 1; i <= monday.date(); i++) {
          _this.daysForMonthlyView.push(i);
        }
      }
      console.log(monday);
    },
    getPreviousMonth: function() {
      var _this = this;
      var months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      _this.month = months[(months.indexOf(_this.month) + 12 - 1) % 12];
      if (_this.month == "December") {
        _this.yearForMonth -= 1;
      }
    },
    getNextMonth: function() {
      var _this = this;
      var months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      _this.month = months[(months.indexOf(_this.month) + 12 + 1) % 12];
      if (_this.month == "January") {
        _this.yearForMonth += 1;
      }
    },
    getCellRowForMonthView: function(carerIndex) {
      var startDayIndex = carerIndex == 0 ? 0 : carerIndex * 6 + carerIndex;
      var endDayIndex = carerIndex == 0 ? 6 : carerIndex * 6 + 6 + carerIndex;
      var daysArray = [];
      for (var i = startDayIndex; i <= endDayIndex; i++) {
        if (!this.daysForMonthlyView[i]) {
          break;
        }
        daysArray.push(this.daysForMonthlyView[i]);
      }
      return daysArray;
    },
  },
};
