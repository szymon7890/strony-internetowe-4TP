</html>
<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Logowanie</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="login-container">
        <form class="login-form" action="index.php" method="post">
            <h2>Logowanie</h2>
            <div class="form-group">
                <label for="name">Nazwa użytkownika:</label>
                <input type="text" id="name" name="name" required placeholder="Podaj imie">
            </div>
            <div class="form-group">
                <label for="password">Hasło:</label>
                <input type="password" id="password" name="password" required placeholder="Podaj hasło">
            </div>
            <input type="submit" name="submit" value="zaloguj się">
        </form>
    </div>
</body>
</html>
<?php

// Sprawdzenie, czy dane zostały przesłane metodą POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Stworzenie zmiennej o nazwie name, która posiada pobieranie z formularza metodą POST z pola name
    $name = $_POST['name'] ?? '';
    // Stworzenie zmiennej o nazwie password, która posiada pobieranie z formularza metodą POST z pola password
    $password = $_POST['password'] ?? '';

    // Wyświetlanie zmiennej name i password
    print_r($name);
    print_r($password);

    // Zmienna o nazwie conn ma połączenie z bazą danych (upewnij się, że baza danych istnieje)
    $conn = new mysqli('localhost', 'root', '', 'zadanie06122023');

    // Jeśli zmienna conn posiada connect_error to wyświetl napis "nie połączono" i powód
    if ($conn->connect_error) {
        die("Nie połączono: " . $conn->connect_error);
    }

    // Jeśli jest ustawiona zmienna name i zmienna password to wykonaj kod
    if (!empty($name) && !empty($password)) {
        // Zmienna o nazwie sql, która posiada zapytanie do bazy danych
        $sql = "SELECT `name` FROM `uzytkownik` WHERE name = '$name' AND password = '$password';";

        // Zmienna o nazwie userData posiada wynik zapytania
        $userData = $conn->query($sql);

        // Wyświetlanie użytkownika, czy znajduje się w bazie danych
        $userRow = $userData->fetch_row();
        print_r($userRow);

        if ($userRow) {
            // Jeśli dane są poprawne, przeniesienie do nowej strony o nazwie index.php
            header("Location: index.php");
            exit();
        } else {
            // Jeśli dane są niepoprawne, wyświetl odpowiedni komunikat
            echo "Niepoprawna nazwa użytkownika lub hasło.";
        }
    } else {
        echo "Proszę wypełnić wszystkie pola.";
    }

    // Zamknięcie połączenia
    $conn->close();
}

?>