function sendMail(contactForm) {
    emailjs.send("gmail","business_submission", {
        "from_name": contactForm.fullname.value,
        "from_email": contactForm.emailaddress.value,
        "business_submission": contactForm.businesssubmissionsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  
}