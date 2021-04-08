const arrow__icon = document.querySelectorAll(".arrow__icon");
const shipping__items = document.querySelector(".shipping__items");
const shipping__item = document.querySelectorAll(".shipping__item");
const shipping__item__lists = document.querySelectorAll(
  ".shipping__item--lists"
);

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

arrow__icon.forEach(function (arrow) {
  arrow.addEventListener("click", function (e) {
    arrow__icon.forEach((element) => {
      element.classList.remove("up");
    });
    if (!e.target.classList.contains("up")) {
      arrow.classList.add("up");
    } else {
      return;
    }

    const clicked = e.target.closest(".shipping__item");
    if (!clicked) {
      return;
    } else {
      shipping__item.forEach(function (item) {
        item.classList.remove("active");
      });
      // if (clicked.classList.contains("active")) {
      //   return;
      // } else {
      //   clicked.classList.remove("active");
      //   clicked.classList.add("active");
      //   clicked.insertAdjacentHTML("beforeend", html);
      // }
      clicked.classList.add("active");
    }
    console.log(clicked);
  });
});
