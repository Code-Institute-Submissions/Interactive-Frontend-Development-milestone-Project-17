/*function initMap() {
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
}*/

/* -----------------------------On click of a button to set marker*/
/*function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: {
            lat: 53.2707,
            lng: -9.0568
        }
  });

  var myLatLng = {
    lat: 53.271412,
    lng: -9.054706
  };
  //adding a marker
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map
  });
  google.maps.event.addDomListener(document.getElementById('addGoayaMarkerBtnId'), 'click', function(evt) {
    var marker = new google.maps.Marker({
      position: {
        lat: 53.271021,
        lng: -9.057210
      },
      map: map
    });
  });
}
google.maps.event.addDomListener(window, 'load', initMap);

*/




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



// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">
/*let map;
let service;
let infowindow;

function initMap() {
  const galway = new google.maps.LatLng(53.2707, -9.0568);
  infowindow = new google.maps.InfoWindow();
  map = new google.maps.Map(document.getElementById("map"), {
    center: galway,
    zoom: 15
  });
  const request = {
    query: "Galway",
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


/*var map;
var service;
var infowindow;

function initMap() {
  var galway = new google.maps.LatLng(53.2707, -9.0568);

  map = new google.maps.Map(document.getElementById('map'), {
      center: galway,
      zoom: 15
    });

  var request = {
    location: galway,
    radius: '1000',
    types: ['restaurant']
  };

  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);
}

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      createMarker(results[i]);
    }
  }
}*/

// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">


/*function initMap() {
  // Create the map.
  const galway = { lat: 53.2707, lng: -9.0568 };
  const map = new google.maps.Map(document.getElementById("map"), {
    center: galway,
    zoom: 17
  });
  // Create the places service.
  const service = new google.maps.places.PlacesService(map);
  let getNextPage;
  const cafeButton = document.getElementById("cafe");

    cafeButton.onclick = function() {
    cafeButton.disabled = true;

    if (getNextPage) {
      getNextPage();
    }
  };
  // Perform a nearby search.
   service.nearbySearch(
    { location: galway, radius: 500, type: 'cafe' },
    (results, status, pagination) => {
      if (status !== "OK") return;
      createMarkers(results, map);
      cafeButton.disabled = !pagination.hasNextPage;

      if (pagination.hasNextPage) {
        getNextPage = pagination.nextPage;
      }
    }
  );
}*/
/*function createMarkers(places, map) {
  const bounds = new google.maps.LatLngBounds();
  const placesList = document.getElementById("places");

  for (let i = 0, place; (place = places[i]); i++) {
    const image = {
      url: place.icon,
      size: new google.maps.Size(71, 71),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(17, 34),
      scaledSize: new google.maps.Size(25, 25)
    };
    new google.maps.Marker({
      map,
      icon: image,
      title: place.name,
      position: place.geometry.location
    });
    const li = document.createElement("li");
    li.textContent = place.name;
    placesList.appendChild(li);
    bounds.extend(place.geometry.location);
  }
  map.fitBounds(bounds);
}*/





/* radio select*/

var map;
var infowindow;
var center = {
    lat: 53.2707, lng: -9.0568
};
var markers = [];

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: center,
        zoom: 16
    });
    callService(map, 'cafe');
    infowindow = new google.maps.InfoWindow();
}

function callback(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
            createMarker(results[i]);
        }
    }
}

function createMarker(place) {
    /*const bounds = new google.maps.LatLngBounds();*/
    const placesList = document.getElementById("places");

        const image = {
            url: place.icon,
            size: new google.maps.Size(71, 71),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(17, 34),
            scaledSize: new google.maps.Size(25, 25)
        };
        var marker = new google.maps.Marker({
            map: map,
            icon: image,
            title: place.name,
            position: place.geometry.location
        });
        markers.push(marker);
        marker.addListener("click", () => {
            infowindow.setContent(place.name);
            infowindow.open(map, marker, this);
        });

        /*const catButton = document.createElement("li");
        catButton.textContent = place.name;
        placesList.appendChild(catButton);
        bounds.extend(place.geometry.location);*/
    
 /*map.fitBounds(bounds);*/
}


function callService(map, place) {
    var service = new google.maps.places.PlacesService(map);
    service.nearbySearch({
        location: center,
        radius: 500,
        type: [place]
    }, callback);
}
function clearMarker() {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
    }
}

$(function () {

    $('.place-types :radio').click(function () {
        var plc = $(this).val();
        clearMarker();
        callService(map, plc);
    });

});




/*function createMarker(place) {
     const image = {
      url: place.icon,
      size: new google.maps.Size(71, 71),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(17, 34),
      scaledSize: new google.maps.Size(25, 25)
    };
    var marker = new google.maps.Marker({
    map: map,
    icon: image,
     title: place.name,
    position: place.geometry.location

  });
  markers.push(marker);
  marker.addListener("click", () => {
    infowindow.setContent(place.name);
    infowindow.open(map, marker, this);
  });
}*/

/*function createMarkers(places, map) {
  const bounds = new google.maps.LatLngBounds();
  const placesList = document.getElementById("places");

  for (let i = 0, place; (place = places[i]); i++) {
    const image = {
      url: place.icon,
      size: new google.maps.Size(71, 71),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(17, 34),
      scaledSize: new google.maps.Size(25, 25)
    };
    new google.maps.Marker({
      map,
      icon: image,
      title: place.name,
      position: place.geometry.location
    });
     markers.push(marker);
  marker.addListener("click", () => {
    infowindow.setContent(place.name);
    infowindow.open(map, marker, this);
  });
    const li = document.createElement("li");
    li.textContent = place.name;
    placesList.appendChild(li);
    bounds.extend(place.geometry.location);
  }
  map.fitBounds(bounds);
}*/