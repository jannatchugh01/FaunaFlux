// public/js/search.js

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
