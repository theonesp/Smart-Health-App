function initialize() {
    var mapCenter = new google.maps.LatLng(59.3426606750, 18.0736160278),
    myOptions = {
        zoom:10,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: mapCenter
    },
    map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
}

$( document ).on( 'pageshow', '#map-page',function(event){
  initialize();
});

$( document ).on( 'click', '#map-anchor',function(event){
  event.preventDefault();
  $.mobile.changePage( "map.html", { transition: "flip" } );
});