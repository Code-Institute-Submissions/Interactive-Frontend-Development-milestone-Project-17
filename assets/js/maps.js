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

    callService(map, type);
    infowindow = new google.maps.InfoWindow();
        

}


function callback(results, status) {
    placesList.innerHTML = "";
    if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
            createMarker(results[i]);
        }
    }
}

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

    markers.push(marker);
    marker.addListener("click", () => {
        infowindow.setContent("<div><strong>" + place.name + "</strong><br>" + "Rating: " + place.rating + "<br>" + place.website + "</div>");
        infowindow.open(map, marker, this);

    });



    // Create card element
    const card = document.createElement('div');
    card.classList = 'card-body';

    // Construct card content
    const content =
        `<div class="container">
    <div class="card bisCard flex-row flex-wrap border-1 shadow p-3 mb-5 bg-white rounded ">
    <div class="card-header border-1 text-center align-middle cardImg">
            <img src= ${place.photos[0].getUrl({ maxWidth: 200, maxHeight: 200 })}/>
        </div>
        <div class="card-block px-2">
            <h4 class="card-title">${place.name}</h4>
            <p class="card-text">Description</p>
             <p> Rating: ${place.rating}</p>
            <p> Area: ${place.vicinity}</p>
            <a href="${place.website}" class="btn btn-primary align-bottom">${place.website}</a>
        </div>
    </div>
    </div>`;

    placesList.innerHTML += content;

}

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