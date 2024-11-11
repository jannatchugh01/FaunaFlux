const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = 4010;

// Configure CORS options
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

// Mock data for migration patterns and poaching information
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
        },
        {
            name: "Rhinoceros",
            locations: [
                { latitude: 26.5755, longitude: 93.1711, state: "Assam", country: "India", park: "Kaziranga National Park" }
            ],
            risk: "High poaching risk for horns. Requires surveillance."
        },
        {
                name: "Asian Elephant",
                locations: [
                    { "latitude": 11.6591, "longitude": 76.6376, "state": "Karnataka", "country": "India", "reserve": "Bandipur National Park" },
                    { "latitude": 10.2765, "longitude": 77.0104, "state": "Tamil Nadu", "country": "India", "reserve": "Mudumalai National Park" },
                    { "latitude": 11.0434, "longitude": 76.3675, "state": "Kerala", "country": "India", "reserve": "Silent Valley" }
                ],
                risk: "Habitat loss and human-animal conflict due to agricultural expansion."
            },
            {
                name: "Indian Rhino",
                locations: [
                    { "latitude": 26.5775, "longitude": 92.8786, "state": "Assam", "country": "India", "reserve": "Kaziranga National Park" },
                    { "latitude": 25.9784, "longitude": 87.4714, "state": "West Bengal", "country": "India", "reserve": "Jaldapara National Park" },
                    { "latitude": 26.7088, "longitude": 88.6119, "state": "West Bengal", "country": "India", "reserve": "Gorumara National Park" }
                ],
                risk: "Poaching for rhino horns and habitat encroachment."
            },
            {
                name: "Snow Leopard",
                locations: [
                    { "latitude": 34.1526, "longitude": 77.5770, "state": "Ladakh", "country": "India", "reserve": "Hemis National Park" },
                    { "latitude": 32.2465, "longitude": 78.0545, "state": "Himachal Pradesh", "country": "India", "reserve": "Spiti Valley" },
                    { "latitude": 31.1357, "longitude": 78.5501, "state": "Uttarakhand", "country": "India", "reserve": "Gangotri National Park" }
                ],
                risk: "Climate change and poaching for pelts."
            },
            {
                name: "Great Indian Bustard",
                locations: [
                    { "latitude": 26.2048, "longitude": 74.5670, "state": "Rajasthan", "country": "India", "reserve": "Desert National Park" },
                    { "latitude": 19.7515, "longitude": 75.7139, "state": "Maharashtra", "country": "India", "reserve": "Nannaj Grasslands" }
                ],
                risk: "Habitat degradation, collision with power lines, and low reproductive rate."
            },
            {
                name: "Olive Ridley Turtle",
                locations: [
                    { "latitude": 19.8241, "longitude": 85.8245, "state": "Odisha", "country": "India", "reserve": "Gahirmatha Beach" },
                    { "latitude": 13.0827, "longitude": 80.2707, "state": "Tamil Nadu", "country": "India", "reserve": "Chennai Coast" },
                    { "latitude": 15.2993, "longitude": 74.1240, "state": "Goa", "country": "India", "reserve": "Morjim Beach" }
                ],
                risk: "Fishing net entanglements, coastal development, and illegal egg harvesting."
            },
            {
                name: "Lion-tailed Macaque",
                locations: [
                    { "latitude": 10.1972, "longitude": 76.4667, "state": "Kerala", "country": "India", "reserve": "Silent Valley" },
                    { "latitude": 11.3316, "longitude": 76.6566, "state": "Tamil Nadu", "country": "India", "reserve": "Anamalai Hills" },
                    { "latitude": 12.9373, "longitude": 77.6199, "state": "Karnataka", "country": "India", "reserve": "Nagarhole National Park" }
                ],
                risk: "Deforestation and habitat fragmentation in the Western Ghats."
            },
            {
                name: "Blackbuck",
                locations: [
                    { "latitude": 23.3813, "longitude": 72.5316, "state": "Gujarat", "country": "India", "reserve": "Velavadar National Park" },
                    { "latitude": 15.1394, "longitude": 76.9215, "state": "Karnataka", "country": "India", "reserve": "Ranibennur Blackbuck Sanctuary" },
                    { "latitude": 25.3176, "longitude": 82.9739, "state": "Uttar Pradesh", "country": "India", "reserve": "Chandraprabha Wildlife Sanctuary" }
                ],
                risk: "Poaching and loss of grassland habitat."
            }]}
        
        
    

// Route to serve all data as JSON
app.get('/api/data', (req, res) => {
    res.json(data);
});

// Search endpoint for species data based on state or country
app.get('/api/search', (req, res) => {
    const query = req.query.q.toLowerCase();
    const result = data.species.filter(species => 
        species.locations.some(location =>
            location.state.toLowerCase().includes(query) ||
            location.country.toLowerCase().includes(query)
        )
    );
    res.json(result);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
