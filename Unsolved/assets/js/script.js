var container = document.querySelector(".container");

container.addEventListener("click", function(event) {
  var element = event.target;

  // TODO: Complete function

  const dataNumber = element.getAttribute('data-number')
  element.textContent = dataNumber


});
