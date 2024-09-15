//formularz zabezpieczyc przed wysłaniem kodu PHP w input

// Nasłuchujemy na zdarzenie DOMContentLoaded, które uruchamia się, gdy cała zawartość DOM jest załadowana
document.addEventListener("DOMContentLoaded", function() {
    // Pobieramy element formularza z dokumentu
    const form = document.querySelector("form");

    // Pobieramy elementy input loginu i hasła z dokumentu na podstawie ich ID
    const loginInput = document.getElementById("login");
    const passwordInput = document.getElementById("password");

    // Dodajemy nasłuchiwacz zdarzeń dla formularza, który uruchamia się przy próbie jego wysłania
    form.addEventListener("submit", function(event) {
        // Sprawdzamy, czy wartość loginInput zawiera niedozwolone znaki
        if (containsInvalidCharacters(loginInput.value)) {
            // Jeśli tak, wyświetlamy alert i zapobiegamy wysłaniu formularza
            alert("Login zawiera niedozwolone znaki!");
            event.preventDefault(); // Zapobiega domyślnemu działaniu formularza
            return; // Kończymy działanie funkcji
        }

        // Sprawdzamy, czy wartość passwordInput zawiera niedozwolone znaki
        if (containsInvalidCharacters(passwordInput.value)) {
            // Jeśli tak, wyświetlamy alert i zapobiegamy wysłaniu formularza
            alert("Hasło zawiera niedozwolone znaki!");
            event.preventDefault(); // Zapobiega domyślnemu działaniu formularza
            return; // Kończymy działanie funkcji
        }
    });

    // Funkcja sprawdzająca, czy podany tekst zawiera niedozwolone znaki
    function containsInvalidCharacters(input) {
        // Wyrażenie regularne do dopasowania tylko liter, cyfr, podkreśleń, kropek, i znaków @
        const regex = /^[a-zA-Z0-9_@.-]*$/;
        // Sprawdzamy, czy wejściowy tekst pasuje do wyrażenia regularnego
        return !regex.test(input); // Zwracamy true, jeśli tekst nie pasuje do wzorca
    }
});
