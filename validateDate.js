document
  .getElementById("bookingForm")
  .addEventListener("submit", function (event) {
    var today = new Date().toISOString().split("T")[0];
    var departureDate = document.getElementById("departureDate").value;
    var returnDate = document.getElementById("returnDate").value;

    if (departureDate < today) {
      alert("Departure date cannot be in the past.");
      event.preventDefault(); // Prevent form submission
    }

    if (returnDate && departureDate > returnDate) {
      alert("Return date cannot be before the departure date.");
      event.preventDefault(); // Prevent form submission
    }
  });
