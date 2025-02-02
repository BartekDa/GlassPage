document.addEventListener("DOMContentLoaded", () => {
  const toggler = document.querySelector(".navbar-toggler");
  const menu = document.querySelector(".navbar-menu");

  if (!toggler || !menu) {
    console.error("Navbar toggler or menu not found!");
    return;
  }

  toggler.addEventListener("click", () => {
    console.log("Hamburger clicked!"); // Sprawdzenie, czy kliknięcie działa
    menu.classList.toggle("active");
  });
});
