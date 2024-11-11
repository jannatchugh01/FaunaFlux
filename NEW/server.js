const express = require('express');
const path = require('path');
const multer = require('multer');
const fs = require('fs');

// Initialize Express app
const app = express();
const port = 1000;

// Middleware to serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Configure file upload with Multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const dir = path.join(__dirname, 'uploads');
        
        // Ensure the uploads directory exists
        fs.mkdir(dir, { recursive: true }, (err) => {
            if (err) {
                console.error("Error creating uploads directory:", err);
                return cb(err, dir);
            }
            cb(null, dir);
        });
    },
    filename: (req, file, cb) => {
        // Save the file with the original name
        cb(null, file.originalname);
    }
});
const upload = multer({ storage });

// Route to handle file upload
app.post('/upload', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }

    console.log(`File uploaded: ${req.file.originalname}`);
    res.status(200).send('File uploaded successfully!');
});

// Route to render the homepage (index.html)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
