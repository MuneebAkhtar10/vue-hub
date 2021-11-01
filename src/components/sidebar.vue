<template>
  <aside class="sidebar position-fixed">
    <div
      class="sidebar-header d-flex justify-content-between align-items-center"
    >
      <div class="logo-image">
        <img src="../images/login/logo.jpg" class="w-100 h-100" alt="Logo" />
      </div>
      <p class="text-center mb-0">CAREHUB</p>
      <button class="btn btn-arrow pe-0" @click.prevent="toggleNav()">
        <i class="bi bi-arrow-right-short"></i>
      </button>
    </div>
    <div class="sidelinks-wrapper">
      <ul class="list-unstyled">
        <li>
          <router-link
            to="/dashboard"
            class="d-flex flex-nowrap align-items-center"
          >
            <i class="bi bi-speedometer position-relative"></i>
            <p class="mb-0">Dashboard</p>
          </router-link>
        </li>
        <li>
          <router-link
            to="/users"
            class="d-flex flex-nowrap align-items-center"
          >
            <i class="bi bi-people position-relative"></i>
            <p class="mb-0">Users</p>
          </router-link>
        </li>
        <li>
          <router-link
            to="/calendar"
            class="d-flex flex-nowrap align-items-center"
          >
            <i class="bi bi-calendar3 position-relative"></i>
            <p class="mb-0">Calendar</p>
          </router-link>
        </li>
        <li>
          <router-link to="/home" class="d-flex flex-nowrap align-items-center">
            <i class="bi bi-house-door position-relative"></i>
            <p class="mb-0">Home</p>
          </router-link>
        </li>
        <li>
          <router-link
            to="/visit"
            class="d-flex flex-nowrap align-items-center"
          >
            <i class="bi bi-broadcast position-relative"></i>
            <p class="mb-0">Visits</p>
          </router-link>
        </li>
        <li>
          <router-link
            to="/visit"
            class="d-flex flex-nowrap align-items-center"
          >
            <i class="bi bi-table position-relative"></i>
            <p class="mb-0">Table</p>
          </router-link>
        </li>
        <li>
          <router-link to="/form" class="d-flex flex-nowrap align-items-center">
            <i class="bi bi-clipboard-data position-relative"></i>
            <p class="mb-0">Form</p>
          </router-link>
        </li>
        <li>
          <router-link
            to="/liveEvent"
            class="d-flex flex-nowrap align-items-center"
          >
            <i class="bi bi-broadcast position-relative"></i>
            <p class="mb-0">Live Events</p>
          </router-link>
        </li>
        <li class="d-flex flex-wrap align-items-center custom-collapse">
          <a
            href="#"
            class="position-relative w-100 d-flex align-items-center"
            @click="arrowDown($event)"
          >
            <i class="bi bi-collection"></i>
            <p class="mb-0 d-inline-block">All Projects</p>
            <i
              class="bi bi-chevron-right d-inline-block caret ms-auto me-0"
            ></i>
          </a>
          <ul class="side-collapse submenu w-100">
            <li>
              <router-link
                to="/profile"
                class="d-flex flex-wrap align-items-center position-relative"
              >
                <p class="mb-0">Profile</p>
              </router-link>
            </li>
          </ul>
        </li>
        <li class="d-flex flex-wrap align-items-center custom-collapse">
          <a
            href="#"
            class="position-relative w-100 d-flex align-items-center"
            @click.prevent="arrowDown($event)"
          >
            <i class="bi bi-box-seam"></i>
            <p class="mb-0 d-inline-block">Components</p>
            <i
              class="bi bi-chevron-right d-inline-block caret ms-auto me-0"
            ></i>
          </a>
          <ul class="side-collapse submenu w-100">
            <li>
              <router-link
                to="/tabs"
                class="d-flex flex-wrap align-items-center position-relative"
              >
                <p class="mb-0">Tabs</p>
              </router-link>
            </li>
            <li>
              <router-link
                to="/signature"
                class="d-flex flex-wrap align-items-center position-relative"
              >
                <p class="mb-0">Signature</p>
              </router-link>
            </li>
            <li class="d-flex flex-wrap align-items-center custom-collapse">
              <a
                href="#"
                class="position-relative w-100 d-flex align-items-center"
                @click.prevent="innerDropdown($event)"
              >
                <p class="mb-0 d-inline-block">Inner dropdown 1</p>
                <i
                  class="bi bi-chevron-right  d-inline-block caret ms-auto me-0 inner-caret position-relative"
                ></i>
              </a>
              <ul class="side-collapse submenu w-100 inner-menu">
                <li>
                  <router-link
                    to="/tabs"
                    class="d-flex flex-wrap align-items-center position-relative"
                  >
                    <p class="mb-0">Tabs</p>
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/signature"
                    class="d-flex flex-wrap align-items-center position-relative"
                  >
                    <p class="mb-0">Signature</p>
                  </router-link>
                </li>
              </ul>
            </li>
            <li class="d-flex flex-wrap align-items-center custom-collapse">
              <a
                href="#"
                class="position-relative w-100 d-flex align-items-center"
                @click.prevent="innerDropdown($event)"
              >
                <p class="mb-0 d-inline-block">Inner dropdown 2</p>
                <i
                  class="bi bi-chevron-right  d-inline-block caret ms-auto me-0 inner-caret position-relative"
                ></i>
              </a>
              <ul class="side-collapse submenu w-100 inner-menu">
                <li>
                  <router-link
                    to="/tabs"
                    class="d-flex flex-wrap align-items-center position-relative"
                  >
                    <p class="mb-0">Tabs 2</p>
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/signature"
                    class="d-flex flex-wrap align-items-center position-relative"
                  >
                    <p class="mb-0">Signature 2</p>
                  </router-link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <router-link
            to="/timeline"
            class="d-flex flex-nowrap align-items-center"
          >
            <i class="bi bi-broadcast position-relative"></i>
            <p class="mb-0">Timeline</p>
          </router-link>
        </li>
      </ul>
    </div>
  </aside>
</template>
<script>
import "../scss/layout/_sidebar.scss";
export default {
  data() {
    return {
      dropdown: false,
      showDrop: null,
    };
  },
  methods: {
    toggleNav: function() {
      var menu = document.querySelector("body");
      if (menu.classList.contains("nav-toggle")) {
        menu.classList.remove("nav-toggle");
      } else {
        menu.classList.add("nav-toggle");
      }
    },
    arrowDown(event) {
      const active = document.querySelectorAll(".show");
      active.forEach((node) => {
        if (node != event.currentTarget.parentNode) {
          node.classList.remove("show");
        }
      });
      event.currentTarget.parentNode.classList.toggle("show");
    },
    innerDropdown(event) {
      const active = document.querySelectorAll(".show-inner");
      active.forEach((node) => {
        if (node != event.currentTarget.parentNode) {
          node.classList.remove("show-inner");
        }
      });
      event.currentTarget.parentNode.classList.toggle("show-inner");
    },
    // To make sidebar small
    samllNav() {
      let navSmall = document.querySelector("body");
      navSmall.classList.add("nav-toggle");
    },
  },
  mounted() {
    this.samllNav();
  },
};
</script>
