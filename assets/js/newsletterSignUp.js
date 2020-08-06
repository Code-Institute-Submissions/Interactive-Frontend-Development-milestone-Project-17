function sendMail(contactForm) {
    emailjs.send("gmail","template_K2BdWOP8", {
        "from_email": contactForm.emailaddress2.value,
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}