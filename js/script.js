
var menu_toggle = document.querySelector("#menu-toggle"),
    menu_main = document.querySelector("#main-menu");

menu_toggle.classList.remove("toggle-button--open");
menu_main.classList.remove("main-nav__list--open");
menu_main.classList.add("main-nav__list--js");

menu_toggle.addEventListener("click", function (evt) {
  evt.preventDefault();

  if (menu_toggle.classList.contains("toggle-button--open")) {
    menu_toggle.classList.remove("toggle-button--open");
    menu_main.classList.remove("main-nav__list--open");
  } else {
    menu_toggle.classList.add("toggle-button--open");
    menu_main.classList.add("main-nav__list--open");
  }
});


var order_button = document.querySelector("#button-order");
var modal = document.querySelector("#cart-add");

if (order_button !== null) {
  order_button.addEventListener("click", function (evt) {
    evt.preventDefault();

    document.querySelector("body").classList.add("js-modal");
    modal.classList.add("modal--open");
  });
}

modal.addEventListener("click", function (evt) {
  modal.classList.remove("modal--open");
  document.querySelector("body").classList.remove("js-modal");
});

console.log(order_button);
