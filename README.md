# Loctweet
Data visualizer for Twitter, based on the location of the most recent tweets that have geolocation information.

##how to use
Clone the repository using git clone https://github.com/devyadv/Loctweet.git
Add twitter api credentials in con.php
Open in localhost and allow it to access location

##Work flow
The current location is obtaned using navigator.location.
After that map for that position is opened and a get call to twitter api to fetch tweets for that location(within 1 mile ) radius  
  Markers are added for the tweet locations and a info window is opened when user clicks on the marker.
  It uses twitteroauth for oauth authentication. 
  
