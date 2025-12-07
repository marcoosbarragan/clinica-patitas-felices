// Inicialización del mapa
const mapa = L.map("mapa").setView([37.3861, -5.9819], 13);

// Capa base de OpenStreetMap
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap"
}).addTo(mapa);

// Marcador de la clínica
const destino = L.latLng(37.3861, -5.9819); // Clínica Patitas Felices
L.marker(destino)
  .addTo(mapa)
  .bindPopup("Clínica Patitas Felices")
  .openPopup();

// Geolocalización del usuario
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function (pos) {
      const origen = L.latLng(pos.coords.latitude, pos.coords.longitude);
      L.Routing.control({
        waypoints: [origen, destino],
        routeWhileDragging: false,
        show: false,
        createMarker: function () { return null; }
      }).addTo(mapa);
    },
    function () {
      console.log("Permiso de geolocalización denegado o no disponible.");
    }
  );
} else {
  console.log("Geolocalización no soportada por el navegador.");
}