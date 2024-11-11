const express = require("express");
const app = express();
const PORT = 3006;
const path = require('path');
const cors = require('cors');
// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());

// Mock data for the API
const mockData = {
    speciesThreatened: [
        { species: "Mammals", count: 200 },
        { species: "Birds", count: 150 },
        { species: "Reptiles", count: 80 },
        { species: "Fish", count: 120 },
        { species: "Amphibians", count: 70 },
        { species: "Invertebrates", count: 90 }
    ],
    locations: [
        { region: "North America", count: 20, latitude: 54.5260, longitude: -105.2551 },
        { region: "South America", count: 40, latitude: -8.7832, longitude: -55.4915 },
        { region: "Europe", count: 10, latitude: 54.5260, longitude: 15.2551 },
        { region: "Asia", count: 30, latitude: 34.0479, longitude: 100.6197 },
        { region: "Africa", count: 50, latitude: -8.7832, longitude: 34.5085 },
        { region: "Australia", count: 20, latitude: -25.2744, longitude: 133.7751 },
        { region: "Antarctica", count: 5, latitude: -82.8628, longitude: 135.0000 }
    ],
    extinctionTrend: [
        { year: 2000, value: 10 },
        { year: 2005, value: 20 },
        { year: 2010, value: 30 },
        { year: 2015, value: 40 },
        { year: 2020, value: 50 }
    ]
};

// API route to get mock data
app.get("/api/data", (req, res) => {
    res.json(mockData);
});

// Serve index.html for the root URL
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
