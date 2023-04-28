
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

const initializationDelSlide = function () {
  $('[data-del-slide]').each((index, delSlide) => {
    $(delSlide).click(function () {
      if ($('[data-settings-slider] .swiper-slide').length === 1) {
        return
      }
      setTimeout(function () {
        $(delSlide).closest('.swiper-slide').remove();
        settingsTopSwiper.update();
        writeCounterSlides();
      }, 100);
    });
  })
}

initializationDelSlide();

$('[data-add-slide]').each((index, addSlide) => {
  $(addSlide).click(function () {
    $('[data-settings-slider] .swiper-slide:last-child').clone().appendTo($('[data-settings-slider] .swiper-wrapper'));
    settingsTopSwiper.update();
    initializationDelSlide();
    writeCounterSlides();
  });
})

$('[data-counter-min-slides]').click(function () {
  if (+($('[data-counter-slides]').text()) <= 1) {
    return
  }
  $('[data-counter-slides]').text(+($('[data-counter-slides]').text()) - 1);
});

const writeCounterSlides = function () {
  $('[data-counter-slides]').text($('[data-settings-slider] .swiper-slide').length);
}

writeCounterSlides();

$('[data-counter-max-slides]').click(function () {
  if (+($('[data-counter-slides]').text()) >= $('[data-settings-slider] .swiper-slide').length) {
    return
  }
  $('[data-counter-slides]').text(+($('[data-counter-slides]').text()) + 1);
});