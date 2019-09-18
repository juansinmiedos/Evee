$("#seeAnotherFieldGroup").change(function() {
  if ($(this).val() == "Supplier") {
    $('#otherFieldGroupDiv').show();
  } else {
    $('#otherFieldGroupDiv').hide();
  }
});
$("#seeAnotherFieldGroup").trigger("change");