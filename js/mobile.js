const mobileMenuButton = document.querySelector(".mobile-menu-button");

mobileMenuButton.addEventListener("click", () => {
  const mobileMenu = document.querySelector(".mobile-menu");
  const mobileItem = document.querySelector(".mobile-ul");
  if (!mobileMenu.classList.contains("open")) {
    mobileMenu.classList.add("open");
    mobileMenu.style.display = "block";
    mobileItem.style.display = "flex";
  }
});
