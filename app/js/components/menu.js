$('[data-menu-btn]').click(function () {
  $('[data-logo-text]').toggle()
  $('[data-menu]').toggleClass('active')
  $('[data-menu-hide]').toggle()
})