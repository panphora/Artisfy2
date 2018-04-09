(function () {
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const placeholderElement = $(".preview__info-email-placeholder");
  const inputElement = $(".preview__info-email-input");
  const inputBgElement = $(".preview__info-email");
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
  };

  const addFocusedSelector = function () {
    inputBgElement.classList.add("preview__info-email--focused");
  };

  const removeFocusedSelector = function () {
    inputBgElement.classList.remove("preview__info-email--focused");
  };

  inputElement.on("blur", showPlaceholder);
  inputElement.on("blur", checkEmailValid);
  inputElement.on("blur", removeFocusedSelector);
  inputElement.on("focus", hidePlaceholder);
  inputElement.on("focus", addFocusedSelector);
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