const inputFile = document.querySelector('[data-review-btn]');

inputFile.onchange = function () {
  document.querySelector('[data-upload-file]').value = this.value.replace("C:\\fakepath\\", "");
};