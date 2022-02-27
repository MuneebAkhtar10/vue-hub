<template>
  <div class="modal">
    <!-- Modal content -->
    <div class="modal-content">
      <div class="editInvoiceHeader">
        <i class="bi bi-x close" />
        <p>Edit Invoice</p>
      </div>
      <div class="Modalbody mt-3">
        <!-- 1st row -->
        <div class="listContainer">
          <div>
            <label for="fname" class="listContainerInputLabel"
              >Client Code</label
            >
            <input
              class="listContainerInputBox"
              type="text"
              id="fname"
              name="fname"
              value="John"
            />
            <span class="azBTN">A - Z</span>
          </div>
          <div>
            <label for="fname" class="listContainerInputLabel">Year</label>
            <input
              class="listContainerInputBox"
              type="text"
              id="fname"
              name="fname"
              value="John"
            />
          </div>
          <div>
            <label for="fname" class="listContainerInputLabel"
              >Start Date</label
            >
            <input
              class="listContainerInputBox"
              type="text"
              id="fname"
              name="fname"
              value="John"
            />
          </div>
        </div>
        <!-- 2nd row -->
        <div class="listContainer mt-2">
          <div>
            <label for="fname" class="listContainerInputLabel"
              >Carer Code</label
            >
            <input
              class="listContainerInputBox"
              type="text"
              id="fname"
              name="fname"
              value="John"
            />
            <span class="azBTN">A - Z</span>
          </div>
          <div>
            <label
              for="fname"
              class="listContainerInputLabel"
              style="margin-left: -50px"
              >Week Number</label
            >
            <input
              class="listContainerInputBox"
              type="text"
              id="fname"
              name="fname"
              value="John"
            />
          </div>
          <div>
            <label for="fname" class="listContainerInputLabel">End Date</label>
            <input
              class="listContainerInputBox"
              type="text"
              id="fname"
              name="fname"
              value="John"
            />
          </div>
        </div>
        <!-- 3rd row -->
        <div class="listContainer mt-2">
          <div>
            <label for="fname" class="listContainerInputLabel"
              >Client Type</label
            >
            <input
              class="listContainerInputBox"
              type="text"
              id="fname"
              name="fname"
              value="John"
            />
          </div>
          <div>
            <label
              for="fname"
              class="listContainerInputLabel"
              style="margin-left: 90px"
              >Funder Code
              <img
                class="editInvoiceDropDownChevronIcon"
                src="../images/icons/DropDown.png"
                alt="marchart"
              />
            </label>
            <input
              class="listContainerInputBox"
              type="text"
              id="fname"
              name="fname"
              value="John"
            />
          </div>
          <div>
            <label for="fname" class="listContainerInputLabel"
              >Alt.Inv.Date</label
            >
            <input
              class="listContainerInputBox"
              type="text"
              id="fname"
              name="fname"
              value="John"
            />
          </div>
        </div>
        <!-- 4th row -->
        <div class="listContainer mt-2">
          <div>
            <label for="fname" class="listContainerInputLabel"
              >Carer Code</label
            >
            <input
              class="listContainerInputBox"
              type="text"
              id="fname"
              name="fname"
              value="John"
            />
          </div>
        </div>
        <!-- 5th row -->
        <div class="listContainer mt-2">
          <div>
            <label for="fname" class="listContainerInputLabel"
              >Carer Code</label
            >
            <input
              class="listContainerInputBox"
              type="text"
              id="fname"
              name="fname"
              value="John"
            />
          </div>
        </div>
        <!-- 6th row -->
        <div class="listContainer mt-2">
          <div>
            <label for="fname" class="listContainerInputLabel"
              >Carer Code</label
            >
            <input
              class="listContainerInputBox"
              type="text"
              id="fname"
              name="fname"
              value="John"
            />
          </div>
          <div>
            <label
              for="fname"
              class="listContainerInputLabel"
              style="margin-left: -50px"
              >Week Number</label
            >
            <input
              class="listContainerInputBox"
              type="text"
              id="fname"
              name="fname"
              value="John"
            />
          </div>
          <div />
          <div />
        </div>
        <!-- 7th row -->
        <div class="listContainer mt-2">
          <div>
            <label for="fname" class="listContainerInputLabel"
              >Carer Code</label
            >
            <input
              class="listContainerInputBox"
              type="text"
              id="fname"
              name="fname"
              value="John"
            />
          </div>
        </div>
        <!-- 8th row -->
        <div class="listContainer mt-4">
          <label class="containerCheckboxCss"
            >Base on client branch
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
          <label class="containerCheckboxCss"
            >Only include Client Miles 
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
          <label class="containerCheckboxCss"
            >Show Invoice Detail
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
          <label class="containerCheckboxCss"
            >Base on client branch
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
        </div>
         <div class="mt-2" style="width:20%">
        <button
          class="editButtonStyle"
          style="background-color: #43da9f; color: white;font-size:16px;"
        >
          Save Invoice
        </button>
      </div>
      </div>
    </div>
  </div>
</template>

<style src="../style/editInvoicePopup.css" />



