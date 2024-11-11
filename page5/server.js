const express = require('express');
const path = require('path');
const app = express();

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint for mock data (Optional: if needed in future)
app.get('/api/alerts', (req, res) => {
    const alerts = [
        {
            title: "Tiger Reserves (Nationwide)",
            description: "A red alert was issued to prevent poaching in all tiger reserves, with stricter surveillance measures like drone monitoring."
        },
        {
            title: "Bahraich, Uttar Pradesh",
            description: "Wolves displaced by monsoon floods were suspected of attacking humans, causing panic and retaliation by villagers."
        },
        {
            title: "Nationwide Licensing Rules",
            description: "The new Wildlife Licensing Rules 2024 enforce stricter controls on trading endangered species, updating the Wildlife Protection Act of 1972."
        }
    ];
    res.json(alerts);
});

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});