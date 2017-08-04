'use strict';

/**
 * @ngdoc function
 * @name yoangularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yoangularApp
 */
angular.module('yoangularApp')
  .controller('onlineCtrl', function ($scope) {


    //지도 띄우기
    var showMap = function(lat,long){
      $("#myModal").modal('show');

      setTimeout(function(){
      //var cordi= [37.57984247616865, 126.9986532848516];
      var cordi= [lat, long];
      var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: cordi[0], lng: cordi[1]},
        zoom: 12
      })

      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(cordi[0], cordi[1]),
        animation: google.maps.Animation.DROP,
        map: map
      });
      marker.setAnimation(google.maps.Animation.BOUNCE); //animation

      //setTimeout(function(){
      //  map.setCenter({lat:cordi[0], lng:cordi[1]});
      //},500);

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
      },1000);


    }

    //Firebase
    var fbRef = new Firebase("https://lpwatch.firebaseio.com/lpwatch");
    var patientID = "lHaIsVtEX5";
    $scope.snap; //환자정보
    $scope.currentUser; //현재 유저정보
    $scope.emgergencySnap;//알람 현황

    $scope.initOnline = function(){

      //환자정보
      fbRef.child(patientID).on('value', function (snap) {
        console.log(snap.val());
        $scope.snap = snap.val();
        if(!$scope.$$phase) {
          $scope.$apply();
        }


      })

      //긴급호출
      fbRef.child('emergency').on('child_added', function (snap) {
        console.log(snap.val());
        if (snap.val()) {
          var gps = $scope.emgergencySnap = snap.val();
          if(!$scope.$$phase) {
            $scope.$apply();
          }

          //alert("emergency call");
          //팝업 띄우기
          showMap(gps.lat, gps.long);

        }
        fbRef.child('emergency').remove();


      });


      //유저
      //$scope.users = [];

      var User = new Parse.User;
      var query = new Parse.Query(User);
      query.equalTo('objectId', 'lHaIsVtEX5');

      query.first({
        success: function (result) {
          //console.log('query');
          console.warn(result);

          $scope.currentUser = result;
          if(!$scope.$$phase) {
            $scope.$apply();
          }
          //array data push
          //for (var i = 0; i < results.length; i++) {
          //  results[i].no = i+1;
          //  //$scope.users.push(results[i]);
          //  console.log(results[i]);
          //
          //
          //  })
          //}
        },
        error: function (error) {
          alert("Error: " + error.code + " " + error.message);
        }
      })


    }//end of online function


  });
