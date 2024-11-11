// public/js/map.js
const map = L.map("map").setView([21.1245, 70.7936], 10); // Coordinates for Gir National Park

// Add tile layer to map
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
}).addTo(map);
