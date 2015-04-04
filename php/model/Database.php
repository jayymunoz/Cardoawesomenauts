<?php
//We want to create functions within this class
//We want to use a class because using class is a way to view your code in a more intuitive, real-world way
//A class is a collection of variables and functions working with these variables, we are making an instance of the object
class Database {
    private $connection;
    private $host;
    private $username;
    private $password;
    private $database;
    public $error;
    //We use public function so that we can access this function in any file
    public function __construct($host, $username, $password, $database) {
        $this->host = $host;
        $this->username = $username;
        $this->password = $password;
        $this->database = $database;
        
        $this->connection = new mysqli($host, $username, $password);

if($this->connection->connect_error) {
    die("<p>Error: " . $this->connection->connect_error . "</p>");
}

$exists = $this->connection->select_db($database);

//Check whether or not the database exists
if(!$exists) {
    $query = $this->connection->query("CREATE DATABASE $database");

if($query) {
 echo "<p>Sucessfully created database: " . $database . "</p>";
}
//echo out what happens when the database already exists
}
else {
    echo "<p>Database already exists</p>";
}
    }
   //create functions and make a connection in the database
    public function openConnection() {
        //make the information present in the variable
        $this->connection = new mysqli($this->host, $this->username, $this->password, $this->database);
            //Paste what happens when you get a connection error
        //We paste this line of code so that the error will show in your database
        if($this->connection->connect_error) {
            die("<p>Error: " . $this->connection->connect_error . "</p>");
        }
    }
    //Check to see if there is information or not
    //We use this to close a connection
    public function closeConnection() {
        //make this isset so that we call the particular function
        //the isset will call the function
        if(isset($this->connection)) {
            //Close connection
            $this->connection->close();
        }
    }
    //open a connection to the database, close the connection and return the result
    public function query($string) {
        $this->openConnection();
        //Use this line of code to run the function and then type in the name of the function
        $query = $this->connection->query($string);
        if(!$query) {
            $this->error = $this->connection->error;
        }
        $this->closeConnection();
        return $query;
    }
}