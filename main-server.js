const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();
const PORT = 8080;

// Serve static files for each page
app.use('/NEW', express.static(path.join(__dirname, '/NEW', 'public')));
app.use('/page2', express.static(path.join(__dirname, 'page2', 'public')));
app.use('/page3', express.static(path.join(__dirname, 'page3', 'public')));
app.use('/page4', express.static(path.join(__dirname, 'page4', 'public')));
app.use('/page5', express.static(path.join(__dirname, 'page5', 'public')));
app.use('/page6', express.static(path.join(__dirname, 'page6', 'public')));
app.use('/page7', express.static(path.join(__dirname, 'page7', 'public')));
app.use('/page8', express.static(path.join(__dirname, 'page8', 'public')));

// Define routes to serve HTML files for each page
app.get('/NEW', (req, res) => {
  res.sendFile(path.join(__dirname, 'NEW', 'public', 'index.html'));
});
app.get('/page2', (req, res) => {
  res.sendFile(path.join(__dirname, 'page2', 'public', 'index.html'));
});

// Correct the API routes to fetch data from the Page6 server
app.get('/page6/api/data', async (req, res) => {
  try {
    const dataResponse = await axios.get('http://localhost:3002/api/data'); // Fetch data from Page6 server
    res.json(dataResponse.data); // Send the data as JSON to the client
  } catch (error) {
    console.error('Error fetching data from Page 6:', error.message); // Log the error
    res.status(500).json({ error: 'Error fetching data from Page 6' }); // Return a JSON error message
  }
});

// Route to fetch events from Page6 server
app.get('/page6/events', async (req, res) => {
  try {
    const eventsResponse = await axios.get('http://localhost:3002/events'); // Fetch events from Page6 server
    res.json(eventsResponse.data); // Send the events data as JSON
  } catch (error) {
    console.error('Error fetching events from Page 6:', error.message); // Log the error
    res.status(500).json({ error: 'Error fetching events from Page 6' }); // Return a JSON error message
  }
});
app.get('/page3', (req, res) => {
  res.sendFile(path.join(__dirname, 'page3', 'public', 'index.html'));
});

// Fetch data from the Page 3 server and send it to the client
app.get('/page3/api/data', async (req, res) => {
  try {
    const dataResponse = await axios.get('http://localhost:3006/api/data'); // Fetch data from the Page 3 server
    res.json(dataResponse.data); // Send the data as JSON to the client
  } catch (error) {
    console.error('Error fetching data from Page 3:', error.message); // Log the error
    res.status(500).json({ error: 'Error fetching data from Page 3' }); // Return a JSON error message
  }
});
app.get('/page4', (req, res) => {
  res.sendFile(path.join(__dirname, 'page4', 'public', 'index.html'));
});
// Fetch data from the Page 4 server and send it to the client
app.get('/page4/api/data', async (req, res) => {
  try {
    const dataResponse = await axios.get('http://localhost:4010/api/data'); // Fetch data from the Page 4 server
    res.json(dataResponse.data); // Send the data as JSON to the client
  } catch (error) {
    console.error('Error fetching data from Page 4:', error.message); // Log the error
    res.status(500).json({ error: 'Error fetching data from Page 4' }); // Return a JSON error message
  }
});
app.get('/page5', (req, res) => {
  res.sendFile(path.join(__dirname, 'page5', 'public', 'index.html'));
});
app.get('/page7', (req, res) => {
  res.sendFile(path.join(__dirname, 'page7', 'public', 'index.html'));
});
app.get('/page8', (req, res) => {
  res.sendFile(path.join(__dirname, 'page8', 'public', 'index.html'));
});

// Default route for root path
app.get('/', (req, res) => {
  res.send('Welcome to the main server! Access pages at /page1, /page2, etc.');
});

// Start the main server
app.listen(PORT, () => {
  console.log(`Main Server running at http://localhost:${PORT}`);
});
