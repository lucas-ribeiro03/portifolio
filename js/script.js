const body = document.body;
const toggleBar = document.querySelector(".toggle-bar");
const toggleBall = document.querySelector(".toggle-ball");
const moon = document.querySelector(".fa-moon");
const sun = document.querySelector(".fa-sun");
const backTopButton = document.querySelector(".back-top");

backTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
  });
});

toggleBar.addEventListener("click", () => {
  if (body.classList.contains("dark-mode")) {
    body.classList.toggle("light-mode");
    body.classList.remove("dark-mode");
    sun.style.color = "#e3db04";
    moon.style.color = "#111";
    toggleBall.classList.replace("left", "right");
  } else if (body.classList.contains("light-mode")) {
    body.classList.toggle("dark-mode");
    body.classList.remove("light-mode");
    toggleBall.classList.replace("right", "left");
    moon.style.color = "#00e5ff";
    sun.style.color = "#e0e0e0";
  }
});
