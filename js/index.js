// Wait for the DOM content to be fully loaded before executing the JavaScript
document.addEventListener('DOMContentLoaded', function () {
    // Load DOM contents/HTML elements
    // JS runs only when DOM is fully loaded
    const fname = document.getElementById('fname'); // Get the input field for first name
    const lname = document.getElementById('lname'); // Get the input field for last name
    const phone = document.getElementById('phone'); // Get the input field for phone number
    const email = document.getElementById('email'); // Get the input field for email
    const message = document.getElementById('message'); // Get the input field for message
    const errorText = document.getElementById('errorText'); // Get the error text element
    const btn = document.getElementById('btn'); // Get the submit button

    // Attaches an event listener to the button
    // Listens for click events on the button
    btn.addEventListener('click', async function (event) {
        event.preventDefault(); // Prevent form submission with default behavior

        // Regular expression for phone and email validation
        const phonePattern = /^\d{10}$/; // Match a 10-digit phone number
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; // Match a valid email address

        // Trim whitespace from input values
        const fnameValue = fname.value.trim(); // Get the trimmed value of the first name
        const lnameValue = lname.value.trim(); // Get the trimmed value of the last name
        const phoneValue = phone.value.trim(); // Get the trimmed value of the phone number
        const emailValue = email.value.trim(); // Get the trimmed value of the email address
        const messageValue = message.value.trim(); // Get the trimmed value of the message

        // First name validation
        if (fnameValue === '' || fnameValue.length < 2) {
            fname.classList.add('error'); // Add 'error' class to highlight the input field
            errorText.innerText = 'Please enter your first name'; // Display error message
            fname.classList.remove('success'); // Remove 'success' class if previously applied
            return; // Exit the function early
        }

        // Last name validation
        if (lnameValue === '' || lnameValue.length < 2) {
            lname.classList.add('error'); // Add 'error' class to highlight the input field
            errorText.innerText = 'Please enter your last name'; // Display error message
            lname.classList.remove('success'); // Remove 'success' class if previously applied
            return; // Exit the function early
        }

        // Phone number validation
        if (!phonePattern.test(phoneValue)) {
            phone.classList.add('error'); // Add 'error' class to highlight the input field
            errorText.innerText = 'Please enter a valid phone number'; // Display error message
            phone.classList.remove('success'); // Remove 'success' class if previously applied
            return; // Exit the function early
        }

        // Email validation
        if (!emailPattern.test(emailValue)) {
            email.classList.add('error'); // Add 'error' class to highlight the input field
            errorText.innerText = 'Please enter a valid email address'; // Display error message
            email.classList.remove('success'); // Remove 'success' class if previously applied
            return; // Exit the function early
        }

        // Message validation
        if (messageValue === '' || messageValue.length < 2) {
            message.classList.add('error'); // Add 'error' class to highlight the input field
            errorText.innerText = 'Please enter a message'; // Display error message
            message.classList.remove('success'); // Remove 'success' class if previously applied
            return; // Exit the function early
        }

        try {
            // Form validation passed, send data to server
            const formData = {
                fname: fnameValue,
                lname: lnameValue,
                phone: phoneValue,
                email: emailValue,
                message: messageValue
            };

            // Send form data to server using AJAX
            const response = await fetch('/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                // Redirect user to submit_form.html after successful submission
                window.location.href = '/submit_form.html';
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            console.error('Error:', error);
            // Handle error if needed
        }
    });
});
