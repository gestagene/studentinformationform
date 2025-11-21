$(function () {
  $("#registrationForm").on("blur", "input, select", function () {
    const $field = $(this);
    let value = $field.val();

    if (typeof value === "string") value = value.trim();

    $field.removeClass("valid-input invalid-input");
    $field.next(".error-message").remove();

    if (!value) {
      $field.addClass("invalid-input");

      $field.after(`<div class="error-message">This field is required!</div>`);
    } else {
      $field.addClass("valid-input");
    }
  });
});
