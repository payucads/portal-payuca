function initMap() {
  var myLatLng = {lat: 48.2140718, lng: 16.367119};

  var map = new google.maps.Map(document.getElementById('map-canvas'), {
    zoom: 12,
    center: myLatLng
  });

  var image = './images/pin.png';
  var beachMarker = new google.maps.Marker({
    position: {lat: 48.2140718, lng: 16.367119},
    map: map,
    icon: image
  });
}
