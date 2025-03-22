<?php
$user = 'root';
$pass = '';
$db = 'db';

$conn = new mysqli('localhost', $user, $pass, $db);

if ($conn->connect_error) {
    die("Error while connecting: " . $conn->connect_error);
}
echo "Connected!";
?>