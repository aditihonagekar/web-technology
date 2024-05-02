document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    var name = document.getElementById("name").value.trim();

    if (!name) {
      alert("Name field cannot be empty.");
      event.preventDefault(); // Prevent form submission
    }
  });
