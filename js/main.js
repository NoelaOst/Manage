const primaryHeader = document.querySelector(".primary-header");
const primaryNav = document.querySelector(".primary-nav");
const hamburgerIcon = document.querySelector(".icon-hamburger");


hamburgerIcon.addEventListener("click", () => 
primaryNav.classList.toggle("opened"));

hamburgerIcon.addEventListener("click", () => 
primaryHeader.classList.toggle("opened"));

// swiper

const swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 5,
  observer: true, 
  observeParents: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@1.00": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "@1.50": {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    "@2.00": {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
  mousewheel: true,
  keyboard: true,

});