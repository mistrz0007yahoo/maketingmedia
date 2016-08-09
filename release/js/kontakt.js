var map;
var myLatLng = { lat: 52.205222, lng: 21.037760 };
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        zoom: 16
    });
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map
    });
}
var kontakt = (function () {
    function kontakt() {
    }
    return kontakt;
}());
