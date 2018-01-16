function initMap() {
  var myLatLng = {lat: 48.2140718, lng: 16.367119};

  var map = new google.maps.Map(document.getElementById('map-canvas'), {
    zoom: 12,
    disableDefaultUI: true,
    center: myLatLng,
    styles: [
          {
              "featureType": "all",
              "elementType": "labels.text.fill",
              "stylers": [
                  {
                      "color": "#727376"
                  },
                  {
                      "lightness": "-10"
                  }
              ]
          },
          {
              "featureType": "administrative.country",
              "elementType": "geometry",
              "stylers": [
                  {
                      "visibility": "on"
                  }
              ]
          },
          {
              "featureType": "administrative.country",
              "elementType": "geometry.stroke",
              "stylers": [
                  {
                      "color": "#a0a4a5"
                  }
              ]
          },
          {
              "featureType": "administrative.province",
              "elementType": "geometry.stroke",
              "stylers": [
                  {
                      "color": "#62838e"
                  }
              ]
          },
          {
              "featureType": "administrative.land_parcel",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "visibility": "on"
                  }
              ]
          },
          {
              "featureType": "landscape",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#e9eaeb"
                  }
              ]
          },
          {
              "featureType": "landscape.man_made",
              "elementType": "geometry.stroke",
              "stylers": [
                  {
                      "color": "#f7931d"
                  },
                  {
                      "weight": "0.30"
                  },
                  {
                      "visibility": "simplified"
                  }
              ]
          },
          {
              "featureType": "poi",
              "elementType": "all",
              "stylers": [
                  {
                      "visibility": "simplified"
                  }
              ]
          },
          {
              "featureType": "poi.attraction",
              "elementType": "all",
              "stylers": [
                  {
                      "visibility": "on"
                  }
              ]
          },
          {
              "featureType": "poi.business",
              "elementType": "all",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "poi.government",
              "elementType": "all",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "poi.park",
              "elementType": "all",
              "stylers": [
                  {
                      "visibility": "on"
                  },
                  {
                      "color": "#c9e3aa"
                  }
              ]
          },
          {
              "featureType": "poi.place_of_worship",
              "elementType": "all",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "poi.school",
              "elementType": "all",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "poi.sports_complex",
              "elementType": "all",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "road",
              "elementType": "all",
              "stylers": [
                  {
                      "saturation": "-100"
                  },
                  {
                      "visibility": "on"
                  },
                  {
                      "weight": "1"
                  }
              ]
          },
          {
              "featureType": "road",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "weight": "1.80"
                  }
              ]
          },
          {
              "featureType": "road",
              "elementType": "geometry.stroke",
              "stylers": [
                  {
                      "visibility": "simplified"
                  },
                  {
                      "weight": "0.45"
                  }
              ]
          },
          {
              "featureType": "road",
              "elementType": "labels",
              "stylers": [
                  {
                      "visibility": "on"
                  }
              ]
          },
          {
              "featureType": "road.highway",
              "elementType": "geometry",
              "stylers": [
                  {
                      "visibility": "on"
                  }
              ]
          },
          {
              "featureType": "road.highway",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#d1d2d4"
                  }
              ]
          },
          {
              "featureType": "road.highway",
              "elementType": "geometry.stroke",
              "stylers": [
                  {
                      "lightness": "0"
                  },
                  {
                      "color": "#d1d2d4"
                  },
                  {
                      "weight": "0.50"
                  }
              ]
          },
          {
              "featureType": "road.highway",
              "elementType": "labels",
              "stylers": [
                  {
                      "visibility": "on"
                  }
              ]
          },
          {
              "featureType": "road.highway",
              "elementType": "labels.text",
              "stylers": [
                  {
                      "visibility": "on"
                  }
              ]
          },
          {
              "featureType": "road.highway.controlled_access",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#ffffff"
                  }
              ]
          },
          {
              "featureType": "road.highway.controlled_access",
              "elementType": "geometry.stroke",
              "stylers": [
                  {
                      "color": "#a9b4b8"
                  }
              ]
          },
          {
              "featureType": "road.arterial",
              "elementType": "labels.icon",
              "stylers": [
                  {
                      "invert_lightness": true
                  },
                  {
                      "saturation": "-7"
                  },
                  {
                      "lightness": "3"
                  },
                  {
                      "gamma": "1.80"
                  },
                  {
                      "weight": "0.01"
                  }
              ]
          },
          {
              "featureType": "road.local",
              "elementType": "all",
              "stylers": [
                  {
                      "visibility": "on"
                  }
              ]
          },
          {
              "featureType": "road.local",
              "elementType": "geometry",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "road.local",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "visibility": "on"
                  }
              ]
          },
          {
              "featureType": "transit",
              "elementType": "all",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "transit",
              "elementType": "geometry",
              "stylers": [
                  {
                      "visibility": "on"
                  }
              ]
          },
          {
              "featureType": "water",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#86bcd9"
                  }
              ]
          }
      ]
  });

  setMarkers(map);
}

var garages = [
  ['Garage Nordbahnstraße', 48.2230603, 16.3870206, 5],
  ['Garage Große Schiffgasse', 48.2160561, 16.3733598, 4],
  ['Garage Steingasse', 48.1944127, 16.3929966, 3],
  ['Garage Ungargasse', 48.2005977, 16.385728, 2],
  ['Garage Barichgasse', 48.1970289, 16.3880833, 1]
];

function setMarkers(map) {
  var image = {
    url: './images/pin.png',
    size: new google.maps.Size(20, 32),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(0, 32)
  };

  var shape = {
    coords: [1, 1, 1, 20, 18, 20, 18, 1],
    type: 'poly'
  };

  for (var i = 0; i < garages.length; i++) {
    var garage = garages[i];
    var marker = new google.maps.Marker({
      position: {lat: garage[1], lng: garage[2]},
      map: map,
      icon: image,
      shape: shape,
      title: garage[0],
      zIndex: garage[3]
    });

  }
}
