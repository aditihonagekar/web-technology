document
  .getElementById("enrollmentForm")
  .addEventListener("submit", function (event) {
    var email = document.getElementById("email").value;

    // Regular expression for basic email validation
    var emailPattern = /^[^@]+@[^@]+\.[^@]+$/;

    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      event.preventDefault(); // Prevent form submission
    }
  });
