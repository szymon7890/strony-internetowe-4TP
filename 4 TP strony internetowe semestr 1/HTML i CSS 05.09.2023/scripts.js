// Przechowuje pozycję przewinięcia strony przy jej załadowaniu
var prevScrollpos = window.pageYOffset;

// Funkcja, która zostaje wywołana przy każdym przewinięciu strony
window.onscroll = function() {
    // Pobiera bieżącą pozycję przewinięcia strony
    var currentScrollPos = window.pageYOffset;

    // Sprawdza, czy strona została przewinięta do góry (porównuje bieżącą pozycję z poprzednią)
    if (prevScrollpos > currentScrollPos) {
        // Jeśli strona została przewinięta do góry, pokazuje pasek nawigacji
        document.getElementById("navbar").style.top = "0";
    } else {
        // Jeśli strona została przewinięta w dół, ukrywa pasek nawigacji
        document.getElementById("navbar").style.top = "-90px";
    }
    // Aktualizuje poprzednią pozycję przewinięcia na bieżącą pozycję
    prevScrollpos = currentScrollPos;
}

// Dodaje nasłuchiwanie na załadowanie treści DOM
document.addEventListener('DOMContentLoaded', function() {
    // Ustawienia dla Intersection Observer
    const observerOptions = {
        root: null, // Obserwacja w obrębie viewportu (domyślnie)
        rootMargin: '0px', // Brak dodatkowego marginesu
        threshold: 0.1 // Uruchamia obserwację, gdy element jest widoczny w 10%
    };

    // Tworzy nowego Intersection Observer z podanymi ustawieniami
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            // Jeśli obserwowany element staje się widoczny
            if (entry.isIntersecting) {
                // Dodaje klasę 'show' do elementu, aby pokazać go na stronie
                entry.target.classList.add('show');
                // Przestaje obserwować ten element, aby zapobiec ponownemu uruchomieniu animacji
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Znajduje wszystkie elementy z klasą 'hidden'
    const hiddenElements = document.querySelectorAll('.hidden');
    // Dodaje każdy z nich do obserwatora
    hiddenElements.forEach((el) => observer.observe(el));

    // Znajduje przycisk menu (prawdopodobnie dla mobilnej nawigacji)
    const menuBtn = document.querySelector('.menu-btn');
    // Znajduje element zawierający linki nawigacyjne
    const navLinks = document.querySelector('#nav-links');

    // Dodaje nasłuchiwanie na kliknięcie przycisku menu
    menuBtn.addEventListener('click', () => {
        // Przełącza klasę 'show' na elemencie nawigacji, aby pokazać lub ukryć linki
        navLinks.classList.toggle('show');
    });

    // Znajduje arkusze stylów dla mobilnych i desktopowych widoków
    var mobileStylesheet = document.getElementById('mobile-stylesheet');
    var desktopStylesheet = document.getElementById('desktop-stylesheet');

    // Funkcja, która aktualizuje arkusz stylów w zależności od szerokości okna
    function updateStylesheet() {
        // Sprawdza, czy szerokość okna jest mniejsza lub równa 768px
        if (window.innerWidth <= 768) {
            // Włącza arkusz stylów dla mobilnej wersji i wyłącza dla desktopowej
            mobileStylesheet.removeAttribute('disabled');
            desktopStylesheet.setAttribute('disabled', 'true');
        } else {
            // Włącza arkusz stylów dla desktopowej wersji i wyłącza dla mobilnej
            mobileStylesheet.setAttribute('disabled', 'true');
            desktopStylesheet.removeAttribute('disabled');
        }
    }

    // Wywołuje funkcję, aby ustawić odpowiedni arkusz stylów przy pierwszym załadowaniu strony
    updateStylesheet();

    // Dodaje nasłuchiwanie na zmianę rozmiaru okna, aby dynamicznie zmieniać arkusze stylów
    window.addEventListener('resize', updateStylesheet);
});
