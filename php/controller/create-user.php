<?php
require_once(__DIR__ . "/../Model/config.php");

$username = filter_input(INPUT_POST, "username", FILTER_SANITIZE_STRING); 
$password = filter_input(INPUT_POST, "password", FILTER_SANITIZE_STRING);

//This will create an id for us
$salt = "$5$" . "rounds=5000$" . uniqid(mt_rand(), true) . "$";
//use the crypt function to hash the password 
$hashedPassword = crypt($password, $salt);
//Store the password into our database
$query = $_SESSION["connection"]->query("INSERT INTO users SET "
        . "username = '$username',"
        . "password = '$hashedPassword',"
        . "salt = '$salt',"
        . "exp = 0, "
        . "exp1 = 0, "
        . "exp2 = 0, "
        . "exp3 = 0, "
        . "exp4 = 0 ");

$_SESSION["name"]= $username;

//Check whether or not we have successfully created a user
if($query) {
    echo "true";
}
else {
    echo "<p>" . $_SESSION["connection"]->error . "</p>";
}
