$('.btn__dots-wrapper').each(function () {
  const checkbox = $(this).find('input[type=checkbox]');
  if (checkbox.prop("checked")) {
    $(this).addClass("checked");
  }
});

$('.btn__dots-wrapper').click(function () {
  const checkbox = $(this).find('input[type=checkbox]');
  if (checkbox.prop("checked")) {
    $(this).removeClass("checked");
    checkbox.prop("checked", false);
  } else {
    $(this).addClass("checked");
    checkbox.prop("checked", true);
  }
});

$('[data-leader-img-checkbox]').click(function () {
  $('[data-leader-img-checkbox]').is('.checked') ? $('[data-leader-img]').show() : $('[data-leader-img]').hide();
});
