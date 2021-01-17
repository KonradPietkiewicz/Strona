const burger = document.querySelector(".burger");

const iconBurger = document.querySelector(".fa-bars");
const iconX = document.querySelector(".fa-times");
const nav = document.querySelector(".nav__list");

burger.addEventListener("click", () => {
  iconBurger.classList.toggle("show");
  iconX.classList.toggle("show");
  nav.classList.toggle("show");
});
