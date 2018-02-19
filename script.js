
// google script form ajax
var $form = $('form#test-form'),
url = 'https://script.google.com/macros/u/0/s/AKfycbxwUMRMuItWwLuLmPxnTP6r6TldHzsX93nxrsTrdqv0djPTTrE/exec'

$('#submit-form').on('click', function(e) {
e.preventDefault();
var jqxhr = $.ajax({
url: url,
method: "GET",
dataType: "json",
data: $form.serializeObject()
}).success(
// do something
);
})