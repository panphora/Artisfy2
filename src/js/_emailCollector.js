(function () {
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const placeholderElement = $(".preview__info-email-placeholder");
  const inputElement = $(".preview__info-email-input");
  const emailErrorElement = $(".preview__email-error");
  const emailForm = $(".preview__info-email-section");

  const hidePlaceholder = function () {
    setVisibility(false, placeholderElement);
  };

  const showPlaceholder = function () {
    if (inputElement.value.trim().length < 1) {
      setVisibility(true, placeholderElement);
    }
  };

  const checkEmailValid = function () {
    if (inputElement.value.trim().length === 0 || emailRegex.test(inputElement.value.trim())) {
      emailErrorElement.classList.add("visibility-hidden");
    } else {
      emailErrorElement.classList.remove("visibility-hidden");
    }
  }

  inputElement.on("blur", showPlaceholder);
  inputElement.on("blur", checkEmailValid);
  inputElement.on("focus", hidePlaceholder);
  placeholderElement.on("click", hidePlaceholder);

  emailForm.on("submit", function (event) {
    if (inputElement.value.trim().length === 0) {
      event.preventDefault();
      inputElement.focus();
    } else if (!emailRegex.test(inputElement.value.trim())) {
      event.preventDefault();
      checkEmailValid();
      inputElement.focus();
    }
  });
})();