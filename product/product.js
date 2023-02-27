const burger = document.querySelector(".burger");
const navToggle = document.querySelector(".nav-toggle");

let showNavbar = false;
burger.addEventListener("click", function () {
  showNavbar = !showNavbar;
  if (showNavbar) {
    navToggle.style.display = "flex";
    console.log(showNavbar);
  } else {
    navToggle.style.display = "none";
    console.log(showNavbar);
  }
});
