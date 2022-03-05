<template>
  <div class="modal">
    <!-- Modal content -->
    <div class="modal-content" style="width: 40%">
      <div class="">
        <i class="bi bi-x close" style="margin-top:-20px;margin-right:-20px;cursor:pointer" />
      </div>
      <div class="Modalbody mt-3">
        <!-- 1st row -->
        <div class="">
          <div class="" style="margin-right: 0px">
            <div class="flex-container">
              <div>
                <div
                  class="pt-2"
                  style="font-size: 12px; font-weight: bolder; color: #026475"
                >
                  HD0001
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
                <div
                  style="font-size: 24px; font-weight: bolder; color: #026475"
                >
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
          </div>
 </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "invoice-preview-popup",
};
</script>

<style src="../style/azPopup.css" />
<style src="../style/invoicePreview.css" />