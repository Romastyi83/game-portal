
const settingsRecallSwiper = new Swiper('[data-recall-slider]', {
  slidesPerView: 2,
  allowTouchMove: true,
  navigation: {
    nextEl: '[data-recall-slider-next]',
    prevEl: '[data-recall-slider-prev]',
  },
  pagination: {
    el: '[data-recall-slider-pagination]',
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

const initializationDelRecallSlide = function () {
  $('[data-del-recall-slide]').each((index, delSlide) => {
    $(delSlide).click(function () {
      if ($('[data-recall-slider] .swiper-slide').length === 1) {
        return
      }
      setTimeout(function () {
        $(delSlide).closest('.swiper-slide').remove();
        settingsRecallSwiper.update();
        writeCounterRecallSlides();
        textarea();
      }, 100);
    });
  })
}

initializationDelRecallSlide();

$('[data-add-recall-slide]').each((index, addSlide) => {
  $(addSlide).click(function () {
    $('[data-recall-slider] .swiper-slide:last-child').clone().appendTo($('[data-recall-slider] .swiper-wrapper'));

    settingsRecallSwiper.update();
    initializationDelRecallSlide();
    writeCounterRecallSlides();
    textarea();
  });
})

$('[data-counter-min-recall-slides]').click(function () {
  if (+($('[data-counter-recall-slides]').text()) <= 1) {
    return
  }
  $('[data-counter-recall-slides]').text(+($('[data-counter-recall-slides]').text()) - 1);
});

const writeCounterRecallSlides = function () {
  $('[data-counter-recall-slides]').text($('[data-recall-slider] .swiper-slide').length);
}

writeCounterRecallSlides();

$('[data-counter-max-recall-slides]').click(function () {
  if (+($('[data-counter-recall-slides]').text()) >= $('[data-recall-slider] .swiper-slide').length) {
    return
  }
  $('[data-counter-recall-slides]').text(+($('[data-counter-recall-slides]').text()) + 1);
});