// const dominio = window.location.host;

$(".menu-item.one").on("mouseenter", function () {
  $(".menu-editor-codigo").toggleClass("item-hover");
});

$(".menu-item.one").on("mouseleave", function () {
  $(".menu-editor-codigo").toggleClass("item-hover");
});

$(".menu-item.two").on("mouseenter", function () {
  $(".menu-comunidade").toggleClass("item-hover");
});

$(".menu-item.two").on("mouseleave", function () {
  $(".menu-comunidade").toggleClass("item-hover");
});

$(".menu-item.three").on("mouseenter", function () {
  $(".menu-favoritos").toggleClass("item-hover");
});

$(".menu-item.three").on("mouseleave", function () {
  $(".menu-favoritos").toggleClass("item-hover");
});

$('input[type="color"]').on("change", function () {
  $(".editor-codigo-container").css("background-color", this.value);
});
