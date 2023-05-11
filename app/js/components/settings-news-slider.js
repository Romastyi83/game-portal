
const settingsNewsSwiper = new Swiper('[data-news-slider]', {
  slidesPerView: 2,
  allowTouchMove: false,
  navigation: {
    nextEl: '[data-news-slider-next]',
    prevEl: '[data-news-slider-prev]',
  },
  pagination: {
    el: '[data-news-slider-pagination]',
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

const initializationDelNewsSlide = function () {
  $('[data-del-news-slide]').each((index, delSlide) => {
    $(delSlide).click(function () {
      if ($('[data-news-slider] .swiper-slide').length === 1) {
        return
      }
      setTimeout(function () {
        $(delSlide).closest('.swiper-slide').remove();
        settingsNewsSwiper.update();
        writeCounterNewsSlides();
        delBullet();
      }, 100);
    });
  })
}

initializationDelNewsSlide();

$('[data-add-news-slide]').each((index, addSlide) => {
  $(addSlide).click(function () {
    $('[data-news-slider] .swiper-slide:last-child').clone().appendTo($('[data-news-slider] .swiper-wrapper'));
    settingsNewsSwiper.update();
    initializationDelNewsSlide();
    writeCounterNewsSlides();
    delBullet();
  });
})

$('[data-counter-min-news-slides]').click(function () {
  if (+($('[data-counter-news-slides]').text()) <= 1) {
    return
  }
  $('[data-counter-news-slides]').text(+($('[data-counter-news-slides]').text()) - 1);
});

const writeCounterNewsSlides = function () {
  $('[data-counter-news-slides]').text($('[data-news-slider] .swiper-slide').length);
}

writeCounterNewsSlides();

$('[data-counter-max-news-slides]').click(function () {
  if (+($('[data-counter-news-slides]').text()) >= $('[data-news-slider] .swiper-slide').length) {
    return
  }
  $('[data-counter-news-slides]').text(+($('[data-counter-news-slides]').text()) + 1);
});