<?php

require "twitteroauth/autoload.php";

use Abraham\TwitterOAuth\TwitterOAuth;
//require 'twitteroauth/twitteroauth.php';

/*
 * Twitter API credentials
 * 
 * This API will work for referers: localhost/tweet OR 127.0.0.1
 */
$APIKey              = "a8VV3kkYznEBpwhD0lXEqbnDN";
$APISecret           = "p1PGleEYXTO5kW4c6LKQmjL3IDj0w9I7rBe8Nf9IBC06lQoG7p";
$OAuthUrl            = "https://api.twitter.com/oauth2/token";
$access_token        = "449720488-io81CgatXLSP2M8HVa8h5ODtcdfJbnZtMgaD3jEv";
$access_token_secret = "kpm4aCDOS0kkLHlvRgumJMnvFiKSuqqSkp3uAIBZ6eTxY";




$user       = 'yadav_devender';
$areaRadius = "1mi";
$count      = 100;

$twitter = new TwitterOAuth($APIKey, $APISecret, $access_token, $access_token_secret);
$twitter->ssl_verifypeer = true;

?>