<template>
  <div class="ms-1 carerDetailContainer">
    <div class="row justify-content-end firstHeader">
      <div class="col-4 firstHeaderHeading">
        <img
          class="profileIcon pt-5"
          src="../images/icons/profileImage.png"
          alt="marchart"
        />
      </div>
      <div class="col-6 pt-5 mt-2 firstHeaderHeading">
        <span class="carerDetailName"
          >Adam Smith
          <!-- <br /> -->
          <span
            style="margin-left:-65%;color:rgb(132, 132, 133);font-size:15px;display: flex;"
            >Designation here</span
          >
        </span>
      </div>
      <div class="col-1 pt-3 ps-4">
        <a href="javascript:void(0)" @click="$emit('close')">
          <i class="bi bi-x popoverCross"></i
        ></a>
      </div>
    </div>
    <!-- 1st row -->
    <div class="row ms-5 ps-5 me-4 belowDetails">
      <div class="col-1">
        <img
          class="personIcon"
          src="../images/icons/clock.png"
          alt="marchart"
        />
      </div>
      <div class="col-2" style="margin-top:-0.3%;margin-left:-25px">
        <span class="singleCarerDetail">Time From</span>
      </div>
      <div class="col-3" style="margin-left:-15px">
        <nav class="listCarerTimeDropDown">
          <label for="touch"
            ><span class="listCarerTimeDropDownDefault">06:30</span
            ><img
              class="dropDownChevronIcon"
              src="../images/icons/DropDown.png"
              alt="marchart"
          /></label>
          <input type="checkbox" id="touch" />

          <ul class="slide">
            <li class="listCarerTime"><a href="#">06:30</a></li>
            <li class="listCarerTime"><a href="#">06:30</a></li>
          </ul>
        </nav>
      </div>
      <div class="col-1 ms-4">
        <img
          class="personIcon"
          src="../images/icons/clock.png"
          alt="marchart"
        />
      </div>
      <div class="col-2" style="margin-top:-0.3%;margin-left:-25px">
        <span class="singleCarerDetail">Time To</span>
      </div>
      <div class="col-3" style="margin-left:-35px">
        <nav class="listCarerTimeDropDown">
          <label for="touchTimer2"
            ><span class="listCarerTimeDropDownDefault">06:30</span
            ><img
              class="dropDownChevronIcon"
              src="../images/icons/DropDown.png"
              alt="marchart"
          /></label>
          <input type="checkbox" id="touchTimer2" />

          <ul class="slideTimer2">
            <li class="listCarerTime"><a href="#">06:30</a></li>
            <li class="listCarerTime"><a href="#">06:30</a></li>
          </ul>
        </nav>
      </div>
    </div>
    <!-- 2nd row -->
    <div class="row ms-5 ps-5 me-4 mt-3 belowDetails">
      <div class="col-1">
        <img
          class="personIcon"
          src="../images/icons/clock.png"
          alt="marchart"
        />
      </div>
      <div class="col-2" style="margin-top:-0.3%;margin-left:-25px">
        <span class="singleCarerDetail">Invoice Rate</span>
      </div>
      <div class="col-3" style="margin-left:-15px">
        <nav class="listCarerTimeDropDown">
          <label
            ><span class="listCarerTimeDropDownDefault">16.850</span></label
          >
          <input type="checkbox" id="touch" />
        </nav>
      </div>
      <div class="col-1 ms-4">
        <img
          class="personIcon"
          src="../images/icons/clock.png"
          alt="marchart"
        />
      </div>
      <div class="col-2" style="margin-top:-0.3%;margin-left:-25px">
        <span class="singleCarerDetail">CA Rate</span>
      </div>
      <div class="col-3" style="margin-left:-35px">
        <nav class="listCarerTimeDropDown">
          <label
            ><span class="listCarerTimeDropDownDefault">9.4000</span></label
          >
          <input type="checkbox" id="touch" />
        </nav>
      </div>
    </div>
    <!-- 3rd row -->
    <div class="row ms-5 ps-5 me-4 mt-3 belowDetails">
      <div class="col-1">
        <img
          class="personIcon"
          src="../images/icons/clock.png"
          alt="marchart"
        />
      </div>
      <div class="col-2" style="margin-top:-0.3%;margin-left:-25px">
        <span class="singleCarerDetail">Funder Code</span>
      </div>
      <div class="col-3" style="margin-left:-15px">
        <nav class="listCarerTimeDropDown">
          <label for="touchFunder"
            ><span class="listCarerTimeDropDownDefault">NCC - 19 -20</span
            ><img
              class="dropDownChevronIcon"
              src="../images/icons/DropDown.png"
              alt="marchart"
          /></label>
          <input type="checkbox" id="touchFunder" />

          <ul class="slideFunder">
            <li class="listCarerTime"><a href="#">NCC - 19 -20</a></li>
            <li class="listCarerTime"><a href="#">NCC - 19 -20</a></li>
          </ul>
        </nav>
      </div>
      <div class="col-1 ms-4">
        <img
          class="personIcon"
          src="../images/icons/clock.png"
          alt="marchart"
        />
      </div>
      <div class="col-2" style="margin-top:-0.3%;margin-left:-25px">
        <span class="singleCarerDetail">Scale</span>
      </div>
      <div class="col-3" style="margin-left:-35px">
        <nav class="listCarerTimeDropDown">
          <label><span class="listCarerTimeDropDownDefault">HR</span></label>
          <input type="checkbox" id="touch" />
        </nav>
      </div>
    </div>
    <!-- 4th row -->
    <div class="row ms-5 ps-5 me-4 mt-3 belowDetails">
      <div class="col-1">
        <img
          class="personIcon"
          src="../images/icons/clock.png"
          alt="marchart"
        />
      </div>
      <div class="col-2" style="margin-top:-0.3%;margin-left:-25px">
        <span class="singleCarerDetail">NPC</span>
      </div>
      <div class="col-3" style="margin-left:-15px">
        <nav class="listCarerTimeDropDown">
          <label
            ><span class="listCarerTimeDropDownDefault"
              >_____________</span
            ></label
          >
          <input type="checkbox" id="touch" />
        </nav>
      </div>
    </div>
    <!-- 5th row -->
    <div class="row ms-5 ps-5 me-4 mt-3 mb-4 pt-3 belowDetails">
      <div class="col-4">
        <button class="editButtonStyle">
          Edit
        </button>
      </div>
      <div class="col-4" style="margin-top:-0.3%;margin-left:-75px;">
        <button
          class="editButtonStyle"
          style="background-color: #43da9f; color: white;"
        >
          Save
        </button>
      </div>
      <div class="col-4" style="margin-top:-0.3%;margin-left:-75px">
        <button class="editButtonStyle">
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<style src="../style/allocateCarerDetailsPopup.css" />
