<?php
include 'db.php'; 

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Preia datele din formular
    $email = $_POST['login-email'];  // Câmpul de email
    $password = $_POST['login-password'];  // Câmpul de parolă

    // Pregătirea interogării pentru a preveni SQL Injection
    $stmt = $conn->prepare("SELECT * FROM users WHERE email=?");
    $stmt->bind_param("s", $email);  // Legăm email-ul
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        if (password_verify($password, $row['user_pass'])) {  // Verificăm parola
            echo "Autentificare reușită! Bun venit, " . $row['user_name'] . "!";
            // Poți redirecționa utilizatorul către o altă pagină, de exemplu:
            // header("Location: homepage.php");
        } else {
            echo "Parolă incorectă!";
        }
    } else {
        echo "Utilizatorul nu există!";
    }
    $stmt->close();  // Închide statement-ul
}
?>
