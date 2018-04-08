(function () {
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const placeholderElement = $(".preview__info-email-placeholder");
  const inputElement = $(".preview__info-email-input");
  const emailErrorElement = $(".preview__email-error");

  const hidePlaceholder = function () {
    setVisibility(false, placeholderElement);
  };

  const showPlaceholder = function () {
    if (inputElement.value.length < 1) {
      setVisibility(true, placeholderElement);
    }
  };

  const checkEmailValid = function () {
    if (inputElement.value.length === 0 || emailRegex.test(inputElement.value)) {
      emailErrorElement.classList.add("visibility-hidden");
    } else {
      emailErrorElement.classList.remove("visibility-hidden");
    }
  }

  $(".preview__info-email-input").on("blur", showPlaceholder);
  $(".preview__info-email-input").on("blur", checkEmailValid);
  $(".preview__info-email-input").on("focus", hidePlaceholder);
  $(".preview__info-email-placeholder").on("click", hidePlaceholder);
})();