//initMap
function initMap() {
  var pointStart = {lat: 53.728333, lng: 91.440950},
  map = new google.maps.Map(document.getElementById('map__body'), {
    zoom: 17,
    center: pointStart,
    scrollwheel: false,
  }); 

  /*
  var contentString = '<div class="map__caption">Регистрация товарных<br>знаков Bebrand</div>';
  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });
  */
  var markerStart = new google.maps.Marker({
    position: pointStart,
    map: map,
  });
  //infowindow.open(map, markerStart);
}


