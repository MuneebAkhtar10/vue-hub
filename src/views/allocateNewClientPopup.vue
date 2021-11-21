<template>
  <div class="mt-5">
    <Popper>
      <button>Trigger element</button>
      <template #content>
        <div class="container popoverContainer">
          <div class="row justify-content-between firstHeader">
            <div class="col-10 pt-4 firstHeaderHeading">
              Allocate New Client
            </div>
            <div class="col-1" style="margin-right:-43px">
              <i class="bi bi-x popoverCross"></i>
            </div>
          </div>
          <div class="row justify-content-between SecondHeader mt-2">
            <div class="col-8 mt-2">
              <i class="bi bi-person personIcon ps-3"></i>
              <span style="font-size:15px;padding-left:7px">Carer 1</span>
            </div>
            <div class="col-4 search_box">
              <input class="search" type="text" placeholder="Search" />
              <i class="bi bi-search search_icon"></i>
            </div>
          </div>
          <!-- <div class="row justify-content-center timeRow mt-2">
            <div class="col-12 mt-2">
              <table class="dates">
                <thead>
                  <tr>
                    <th
                      v-for="(time, timeIndex) in timeRanges"
                      :key="time + '-' + timeIndex"
                    >
                      <div v-if="time == currentTimeSlot">
                        <i
                          style="font-size:30px;color:darkgray;margin-top:-40px;position:absolute"
                          class="bi bi-caret-down-fill"
                        ></i>
                      </div>

                      <div>
                        {{ time }}
                      </div>
                      <template
                        v-for="carer in carers"
                        :key="'slot-line-' + carer.id"
                      >
                        <div v-if="time == currentTimeSlot">
                          <div class="verticalLine" />
                        </div>
                      </template>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(carer, carerIndex) in carers"
                    :key="carer.id + '-' + carerIndex"
                    class="tableRow"
                    @click="selectCarer(carer.id)"
                  >
                    <template v-if="view == 'today'">
                      <td
                        class="data-cell"
                        v-for="(time, timeIndex) in timeRanges"
                        :key="time + '-' + timeIndex"
                        @dblclick="
                          openAppointmentPopupForNewAppointment(time, timeIndex)
                        "
                      ></td>
                    </template>
                  </tr>
                </tbody>
              </table>
              <template v-if="appointmentFixed">
                <div v-for="apt in appointments" :key="apt.id">
                  <div
                    class="table-area-selected"
                    :class="'se-' + apt.id"
                    :id="'apt-' + apt.id"
                    @dblclick="
                      openAppointmentPopupForExistingAppointment(apt.id)
                    "
                  >
                    <p class="patientsName">{{ apt.patient.name }}</p>
                  </div>
                </div>
              </template>
            </div>
          </div> -->

          <div class="row justify-content-center clientTableContainer mt-2">
            <table class="clientDetailsTable">
              <thead class="clientDetailsTableHeader">
                <tr class="clientTableRow">
                  <th class="clientTableHeader">
                    Clients<i class="bi bi-chevron-down downChivronStyle" /><i
                      class="bi bi-chevron-up upChivronStyle"
                    />
                  </th>
                  <th class="clientTableHeader">
                    Availability<i
                      class="bi bi-chevron-down downChivronStyle"
                    /><i class="bi bi-chevron-up upChivronStyle" />
                  </th>
                  <th class="clientTableHeader">
                    Continuity<i
                      class="bi bi-chevron-down downChivronStyle"
                    /><i class="bi bi-chevron-up upChivronStyle" />
                  </th>
                  <th class="clientTableHeader">
                    Capacity<i class="bi bi-chevron-down downChivronStyle" /><i
                      class="bi bi-chevron-up upChivronStyle"
                    />
                  </th>
                  <th class="clientTableHeader">
                    Distance<i class="bi bi-chevron-down downChivronStyle" /><i
                      class="bi bi-chevron-up upChivronStyle"
                    />
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="clientTableRow">
                  <td class="clientTableData">Content 1</td>
                  <td class="clientTableData">
                    <i class="bi bi-check-circle availabilityIcon"></i>
                  </td>
                  <td class="clientTableData">0%</td>
                  <td class="clientTableData">2 hours</td>
                  <td class="clientTableData">1.2 miles</td>
                </tr>
                <tr class="clientTableRow">
                  <td class="clientTableData">Content 1</td>
                  <td class="clientTableData">
                    <i class="bi bi-check-circle availabilityIcon"></i>
                  </td>
                  <td class="clientTableData">0%</td>
                  <td class="clientTableData">5 hours</td>
                  <td class="clientTableData">5 miles</td>
                </tr>
                <tr class="clientTableRow">
                  <td class="clientTableData">Content 1</td>
                  <td class="clientTableData">
                    <i class="bi bi-check-circle availabilityIcon"></i>
                  </td>
                  <td class="clientTableData">0%</td>
                  <td class="clientTableData">8 hours</td>
                  <td class="clientTableData">2 miles</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="row mt-4">
            <div class="col-9">
              <div class="pagination">
                <a href="#"
                  ><i
                    style="color:rgba(67, 218, 159, 1)"
                    class="bi bi-chevron-left"
                  ></i
                ></a>
                <a href="#">1</a>
                <a class="active" href="#">2</a>
                <a href="#">3</a>
                <a href="#">4</a>
                <a href="#"
                  ><i
                    style="color:rgba(67, 218, 159, 1)"
                    class="bi bi-chevron-right"
                  ></i
                ></a>
              </div>
            </div>
            <div class="col-3">
              <button
                disabled
                type="button"
                class="btn btn-primary ms-5 mb-4 assignClientBtn"
                style="background-color: rgba(67, 218, 159, 1);border-radius: 10px;border-color: rgba(67, 218, 159, 1);"
              >
                Assign Client
              </button>
            </div>
          </div>
        </div>
      </template>
    </Popper>
  </div>
</template>

<script>
import Popper from "vue3-popper";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    Popper,
  },
});
</script>
<style src="../style/popup.css" />
