
const settingsTopSwiper = new Swiper('[data-settings-slider]', {
  slidesPerView: 2,
  allowTouchMove: true,
  navigation: {
    nextEl: '[data-settings-slider-next]',
    prevEl: '[data-settings-slider-prev]',
  },
  pagination: {
    el: '[data-settings-slider-pagination]',
    clickable: true,
  },
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

$('[data-del-slide]').each((index, delSlide) => {
  $(delSlide).click(function () {
    setTimeout(function () {
      $(delSlide).closest('.swiper-slide').remove();
      settingsTopSwiper.update();
    }, 100);
  });
})