const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 47,
  centeredSlides: true,
  centerInsufficientSlides: true,
  centeredSlidesBounds: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 47,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1250: {
      slidesPerView: 3,
      spaceBetween: 47,
    },
  },
});

const topSwiper = new Swiper('.top-swiper', {
  loop: true,
  slidesPerView: 1,
  allowTouchMove: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: '.swiper-pagination',
    verticalClass: 'swiper-pagination-vertical',
    clickable: true,
  },
});

$('[data-pencil]').on('click', function () {
  $('[data-popup]').removeClass('active')
  $(this).next().addClass('active')
  setTimeout(function () {
    textarea();
  }, 100);
})

$(document).click(function (e) {
  if (!$('[data-pencil]').is(e.target)
    && $('[data-pencil]').has(e.target).length === 0
    && !$('[data-popup]').is(e.target)
    && $('[data-popup]').has(e.target).length === 0) {
    $('[data-popup]').removeClass('active')
  }
});

$('[data-close]').on('click', function () {
  $('[data-popup]').removeClass('active')
})

$('[data-control-center]').on('click', function () {
  $('[data-popup]').removeClass('active')
  $('[data-settings-control-center]').addClass('active')
})

$(document).click(function (e) {
  if (!$('[data-control-center]').is(e.target)
    && $('[data-control-center]').has(e.target).length === 0
    && !$('[data-settings-control-center]').is(e.target)
    && $('[data-settings-control-center]').has(e.target).length === 0) {
    $('[data-settings-control-center]').removeClass('active')
  }
});

$('[data-close-control-center]').on('click', function () {
  $('[data-settings-control-center]').removeClass('active')
})

$('[data-show-products]').on('click', function (event) {
  event.preventDefault();
  if ($('[data-more-products]').hasClass('hidden')) {
    $('[data-more-products]').slideDown();
    $('[data-show-products]').text('Скрыть')
    $('[data-more-products]').removeClass('hidden')
  } else {
    $('[data-more-products]').slideUp();
    $('[data-show-products]').text('показать другие')
    $('[data-more-products]').addClass('hidden')
  }
})
