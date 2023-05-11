
const settingsShowcaseSwiper = new Swiper('[data-showcase-slider]', {
  slidesPerView: 2,
  allowTouchMove: false,
  navigation: {
    nextEl: '[data-showcase-slider-next]',
    prevEl: '[data-showcase-slider-prev]',
  },
  pagination: {
    el: '[data-showcase-slider-pagination]',
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 27,
      allowTouchMove: true,
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

const initializationDelShowcaseSlide = function () {
  $('[data-del-showcase-slide]').each((index, delSlide) => {
    $(delSlide).click(function () {
      if ($('[data-showcase-slider] .swiper-slide').length === 1) {
        return
      }
      setTimeout(function () {
        $(delSlide).closest('.swiper-slide').remove();
        settingsShowcaseSwiper.update();
        writeCounterShowcaseSlides();
        delBullet();
      }, 100);
    });
  })
}

initializationDelShowcaseSlide();

$('[data-add-showcase-slide]').each((index, addSlide) => {
  $(addSlide).click(function () {
    $('[data-showcase-slider] .swiper-slide:last-child').clone().appendTo($('[data-showcase-slider] .swiper-wrapper'));
    settingsShowcaseSwiper.update();
    initializationDelShowcaseSlide();
    writeCounterShowcaseSlides();
    delBullet();
  });
})

$('[data-counter-min-showcase-slides]').click(function () {
  if (+($('[data-counter-showcase-slides]').text()) <= 1) {
    return
  }
  $('[data-counter-showcase-slides]').text(+($('[data-counter-showcase-slides]').text()) - 1);
});

const writeCounterShowcaseSlides = function () {
  $('[data-counter-showcase-slides]').text($('[data-showcase-slider] .swiper-slide').length);
}

writeCounterShowcaseSlides();

$('[data-counter-max-showcase-slides]').click(function () {
  if (+($('[data-counter-showcase-slides]').text()) >= $('[data-showcase-slider] .swiper-slide').length) {
    return
  }
  $('[data-counter-showcase-slides]').text(+($('[data-counter-showcase-slides]').text()) + 1);
});