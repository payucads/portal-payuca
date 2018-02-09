function initMap() {

  //Map center
  var myLatLng = {lat: 48.211097, lng: 16.377477};

  //Map options including styling
  var map = new google.maps.Map(document.getElementById('map-canvas'), {
    zoom: 13,
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

//Garages
var markers = [
    {
        "title": 'Garage Nordbahnstraße',
        "lat": '48.2230603',
        "lng": '16.3870206',
        "address": '1020 Wien, Nordbahnstraße 36',
        "image": 'http://www.payuca.com/img/garageTest.jpg',
        "price": '2,00 € / Std.'
    },
    {
        "title": 'Garage Große Schiffgasse',
        "lat": '48.2160561',
        "lng": '16.3733598',
        "address": '1020 Wien, Große Schiffgasse 6',
        "image": 'http://www.payuca.com/img/garageTest.jpg',
        "price": '2,00 € / Std.'
    },
    {
        "title": 'Garage Steingasse',
        "lat": '48.1944127',
        "lng": '16.3929966',
        "address": '1030 Wien, Steingasse 10-14',
        "image": 'http://www.payuca.com/img/garageTest.jpg',
        "price": '2,00 € / Std.'
    },
    {
        "title": 'Garage Ungargasse',
        "lat": '48.2005977',
        "lng": '16.385728',
        "address": '1030 Wien, Ungargasse 37',
        "image": 'http://www.payuca.com/img/garageTest.jpg',
        "price": '2,00 € / Std.'
    },
    {
        "title": 'Garage Barichgasse',
        "lat": '48.1970289',
        "lng": '16.3880833',
        "address": '1030 Wien, Barichgasse 19',
        "image": 'http://www.payuca.com/img/garageTest.jpg',
        "price": '2,00 € / Std.'
    }
]

//Pins & Info Windows options
function setMarkers(map) {

  //Pin options
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

  var infoWindow = new google.maps.InfoWindow();

  //InfoWindow content
  $('#garage').on('click', function(){
    infoWindow.setContent("<div style='padding-top: 10px; padding-left: 5px; '><div style='float:left'><img align='left' src='" + data.image + "' alt='" + data.title + "' style='margin-bottom: 10px;' /><br /></div><h5>" + data.title + "</h5>" + data.address + "<br />" + data.price + " <br /><a href='' class='btn btn-outline btn-primary btn-sm' style='margin-top: 10px !important;'>Jetzt reservieren</a></div>");
    infoWindow.open(map, marker);
  });

  google.maps.event.addListener(infoWindow, 'domready', function() {

    var iwOuter = $('.gm-style-iw');

    var iwBackground = iwOuter.prev();

    iwBackground.children(':nth-child(2)').css({
      'background': '#fff'
    });

    var iwmain = iwBackground.children(':nth-child(2)');

    iwBackground.children(':nth-child(4)').css({
      'display': 'none'
    });

    var iwCloseBtn = iwOuter.next();

    iwCloseBtn.css({
      'right': '5px',
      'top': '5px',
      'background': '#fff'
    });

  });

  for (var i = 0; i < markers.length; i++) {
    var data = markers[i];
    var myLatlng = new google.maps.LatLng(data.lat, data.lng);

    // add marker to maps
    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      icon: image,
      shape: shape,
      title: data.title
    });

    //Attach click event to the marker.
    (function (marker, data) {
      google.maps.event.addListener(marker, "click", function (e) {
        infoWindow.setContent("<div style='padding-top: 10px; padding-left: 5px; '><div style='float:left'><img align='left' src='" + data.image + "' alt='" + data.title + "' style='margin-bottom: 10px;' /><br /></div><h5>" + data.title + "</h5>" + data.address + "<br />" + data.price + " <br /><a href='' class='btn btn-outline btn-primary btn-sm' style='margin-top: 10px !important; margin-right: 15px !important;' data-toggle='modal' data-target='#myModal'>Jetzt reservieren</a><a href='' class='btn btn-outline btn-primary2 btn-sm' style='margin-top: 10px !important;' data-toggle='modal' data-target='#myModal'>Dauermieter</a></div>");
        infoWindow.open(map, marker);
      });
    })(marker, data);
  }
}
