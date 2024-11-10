// Initialize EmailJS
(function(){
    emailjs.init("YOUR_USER_ID"); // Replace with your actual EmailJS user ID
})();

document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    }).then(function(response) {
        alert("Consultation booked successfully!");
    }, function(error) {
        alert("Failed to book consultation.");
    });
});
