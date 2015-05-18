<?php

require 'con.php';

/*
 * Function to sanitize input
 * Param 1: Input string
 */
function sanitize($string) {
    return strip_tags(htmlspecialchars($string));
}

/*
 * Sanitize parameters from web
 */
foreach ($_GET as $param => $value) {
    $_GET[$param] = sanitize($value);
}

/*
 *  Read GET params
 */
$type   = isset($_GET['type'])   ?  $_GET['type']   : "";
$count  = isset($_GET['count'])  ?  $_GET['count']  : $count;
$id     = isset($_GET['id'])     ?  $_GET['id']     : 0;
$lat    = isset($_GET['lat'])    ?  $_GET['lat']    : 0.0;
$long   = isset($_GET['long'])   ?  $_GET['long']   : 0.0;
$max_id = isset($_GET['max_id']) ?  $_GET['max_id'] : 0;

/* 
 * Prepare query for Twitter API
 */
$query['q']           = "";
$query['geocode']     = "$lat,$long,$areaRadius";
$query['since_id']    = $max_id+1;
$query['result_type'] = "recent";
$query['count']       = $count;


echo json_encode( $twitter->get('search/tweets', $query) );
?>