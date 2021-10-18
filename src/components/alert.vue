<template>
    <!--Change class to alert-danger for wrong input alert  -->
    <div class="d-flex align-items-center flex-wrap alert alert-success" v-if="alertTime == true">
        <div class="alert-content pe-3 ps-4 position-relative">
            <h5 class="mb-0 text-truncate">Login Successfull</h5>
            <p class="mb-0 text-truncate">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
        <div class="alert-small-box d-flex align-items-center justify-content-center text-center rounded-circle">
            <span class="d-inline-block"></span>
        </div>
    </div> 
</template>
<script>
import '../scss/components/_alert.scss';
export default {
    data() {
        return {
            alertTime: true
        }
    },
    methods: {
        alertFunction() {
            setTimeout(() => this.alertTime = false, 4000);
        }
    },
    mounted() {
        this.alertFunction();
    }
}
</script>