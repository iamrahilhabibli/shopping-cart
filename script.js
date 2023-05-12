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
