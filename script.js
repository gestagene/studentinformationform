$(function () {
  $("#registrationForm").on("blur", "input, select", function () {
    $(this).data("touched", true);
    validateField(this);
  });

  $("#registrationForm").on("keyup change", "input, select", function () {
    if ($(this).data("touched")) {
      validateField(this);
    }
  });

  function validateField(field) {
    let value = $(field).val()?.trim();

    $(field).removeClass("valid-input invalid-input");

    if (!value) {
      $(field).addClass("invalid-input");
    } else {
      $(field).addClass("valid-input");
    }
  }
});
