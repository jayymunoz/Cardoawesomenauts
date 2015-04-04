<?php
require_once(__DIR__ . "/../Model/Database.php");
//sessions perserve information so we wouldn't have to generate the information over and over again
session_start();
session_regenerate_id(true);
$path = "/Awesomenauts/php/";
//This code came from the database, delete the old one a ceate a new one
$host = "localhost";
$username = "root";
$password = "root";
$database = "awesomenauts_db";
//Allows our connection to be accessed across all of our web sites
if(!isset($_SESSION["connection"])) {   


//Create a new object
//We are going to have access to these functions in our database
//use openConnection, closeConnection, and the query function
//Create a public error variable
$connection = new Database($host, $username, $password, $database);
//We can now access this session variable
//We use this connection variable to store the variable called connection
$_SESSION["connection"] = $connection;
}