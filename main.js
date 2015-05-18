var myApp = angular.module('myApp',[]);

myApp.controller('myCtrl',['$scope','$http',function($scope,$http) {

    $scope.markers = [];
    var infoWindow = new google.maps.InfoWindow();
    
   $scope.init = function(lat,long){
          $scope.mapOptions = {
        center: {lat: lat, lng: long},
        zoom: 15
    };

    $scope.map = new google.maps.Map(document.getElementById('map-canvas'),
            $scope.mapOptions);
            
 
   };
   
  $scope.createMarker = function (coord,text,name){
   $scope.max=100;   
   var myCenter = new google.maps.LatLng(coord[1],coord[0]);

    var marker = new google.maps.Marker({
            position: myCenter,
            map :$scope.map,
            title : name
    });
    marker.setMap($scope.map);
    
    marker.content = '<div class="infoWindowContent">' + text + '</div>';
        
    google.maps.event.addListener(marker, 'click', function(){
        infoWindow.setContent('</h2>' + marker.content);
        infoWindow.open($scope.map, marker);
      });
      
        $scope.markers.push(marker);       
         
         if($scope.markers.length >= $scope.max)
           {
             for(var i=0;i<10;i++){
                var mark = $scope.markers.shift();
                mark.setMap(null);
             }
           }
  }; 


    $scope.presentLocation = function(position) {
        console.log(position);

        var lat, long;
        lat = position.coords.latitude;
        long = position.coords.longitude;

        $scope.init(lat, long);

        $scope.fetchTweets(lat, long);
    };
    
         var max_id = 0;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition($scope.presentLocation);
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
    
    
       
   $scope.showTweet = function(status){
     console.log(status);
     for(var i=0;i<status.length;i++)
      {
        if(status[i].coordinates){
        $scope.createMarker(status[i].coordinates.coordinates,status[i].text,status[i].in_reply_to_screen_name);
      }}
   };
   


    $scope.fetchTweets = function (lat, long) {
      $scope.max=100;
      
  $http.get('server/tweets.php',{params:{lat : lat ,long : long,max : $scope.max}}).
  success(function(data, status, headers, config) {
    $scope.showTweet(data.statuses);
    console.log(data.statuses);
      setTimeout(function(){
                $scope.fetchTweets(lat, long);
            }, 40000);

            console.log(status);
    // this callback will be called asynchronously
    // when the response is available
  }).
  error(function(data, status, headers, config) {
    alert("fail");
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });
        
    };



  
}]);


