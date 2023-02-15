const sandwichMenu = document.querySelector(".sandwich-menu");
const menuMobile = document.querySelector(".menu-mobile");

function toggleMenu() {
  menuMobile.classList.toggle("show");
}

sandwichMenu.addEventListener("click", (event) => {
    toggleMenu();
});
