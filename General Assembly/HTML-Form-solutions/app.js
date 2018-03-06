document.addEventListener("DOMContentLoaded", function() {

  document
  .getElementById("submit-button")
  .addEventListener("click", function(event) {
    event.preventDefault();

    alert("Form submitted successfully!");
  });

});
