function setVisibility (isVisible, element) {
  if (isVisible) {
    element.classList.remove("dn");
  } else {
    element.classList.add("dn");
  }
}