<template>
  <div class="ms-5 mt-5 carerPopoverContainer">
    <div>
      <div class="row justify-content-end firstHeader">
        <div class="col-1">
          <a @click="$emit('close')"> <i class="bi bi-x popoverCross"></i></a>
        </div>
      </div>
      <div class="row justify-content-center">
        <img
          class="profileImage"
          src="../images/icons/profileImage.png"
          alt="profileImage"
        />
      </div>
      <div class="row justify-content-center carerNameHead pt-3">
        <h3>Emma Phillips</h3>
      </div>
      <div class="row justify-content-center carerDesignationHead pt-1">
        <h3>Designation here</h3>
      </div>
      <div class="row justify-content-center">
        <hr class="profileTextUnderline" />
      </div>
      <div class="row justify-content-center mt-4">
        <div class="col-2 justify-content-start ps-5">
          <img
            class="phoneIcon"
            src="../images/icons/phoneIcon.png"
            alt="phoneIcon"
          />
        </div>
        <div class="col-10 justify-content-start carerPhoneNumber">
          <p>+44 123 4567 890</p>
        </div>
      </div>
      <div class="row justify-content-center mt-2 mb-4">
        <div class="col-2 justify-content-start ps-5">
          <img
            class="locationIcon"
            src="../images/icons/location.png"
            alt="locationIcon"
          />
        </div>
        <div class="col-10 justify-content-start carerPhoneNumber">
          <p>Lorem ispum ninem instant</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "carer-profile-popup",
  props: {
    slotCarer: {
      type: Object,
      default: function() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  components: {},
  created() {},
  mounted() {},
  emits: ["close"],
  methods: {
    onClosePopup: function() {
      this.$emit("close");
    },
  },
};
</script>

<style src="../style/popup.css" />
