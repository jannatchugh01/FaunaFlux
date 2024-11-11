const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = 3002;

// Enable CORS to allow cross-origin requests
app.use(cors());

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Mock data for events (as an example)
app.get('/api/data', (req, res) => {
  const data = {
    species: [
      {
        name: "Tiger",
        locations: [
          { latitude: 26.7855, longitude: 76.685, state: "Rajasthan", country: "India", reserve: "Ranthambore" },
          { latitude: 29.5335, longitude: 78.774, state: "Uttarakhand", country: "India", reserve: "Corbett" },
          { latitude: 22.0016, longitude: 88.787, state: "West Bengal", country: "India", reserve: "Sundarbans" }
        ],
        risk: "High poaching risk for tiger body parts."
      },
      {
        name: "Elephant",
        locations: [
          { latitude: 26.2006, longitude: 92.9376, state: "Assam", country: "India", corridor: "Assam" },
          { latitude: 20.9517, longitude: 85.0985, state: "Odisha", country: "India", corridor: "Odisha" },
          { latitude: 10.8505, longitude: 76.2711, state: "Kerala", country: "India", corridor: "Southern India" }
        ],
        risk: "High poaching risk for ivory in migration routes."
      }
    ]
  };
  res.json(data); // Send mock data as JSON
});

// Endpoint to fetch events
app.get('/events', (req, res) => {
  const events = [
    {
      title: "Virtual Wildlife Conservation Summit",
      date: "November 15, 2024",
      description: "A global online conference bringing together conservationists, researchers, and wildlife experts to discuss the latest trends and technology in conservation efforts.",
      location: "Online"
    },
    {
      title: "Habitat Restoration Workshop",
      date: "December 1, 2024",
      description: "Join our team for a hands-on workshop focused on restoring habitats through sustainable land management practices.",
      location: "Amazon Rainforest"
    }
  ];
  res.json(events); // Send events data as JSON
});

// Start the server
app.listen(PORT, () => {
  console.log(`Page6 Server running on http://localhost:${PORT}`);
});

