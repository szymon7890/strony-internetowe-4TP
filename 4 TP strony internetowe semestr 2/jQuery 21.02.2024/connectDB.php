<?php

    /*

    Admin#0001

    LL@000dupawBazie
    
        CREATE DATABASE walidatorJS;

        CREATE TABLE test (
            id INT NOT NULL AUTO_INCREMENT,
            login VARCHAR(30) NOT NULL,
            password VARCHAR(30) NOT NULL,
            date DATE,
            PRIMARY KEY (id),
            UNIQUE (login)
        );

    */
    
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbName = "zadanie21022024";
    
    // Utworzenie połączenia
    $conn = new mysqli($servername, $username, $password, $dbName);
    
    // Sprawdzenie połączenia
    if ($conn->connect_error) {
        die("Nie połączono się z bazą danych: " . $conn->connect_error);
    }
    
    // Sprawdzenie, czy dane zostały przesłane za pomocą metody POST
    if(isset($_POST['login']) && isset($_POST['password']) && isset($_POST['date'])) {
        // Przypisanie wartości przesłanych z formularza do zmiennych
        $login = $_POST['login'];
        $passwordCreate = $_POST['password'];
        $date = $_POST['date'];
    
        // Tworzenie zapytania SQL bez żadnej ochrony (NIEBEZPIECZNE)
        $sqlquery = "INSERT INTO `users`(`id`, `login`, `password`, `date`) VALUES (null, $login, $passwordCreate, $date)";
    
        // Wykonanie zapytania
        if ($conn->query($sqlquery) === TRUE) {
            echo "Rekord został pomyślnie dodany";
        } else {
            echo "Błąd: " . $conn->error;
        }
    
        // Zamknięcie połączenia
        $conn->close();
    }
?>