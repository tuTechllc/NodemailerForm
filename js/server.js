// Import required modules
var express = require('express'); // Import the Express.js framework
var http = require('http'); // Import the HTTP module
var path = require('path'); // Import the Path module for working with file paths
var nodemailer = require('nodemailer'); // Import the Nodemailer module for sending emails

// Create an Express application
var app = express();

// Create an HTTP server using the Express application
var server = http.createServer(app);

// Define the port number to listen on
var port = process.env.PORT || 3000; // Use the provided port number or default to 3000

// Set the port for the Express application
app.set('port', port);

// Parse JSON and URL-encoded request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the current directory
app.use(express.static(path.join(__dirname)));

// Routing
// Serve the index.html file for GET requests to the root URL
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'js/index.html'));
});

// Handle POST requests to the root URL
app.post('/', function (req, res) {
    try {
        // Log the entire request body to inspect what data is being received from the client
        console.log('Request Body:', req.body);

        // Extract data from the request body
        var fname = req.body.fname;
        var lname = req.body.lname;
        var email = req.body.email;
        var phone = req.body.phone;
        var message = req.body.message;

        // Log recipient email and other relevant data
        console.log('Recipient Email:', email);

        // Create a nodemailer transporter with SMTP settings
        var transporter = nodemailer.createTransport({
            host: 'smtp.titan.email',
            port: 587,
            secure: false,
            requireTLS: true,
            auth: {
                user: 'tulay@tutechllc.com',
                pass: '2.biz.tech!!Mail',
            },
            debug: true,
        });

        // Define email options
        var mailOptions = {
            from:  '"tuTechLLC" <tulay@tutechllc.com>', // Sender address
            to: 'tulay@tutechllc.com', // Recipient address
            subject: `Subject: ${req.body.subject}`, // Email subject
            text: `Client: ${req.body.fname} ${req.body.lname}\nEmail: ${req.body.email}\nPhone: ${req.body.phone}\nMessage: ${req.body.message}`, // Email body
        };

        // Send email using nodemailer
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                // Handle email sending error
                console.error('Error while sending email:', error);
                res.status(500).send('Error: Failed to send email. Please try again.');
            } else {
                // Email sent successfully
                console.log('Email sent: ' + info.response);
                res.status(200).send('Email sent successfully!');
            }
        });
    } catch (err) {
        // Handle any errors that occur during form submission
        console.error('Error in form submission:', err);
        res.status(500).send('Error: Form submission failed. Please try again.');
    }
});

// Start the server and listen for incoming connections
server.listen(port, '0.0.0.0', function () {
    console.log('Server running at http://0.0.0.0:' + port +'/');
});
