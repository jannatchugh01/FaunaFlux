const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const cors = require('cors');
app.use(cors());

const PORT = 3000;

// Serve static files (CSS, JS, images)
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

// Route to serve the sign-up page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Handle form submission
app.post('/signup', (req, res) => {
    const { username, email, organization, phone, country, remember_me } = req.body;

    // Log received data (you can replace this with database functionality)
    console.log("Form Submission:");
    console.log(`Username: ${username}`);
    console.log(`Email: ${email}`);
    console.log(`Organization: ${organization}`);
    console.log(`Phone: ${phone}`);
    console.log(`Country: ${country}`);
    console.log(`Remember Me: ${remember_me ? 'Yes' : 'No'}`);

    // Send a response back to the client
    res.json({ message: 'Form submitted successfully!' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
