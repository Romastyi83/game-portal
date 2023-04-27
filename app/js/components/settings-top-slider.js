const settingsTopSwiper = new Swiper('[data-settings-slider]', {
  slidesPerView: 2,
  allowTouchMove: true,
  autoplay: {
    delay: 1000,
  },
  // pagination: {
  //   el: '.settings-top-swiper-pagination',
  //   clickable: true,
  // },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 27,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 27,
    },
    1250: {
      slidesPerView: 2,
      spaceBetween: 27,
    },
  },
});

console.log('bdfbh')