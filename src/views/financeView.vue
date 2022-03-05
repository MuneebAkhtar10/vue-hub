<template>
  <topBlueHeader />
  <carerHeader />
  <searchHeader />
  <div class="row tableInvoiceContainer">
    <div
      class="col-2 mt-4 ms-2 pt-1 closableBtn"
      style="display: flex; justify-content: center"
    >
      <div>
        <img
          class="carerIconsFinanceTable"
          src="../images/icons/profileImage.png"
          alt="marchart"
        />
      </div>
      <div
        class="ps-2"
        style="font-size: 12px; color: #028fa9; font-weight: bolder"
      >
        James Smith
      </div>
      <i
        class="bi bi-x-circle"
        style="
          margin-top: -45px;
          margin-right: -20px;
          cursor: pointer;
          color: #028fa9;
        "
      ></i>
    </div>
    <div
      class="col-2 mt-4 ms-2 pt-1 closableBtn"
      style="display: flex; justify-content: center"
    >
      <div>
        <img
          class="carerIconsFinanceTable"
          src="../images/icons/profileImage.png"
          alt="marchart"
        />
      </div>
      <div
        class="ps-2"
        style="font-size: 12px; color: #028fa9; font-weight: bolder"
      >
        James Smith
      </div>
      <i
        class="bi bi-x-circle"
        style="
          margin-top: -45px;
          margin-right: -20px;
          cursor: pointer;
          color: #028fa9;
        "
      ></i>
    </div>
  </div>
  <div class="row tableInvoiceContainer">
    <div class="col-7">
      <!-- table -->
      <div style="overflow-x: auto">
        <table class="financeTable mt-3">
          <thead class="financeMainTableHeader">
            <tr>
              <th class="financeClientTableHeader">
                Carer
                <i class="bi bi-chevron-down financeDownChivronStyle" /><i
                  class="bi bi-chevron-up financeUpChivronStyle"
                />
              </th>
              <th class="financeClientTableHeader">
                Inv.No.
                <i class="bi bi-chevron-down financeDownChivronStyle" /><i
                  class="bi bi-chevron-up financeUpChivronStyle"
                />
              </th>
              <th class="financeClientTableHeader">
                Inv.Name
                <i class="bi bi-chevron-down financeDownChivronStyle" /><i
                  class="bi bi-chevron-up financeUpChivronStyle"
                />
              </th>
              <th class="financeClientTableHeader">
                Inv.Date
                <i class="bi bi-chevron-down financeDownChivronStyle" /><i
                  class="bi bi-chevron-up financeUpChivronStyle"
                />
              </th>
              <th class="financeClientTableHeader">
                TotHours
                <i class="bi bi-chevron-down financeDownChivronStyle" /><i
                  class="bi bi-chevron-up financeUpChivronStyle"
                />
              </th>
              <th class="financeClientTableHeader">
                Amount
                <i class="bi bi-chevron-down financeDownChivronStyle" /><i
                  class="bi bi-chevron-up financeUpChivronStyle"
                />
              </th>
              <th class="financeClientTableHeader">
                Funder
                <i class="bi bi-chevron-down financeDownChivronStyle" /><i
                  class="bi bi-chevron-up financeUpChivronStyle"
                />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="financeClientTableData">
                <div style="display: flex; justify-content: center">
                  <div>
                    <label class="containerCheckboxCss mt-2 me-5 ps-0">
                      <input type="checkbox" />
                      <span class="checkmark"></span>
                    </label>
                     
                  </div>
                  <div style="margin-left:-10px">
                    <img
                      class="carerIconsFinanceTable"
                      src="../images/icons/profileImage.png"
                      alt="marchart"
                    />
                  </div>
                  <div
                    class="financeClientTableData ps-2"
                    style="border: none; align-self: center"
                  >
                    Ruby Dixcon
                  </div>
                </div>
              </td>
              <td class="financeClientTableData">Inv #0001</td>
              <td class="financeClientTableData">Branch 2</td>
              <td class="financeClientTableData">30/01/2022</td>
              <td class="financeClientTableData">05.2 hours</td>
              <td class="financeClientTableData">$0.00</td>
              <td class="financeClientTableData">Home Dis</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="col-4 ms-4" style="margin-right: 0px">
      <div class="flex-container mt-4">
        <div>
          <div
            class="pt-2"
            style="font-size: 12px; font-weight: bolder; color: #026475"
          >
            Inv #0001
          </div>
        </div>
        <div class="flex-container-col-2">
          <div class="iconsContainer">
            <img
              class="financeIconsStyle"
              src="../images/icons/phoneIcon.png"
              alt="marchart"
            />
          </div>
          <div class="iconsContainer">
            <img
              class="financeIconsStyle"
              src="../images/icons/phoneIcon.png"
              alt="marchart"
            />
          </div>
          <div class="iconsContainer">
            <img
              class="financeIconsStyle"
              src="../images/icons/phoneIcon.png"
              alt="marchart"
            />
          </div>
          <div class="iconsContainer">
            <img
              class="financeIconsStyle"
              src="../images/icons/phoneIcon.png"
              alt="marchart"
            />
          </div>
          <div class="iconsContainer">
            <img
              class="financeIconsStyle"
              src="../images/icons/phoneIcon.png"
              alt="marchart"
            />
          </div>
        </div>
      </div>
      <div class="row invoiceContainer ps-4 pe-4 ms-2 me-2">
        <div class="flex-container">
          <div>
            <img
              class="carehubIconStyle"
              src="../images/icons/carehubLogo.png"
              alt="marchart"
            />
          </div>
          <div style="font-size: 24px; font-weight: bolder; color: #026475">
            Invoice
            <pre />
            <span
              class="ps-4"
              style="
                font-size: 12px;
                font-weight: bold;
                color: #026475;
                text-align: right;
              "
              >Inv #0001</span
            >
          </div>
        </div>
        <div class="flex-container">
          <div style="" class="InvoiceTextStyle">
            1561 Appleview Town,
            <pre />
            <span class="InvoiceTextStyle">Baker Street,</span>
            <pre />
            <span class="InvoiceTextStyle">Chicago, U.S.A</span>
          </div>
          <div class="InvoiceTextStyle" style="text-align: right">
            Total Amount
            <pre />
            <span class="ps-4 InvoiceTextStyle">$10.00</span>
          </div>
        </div>
        <div class="flex-container">
          <div
            class="InvoiceTextStyle"
            style="font-size: 14px; font-weight: bolder; color: black"
          >
            Bill To
            <pre />
            <span class="InvoiceTextStyle" style="color: rgb(2, 143, 169)"
              >Alex Mark</span
            >
          </div>
          <div style="text-align: end" class="InvoiceTextStyle">
            Invoice Date:<span class="ps-5">01/02/2022</span>
            <pre class="mb-1" />
            <span class="InvoiceTextStyle">
              Date From:<span class="ps-5">10/06/2022</span>
              <pre class="mb-1" />
            </span>
            <pre />
            <span class="InvoiceTextStyle">
              Date To:<span class="ps-5">26/04/2022</span>
              <pre class="mb-1" />
            </span>
          </div>
        </div>
        <!-- invoice  table -->
        <table>
          <tr>
            <th class="invoiceTableHeader">First Name</th>
            <th class="invoiceTableHeader">Last Name</th>
            <th class="invoiceTableHeader">Points</th>
            <th class="invoiceTableHeader">Last Name</th>
            <th class="invoiceTableHeader">Points</th>
          </tr>
          <tr>
            <td class="invoiceTableData">Peter</td>
            <td class="invoiceTableData">Griffin</td>
            <td class="invoiceTableData">$100</td>
            <td class="invoiceTableData">Griffin</td>
            <td class="invoiceTableData">$100</td>
          </tr>
          <tr>
            <td class="invoiceTableData">Peter</td>
            <td class="invoiceTableData">Griffin</td>
            <td class="invoiceTableData">$100</td>
            <td class="invoiceTableData">Griffin</td>
            <td class="invoiceTableData">$100</td>
          </tr>
        </table>
        <div class="flex-container" style="justify-content: end">
          <div style="text-align: end" class="InvoiceTextStyle">
            Subtotal<span class="ps-5">$10.00</span>
            <pre class="mb-1" />
            <span class="InvoiceTextStyle">
              Total<span class="ps-5">$10.00</span>
              <pre class="mb-1" />
            </span>
            <pre />
            <span class="InvoiceTextStyle">
              Balance Due<span class="ps-5">00.00</span>
              <pre class="mb-1" />
            </span>
          </div>
        </div>
      </div>
      <div style="display: flex; justify-content: end">
        <button class="createInvoiceButton mt-4 mb-5">Create Invoice</button>
      </div>
    </div>
  </div>

  <!-- edit invoice popup -->
  <edit-invoice-popup v-if="showEdit"></edit-invoice-popup>
  <edit-invoice-popup v-if="true" />
</template>

<script>
import EDIT_INVOICE_POPUP from "./editInvoicePopup.vue";
import INVOICE_PREVIEW_POPUP from "./invoicePreview.vue";
import carerHeader from "../components/carerHeader.vue";
import searchHeader from "../components/searchHeader.vue";
import topBlueHeader from "../components/topBlueHeader.vue";

export default {
  name: "finance-view",
  components: {
    "edit-invoice-popup": EDIT_INVOICE_POPUP,
    "edit-invoice-popup":INVOICE_PREVIEW_POPUP,
    carerHeader: carerHeader,
    topBlueHeader: topBlueHeader,
    searchHeader: searchHeader,
  },
  data() {
    return {
      showEdit: false,
    };
  },
};
</script>
<style src="../style/finance.css" />
<style src="../style/styleSheet.css" />
