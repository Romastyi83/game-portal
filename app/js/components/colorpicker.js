$('[data-colorpicker]').each((index, colorpicker) => {
  $(colorpicker).change(function () {
    $(this).prev('[data-color]').val($(this).val())
  })
})