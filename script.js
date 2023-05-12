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

function createInputContainer(container) {
  const div = document.createElement("div");
  div.classList.add(
    "input-group",
    "mb-3",
    "d-flex",
    "flex-row",
    "justify-content-between"
  );

  const inputGroupPrepend = document.createElement("div");
  inputGroupPrepend.classList.add("input-group-prepend");
  const span = document.createElement("span");
  span.classList.add("item-name");
  span.textContent = "Item name";
  const decrementBtn = document.createElement("button");
  decrementBtn.classList.add("btn", "btn-outline-secondary", "btn-decrement");
  decrementBtn.setAttribute("type", "button");
  decrementBtn.textContent = "-";
  inputGroupPrepend.appendChild(span);
  inputGroupPrepend.appendChild(decrementBtn);

  const input = document.createElement("input");
  input.setAttribute("type", "number");
  input.classList.add("form-control");
  input.setAttribute("placeholder", "");
  input.setAttribute("aria-label", "");
  input.setAttribute("aria-describedby", "basic-addon1");
  input.setAttribute("value", "0");

  const incrementBtn = document.createElement("button");
  incrementBtn.classList.add("btn", "btn-outline-secondary", "btn-increment");
  incrementBtn.setAttribute("type", "button");
  incrementBtn.textContent = "+";

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("btn", "btn-danger");
  deleteBtn.textContent = "X";

  const itemPriceSpan = document.createElement("span");
  itemPriceSpan.classList.add("item-price");
  itemPriceSpan.textContent = "Item Price";

  div.appendChild(inputGroupPrepend);
  div.appendChild(input);
  div.appendChild(incrementBtn);
  div.appendChild(deleteBtn);
  div.appendChild(itemPriceSpan);

  container.appendChild(div);
}
