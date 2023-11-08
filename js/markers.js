
// Initialize the map
var map = L.map("map").setView([49.8397, 29.1297], 6);

// Add a tile layer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

let markersLayer = null;


export function updateMarkers(data) {
    clearMarkers(); // Clear existing markers
    markersLayer = L.layerGroup(); // Create a new layer for the markers
  
    data.forEach(function (marker) {
      // Creates a red marker with the coffee icon
      var redMarker = L.ExtraMarkers.icon({
        icon: "fa-solid fa-house-medical-circle-check",
        markerColor: "blue",
        shape: "square",
        prefix: "fa",
      });
  
      var markerLayer = L.marker(marker.latlng, {
        icon: redMarker,
      }).addTo(map);
      markerLayer.bindPopup(`<b>${marker.name}</b><br>${marker.info}`);
      markerLayer.on("click", function () {
        markerLayer.openPopup();
      });
  
      markersLayer.addLayer(markerLayer); // Add the marker to the layer
    });
  
    markersLayer.addTo(map); // Add the markers layer to the map
  }

  export function clearMarkers() {
    if (markersLayer) {
      map.removeLayer(markersLayer); //
    }
  }