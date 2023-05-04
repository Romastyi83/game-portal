
const settingsContactsSwiper = new Swiper('[data-contacts-slider]', {
  slidesPerView: 2,
  allowTouchMove: true,
  navigation: {
    nextEl: '[data-contacts-slider-next]',
    prevEl: '[data-contacts-slider-prev]',
  },
  pagination: {
    el: '[data-Contacts-slider-pagination]',
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

const initializationDelContactsSlide = function () {
  $('[data-del-contacts-slide]').each((index, delSlide) => {
    $(delSlide).click(function () {
      if ($('[data-contacts-slider] .swiper-slide').length === 1) {
        return
      }
      setTimeout(function () {
        $(delSlide).closest('.swiper-slide').remove();
        settingsContactsSwiper.update();
        writeCounterContactsSlides();
        filiation();
      }, 100);
    });
  })
}

initializationDelContactsSlide();

$('[data-add-contacts-slide]').each((index, addSlide) => {
  $(addSlide).click(function () {
    $('[data-contacts-slider] .swiper-slide:last-child').clone().appendTo($('[data-contacts-slider] .swiper-wrapper'));
    settingsContactsSwiper.update();
    initializationDelContactsSlide();
    writeCounterContactsSlides();
    filiation();
  });
})

$('[data-counter-min-contacts-slides]').click(function () {
  if (+($('[data-counter-contacts-slides]').text()) <= 1) {
    return
  }
  $('[data-counter-contacts-slides]').text(+($('[data-counter-contacts-slides]').text()) - 1);
});

const writeCounterContactsSlides = function () {
  $('[data-counter-contacts-slides]').text($('[data-contacts-slider] .swiper-slide').length);
}

writeCounterContactsSlides();

$('[data-counter-max-contacts-slides]').click(function () {
  if (+($('[data-counter-contacts-slides]').text()) >= $('[data-contacts-slider] .swiper-slide').length) {
    return
  }
  $('[data-counter-contacts-slides]').text(+($('[data-counter-contacts-slides]').text()) + 1);
});

const filiation = function () {
  $('[data-filiation]').each((index, filiation) => {
    $(filiation).text(index + 1);
  });
}

filiation();