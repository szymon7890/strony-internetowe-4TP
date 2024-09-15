<!DOCTYPE html>
<html lang="pl">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Formularz TF</title>
        <meta name="author" content="Szymon Kalinowski">
        <link rel="stylesheet" media="screen and (min-width: 769px)" href="styles.css">
        <link rel="stylesheet" media="screen and (max-width: 768px)" href="mobile.css">
        <script src="script.js" defer></script>
    </head>
    <body>
        <div id="container">
            <header>Nagłówek strony</header>
            <nav>
                <div id="forms">
                    <h1>Formularz TF</h1>
                    <form id="myForm" method="POST" action="connectDB.php">
                        <label>Podaj login</label>
                        <input type="text" name="login" id="login" required>
                        <label>Podaj hasło</label>
                        <input type="password" name="password" id="password" required>
                        <label>Podaj datę</label>
                        <input type="date" name="date" id="date" required>
                        <input type="submit" value="Submit">
                    </form>
                </div>
            </nav>
            <footer>Jestem stópką</footer>
        </div>
    </body>
</html> 
<?php

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbName = "zadanie21022024";
 
    $conn = new mysqli($servername, $username, $password, $dbName);
 
    if ($conn->connect_error) {
        die("Nie połączono się z bazą danych: " . $conn->connect_error);
    }
 
    if (isset($_POST['login']) && isset($_POST['password']) && isset($_POST['date'])) {
        $user = $_POST['login'];
        $passwordCreate = $_POST['password'];
        $date = $_POST['date'];
    
        $sqlquery = "INSERT INTO `users`(`id`, `name`, `password`, `date`) VALUES (null, '$user', '$passwordCreate', '$date')";
    
        if ($conn->query($sqlquery) === TRUE) {
            echo "Rekord został pomyślnie dodany";
        } else {
            echo "Błąd: " . $sqlquery . "<br>" . $conn->error;
        }
    }

?>