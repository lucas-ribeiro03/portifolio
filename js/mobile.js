const mobileMenuButton = document.querySelector(".mobile-menu-button");

mobileMenuButton.addEventListener("click", () => {
  const mobileMenu = document.querySelector(".mobile-menu");
  if (!mobileMenu.classList.contains("open")) {
    mobileMenu.classList.add("open");
    mobileMenu.style.display = "block";
  }
});
