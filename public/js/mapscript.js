var map;
var myLatLng;
$(document).ready(function() {
        geoLocationInit();
      });
    
        function geoLocationInit() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(success, fail);
            } 
            else {
                alert("Browser does not support");
            }
        }

        function success(position) {
            console.log(position);
            var latval = position.coords.latitude;
            var lngval = position.coords.longitude;
            myLatLng = new google.maps.LatLng(latval, lngval);
            createMap(myLatLng);
            nearbySearch(myLatLng, "shop");
           //SearchPlaces(latval, lngval);
        }
        //Check whether are there an internet connection
        function fail() {
            alert("Oops! Something wrong with your internet connection");
        }
        //Create Map
        function createMap(myLatLng) {
            map = new google.maps.Map(document.getElementById('map'), {
                center: myLatLng,
                zoom: 14,
                // Styling were taken from https://developers.google.com/maps/documentation/javascript/examples/style-array
                styles: [
                    {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
                    {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
                    {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
                    {
                      featureType: 'administrative.locality',
                      elementType: 'labels.text.fill',
                      stylers: [{color: '#d59563'}]
                    },
                    {
                      featureType: 'poi',
                      elementType: 'labels.text.fill',
                      stylers: [{color: '#d59563'}]
                    },
                    {
                      featureType: 'poi.park',
                      elementType: 'geometry',
                      stylers: [{color: '#263c3f'}]
                    },
                    {
                      featureType: 'poi.park',
                      elementType: 'labels.text.fill',
                      stylers: [{color: '#6b9a76'}]
                    },
                    {
                      featureType: 'road',
                      elementType: 'geometry',
                      stylers: [{color: '#38414e'}]
                    },
                    {
                      featureType: 'road',
                      elementType: 'geometry.stroke',
                      stylers: [{color: '#212a37'}]
                    },
                    {
                      featureType: 'road',
                      elementType: 'labels.text.fill',
                      stylers: [{color: '#9ca5b3'}]
                    },
                    {
                      featureType: 'road.highway',
                      elementType: 'geometry',
                      stylers: [{color: '#746855'}]
                    },
                    {
                      featureType: 'road.highway',
                      elementType: 'geometry.stroke',
                      stylers: [{color: '#1f2835'}]
                    },
                    {
                      featureType: 'road.highway',
                      elementType: 'labels.text.fill',
                      stylers: [{color: '#f3d19c'}]
                    },
                    {
                      featureType: 'transit',
                      elementType: 'geometry',
                      stylers: [{color: '#2f3948'}]
                    },
                    {
                      featureType: 'transit.station',
                      elementType: 'labels.text.fill',
                      stylers: [{color: '#d59563'}]
                    },
                    {
                      featureType: 'water',
                      elementType: 'geometry',
                      stylers: [{color: '#17263c'}]
                    },
                    {
                      featureType: 'water',
                      elementType: 'labels.text.fill',
                      stylers: [{color: '#515c6d'}]
                    },
                    {
                      featureType: 'water',
                      elementType: 'labels.text.stroke',
                      stylers: [{color: '#17263c'}]
                    }
                  ]
            });
            var marker = new google.maps.Marker({
                position: myLatLng,
                map: map
            });
            
        }
        //Create marker
        function createMarker(latlng, icn, name) {
            var marker = new google.maps.Marker({
                position: latlng,
                map: map,
                icon: icn,
                title: name
            });
        }
        /*function SearchPlaces(lat, lng){
            $.post('https://localhost/api/SearchPlaces', {lat: lat, lng:lng}, function(match){
                //console.log(match);
                $.each(match, function(i, val){
                    console.log(val.name);
                    var platval = val.lat;
                    var plngval = val.lng;
                    var pname = val.name;
                    var picn = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
                    PLatLng = new google.maps.LatLng(platval, plngval);

                    createMarker(PLatLng, picn, pname);
                });
            });
        }*/
    function nearbySearch(myLatLng, type){
        var request = {
            location: myLatLng,
            radius: '2500',
            types: [type]
        };
        service = new google.maps.places.PlacesService(map);
        service.nearbySearch(request, callback);

        function callback(results, status){
            if (status ==google.maps.places.PlacesServiceStatus.OK){
                for (var i=0; i<results.length; i++){
                    var place = results[i];
                    //console.log(place);
                    latlng = place.geometry.location;
                    icn='https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
                    name = place.name;
                    createMarker(latlng, icn, name);
                }
            }
        }
    }
