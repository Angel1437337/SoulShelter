function filterShelters() {
    const searchInput = document.getElementById("searchBar").value.toLowerCase();
    const locationFilter = document.getElementById("locationFilter").value.toLowerCase();
    const cards = document.querySelectorAll(".shelter-card");
  
    cards.forEach(card => {
      const text = card.innerText.toLowerCase();
      const location = card.getAttribute("data-location").toLowerCase();
  
      const matchesSearch = text.includes(searchInput);
      const matchesLocation = !locationFilter || location.includes(locationFilter);
  
      card.style.display = matchesSearch && matchesLocation ? "block" : "none";
    });
  }
  
  // Optional: Show map based on first visible shelter
  document.querySelectorAll('.shelter-card').forEach(card => {
    card.addEventListener('click', () => {
      const mapUrl = card.getAttribute('data-map');
      if (mapUrl) {
        document.getElementById('shelterMap').src = mapUrl;
      }
    });
  });
  