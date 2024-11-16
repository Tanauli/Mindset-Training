document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from submitting the usual way

    // Capture form values
    const name = document.getElementById('name').value;
    const contact = document.getElementById('contact').value;
    const email = document.getElementById('email').value;
    const education = document.getElementById('education').value;
    const business = document.getElementById('business').value;
    const job = document.getElementById('job').value;

    // Display client details (for now, it will appear on the page)
    alert(`Registration Successful!\nName: ${name}\nContact: ${contact}\nEmail: ${email}`);

    // Optionally, store this data in a backend database or send an email notification

    // Reset the form after submission
    document.getElementById('signup-form').reset();
});
