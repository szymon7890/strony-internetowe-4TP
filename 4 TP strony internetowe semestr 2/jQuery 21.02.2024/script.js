// Czekaj na załadowanie całej zawartości strony
document.addEventListener('DOMContentLoaded', function() {
    // Pobierz potrzebne elementy z formularza
    const form = document.getElementById('form');
    const login = document.getElementById('login');
    const password = document.getElementById('password');
    const date = document.getElementById('date');

    // Nasłuchuj zdarzenia submit na formularzu
    form.addEventListener('submit', e => {
        e.preventDefault(); // Zapobiegaj domyślnej akcji przesyłania formularza
        validateInputs(); // Wywołaj funkcję do walidacji danych
    });

    // Funkcja ustawiająca komunikat błędu dla danego pola
    const setError = (element, message) => {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');

        errorDisplay.innerText = message;
        inputControl.classList.add('error');
        inputControl.classList.remove('success');
    }

    // Funkcja ustawiająca komunikat sukcesu dla danego pola
    const setSuccess = element => {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');

        errorDisplay.innerText = '';
        inputControl.classList.add('success');
        inputControl.classList.remove('error');
    }

    // Funkcja do walidacji wprowadzonych danych
    const validateInputs = () => {
        const loginValue = login.value.trim();
        const passwordValue = password.value.trim();
        const dateValue = date.value.trim();

        let valid = true; // zmienna określająca, czy wszystkie pola są poprawne

        // Walidacja loginu
        if (!validateLogin(loginValue)) {
            setError(login, 'Invalid username format');
        } else {
            setSuccess(login);
        }

        // Walidacja hasła
        if (!validatePassword(passwordValue)) {
            setError(password, 'Invalid password format');
        } else {
            setSuccess(password);
        }

        // Walidacja daty urodzenia
        if (!validateDOB(dateValue)) {
            setError(date, 'Invalid date of birth');
        } else {
            setSuccess(date);
        }

        // Jeśli wszystkie pola są poprawne, możemy przesłać formularz
        if (valid) {
            form.submit();
        }
    }

    // Funkcja do walidacji loginu
    const validateLogin = login => {
        // Walidacja loginu: zgodnie z wcześniejszymi wymaganiami
        const regex = /^[A-Z][a-zA-Z0-9]{3,19}#\d{4}$/;
        return regex.test(login);
    }

    // Funkcja do walidacji hasła
    const validatePassword = password => {
        // Walidacja hasła: zgodnie z wcześniejszymi wymaganiami
        const regex = /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$%^&*])(?=.*\d.*\d.*\d)[a-zA-Z0-9!@#$%^&*]{8,24}$/;
        return regex.test(password);
    }

    // Funkcja do walidacji daty urodzenia
    const validateDOB = dateOfBirth => {
        // Walidacja daty urodzenia: wiek nie przekracza 125 lat ani nie jest ujemny
        const dob = new Date(dateOfBirth);
        const today = new Date();
        const age = today.getFullYear() - dob.getFullYear();
        return age >= 0 && age <= 125;
    }
});