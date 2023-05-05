
$('[data-scrollbar]').each((index, scrollbar) => {
  new SimpleBar(scrollbar);
})

const textarea = function () {
  $('[data-textarea]').each((index, textarea) => {
    $(textarea).height($(textarea).prop("scrollHeight"))
    $(textarea).blur(function (e) {
      $(textarea).height('auto')
      $(textarea).height($(textarea).prop("scrollHeight"))
    });
  })
}

textarea();