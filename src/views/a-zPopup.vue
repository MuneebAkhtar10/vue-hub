<template>
  <div class="modal">
    <!-- Modal content -->
    <div class="modal-content" style="width: 40%">
      <div class="editInvoiceHeader">
        <i class="bi bi-x close" />
        <p>Select Option</p>
      </div>
      <div class="Modalbody mt-3">
        <!-- 1st row -->
        <div class="alphabetContainer">
          <div class="listContainer">
            <span class="alphabetStyle">A</span>
            <span class="alphabetStyle">B</span>
            <span class="alphabetStyle">C</span>
            <span class="alphabetStyle">D</span>
            <span class="alphabetStyle">E</span>
            <span class="alphabetStyle">F</span>
            <span class="alphabetStyle">G</span>
            <span class="alphabetStyle">H</span>
            <span class="alphabetStyle">I</span>
            <span class="alphabetStyle">J</span>
            <span class="alphabetStyle">K</span>
            <span class="alphabetStyle">L</span>
            <span class="alphabetStyle">M</span>
          </div>
          <div class="listContainer">
            <span class="alphabetStyle">N</span>
            <span class="alphabetStyle">O</span>
            <span class="alphabetStyle">P</span>
            <span class="alphabetStyle">Q</span>
            <span class="alphabetStyle">R</span>
            <span class="alphabetStyle">S</span>
            <span class="alphabetStyle">T</span>
            <span class="alphabetStyle">U</span>
            <span class="alphabetStyle">V</span>
            <span class="alphabetStyle">W</span>
            <span class="alphabetStyle">X</span>
            <span class="alphabetStyle">Y</span>
            <span class="alphabetStyle">Z</span>
          </div>
        </div>
        <!-- table -->
        <div style="overflow-x: auto; height: 50%">
          <table class="financeTable mt-3">
            <thead
              class="financeMainTableHeader"
              style="
                font-family: Poppins;
                font-size: 18px;
                font-weight: 500;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.5;
                letter-spacing: 0.11px;
                color: #204f71;
              "
            >
              <tr>
                <th class="financeClientTableHeader">
                  <span style="float: left"> Clients </span>
                  <span style="float: right"
                    ><i class="bi bi-chevron-down financeDownChivronStyle" /><i
                      class="bi bi-chevron-up financeUpChivronStyle"
                  /></span>
                </th>
                <th class="financeClientTableHeader">
                  <span style="float: left"> Client ID </span>
                  <span style="float: right"
                    ><i class="bi bi-chevron-down financeDownChivronStyle" /><i
                      class="bi bi-chevron-up financeUpChivronStyle"
                  /></span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="financeClientTableData" style="background: #028fa9">
                  <div style="display: flex; justify-content: left">
                    <div>
                      <img
                        class="carerIconsFinanceTable"
                        src="../images/icons/profileImage.png"
                        alt="marchart"
                        style="
                          width: 40px;
                          height: 40px;
                          margin: 0 9px 0 0;
                          border: solid 1px #fff;
                          border-radius: 50px;
                        "
                      />
                    </div>
                    <div
                      class="financeClientTableData ps-2"
                      style="
                        border: none;
                        align-self: center;
                        font-family: Poppins;
                        font-size: 15px;
                        font-weight: 500;
                        font-stretch: normal;
                        font-style: normal;
                        line-height: 1.53;
                        letter-spacing: 0.09px;
                        text-align: left;
                        color: #fff;
                      "
                    >
                      Ruby Dixcon
                    </div>
                  </div>
                </td>
                <td
                  class="financeClientTableData"
                  style="
                    align-self: center;
                    font-family: Poppins;
                    font-size: 15px;
                    font-weight: 500;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: 1.53;
                    letter-spacing: 0.09px;
                    color: #fff;
                    background: #028fa9;
                  "
                >
                  Inv #0001
                </td>
              </tr>
              <tr>
                <td class="financeClientTableData" style="">
                  <div style="display: flex; justify-content: left">
                    <div>
                      <img
                        class="carerIconsFinanceTable"
                        src="../images/icons/profileImage.png"
                        alt="marchart"
                        style="
                          width: 40px;
                          height: 40px;
                          margin: 0 9px 0 0;
                          border: solid 1px #fff;
                        "
                      />
                    </div>
                    <div
                      class="financeClientTableData ps-2"
                      style="
                        border: none;
                        align-self: center;
                        font-family: Poppins;
                        font-size: 15px;
                        font-weight: 500;
                        font-stretch: normal;
                        font-style: normal;
                        line-height: 1.53;
                        letter-spacing: 0.09px;
                        text-align: left;
                        color: #204f71;
                      "
                    >
                      Ruby Dixcon
                    </div>
                  </div>
                </td>
                <td
                  class="financeClientTableData"
                  style="
                    align-self: center;
                    font-family: Poppins;
                    font-size: 15px;
                    font-weight: 500;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: 1.53;
                    letter-spacing: 0.09px;
                    color: #204f71;
                  "
                >
                  Inv #0001
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="row mt-4">
          <div class="col-7">
            <div class="pagination2">
              <a href="#"
                ><i
                  style="#028FA9"
                  class="bi bi-chevron-left"
                ></i
              ></a>
              <a class="active" href="#">1</a>
              <a  href="#">2</a>
              <a href="#"
                ><i
                  style="#028FA9"
                  class="bi bi-chevron-right"
                ></i
              ></a>
            </div>
          </div>
          <div class="col-4 ms-4">
            <button
              :disabled="!selectedCarer || !selectedCarer.id"
              @click="saveAppointment"
              type="button"
              class="btn btn-primary assignClientBtn"
              style="
                cursor: pointer;
                background-color: rgba(67, 218, 159, 1);
                border-radius: 10px;
                border-color: rgba(67, 218, 159, 1);
                width: 100%;
              "
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "az-popup",
};
</script>

<style src="../style/azPopup.css" />
/* <style src="../style/popup.css" /> */