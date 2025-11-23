document.getElementById("contactForm").addEventListener("submit", function(event){
    event.preventDefault();

    let status = document.getElementById("form-status");
    status.textContent = "Sending...";

    setTimeout(() => {
        status.textContent = "Message sent. We will get back to you soon.";
    }, 1200);
});