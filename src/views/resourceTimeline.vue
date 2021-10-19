<template>
  <div
    id="calendar"
    class="fc fc-media-screen fc-direction-ltr fc-theme-standard"
  >
    <div class="fc-header-toolbar fc-toolbar fc-toolbar-ltr">
      <div class="fc-toolbar-chunk">
        <div class="fc-button-group">
          <button
            type="button"
            title="Previous day"
            aria-pressed="false"
            class="fc-prev-button fc-button fc-button-primary"
          >
            <span class="fc-icon fc-icon-chevron-left"></span></button
          ><button
            type="button"
            title="Next day"
            aria-pressed="false"
            class="fc-next-button fc-button fc-button-primary"
          >
            <span class="fc-icon fc-icon-chevron-right"></span>
          </button>
        </div>
      </div>
      <div class="fc-toolbar-chunk">
        <h2 class="fc-toolbar-title" id="fc-dom-1">October 15, 2021</h2>
      </div>
    </div>
    <div
      aria-labelledby="fc-dom-1"
      class="fc-view-harness fc-view-harness-active"
      style="height: 733.333px;"
    >
      <div
        class="fc-resource-timeline  fc-timeline fc-timeline-overlap-enabled fc-resourceTimelineDay-view fc-view"
      >
        <table role="grid" class="fc-scrollgrid  fc-scrollgrid-liquid">
          <colgroup>
            <col style="width: 30%;" />
            <col />
            <col />
          </colgroup>
          <thead role="rowgroup">
            <tr
              role="presentation"
              class="fc-scrollgrid-section fc-scrollgrid-section-header "
            >
              <th role="presentation">
                <div class="fc-scroller-harness">
                  <div class="fc-scroller" style="overflow: hidden;">
                    <table
                      role="presentation"
                      class="fc-datagrid-header fc-scrollgrid-sync-table"
                      style="width: 328px;"
                    >
                      <colgroup>
                        <col />
                      </colgroup>
                      <thead role="presentation">
                        <tr role="row">
                          <th role="columnheader" class="fc-datagrid-cell">
                            <div
                              class="fc-datagrid-cell-frame"
                              style="height: 33px;"
                            >
                              <div
                                class="fc-datagrid-cell-cushion fc-scrollgrid-sync-inner"
                              >
                                <span
                                  class="fc-datagrid-expander fc-datagrid-expander-placeholder"
                                  ><span class="fc-icon"></span></span
                                ><span class="fc-datagrid-cell-main"
                                  >Resources</span
                                >
                              </div>
                            </div>
                          </th>
                        </tr>
                      </thead>
                    </table>
                  </div>
                </div>
              </th>
              <td
                role="presentation"
                class="fc-resource-timeline-divider fc-cell-shaded"
              ></td>
              <th role="presentation">
                <div class="fc-scroller-harness">
                  <div
                    class="fc-scroller"
                    style="overflow: scroll; margin-bottom: -17px;"
                  >
                    <div class="fc-timeline-header">
                      <table
                        aria-hidden="true"
                        class="fc-scrollgrid-sync-table"
                        style="min-width: 1440px; width: 748px;"
                      >
                        <colgroup>
                          <col
                            v-for="(col, colIndex) in timeRanges"
                            :key="col + colIndex"
                            style="min-width: 30px;"
                          />
                        </colgroup>
                        <tbody>
                          <tr
                            class="fc-timeline-header-row fc-timeline-header-row-chrono"
                          >
                            <th
                              v-for="(time, timeIndex) in timeRanges"
                              :key="time + '-' + timeIndex"
                              class="fc-timeline-slot fc-timeline-slot-label fc-slot fc-slot-fri fc-slot-today  fc-slot-past"
                              :data-date="'2021-10-15T' + time"
                              colspan="2"
                            >
                              <div
                                class="fc-timeline-slot-frame"
                                style="height: 33px;"
                              >
                                <a
                                  class="fc-timeline-slot-cushion fc-scrollgrid-sync-inner"
                                  style="left: 340.586px; right: 340.586px; top: 0px;"
                                  >{{ getTwelveHourTime(time) }}</a
                                >
                              </div>
                            </th>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody role="rowgroup">
            <tr
              role="presentation"
              class="fc-scrollgrid-section fc-scrollgrid-section-body  fc-scrollgrid-section-liquid"
            >
              <td role="presentation">
                <div class="fc-scroller-harness fc-scroller-harness-liquid">
                  <div
                    class="fc-scroller fc-scroller-liquid-absolute"
                    style="overflow: scroll; right: -17px;"
                  >
                    <table
                      role="presentation"
                      class="fc-datagrid-body fc-scrollgrid-sync-table"
                      style="width: 328px;"
                    >
                      <colgroup>
                        <col />
                      </colgroup>
                      <tbody role="presentation">
                        <tr
                          v-for="(carer, carerIndex) in carers"
                          :key="carer.id + '-' + carerIndex"
                          role="row"
                        >
                          <td
                            role="gridcell"
                            class="fc-datagrid-cell fc-resource"
                          >
                            <div
                              class="fc-datagrid-cell-frame"
                              style="height: 33px;"
                            >
                              <div
                                class="fc-datagrid-cell-cushion fc-scrollgrid-sync-inner"
                              >
                                <span
                                  class="fc-datagrid-expander fc-datagrid-expander-placeholder"
                                  ><span class="fc-icon"></span></span
                                ><span class="fc-datagrid-cell-main">{{
                                  carer.name
                                }}</span>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </td>
              <td
                role="presentation"
                class="fc-resource-timeline-divider fc-cell-shaded"
              ></td>
              <td role="presentation">
                <div class="fc-scroller-harness fc-scroller-harness-liquid">
                  <div
                    class="fc-scroller fc-scroller-liquid-absolute"
                    style="overflow: scroll;"
                  >
                    <div class="fc-timeline-body " style="min-width: 1440px;">
                      <div class="fc-timeline-slots">
                        <table
                          aria-hidden="true"
                          class=""
                          style="min-width: 1440px; width: 748px;"
                        >
                          <colgroup>
                            <col
                              v-for="(col, colIndex) in timeRanges"
                              :key="col + colIndex"
                              style="min-width: 30px;"
                            />
                          </colgroup>
                          <tbody>
                            <tr>
                              <td
                                v-for="(time, timeIndex) in timeRanges"
                                :key="time + '-' + timeIndex"
                                class="fc-timeline-slot fc-timeline-slot-lane fc-timeline-slot-minor fc-slot fc-slot-fri fc-slot-today  fc-slot-future"
                                :data-date="'2021-10-15T' + time"
                              >
                                <div></div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div class="fc-timeline-bg"></div>
                      <table
                        aria-hidden="true"
                        class="fc-scrollgrid-sync-table "
                        style="min-width: 1440px; width: 748px;"
                      >
                        <tbody>
                          <tr
                            v-for="(carer, carerIndex) in carers"
                            :key="'event' - carer.id + '-' + carerIndex"
                          >
                            <td class="fc-timeline-lane fc-resource">
                              <div
                                class="fc-timeline-lane-frame"
                                style="height: 33px;"
                              >
                                <div class="fc-timeline-bg"></div>
                                <div
                                  class="fc-timeline-events fc-scrollgrid-sync-inner"
                                  style="height: 0px;"
                                >
                                  <div
                                    v-for="(appointment,
                                    appointmentIndex) in appointmentShapedData[
                                      carer.id
                                    ]"
                                    :key="
                                      'appointment-shaped-data' +
                                        appointmentIndex
                                    "
                                    class="fc-timeline-event-harness"
                                    style="top: 0px; left: 600px; right: -900px;"
                                  >
                                    <a
                                      class="fc-timeline-event fc-h-event fc-event fc-event-draggable fc-event-resizable fc-event-start fc-event-end fc-event-past fc-event-today"
                                      style="border-color: green; background-color: green;"
                                      ><div class="fc-event-main">
                                        <div class="fc-event-main-frame">
                                          <div class="fc-event-title-container">
                                            <div
                                              class="fc-event-title fc-sticky"
                                              style="top: 0px;"
                                            >
                                              {{ appointment.patient.name }}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        class="fc-event-resizer fc-event-resizer-start"
                                      ></div>
                                      <div
                                        class="fc-event-resizer fc-event-resizer-end"
                                      ></div
                                    ></a>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<style>
html,
body {
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
  font-size: 14px;
}

#calendar {
  max-width: 1100px;
  margin: 40px auto;
}
</style>

<script src="../js/resourceTimeline.js"></script>
<style src="../style/main.min.css" />
