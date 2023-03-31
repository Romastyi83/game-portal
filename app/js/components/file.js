$('[data-input-fake-wrapper]').each((index, fakeWrapper) => {
  $(fakeWrapper).click(function () {
    $(this).prev('[data-review-btn]').click();
  });
})

$('[data-review-btn]').change(function () {
  $(this).prev('[data-upload-file]').val($(this).val().replace("C:\\fakepath\\", ""))
});
