// /*
// * Object to maintain a queue, in which, new tweets are pushed into.
// * When the queue length exceeds the threshold, ten tweets are popped out.
// */
// var tweetQueue = new function() {

//     this.limit = 100;
//     this.Q     = [];
    
//     this.push = function(lat, long, text) {
//         var myCenter = new google.maps.LatLng(lat, long);

//         var marker = new google.maps.Marker({
//             position: myCenter,
//         });
//         this.Q.push(marker);

//         marker.setMap(map);
    
//         var infowindow = new google.maps.InfoWindow({
//             content: text
//         });

//         google.maps.event.addListener(marker, 'mouseover', function() {
//             infowindow.open(map, this);
//         });
//         google.maps.event.addListener(marker, 'mouseout', function() {
//             infowindow.close(map, this);
//         });

//         if(this.Q.length >= this.limit)
//             this.pop();
//     };

//     this.pop = function() {
//         for (var i = 0; i < 10; i++) {
//             var marker = this.Q.shift();
//             marker.setMap(null);
//         }
//     };

// }

// /*
// * Get the current location and call the twitter API for tweets
// * around that location for tweets.
// */
// $(document).ready(function() {

//     var max_id = 0;
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(showPosition);
//     } else {
//         console.log("Geolocation is not supported by this browser.");
//     }

//     function showPosition(position) {
//         console.log(position);

//         var lat, long;
//         lat = position.coords.latitude;
//         long = position.coords.longitude;

//         initialize(lat, long);

//         fetchTweets(lat, long);
//     }

//     function fetchTweets(lat, long) {
//         var request = $.ajax({
//             data: {
//                 lat: lat,
//                 long: long,
//                 max_id: max_id
//             },
//             url: '/dvt/tweetServer/tweets.php',
//             type: 'GET'
//         });
//         request.success(function(data) {
//             data = JSON.parse(data);
//             display(data.statuses);
//             setTimeout(function(){
//                 fetchTweets(lat, long);
//             }, 30000);
//         });
//     }

//     function display(statuses) {
//         $.each(statuses, function(ind, status) {
//             if (max_id < status.id)
//                 max_id = status.id;
//             if (status.coordinates) {
//                 var long = status.coordinates.coordinates[0];
//                 var lat = status.coordinates.coordinates[1];
//                 console.log(lat, long);
//                 tweetQueue.push(lat, long, status.text);
//             }
//         });
//     }

// });
