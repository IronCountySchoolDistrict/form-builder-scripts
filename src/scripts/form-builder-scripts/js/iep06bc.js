import $ from 'jquery';

export function main () {
  $(document).on('keyup paste', '.pdf_correlate-with-transition-plan > textarea', (event) => {
    countChars(event.target);
  });

  initCountChars();
}

function setCharsAlert(text) {
  var remChars = $('#rem-chars');
  var remCharsTemplate = $('#rem-chars-template');
  if (remChars.length) {
      remChars.text(text);
  } else {
    var insertSelector = $('.pdf_correlate-with-transition-plan > div.alerttext');
    insertSelector.after(remCharsTemplate.html());

    // Recreate the jQuery $('#rem-chars') object because it was just inserted into the DOM above
    $('#rem-chars').text(text);
  }
}

function countChars (target) {
  if (target.value.length >= 4000) {
    target.value = target.value.substring(0, 4000);
    setCharsAlert('0 characters remaining');
  } else {
    setCharsAlert(4000 - target.value.length + ' characters remaining');
  }
}

function initCountChars() {
  var plaafp = $('.pdf_correlate-with-transition-plan > textarea');
  if(!plaafp.length) {
    setTimeout(initCountChars, 500);
  }
  if (plaafp.val()) {
    countChars(plaafp.get(0));
  }
}
