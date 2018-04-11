(function () {
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const emailCollectElements = $$(".email-collect");

  emailCollectElements.forEach(function (emailCollectElement) {
    const placeholderElement = emailCollectElement.querySelector(".email-collect__placeholder");
    const inputElement = emailCollectElement.querySelector(".email-collect__input");
    const inputBgElement = emailCollectElement.querySelector(".email-collect__email-container");
    const emailErrorElement = emailCollectElement.querySelector(".email-collect__error");
    const emailForm = emailCollectElement.querySelector(".email-collect__form");

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
      inputBgElement.classList.add("email-collect__email-container--focused");
    };

    const removeFocusedSelector = function () {
      inputBgElement.classList.remove("email-collect__email-container--focused");
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
  });
})();