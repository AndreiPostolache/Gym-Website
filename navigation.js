const navToggle = document.querySelector(".mobile-nav-toggle");
const nav = document.querySelector("#primary-navigation");

navToggle.addEventListener("click", function () {
  const visibility = nav.getAttribute("data-visible");

  if (visibility === "false") {
    nav.setAttribute("data-visible", true);
    navToggle.style.backgroundImage = "url(./assests/imgs/icon-close.svg)";
  } else {
    nav.setAttribute("data-visible", false);
    navToggle.style.backgroundImage = "url(./assests/imgs/icon-hamburger.svg)";
  }
});
