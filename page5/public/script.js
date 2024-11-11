// Mock data for alerts
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

// Render alerts in the alerts list
const alertsList = document.getElementById("alerts-list");
alerts.forEach(alert => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${alert.title}:</strong> ${alert.description}`;
    alertsList.appendChild(li);
});

// Initialize map
const map = L.map('map').setView([21.124, 70.828], 10); // Centered around Gir National Park, Gujarat
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

// Mock data for population chart
const speciesData = {
    labels: ['Giraffe', 'Elephants', 'Bison', 'Panda', 'Tiger', 'Chimpanzee', 'Orangutan', 'Rhino', 'Gorilla', 'Cheetah'],
    datasets: [{
        label: 'Population in the Wild',
        data: [670, 1000, 2000, 3500, 5000, 5000, 8000, 20000, 25000, 50000],
        backgroundColor: 'rgb(139, 0, 0)',
        borderColor: 'rgb(139, 0, 0)',
        borderWidth: 1
    }]
};

// Render chart
const ctx = document.getElementById('populationChart').getContext('2d');
new Chart(ctx, {
    type: 'bar',
    data: speciesData,
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
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