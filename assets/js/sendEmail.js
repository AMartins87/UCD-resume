function sendMail(contactForm) {

    emailjs.send("service_6caa0dj", "aneta", {
        
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            document.getElementById("projectForm").reset();
        },
        function(error) {
            console.log("FAILED", error);
        }
        
    );
    return false;  // To block from loading a new page
}