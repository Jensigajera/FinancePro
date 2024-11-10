// Initialize EmailJS with your user ID
emailjs.init("JLWgqK9r4xTjfYTcf");  // Replace with your EmailJS user ID

// Get the form and form elements
const consultationForm = document.getElementById("consultationForm");

// Add an event listener for form submission
consultationForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect the form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    // Send the email using EmailJS
    emailjs.send("service_4pmcbk5", "service_4pmcbk5", {
        name: name,
        email: email,
        phone: phone,
        message: message
    })
    .then(function(response) {
        console.log("Success:", response);
        alert("Your message has been sent successfully!");
        // Optionally, reset the form
        consultationForm.reset();
    })
    .catch(function(error) {
        console.error("Error:", error);
        alert("There was an error sending your message. Please try again.");
    });
});
