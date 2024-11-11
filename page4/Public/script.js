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
document.addEventListener("DOMContentLoaded", function () {
    const searchBar = document.getElementById("search-bar");

    // Fetch and display initial data
    fetchData();


    // Fetch all data from backend
    function fetchData() {
        fetch('/page4/api/data')
            .then(response => response.json())
            .then(data => {
                populateSpeciesInfo(data.species);
                initializeMap(data.species);
            });
    }

    // Populate species information
    function populateSpeciesInfo(species) {
        const speciesInfo = document.getElementById('species-info');
        speciesInfo.innerHTML = ''; // Clear existing items
        species.forEach(speciesItem => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<strong>${speciesItem.name}:</strong> ${speciesItem.risk}`;
            speciesInfo.appendChild(listItem);
        });
    }

    // Initialize map with markers
    function initializeMap(species) {
        const map = L.map('map').setView([20.5937, 78.9629], 5);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 18,
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);

        // Clear existing markers
        species.forEach(speciesItem => {
            speciesItem.locations.forEach(location => {
                const marker = L.marker([location.latitude, location.longitude]).addTo(map);
                marker.bindPopup(`
                    <b>${speciesItem.name}</b><br>
                    Location: ${location.state}, ${location.country}<br>
                    ${speciesItem.risk}
                `);
            });
        });
    }
});
