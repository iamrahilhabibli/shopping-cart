const addToCart = document.querySelectorAll(".add-to-cart");
const modalBody = document.querySelector(".modal-body");
const incrementBtn = document.querySelector(".btn-increment");
const decrementBtn = document.querySelector(".btn-decrement");
const itemQuatity = document.querySelector(".form-control");

incrementBtn.addEventListener("click", () => {
  itemQuatity.value++;
});
decrementBtn.addEventListener("click", () => {
  if (itemQuatity.value == 0) {
    // add to remove item from list if decrement at 0
    return;
  }
  itemQuatity.value--;
});

function createInputContainer() {
  modalBody.innerHTML += `
      <div class="input-group mb-3 d-flex flex-row justify-content-between">
        <div class="input-group-prepend">
          <span class="item-name">Item name</span>
          <button class="btn btn-outline-secondary btn-decrement" type="button">-</button>
        </div>
        <input type="number" class="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1" value="0">
        <button class="btn btn-outline-secondary btn-increment" type="button">+</button>
        <button class="btn btn-danger">X</button>
        <span class="item-price">Item Price</span>
      </div>
    `;
}

createInputContainer();
createInputContainer();
