<template>
  <div class="ms-5 mt-5 optionalPopoverContainer">
    <!-- <a class="close" @click="onClosePopup()" href="#">&times;</a> -->

    <div class="row justify-content-between firstHeader">
      <div @click="optionSelection('allocate')" class="col-10 mt-5 firstOption">
        Allocate Someone Else
      </div>
      <div class="col-2">
        <a href="javascript:void(0)" @click="$emit('close')">
          <i class="bi bi-x popoverCross ps-1"></i
        ></a>
      </div>
    </div>
    <div class="row justify-content-center">
      <hr class="optionalTextUnderline" />
    </div>
    <div class="row justify-content-between firstHeader">
      <div @click="optionSelection('details')" class="col-10 firstOption">
        View Visit Details
      </div>
      <div class="col-2"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "optional-popup",
  data() {
    return {};
  },
  components: {},
  created() {},
  mounted() {},
  emits: ["close", "select"],
  methods: {
    onClosePopup: function() {
      this.$emit("close");
    },
    optionSelection: function(option) {
      this.$emit("select", option);
    },
  },
};
</script>

<style src="../style/popup.css" />
