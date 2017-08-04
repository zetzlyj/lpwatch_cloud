'use strict';

/**
 * @ngdoc function
 * @name yoangularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yoangularApp
 */
angular.module('yoangularApp')
  .controller('rentalCtrl', function ($scope) {

    $scope.initRental = function(){


      //렌탈정보
      $scope.rentals = [];

      var Rental = new Parse.Object.extend('Rental');
      var query = new Parse.Query(Rental);

      query.find({
        success: function (results) {
          //console.log('query');
          console.warn(results);

          //array data push
          for (var i = 0; i < results.length; i++) {
            results[i].no = i+1;
            $scope.rentals.push(results[i]);
            //console.log(results[i]);
          }
          $scope.$apply();

          setTimeout(function(){
             for (var i = 0; i < results.length; i++) {
              var item = results[i];

              console.log("#barcode" + (i + 1));
              $("#barcode" + (i + 1)).JsBarcode(results[i].id, {width: 1, height: 25});
            }
          },3000);


        },
        error: function (error) {
          alert("Error: " + error.code + " " + error.message);
        }
      })


    }//end of online function



    $scope.dateToDate = function(now){
      if( now != undefined) {
        var nowAll = now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate();
        //console.log(nowAll);
        return nowAll;
      }
    }


  });
