// Po załadowaniu całej zawartości strony
document.addEventListener('DOMContentLoaded', function() {
    // Pobranie referencji do formularza oraz jego pól
    const form = document.getElementById('myForm'); // Pobranie elementu formularza na podstawie jego ID
    const login = document.getElementById('login'); // Pobranie pola dla loginu
    const password = document.getElementById('password'); // Pobranie pola dla hasła
    const birthDate = document.getElementById('date'); // Pobranie pola dla daty urodzenia

    // Nasłuchiwanie na zdarzenie submit formularza
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Zapobiegnięcie domyślnej akcji wysłania formularza
        validateInputs(); // Wywołanie funkcji walidującej wszystkie dane formularza
    });

    // Funkcja ustawiająca komunikat o błędzie dla elementu formularza
    const setError = (element, message) => {
        let errorDisplay = element.nextElementSibling; // Pobranie elementu wyświetlającego komunikat
        if (!errorDisplay || !errorDisplay.classList.contains('error-message')) {
            // Jeśli nie ma elementu lub nie jest to element z klasą 'error-message'
            errorDisplay = document.createElement('span'); // Utwórz nowy element <span>
            errorDisplay.classList.add('error-message'); // Dodaj klasę 'error-message' do nowego elementu
            element.parentNode.insertBefore(errorDisplay, element.nextSibling); // Wstaw element przed następnym rodzeństwem
        }
        errorDisplay.innerText = message; // Ustaw komunikat o błędzie
        element.classList.add('error'); // Dodaj klasę 'error' do elementu, aby zaznaczyć błąd
    };

    // Funkcja usuwająca komunikat o błędzie dla elementu formularza
    const setSuccess = element => {
        const errorDisplay = element.nextElementSibling; // Pobranie elementu wyświetlającego komunikat
        if (errorDisplay && errorDisplay.classList.contains('error-message')) {
            // Jeśli istnieje element i ma klasę 'error-message'
            errorDisplay.innerText = ''; // Wyczyść komunikat o błędzie
        }
        element.classList.remove('error'); // Usuń klasę 'error' z elementu
    };

    // Funkcja walidująca wszystkie dane formularza
    const validateInputs = () => {
        const loginValue = login.value.trim(); // Pobranie i usunięcie zbędnych spacji z loginu
        const passwordValue = password.value.trim(); // Pobranie i usunięcie zbędnych spacji z hasła
        const birthDateValue = birthDate.value; // Pobranie wartości daty urodzenia
        
        // Walidacja loginu za pomocą wyrażenia regularnego
        const loginRegex = /^[A-Z][a-zA-Z]{4,19}#\d{4}$/;
        if (!loginRegex.test(loginValue)) {
            // Jeśli login nie pasuje do wzoru
            setError(login, 'Username must start with an uppercase letter, consist of 5-20 characters, and end with a four-digit identifier preceded by a hashtag');
            return; // Przerwij walidację, jeśli login jest niepoprawny
        } else {
            setSuccess(login); // Ustaw sukces walidacji dla loginu
        }
        
        // Walidacja hasła za pomocą wyrażenia regularnego
        const passwordRegex = /^(?=.*[A-Z].*[A-Z])(?=.*\d{3})(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,24}$/;
        if (!passwordRegex.test(passwordValue)) {
            // Jeśli hasło nie pasuje do wzoru
            setError(password, 'Password must contain 2 uppercase letters, 3 digits, a special character, and be 8-24 characters long');
            return; // Przerwij walidację, jeśli hasło jest niepoprawne
        } else {
            setSuccess(password); // Ustaw sukces walidacji dla hasła
        }
          
        // Walidacja daty urodzenia
        const currentDate = new Date(); // Pobranie aktualnej daty
        const inputDate = new Date(birthDateValue); // Przekształcenie wartości z pola daty na obiekt Date
        const age = currentDate.getFullYear() - inputDate.getFullYear(); // Obliczenie wieku
        if (age <= 0 || age > 125 || isNaN(age)) { // Sprawdzenie czy wiek jest prawidłowy
            setError(birthDate, 'Invalid birth date'); // Ustawienie komunikatu o błędzie
        } else {
            setSuccess(birthDate); // Ustawienie sukcesu walidacji dla daty urodzenia
        }

        // Jeśli wszystkie dane są poprawne, wysyłamy zapytanie do bazy danych
        if (login.classList.contains('error') || password.classList.contains('error') || birthDate.classList.contains('error')) {
            // Jeśli którykolwiek z elementów ma klasę 'error', nie wysyłaj formularza
            return; // Przerwij wysyłanie formularza
        }

        sendToDatabase(loginValue, passwordValue, birthDateValue); // Wywołanie funkcji wysyłającej dane do bazy danych
    };

    // Funkcja wysyłająca dane do bazy danych
    const sendToDatabase = (login, password, birthDate) => {
        // Utwórz obiekt FormData, aby przekazać dane formularza do kodu PHP
        const formData = new FormData();
        formData.append('login', login); // Dodaj login do FormData
        formData.append('password', password); // Dodaj hasło do FormData
        formData.append('date', birthDate); // Dodaj datę urodzenia do FormData
     
        // Wywołaj funkcję fetch(), aby wysłać dane formularza do kodu PHP
        fetch('index.php', {
            method: 'POST', // Metoda HTTP do wysyłania danych
            body: formData // Ciało zapytania, czyli dane formularza
        })
        .then(response => {
            if (!response.ok) {
                // Jeśli odpowiedź serwera nie jest poprawna
                throw new Error('Wystąpił błąd podczas wysyłania danych do bazy danych.'); // Rzuć błąd
            }
            return response.text(); // Zwróć odpowiedź jako tekst
        })
        .then(data => {
            console.log(data); // Obsłuż odpowiedź z serwera (możesz wyświetlić w konsoli lub inny sposób)
        })
        .catch(error => {
            console.error('Błąd:', error); // Obsłuż błąd, jeśli wystąpił
        });
    };

});
