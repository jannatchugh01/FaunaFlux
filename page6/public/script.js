// Initialize Leaflet map
const map = L.map('mapid').setView([21.124, 70.8567], 13); // Gir National Park coordinates

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
}).addTo(map);

L.marker([21.124, 70.8567]).addTo(map)
    .bindPopup("Gir National Park, Gujarat.")
    .openPopup();

// Fetch and display events
fetch('http://localhost:8080/page6/events') // Fetch from the main server route
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(events => {
        const eventsList = document.getElementById('events-list');
        events.forEach(event => {
            const eventItem = document.createElement('div');
            eventItem.innerHTML = `
                <h3>${event.title}</h3>
                <p><strong>Date:</strong> ${event.date}</p>
                <p><strong>Location:</strong> ${event.location}</p>
                <p>${event.description}</p>
            `;
            eventsList.appendChild(eventItem);
        });
    })
    .catch(error => {
        console.error('Error fetching events:', error);
    });
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
