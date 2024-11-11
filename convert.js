const ejs = require('ejs');
const fs = require('fs');
const path = require('path');

// Path to your EJS template file
const ejsFilePath = path.join(__dirname, 'page7', 'public', 'index.ejs');

// Data to pass to EJS template (optional)
const data = {
  title: 'My Page',
  content: 'Welcome to my page rendered from EJS!',
  strategies: ["Habitat Restoration: Restore degraded habitats, expand protected areas.",
  "Climate-Smart Conservation Planning: Integrate climate projections into conservation plans.",
  "Species Relocation: Relocate vulnerable species to suitable habitats.",
  "Climate-Resilient Infrastructure: Build climate-resilient infrastructure (e.g., sea walls, green roofs).",
  "Community Engagement: Educate and involve local communities in conservation efforts.",] ,
  climateData: [
    { day: "Mon", tempHigh: 18, tempLow: 7, weather: "Partly Cloudy" },
  { day: "Tue", tempHigh: 15, tempLow: 6, weather: "Cloudy" },
  { day: "Wed", tempHigh: 17, tempLow: 6, weather: "Sunny" },
  { day: "Thu", tempHigh: 19, tempLow: 9, weather: "Partly Cloudy" },
  { day: "Fri", tempHigh: 20, tempLow: 6, weather: "Sunny" },
  { day: "Sat", tempHigh: 11, tempLow: 5, weather: "Cloudy" },
  { day: "Sun", tempHigh: 18, tempLow: 7, weather: "Partly Cloudy" },
 
  // Add more data as needed
  ] // Example climate data
};

// Render the EJS template to an HTML string
ejs.renderFile(ejsFilePath, data, {}, (err, str) => {
  if (err) {
    console.error('Error rendering EJS file:', err);
    return;
  }

  // Save the rendered HTML to a file
  const htmlFilePath = path.join(__dirname, 'page7', 'public', 'index.html');
  fs.writeFileSync(htmlFilePath, str, 'utf8');
  console.log('EJS file has been converted to HTML:', htmlFilePath);
});
