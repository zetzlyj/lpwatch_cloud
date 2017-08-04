angular.module('ngGMap', [])
  .directive('smMap',function(){
      return{
        restrict: 'EA',
        //replace: true,

        template:'<p>hi30000</p>'
      }

  })
  .directive('myMap', function() {
  // directive link function
  var link = function(scope, element, attrs) {
    var map, infoWindow;
    var markers = [];

    // map config
    var mapOptions = {
      center: new google.maps.LatLng(50, 2),
      zoom: 4,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      scrollwheel: false
    };

    // init the map
    function initMap() {
      if (map === void 0) {
        map = new google.maps.Map(element[0], mapOptions);
      }
    }

    // place a marker
    function setMarker(map, position, title, content) {
      var marker;
      var markerOptions = {
        position: position,
        map: map,
        title: title,
        icon: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png'
      };

      marker = new google.maps.Marker(markerOptions);
      markers.push(marker); // add marker to array

      google.maps.event.addListener(marker, 'click', function () {
        // close window if not undefined
        if (infoWindow !== void 0) {
          infoWindow.close();
        }
        // create new window
        var infoWindowOptions = {
          content: content
        };
        infoWindow = new google.maps.InfoWindow(infoWindowOptions);
        infoWindow.open(map, marker);
      });
    }

    // show the map and place some markers
    initMap();

    setMarker(map, new google.maps.LatLng(51.508515, -0.125487), 'London', 'Just some content');
    setMarker(map, new google.maps.LatLng(52.370216, 4.895168), 'Amsterdam', 'More content');
    setMarker(map, new google.maps.LatLng(48.856614, 2.352222), 'Paris', 'Text here');
  };

  return {
    restrict: 'A',
    template: '<div id="gmaps" style="height:500px;width:100%;"></div>',
    replace: true,
    link: link
  };
})
  .directive('gMap', ['$timeout',function ($timeout) {
    return {
      restrict: 'EA',
      link: function (scope, iElement, iAttrs) {
        var el = document.createElement("div");
        el.style.width = "100%";
        el.style.height = "100%";
        iElement.prepend(el);

        //iAttrs.center를 이용하여 지시자가 적용된 DOM의 center 속성값을 가지고 온다. 하지만 해당 값이 문자열이라서 JSON.parse를 이용해 배열로 변환한다. zoom은 숫자여야 하기에 Number를 이용하여 숫자로 변환한다.
        var cordi = (iAttrs.center !== undefined) ? JSON.parse(iAttrs.center) : [37.561192, 129.078666],
          zoom = (iAttrs.zoom !== undefined) ? Number(iAttrs.zoom) : 8;

        var map = new google.maps.Map(el, {}),
          mapOptions = {
            center: new google.maps.LatLng(cordi[0], cordi[1]),
            zoom: zoom,
            mapTypeId: google.maps.MapTypeId.ROADMAP
          };

        //마커
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(cordi[0], cordi[1]),
          animation: google.maps.Animation.DROP,
          map: map
        });
        marker.setAnimation(google.maps.Animation.BOUNCE); //animation

        setTimeout(function(){
          map.setCenter({lat:cordi[0], lng:cordi[1]});
        },500);

        //geocode
        var geocoder = new google.maps.Geocoder;
        var infowindow = new google.maps.InfoWindow;

        var latlng = {lat: cordi[0], lng: cordi[1]};
        geocoder.geocode({'location': latlng}, function(results, status) {
          if (status === google.maps.GeocoderStatus.OK) {
            if (results[1]) {
              map.setZoom(11);


              infowindow.setContent(results[1].formatted_address);
              infowindow.open(map, marker);
            } else {
              window.alert('No results found');
            }
          } else {
            window.alert('Geocoder failed due to: ' + status);
          }
        });
        //geocode@

        //center 속성을 감시하고 있다 값이 변경하면 해당 콜백함수를 호출한다. 이때 바뀐 값이 전달된다.
        //iAttrs.$observe("center",function(value) {
        //    var latlng = JSON.parse(value);
        //    //구글 맵의 setCenter 메소드로 바뀐 값으로 맵의 중앙위치를 변경한다.
        //    //alert('위치이동');
        //    map.setCenter({lat:cordi[0], lng:cordi[1]});
        //});
        ////위와 마찬가지로 zoom 속성을 감시한다.
        //iAttrs.$observe("zoom",function(value) {
        //    map.setZoom(Number(value));
        //});

      }
    };
  }]);
