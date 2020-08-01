/* radio select*/

var map;
var infowindow;
var center = {
    lat: 53.273850, lng: -9.052223

};
var markers = [];
var placesList = document.getElementById("placesList");


function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: center,
        zoom: 16
    });
    callService(map, 'cafe');
    infowindow = new google.maps.InfoWindow();
    
}

/*function initMap(type) {
    map = new google.maps.Map(document.getElementById('map'), {
        center: center,
        zoom: 16
    });
    callService(map, type);
    infowindow = new google.maps.InfoWindow();
    
}*/

function callback(results, status) {
    placesList.innerHTML = "";
    if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
            createMarker(results[i]);
        }
    }
}


/*function createPhotoMarker(place) {
        var photos = place.photos;
        if (!photos) {
            return;
        }*/


function createMarker(place) {

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
        console.log(place.website);


        markers.push(marker);
        marker.addListener("click", () => {
            /* service.getDetails(request, function(details, status) {*/
            service.getDetails(request, () =>  {
            infowindow.setContent(place.name + "<br />" + place.website + "<br />" + place.rating);
            infowindow.open(map, marker, this);
            console.log(place.website);
            });
        });
    // Create card element
      const card = document.createElement('div');
      card.classList = 'card-body';

// Construct card content
     /* const content = `
        <div class="card">
        <div class="card-header>
          HEllo
        </div>
    
        <div>
          <div class="card-body">
    <img src=${place.photos[0].getUrl({maxWidth: 50, maxHeight: 50})}/>
            <h5> ${place.name} </h5>
            <p> Rating: ${place.rating}</p>
            <p> Area: ${place.vicinity}</p>
             
    </br>
          </div>
        </div>
      </div>
      `;*/


const content = `<div class="container">
    <div class="card bisCard flex-row flex-wrap border-1">
        <div class="card-header border-1 text-center align-middle">
            <img src= ${place.photos[0].getUrl({maxWidth: 100, maxHeight: 100})}/>
        </div>
        <div class="card-block px-2">
            <h4 class="card-title">${place.name}</h4>
            <p class="card-text">Description</p>
             <p> Rating: ${place.rating}</p>
            <p> Area: ${place.vicinity}</p>
             <a href="${place.website}" class="btn btn-primary">${place.website}</a>
            <!-- <a href="${place.website}" class="btn btn-primary">Website</a>-->
        </div>
    </div>
    </div>`;


placesList.innerHTML += content;

     /*placesList.innerHTML += '<div class="card">' + 'Name: ' + place.name  + "<br /> " + 'Rating: ' + place.rating + "<br /> " + place.vicinity + '</div>';*/


    }


    // Create DIV element and append to opening_hours_div
          /*  var content = document.createElement('div');
            content.innerHTML = 'Name: ' + place.name + '<br>'; 
            content.innerHTML += 'Rating: ' + place.rating;

            phoneNumberDiv.appendChild(content);*/


    /* google.maps.event.addListener(marker, 'click', function() {
       service.getDetails(request, function(details, status) {
         console.log(details,status);
         infowindow.setContent(details.name + "<br />" + details.formatted_address +"<br />" + details.website + "<br />" + details.rating + "<br />" + details.formatted_phone_number);
         infowindow.open(map, marker);
       });
    });*/


    /*const apiResult = [{
      name: "title1",
      description: "desc1",
      output: "out1"
    }, {
      title: "title2",
      description: "desc2",
      output: "out2"
    }, {
      title: "title3",
      description: "desc3",
      output: "out3"
    }];
    
    
    const container = document.getElementById('placesList');
    
    placesList.forEach((result, idx) => {
      // Create card element
      const card = document.createElement('div');
      card.classList = 'card-body';
    
      // Construct card content
      const content = `
        <div class="card">
        <div class="card-header" id="heading-${idx}">
          <h5 class="mb-0">
            <button class="btn btn-link" data-toggle="collapse" data-target="#collapse-${idx}" aria-expanded="true" aria-controls="collapse-${idx}">
    
                    </button>
          </h5>
        </div>
    
        <div id="collapse-${idx}" class="collapse show" aria-labelledby="heading-${idx}" data-parent="#accordion">
          <div class="card-body">
    
            <h5>${result.title}</h5>
            <p>${result.description}</p>
            <p>${result.output}</p>
            ...
          </div>
        </div>
      </div>
      `;
    
      // Append newyly created card element to the container
      container.innerHTML += content;
    })*/






    function callService(map, place) {
        var service = new google.maps.places.PlacesService(map);
        service.nearbySearch({
            location: center,
            radius: 1000,
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



/*-----------OTHER VARIATIONS----------*/

/*function createMarker(place) {

    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
      map: map,
      position: place.geometry.location
    });
    var request = { placeId: place.place_id };

    google.maps.event.addListener(marker, 'click', function() {
      service.getDetails(request, function(details, status) {
        console.log(details,status);
        infowindow.setContent(details.name + "<br />" + details.formatted_address +"<br />" + details.website + "<br />" + details.rating + "<br />" + details.formatted_phone_number);
        infowindow.open(map, marker);
      });
   });

  placesList.innerHTML += '<li>' + place.name  + '</li>';
}*/



/* markers.forEach(marker => {
            marker.setMap(null);
          });
          markers = []; // For each place, get the icon, name and location.

          const bounds = new google.maps.LatLngBounds();
          places.forEach(place => {
            if (!place.geometry) {
              console.log("Returned place contains no geometry");
              return;
            }*/

/*function initAutocomplete() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -33.8688, lng: 151.2195 },
    zoom: 13,
    mapTypeId: "roadmap"
  });
  // Create the search box and link it to the UI element.
  const input = document.getElementById("pac-input");
  const searchBox = new google.maps.places.SearchBox(input);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
  // Bias the SearchBox results towards current map's viewport.
  map.addListener("bounds_changed", () => {
    searchBox.setBounds(map.getBounds());
  });
  let markers = [];
  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener("places_changed", () => {
    const places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }
    // Clear out the old markers.
    markers.forEach(marker => {
      marker.setMap(null);
    });
    markers = [];
    // For each place, get the icon, name and location.
    const bounds = new google.maps.LatLngBounds();
    places.forEach(place => {
      if (!place.geometry) {
        console.log("Returned place contains no geometry");
        return;
      }
      const icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };
      // Create a marker for each place.
      markers.push(
        new google.maps.Marker({
          map,
          icon,
          title: place.name,
          position: place.geometry.location
        })
      );

      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
  });
}*/
















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
}
function createMarkers(places, map) {
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





