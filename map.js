function initMap() {
        var myLatLng = {lat: 40.7107, lng: -73.9970};
      
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 16,
          center: myLatLng
        });


        for (var i in data) {
        	datum = data[i];
        	if (datum['name'] == 'School Safety - M' || datum['name'] == 'A Place For Kids') {
        		var m = new google.maps.Marker({
        		position: {lat: datum['lat'], lng: datum['lng']},
        		title: datum['name'],
        		map: map,
        		icon: 'images/spanish.png'
        		});
        	} else {
	        	var m = new google.maps.Marker({
	        		position: {lat: datum['lat'], lng: datum['lng']},
	        		title: datum['name'],
	        		map: map,
	        		});
        	}

			content = datum['name'];
			var infowindow = new google.maps.InfoWindow();
			google.maps.event.addListener(m,'click', (function(m,content,infowindow){ 
			    return function() {
			        infowindow.setContent(content);
			        infowindow.open(map,m);
			    };
			})(m,content,infowindow)); 
        }

        // var marker = new google.maps.Marker({
        //   position: myLatLng,
        //   map: map,
        //   title: 'Hello World!'
        // });
      }

     