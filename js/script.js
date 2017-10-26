
var menu_toggle = document.querySelector("#menu-toggle"),
    menu_main = document.querySelector("#main-menu");

menu_toggle.classList.remove("toggle-button--open");
menu_main.classList.remove("main-nav__dropdown--open");
menu_main.classList.add("main-nav__dropdown--js");

menu_toggle.addEventListener("click", function (evt) {
  evt.preventDefault();

  menu_toggle.classList.toggle("toggle-button--open");
  menu_main.classList.toggle("main-nav__dropdown--open");
});


var order_button = document.querySelector("#button-order"),
    modal = document.querySelector("#cart-add"),
    body = document.querySelector("body");
    modal_fade = document.querySelector(".modal-fade"),
    cart_buttons = document.querySelectorAll(".catalog-list__add-link");

if (order_button) {
  order_button.addEventListener("click", function (evt) {
    evt.preventDefault();

    body.classList.add("js-modal");
    modal.classList.add("modal--open");
    modal_fade.classList.add("modal-fade--open");
  });
}

if (cart_buttons) {
  [].forEach.call(cart_buttons, function (object) {
    object.addEventListener("click", function (evt) {

      evt.preventDefault();

      body.classList.add("js-modal");
      modal.classList.add("modal--open");
      modal_fade.classList.add("modal-fade--open");
    });
  });
}

if (modal_fade) {
  modal_fade.addEventListener("click", function (evt) {
    modal.classList.remove("modal--open");
    body.classList.remove("js-modal");
    modal_fade.classList.remove("modal-fade--open");
  });
}
