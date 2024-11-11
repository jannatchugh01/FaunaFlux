 // Search bar dropdown logic
 function showDropdown() {
    document.getElementById("dropdown").style.display = "block";
}

function hideDropdown() {
    setTimeout(() => {
        document.getElementById("dropdown").style.display = "none";
    }, 100); // Delay to allow item selection
}

function filterDropdown() {
    const input = document.getElementById("search-bar").value.toLowerCase();
    const items = document.querySelectorAll(".dropdown-item");

    items.forEach((item) => {
        if (item.textContent.toLowerCase().includes(input)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}

// Add click event to each dropdown item
document.querySelectorAll(".dropdown-item").forEach((item) => {
    item.addEventListener("click", () => {
        document.getElementById("search-bar").value = item.textContent;
        hideDropdown();
    });
});

// Fetch data from the API
fetch('http://localhost:8080/page3/api/data')
    .then(response => response.json())
    .then(data => {
        // Initialize Map
        initializeMap(data.locations);

        // Create Species Threatened Chart
        createSpeciesChart(data.speciesThreatened);

        // Create Extinction Trend Chart
        createExtinctionTrendChart(data.extinctionTrend);
    })
    .catch(error => console.error('Error fetching data:', error));

// Function to initialize the map with location markers
function initializeMap(locations) {
    const map = L.map('map').setView([20, 0], 2);  // Initial view over the world

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '© OpenStreetMap'
    }).addTo(map);

    // Add markers for each location
    locations.forEach(location => {
        const marker = L.marker([location.latitude, location.longitude]).addTo(map);
        marker.bindPopup(`${location.region}: ${location.count} species threatened`);
    });
}

// Function to create a bar chart for Species Threatened
function createSpeciesChart(speciesData) {
    const ctx = document.getElementById('speciesChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: speciesData.map(s => s.species),
            datasets: [{
                label: 'Number of Threatened Species',
                data: speciesData.map(s => s.count),
                backgroundColor: 'rgba(139,0,0,1)',
                borderColor: 'rgba(139,0,0 1)',
                borderWidth: 1,
            }]
        },
        options: {
            scales: {
                y: { beginAtZero: true }
            }
        }
    });
}

// Function to create a line chart for Extinction Trend
function createExtinctionTrendChart(trendData) {
    const ctx = document.getElementById('extinctionTrendChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: trendData.map(t => t.year),
            datasets: [{
                label: 'Extinction Trend Over Time',
                data: trendData.map(t => t.value),
                backgroundColor: 'rgba(139, 0, 0, 0.25)',
                borderColor: 'rgba(139, 0, 0, 1)',
                borderWidth: 1,
                fill: true
            }]
        },
        options: {
            scales: {
                y: { beginAtZero: true }
            }
        }
    });
}
   