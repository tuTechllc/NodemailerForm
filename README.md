# ContactForm

HTML File (index.html)
The HTML file serves as the structure for the contact form web page.
It includes sections for the header, form, and footer.
The form includes input fields for first name, last name, phone, email address, and a message.
When the user submits the form, the data is sent to the server for processing.
The JavaScript file (index.js) is linked at the bottom of the HTML file for form validation and submission handling.

JavaScript File (index.js)
Document Load Event Listener: Waits for the DOM content to be fully loaded before executing the JavaScript code.
Form Validation and Submission Handling:
Retrieves form input fields and error message elements from the DOM.
Attaches a click event listener to the submit button.
Validates the form inputs (first name, last name, phone, email, and message) using regular expressions and displays error messages if validation fails.
Uses the Fetch API to send a POST request to the server with the form data in JSON format.
Handles server responses: If the email is successfully sent, redirects the user to a thank you page (submit_form.html), otherwise logs an error message to the console.
Note: This JavaScript code runs in the client's web browser and handles form validation and submission before sending the data to the server.

Node.js Server File (app.js)
Module Imports: Imports necessary modules including Express, HTTP, Path, and Nodemailer.
Express Application Setup:
Creates an instance of the Express application.
Configures the port number to listen on.
Parses JSON and URL-encoded request bodies.
Serves static files from the current directory (e.g., HTML, CSS, client-side JavaScript).
Routing:
Defines routes for handling GET and POST requests to the root URL ("/").
For GET requests, serves the index.html file to render the contact form.
For POST requests, extracts form data from the request body, logs it for inspection, and sends an email using Nodemailer with the provided form data.
Nodemailer Configuration: Sets up a Nodemailer transporter with SMTP settings for sending emails.
Server Startup: Starts an HTTP server to listen for incoming connections on the specified port.

Purpose:
Frontend (HTML and JavaScript):
Provides a user-friendly interface for visitors to submit inquiries or messages to the website owner.
Performs client-side form validation to ensure that the data submitted by the user is valid before sending it to the server.
Backend (Node.js with Express and Nodemailer):
Handles form submissions from the client by processing the form data and sending it via email to the website owner.
Implements server-side form validation to ensure that the submitted data meets certain criteria (e.g., valid email format).
Provides a seamless user experience by responding to form submissions with appropriate success or error messages.
This contact form implementation enables website visitors to easily reach out to the website owner or administrator, facilitating communication and interaction between the website and its users.