const swiper = new Swiper(".swiper", {
  slidesPerView: 4,
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 24,
    },

    // when window width is >= 643px
    643: {
      slidesPerView: 2,
      spaceBetween: 24,
    },

    // when window width is >= 907px
    907: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    // when window width is >= 640px
    1185: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
});

console.log(swiper);
