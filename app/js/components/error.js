$('[data-close-error]').each((index, error) => {
  $(error).click(function () {
    $(error).parent().removeClass('active');
  })
})