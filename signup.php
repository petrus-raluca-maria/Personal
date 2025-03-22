<?php
include 'db.php'; 

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Preia datele din formular
    $username = $_POST['username'];  // Câmpul de username
    $email = $_POST['signup-email'];  // Câmpul de email
    $password = password_hash($_POST['signup-password'], PASSWORD_DEFAULT);  // Criptarea parolei

    // Pregătirea interogării pentru a preveni SQL Injection
    $stmt = $conn->prepare("INSERT INTO users (user_name, user_pass, email) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $username, $password, $email);  // Legăm parametrii

    if ($stmt->execute()) {
        echo "Sign-up done!";
    } else {
        echo "Error: " . $stmt->error;
    }
    $stmt->close();  // Închide statement-ul
}
?>
