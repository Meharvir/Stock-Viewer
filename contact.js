// contact.js
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    var form = event.target;
    if (form.checkValidity()) {
      // If form is valid, show confirmation message
      document.getElementById('confirmationMessage').classList.remove('d-none');
      form.reset(); // Optionally, reset the form fields
    } else {
      // If form is not valid, show validation errors
      form.reportValidity();
    }
});
