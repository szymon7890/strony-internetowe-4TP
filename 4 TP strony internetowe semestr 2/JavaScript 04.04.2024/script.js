// Zmienna określająca rozmiar pojedynczego bloku na planszy
var blockSize = 25;

// Liczba wierszy i kolumn na planszy
var rows = 20;
var cols = 20;

// Zmienne do przechowywania referencji do elementu HTML canvas oraz jego kontekstu rysowania
var board;
var context;

// Początkowe położenie głowy węża
var snakeX = blockSize * 5;
var snakeY = blockSize * 5;

// Początkowa prędkość węża w kierunkach osi X i Y
var velocityX = 0;
var velocityY = 0;

// Tablica przechowująca segmenty ciała węża
var snakeBody = [];

// Pozycja jedzenia na planszy
var foodX;
var foodY;

// Zmienna śledząca stan gry (czy gra się zakończyła)
var gameOver = false;

// Funkcja wywoływana po załadowaniu okna przeglądarki
window.onload = function() {
    // Pobranie referencji do elementu HTML canvas
    board = document.getElementById("board");
    
    // Ustawienie wymiarów planszy na podstawie liczby wierszy i kolumn
    board.height = rows * blockSize;
    board.width = cols * blockSize;
    
    // Pobranie kontekstu rysowania na planszy
    context = board.getContext("2d");

    // Umieszczenie jedzenia na planszy
    placeFood();
    
    // Nasłuchiwanie zdarzenia klawiszy, aby zmienić kierunek poruszania się węża
    document.addEventListener("keyup", changeDirection);
    
    // Uruchomienie głównej pętli gry, która będzie aktualizować stan gry co 100 milisekund
    setInterval(update, 1000/10); //100 milisekund
}

// Funkcja odpowiedzialna za aktualizację stanu gry
function update() {
    // Sprawdzenie, czy gra się zakończyła
    if (gameOver) {
        return; // Zakończ funkcję, jeśli gra się zakończyła
    }

    // Rysowanie tła planszy
    context.fillStyle = "black";
    context.fillRect(0, 0, board.width, board.height);

    // Rysowanie jedzenia na planszy
    context.fillStyle = "red";
    context.fillRect(foodX, foodY, blockSize, blockSize);

    // Sprawdzenie, czy wąż zjadł jedzenie
    if (snakeX == foodX && snakeY == foodY) {
        // Dodanie nowego segmentu ciała węża
        snakeBody.push([foodX, foodY]);
        // Umieszczenie nowego jedzenia na planszy
        placeFood();
    }

    // Aktualizacja położenia segmentów ciała węża
    for (let i = snakeBody.length-1; i > 0; i--) {
        snakeBody[i] = snakeBody[i-1];
    }

    // Aktualizacja położenia głowy węża
    if (snakeBody.length) {
        snakeBody[0] = [snakeX, snakeY];
    }

    // Rysowanie głowy węża
    context.fillStyle = "lime";
    snakeX += velocityX * blockSize;
    snakeY += velocityY * blockSize;
    context.fillRect(snakeX, snakeY, blockSize, blockSize);

    // Rysowanie ciała węża
    for (let i = 0; i < snakeBody.length; i++) {
        context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
    }

    // Sprawdzenie warunków końca gry
    if (snakeX < 0 || snakeX > cols*blockSize || snakeY < 0 || snakeY > rows*blockSize) {
        // Koniec gry, jeśli wąż uderzył w ścianę
        gameOver = true;
        alert("game over");
    }

    // Sprawdzenie kolizji z ciałem węża
    for (let i = 0; i < snakeBody.length; i++) {
        if (snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]) {
            // Koniec gry, jeśli wąż uderzył w swoje ciało
            gameOver = true;
            alert("Game Over");
        }
    }
    // Sprawdzenie i aktualizacja dodatkowych informacji o grze
    updateGameStats();
}

// Funkcja zmieniająca kierunek poruszania się węża na podstawie naciśniętych klawiszy
function changeDirection(e) {
    if (e.code == "ArrowUp" && velocityY != 1) {
        velocityX = 0;
        velocityY = -1;
    } else if (e.code == "ArrowDown" && velocityY != -1) {
        velocityX = 0;
        velocityY = 1;
    } else if (e.code == "ArrowLeft" && velocityX != 1) {
        velocityX = -1;
        velocityY = 0;
    } else if (e.code == "ArrowRight" && velocityX != -1) {
        velocityX = 1;
        velocityY = 0;
    }
}

// Funkcja umieszczająca nowe jedzenie na planszy
function placeFood() {
    foodX = Math.floor(Math.random() * cols) * blockSize;
    foodY = Math.floor(Math.random() * rows) * blockSize;
}

// Funkcja rozpoczynająca grę
function startGame() {
    startTime = Date.now();
    timerInterval = setInterval(updateTimer, 1000);
}

// Funkcja aktualizująca czas gry
function updateTimer() {
    var elapsedTime = Math.floor((Date.now() - startTime) / 1000);
    gameTimeInSeconds = elapsedTime;
    var timerElement = document.getElementById("timer");
    timerElement.textContent = "Czas gry: " + formatTime(gameTimeInSeconds);
}

// Funkcja formatująca czas
function formatTime(seconds) {
    var minutes = Math.floor(seconds / 60);
    var remainingSeconds = seconds % 60;
    return pad(minutes) + ":" + pad(remainingSeconds);
}

// Funkcja dodająca zero przed liczbą jednocyfrową
function pad(number) {
    return (number < 10 ? '0' : '') + number;
}

// Rozpoczęcie gry
startGame();

// Zmienne przechowujące dodatkowe informacje o grze
var maxScore = 0; // Maksymalna liczba punktów
var longestTime = 0; // Najdłuższy czas gry (w sekundach)

// Funkcja sprawdzająca i aktualizująca dodatkowe informacje o grze
function updateGameStats() {
    // Aktualizacja maksymalnej liczby punktów
    if (snakeBody.length > maxScore) {
        maxScore = snakeBody.length;
    }
    
    // Aktualizacja najdłuższego czasu gry
    if (gameTimeInSeconds > longestTime) {
        longestTime = gameTimeInSeconds;
    }
    
    // Wyświetlanie dodatkowych informacji na stronie
    var maxScoreElement = document.getElementById("maxScore");
    maxScoreElement.textContent = "Najwyższa liczba punktów: " + maxScore;
    
    var longestTimeElement = document.getElementById("longestTime");
    longestTimeElement.textContent = "Najdłuższy czas gry: " + formatTime(longestTime);
}