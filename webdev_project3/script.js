function initMap() {
  const mapElement = document.getElementById("googleMap");

  if (!mapElement) {
    return;
  }

  const iitLocation = { lat: 41.8349, lng: -87.6270 };

  const map = new google.maps.Map(mapElement, {
    zoom: 14,
    center: iitLocation,
    mapTypeId: "hybrid",
    zoomControl: true,
    streetViewControl: true
  });

  const marker = new google.maps.Marker({
    position: iitLocation,
    map: map,
    title: "Illinois Institute of Technology",
    animation: google.maps.Animation.DROP
  });

  const infoWindow = new google.maps.InfoWindow({
    content: "<h3>Illinois Institute of Technology</h3><p>Welcome to IIT Campus</p>"
  });

  marker.addListener("click", function () {
    infoWindow.open(map, marker);
  });
}
  document.addEventListener("DOMContentLoaded", function () {
    const questionBtn = document.getElementById("questionBtn");

    if (questionBtn) {
      questionBtn.addEventListener("click", function () {
        alert("If you have questions, contact me at:\nsbaek9@hawk.illinoistech.edu");
      });
    }
  });
