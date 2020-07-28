function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: {
            lat: 53.2707,
            lng: -9.0568
        }
    });

    var labels = "ABCDEFGHIJKLMONPQRSTUVWXYZ";

    var locations = [
        { lat: 53.271412, lng: -9.054706 },
        { lat: 53.271021, lng: -9.057210 },
        { lat: 53.271369, lng: -9.054662 }
    ];

    var markers = locations.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
});
var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
}

// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

/*let map;
let service;
let infowindow;

function initMap() {
  const galway = new google.maps.LatLng(53.2838294,-9.1888286);
  infowindow = new google.maps.InfoWindow();
  map = new google.maps.Map(document.getElementById("map"), {
    center: galway,
    zoom: 15
  });
  const request = {
    query: "Spanish Arch",
    fields: ["name", "geometry"]
  };
  service = new google.maps.places.PlacesService(map);
  service.findPlaceFromQuery(request, (results, status) => {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (let i = 0; i < results.length; i++) {
        createMarker(results[i]);
      }
      map.setCenter(results[0].geometry.location);
    }
  });
}

function createMarker(place) {
  const marker = new google.maps.Marker({
    map,
    position: place.geometry.location
  });
  google.maps.event.addListener(marker, "click", () => {
    infowindow.setContent(place.name);
    infowindow.open(map);
  });
}*/