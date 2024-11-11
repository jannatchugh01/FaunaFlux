// server.js
const express = require("express");
const path = require('path');
const app = express();
const port = 3003;

// Mock data
const climateData = [
  { day: "Mon", tempHigh: 18, tempLow: 7, weather: "Partly Cloudy" },
  { day: "Tue", tempHigh: 15, tempLow: 6, weather: "Cloudy" },
  { day: "Wed", tempHigh: 17, tempLow: 6, weather: "Sunny" },
  { day: "Thu", tempHigh: 19, tempLow: 9, weather: "Partly Cloudy" },
  { day: "Fri", tempHigh: 20, tempLow: 6, weather: "Sunny" },
  { day: "Sat", tempHigh: 11, tempLow: 5, weather: "Cloudy" },
  { day: "Sun", tempHigh: 18, tempLow: 7, weather: "Partly Cloudy" },
 
  // Add more data as needed
];

const strategies = [
  "Habitat Restoration: Restore degraded habitats, expand protected areas.",
  "Climate-Smart Conservation Planning: Integrate climate projections into conservation plans.",
  "Species Relocation: Relocate vulnerable species to suitable habitats.",
  "Climate-Resilient Infrastructure: Build climate-resilient infrastructure (e.g., sea walls, green roofs).",
  "Community Engagement: Educate and involve local communities in conservation efforts.",
];
// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Set the view engine to EJS
app.set("view engine", "ejs");

// Update the views directory to be the public folder
app.set('views', path.join(__dirname, 'public'));

// Routes
app.get("/", (req, res) => {
  res.render("index", { climateData, strategies });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
