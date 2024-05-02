document
  .getElementById("admissionForm")
  .addEventListener("submit", function (event) {
    var mobileNumber = document.getElementById("mobileNumber").value;

    // Regular expression to check if the mobile number is valid (10 digits)
    var mobilePattern = /^[0-9]{10}$/;

    if (!mobilePattern.test(mobileNumber)) {
      alert("Mobile number must be 10 digits.");
      event.preventDefault(); // Prevent form submission
    }
  });
