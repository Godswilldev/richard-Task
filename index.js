const arrow__icon = document.querySelectorAll(".arrow__icon");
const shipping__items = document.querySelector(".shipping__items");
const shipping__item = document.querySelectorAll(".shipping__item");

const html = `<div class="shipping__item--lists">
<div class="shipping__item--list">
  <p class="shipping__item--list--name paragraph__secondary">
    Leather mini-bag
  </p>
  <p class="shipping__item--list--price">$1850.00</p>
</div>
<div class="shipping__item--list">
  <p class="shipping__item--list--name paragraph__secondary">
    Estimated shipping
  </p>
  <p class="shipping__item--list--price">$370.00</p>
</div>
<div class="shipping__item--list">
  <p class="shipping__item--list--name paragraph__secondary">
    Discount
  </p>
  <p class="shipping__item--list--price">$0.00</p>
</div>
<div class="shipping__item--list">
  <p class="shipping__item--list--name paragraph__secondary">
    Total
  </p>
  <p class="shipping__item--list--price paragraph__title">
    $2220.00
  </p>
</div>
</div>`;

arrow__icon.forEach((arrow) => {
  arrow.addEventListener("click", () => {
    arrow.classList.toggle("active");
  });
});
