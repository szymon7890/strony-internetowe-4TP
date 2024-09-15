<?php

    // Zabezpieczanie danych wejściowych
    function sanitizeInput($data) {
        $data = trim($data); // Usuwa zbędne białe znaki z początku i końca
        $data = stripslashes($data); // Usuwa ukośniki
        $data = htmlspecialchars($data); // Zamienia specjalne znaki HTML na encje
        return $data;
    }

    // Sprawdzenie, czy formularz został wysłany
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Sprawdzenie, czy dane istnieją w $_POST
        $name = isset($_POST['login']) ? sanitizeInput($_POST['login']) : '';
        $password = isset($_POST['password']) ? sanitizeInput($_POST['password']) : '';
    }

?>
<!DOCTYPE html>
<html lang="pl">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Formularz zabezpieczający przed wysłaniem kodu PHP w input</title>
        <meta name="author" content="Szymon Kalinowski">
        <link rel="stylesheet" media="screen and (min-width: 769px)" href="styles.css">
        <link rel="stylesheet" media="screen and (max-width: 768px)" href="mobile.css">
        <script src="script.js"></script>
    </head>
    <body>

        <form method="POST">
            <input type="text" placeholder="Podaj login" id="login" name="login" required>
            <input type="password" placeholder="Podaj hasło" id="password" name="password" required>
            <input type="submit" value="Zaloguj się">
        </form>

    </body>
</html>
