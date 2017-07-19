function initMap() {
        var myLatLng = {lat: 40.7107, lng: -73.9970};
      
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 16,
          center: myLatLng
        });

        map.data.loadGeoJson(
      'data.geojson');


        // var marker = new google.maps.Marker({
        //   position: myLatLng,
        //   map: map,
        //   title: 'Hello World!'
        // });
      }