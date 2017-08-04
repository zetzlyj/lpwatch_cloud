"use strict";function CODE128(a,b){function c(){return-1==a.search(n)?!1:!0}function d(a,b,c,d){var e="";return e+=i(c),e+=b(a),e+=i(d(a,c)),e+=m}function e(a){for(var b="",c=0;c<a.length;c++)b+=k(a[c]);return b}function f(a){for(var b="",c=0;c<a.length;c+=2)b+=i(parseInt(a.substr(c,2)));return b}function g(a,b){for(var c=0,d=0;d<a.length;d++)c+=j(a[d])*(d+1);return(c+b)%103}function h(a,b){for(var c=0,d=1,e=0;e<a.length;e+=2)c+=parseInt(a.substr(e,2))*d,d++;return(c+b)%103}function i(a){for(var b=0;b<l.length;b++)if(l[b][2]==a)return l[b][1];return""}function j(a){for(var b=0;b<l.length;b++)if(l[b][0]==a)return l[b][2];return 0}function k(a){for(var b=0;b<l.length;b++)if(l[b][0]==a)return l[b][1];return""}b=b||"B",this.string128=a+"",this.valid=c,this.encoded=function(){return c(a)?o["code128"+b](a):""};var l=[[" ","11011001100",0],["!","11001101100",1],['"',"11001100110",2],["#","10010011000",3],["$","10010001100",4],["%","10001001100",5],["&","10011001000",6],["'","10011000100",7],["(","10001100100",8],[")","11001001000",9],["*","11001000100",10],["+","11000100100",11],[",","10110011100",12],["-","10011011100",13],[".","10011001110",14],["/","10111001100",15],["0","10011101100",16],["1","10011100110",17],["2","11001110010",18],["3","11001011100",19],["4","11001001110",20],["5","11011100100",21],["6","11001110100",22],["7","11101101110",23],["8","11101001100",24],["9","11100101100",25],[":","11100100110",26],[";","11101100100",27],["<","11100110100",28],["=","11100110010",29],[">","11011011000",30],["?","11011000110",31],["@","11000110110",32],["A","10100011000",33],["B","10001011000",34],["C","10001000110",35],["D","10110001000",36],["E","10001101000",37],["F","10001100010",38],["G","11010001000",39],["H","11000101000",40],["I","11000100010",41],["J","10110111000",42],["K","10110001110",43],["L","10001101110",44],["M","10111011000",45],["N","10111000110",46],["O","10001110110",47],["P","11101110110",48],["Q","11010001110",49],["R","11000101110",50],["S","11011101000",51],["T","11011100010",52],["U","11011101110",53],["V","11101011000",54],["W","11101000110",55],["X","11100010110",56],["Y","11101101000",57],["Z","11101100010",58],["[","11100011010",59],["\\","11101111010",60],["]","11001000010",61],["^","11110001010",62],["_","10100110000",63],["`","10100001100",64],["a","10010110000",65],["b","10010000110",66],["c","10000101100",67],["d","10000100110",68],["e","10110010000",69],["f","10110000100",70],["g","10011010000",71],["h","10011000010",72],["i","10000110100",73],["j","10000110010",74],["k","11000010010",75],["l","11001010000",76],["m","11110111010",77],["n","11000010100",78],["o","10001111010",79],["p","10100111100",80],["q","10010111100",81],["r","10010011110",82],["s","10111100100",83],["t","10011110100",84],["u","10011110010",85],["v","11110100100",86],["w","11110010100",87],["x","11110010010",88],["y","11011011110",89],["z","11011110110",90],["{","11110110110",91],["|","10101111000",92],["}","10100011110",93],["~","10001011110",94],[String.fromCharCode(127),"10111101000",95],[String.fromCharCode(128),"10111100010",96],[String.fromCharCode(129),"11110101000",97],[String.fromCharCode(130),"11110100010",98],[String.fromCharCode(131),"10111011110",99],[String.fromCharCode(132),"10111101110",100],[String.fromCharCode(133),"11101011110",101],[String.fromCharCode(134),"11110101110",102],[String.fromCharCode(135),"11010000100",103],[String.fromCharCode(136),"11010010000",104],[String.fromCharCode(137),"11010011100",105]],m="1100011101011",n=/^[!-~ ]+$/,o={code128B:function(a){return d(a,e,104,g)},code128C:function(a){return a=a.replace(/ /g,""),d(a,f,105,h)}}}function CODE128B(a){return new CODE128(a,"B")}function CODE128C(a){return new CODE128(a,"C")}function EAN(a){function b(a){var b="",d=a[0],e=a.substr(1,7),f=a.substr(7,6);return b+=j,b+=c(e,i[d]),b+=l,b+=c(f,"RRRRRR"),b+=k}function c(a,b){for(var c="",d=0;d<a.length;d++)"L"==b[d]?c+=f[a[d]]:"G"==b[d]?c+=g[a[d]]:"R"==b[d]&&(c+=h[a[d]]);return c}function d(a){for(var b=0,c=0;12>c;c+=2)b+=parseInt(a[c]);for(var c=1;12>c;c+=2)b+=3*parseInt(a[c]);return(10-b%10)%10}function e(a){return-1==a.search(m)?!1:a[12]==d(a)}this.EANnumber=a+"",this.valid=function(){return e(this.EANnumber)},this.encoded=function(){return e(this.EANnumber)?b(this.EANnumber):""};var f={0:"0001101",1:"0011001",2:"0010011",3:"0111101",4:"0100011",5:"0110001",6:"0101111",7:"0111011",8:"0110111",9:"0001011"},g={0:"0100111",1:"0110011",2:"0011011",3:"0100001",4:"0011101",5:"0111001",6:"0000101",7:"0010001",8:"0001001",9:"0010111"},h={0:"1110010",1:"1100110",2:"1101100",3:"1000010",4:"1011100",5:"1001110",6:"1010000",7:"1000100",8:"1001000",9:"1110100"},i={0:"LLLLLL",1:"LLGLGG",2:"LLGGLG",3:"LLGGGL",4:"LGLLGG",5:"LGGLLG",6:"LGGGLL",7:"LGLGLG",8:"LGLGGL",9:"LGGLGL"},j="101",k="101",l="01010",m=/^[0-9]{13}$/}function UPC(a){this.ean=new EAN("0"+a),this.valid=function(){return this.ean.valid()},this.encoded=function(){return this.ean.encoded()}}angular.module("yoangularApp",["ngGMap","ngCookies","ngResource","ngRoute","ngSanitize"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"mainCtrl",controllerAs:"main"}).when("/online",{templateUrl:"views/online.html",controller:"onlineCtrl",controllerAs:"online"}).when("/rental",{templateUrl:"views/rental.html",controller:"rentalCtrl",controllerAs:"rental"}).when("/about",{templateUrl:"views/about.html"}).otherwise({redirectTo:"/"})}]),angular.module("yoangularApp").controller("mainCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("yoangularApp").controller("onlineCtrl",["$scope",function(a){var b=function(a,b){$("#myModal").modal("show"),setTimeout(function(){var c=[a,b],d=new google.maps.Map(document.getElementById("map"),{center:{lat:c[0],lng:c[1]},zoom:12}),e=new google.maps.Marker({position:new google.maps.LatLng(c[0],c[1]),animation:google.maps.Animation.DROP,map:d});e.setAnimation(google.maps.Animation.BOUNCE);var f=new google.maps.Geocoder,g=new google.maps.InfoWindow,h={lat:c[0],lng:c[1]};f.geocode({location:h},function(a,b){b===google.maps.GeocoderStatus.OK?a[1]?(d.setZoom(11),g.setContent(a[1].formatted_address),g.open(d,e)):window.alert("No results found"):window.alert("Geocoder failed due to: "+b)})},1e3)},c=new Firebase("https://lpwatch.firebaseio.com/lpwatch"),d="lHaIsVtEX5";a.snap,a.currentUser,a.emgergencySnap,a.initOnline=function(){c.child(d).on("value",function(b){console.log(b.val()),a.snap=b.val(),a.$$phase||a.$apply()}),c.child("emergency").on("child_added",function(d){if(console.log(d.val()),d.val()){var e=a.emgergencySnap=d.val();a.$$phase||a.$apply(),b(e.lat,e["long"])}c.child("emergency").remove()});var e=new Parse.User,f=new Parse.Query(e);f.equalTo("objectId","lHaIsVtEX5"),f.first({success:function(b){console.warn(b),a.currentUser=b,a.$$phase||a.$apply()},error:function(a){alert("Error: "+a.code+" "+a.message)}})}}]),angular.module("yoangularApp").controller("rentalCtrl",["$scope",function(a){a.initRental=function(){a.rentals=[];var b=new Parse.Object.extend("Rental"),c=new Parse.Query(b);c.find({success:function(b){console.warn(b);for(var c=0;c<b.length;c++)b[c].no=c+1,a.rentals.push(b[c]);a.$apply(),setTimeout(function(){for(var a=0;a<b.length;a++){b[a];console.log("#barcode"+(a+1)),$("#barcode"+(a+1)).JsBarcode(b[a].id,{width:1,height:25})}},3e3)},error:function(a){alert("Error: "+a.code+" "+a.message)}})},a.dateToDate=function(a){if(void 0!=a){var b=a.getFullYear()+"-"+(a.getMonth()+1)+"-"+a.getDate();return b}}}]),angular.module("ngGMap",[]).directive("smMap",function(){return{restrict:"EA",template:"<p>hi30000</p>"}}).directive("myMap",function(){var a=function(a,b,c){function d(){void 0===f&&(f=new google.maps.Map(b[0],i))}function e(a,b,c,d){var e,f={position:b,map:a,title:c,icon:"https://maps.google.com/mapfiles/ms/icons/green-dot.png"};e=new google.maps.Marker(f),h.push(e),google.maps.event.addListener(e,"click",function(){void 0!==g&&g.close();var b={content:d};g=new google.maps.InfoWindow(b),g.open(a,e)})}var f,g,h=[],i={center:new google.maps.LatLng(50,2),zoom:4,mapTypeId:google.maps.MapTypeId.ROADMAP,scrollwheel:!1};d(),e(f,new google.maps.LatLng(51.508515,-.125487),"London","Just some content"),e(f,new google.maps.LatLng(52.370216,4.895168),"Amsterdam","More content"),e(f,new google.maps.LatLng(48.856614,2.352222),"Paris","Text here")};return{restrict:"A",template:'<div id="gmaps" style="height:500px;width:100%;"></div>',replace:!0,link:a}}).directive("gMap",["$timeout",function(a){return{restrict:"EA",link:function(a,b,c){var d=document.createElement("div");d.style.width="100%",d.style.height="100%",b.prepend(d);var e=void 0!==c.center?JSON.parse(c.center):[37.561192,129.078666],f=void 0!==c.zoom?Number(c.zoom):8,g=new google.maps.Map(d,{}),h=({center:new google.maps.LatLng(e[0],e[1]),zoom:f,mapTypeId:google.maps.MapTypeId.ROADMAP},new google.maps.Marker({position:new google.maps.LatLng(e[0],e[1]),animation:google.maps.Animation.DROP,map:g}));h.setAnimation(google.maps.Animation.BOUNCE),setTimeout(function(){g.setCenter({lat:e[0],lng:e[1]})},500);var i=new google.maps.Geocoder,j=new google.maps.InfoWindow,k={lat:e[0],lng:e[1]};i.geocode({location:k},function(a,b){b===google.maps.GeocoderStatus.OK?a[1]?(g.setZoom(11),j.setContent(a[1].formatted_address),j.open(g,h)):window.alert("No results found"):window.alert("Geocoder failed due to: "+b)})}}}]),angular.module("yoangularApp").run(["$templateCache",function(a){a.put("views/about.html",'<h1> LP Watch - Service architecture </h1><img src="images/lpwatch.292efccb.jpg" width="100%">'),a.put("views/main.html",'<div class="jumbotron"> <h1>LP Watch administrator</h1> <p class="lead"> <img src="images/icon2x.e8238234.png"><br> Heart Attack Warning and Sleep Care Device </p> <!--target="_blank" href="http://www.lpwatch.net"--> <p><a class="btn btn-lg btn-success" href="#/online"> 27/4 Online Mornitoring<span class="glyphicon glyphicon-ok"></span></a></p> </div> <div class="row marketing hide"> <h4>HTML5 Boilerplate</h4> <p> HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites. </p> <h4>Angular</h4> <p> AngularJS is a toolset for building the framework most suited to your application development. </p> <h4>Karma</h4> <p>Spectacular Test Runner for JavaScript.</p> </div>'),a.put("views/online.html",'<div class="container" ng-init="initOnline()"> <div class="row"> <div class="col-sm-11"> <h1>24/7 Online Monitoring System</h1> </div> <div class="col-sm-1"> </div> </div> </div> <div class="container"> <h4>Registered user : #1</h4> <br> <table class="table table-striped"> <thead> <tr> <th>#</th> <th>Online</th> <th>Name</th> <th>Type</th> <th>Email</th> <th>LP Watch registration</th> <th>Status</th> </tr> </thead> <tbody> <!--<tr ng-repeat="item in users">\n      <th scope="row">{{item.no}}</th>\n      <td>\n        <span class="badge badge-alert">Connection</span>\n      </td>\n      <td>{{item.get(\'nickname\')}}</td>\n      <td>{{item.get(\'user_type\')}}</td>\n      <td>{{item.get(\'email\')}}</td>\n      <td>\n        <div ng-show="item.get(\'serial_no\')">\n          Serial No : {{item.get(\'serial_no\')}}<br>\n          Distributor No : {{item.get(\'distributor_no\')}}\n        </div>\n      </td>\n      <td>\n        <div ng-show="item.get(\'serial_no\')">\n          <span class="badge badge-alert">Connection</span>\n          <span class="badge badge-alert">Sleep</span>\n        </div>\n      </td>\n\n    </tr>--> <tr> <th scope="row">1</th> <td> <span class="label label-success" ng-show="snap.online">Online</span> <span class="label label-default" ng-show="!snap.online">Offine</span> </td> <td>{{currentUser.get(\'nickname\')}}</td> <td>{{currentUser.get(\'user_type\')}}</td> <td>{{currentUser.get(\'email\')}}</td> <td> <div ng-show="currentUser.get(\'serial_no\')"> Serial No : {{currentUser.get(\'serial_no\')}}<br> Distributor No : {{currentUser.get(\'distributor_no\')}} </div> </td> <td> <span class="label label-success" ng-show="snap.connection">Connected</span> <span class="label label-default" ng-show="!snap.connection">Disconnected</span> <span class="label label-default" ng-show="!snap.sleep">Wake up</span> <span class="label label-success" ng-show="snap.sleep">Sleep </span> </td> </tr> </tbody> </table> </div> <!--modal--> <div id="myModal" class="modal fade" tabindex="-1" role="dialog"> <div class="modal-dialog"> <div class="modal-content"> <div class="modal-header"> <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button> <h4 class="modal-title"><b style="color:red">Emergency Point </b></h4> </div> <div class="modal-body"> <!--<g-map center="{{ selectedCord.center }}" zoom="{{ zoom }}"></g-map>--> <div id="map" width="100%" height="350" style="border:1px solid gray; height: 500px;"></div> (Geo location : {{emgergencySnap.lat}},{{emgergencySnap.long}}) </div> <div class="modal-footer"> <!--<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>--> <button type="button" class="btn btn-danger" data-dismiss="modal">STOP Emergency</button> </div> </div><!-- /.modal-content --> </div><!-- /.modal-dialog --> </div><!-- /.modal --> <!--modal@--> <script>//팝업 보이고 사라질때 사운드 표시\n'+"  $('#myModal').on('shown.bs.modal', function() {\n    document.getElementById('emergencySound').play();\n  })\n  $('#myModal').on('hidden.bs.modal', function() {\n    document.getElementById('emergencySound').pause();\n  })</script> <!--sound--> <audio id=\"emergencySound\" src=\"sound/emergency.mp3\" controls loop style=\"display: none;\"> HTML5 audio not supported </audio>"),a.put("views/rental.html",'<div class="container" ng-init="initRental()"> <div class="row"> <div class="col-sm-11"> <h1>Rental Program Management</h1> </div> <div class="col-sm-1"> </div> </div> </div> <div class="container"> <h4>Registered device(s) : #{{rentals.length }}</h4> <br> <table class="table table-striped"> <thead> <tr> <th>#</th> <th>Distributor no.</th> <th>Rental Program</th> <th>Serial no.</th> <th>Model</th> <th>Expired date</th> <th>Barcode</th> <!--<th>Activation</th>--> </tr> </thead> <tbody> <tr ng-repeat="item in rentals"> <th scope="row">{{item.no}}</th> <td>{{item.get(\'distributor_no\')}}</td> <td>{{item.get(\'program_name\')}}</td> <td>{{item.get(\'serial_no\')}}</td> <td> {{item.get(\'device_model\')}} </td> <td> {{ dateToDate(item.get(\'expired_dt\'))}} </td> <td> <!--barcode--> <img id="barcode{{item.no}}" width="160" height="40" alt="generating barcode.."> </td> <!--<td>--> <!--<span class="label label-success" ng-show="item.get(\'active\')">Active</span>--> <!--<span class="label label-default" ng-show="!item.get(\'active\')">Deactive</span>--> <!--</td>--> </tr> </tbody> </table> </div> <!--modal--> <div id="myModal" class="modal fade" tabindex="-1" role="dialog"> <div class="modal-dialog"> <div class="modal-content"> <div class="modal-header"> <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button> <h4 class="modal-title"><b style="color:red">Emergency Point </b></h4> </div> <div class="modal-body"> <!--<g-map center="{{ selectedCord.center }}" zoom="{{ zoom }}"></g-map>--> <div id="map" width="100%" height="350" style="border:1px solid gray; height: 500px;"></div> (Geo location : {{emgergencySnap.lat}},{{emgergencySnap.long}}) </div> <div class="modal-footer"> <!--<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>--> <button type="button" class="btn btn-danger" data-dismiss="modal">STOP Emergency</button> </div> </div><!-- /.modal-content --> </div><!-- /.modal-dialog --> </div><!-- /.modal --> <!--modal@--> <script>//팝업 보이고 사라질때 사운드 표시\n'+"  $('#myModal').on('shown.bs.modal', function() {\n    document.getElementById('emergencySound').play();\n  })\n  $('#myModal').on('hidden.bs.modal', function() {\n    document.getElementById('emergencySound').pause();\n  })</script> <!--sound--> <audio id=\"emergencySound\" src=\"sound/emergency.mp3\" controls loop style=\"display: none;\"> HTML5 audio not supported </audio>")}]);