var $form = $('form#contact-form'),
    url = 'https://script.google.com/macros/s/AKfycbySkZxUsb5ld5doUrY4jwTLWQhYDHzfvsiKaL0P05ISs2Op6iA/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "POST",
    dataType: "json",
    data: $form.serializeObject()
  }).then(
   alert("then")
  );
})
