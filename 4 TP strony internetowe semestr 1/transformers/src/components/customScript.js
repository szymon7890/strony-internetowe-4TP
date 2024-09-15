import React, { useEffect } from 'react';

const CustomScript = () => {
  useEffect(() => {
    // Inicjalizacja efektu przewijania
    console.log("Scroll effect initialized");
    let prevScrollpos = window.pageYOffset;

    // Funkcja obsługująca przewijanie strony
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const navbar = document.getElementById("navbar");
      console.log("Scrolling...", { prevScrollpos, currentScrollPos, navbar });
      
      // Ukrywanie/pokazywanie nawigacji w zależności od kierunku przewijania
      if (navbar) {
        if (prevScrollpos > currentScrollPos) {
          navbar.style.top = "0";
        } else {
          navbar.style.top = "-90px";
        }
        prevScrollpos = currentScrollPos;
      }
    };

    // Dodanie nasłuchiwania na przewijanie
    window.addEventListener('scroll', handleScroll);

    // Usunięcie nasłuchiwania na przewijanie przy demontażu komponentu
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Inicjalizacja Intersection Observer
    console.log("Intersection Observer initialized");
    const observerOptions = {
      root: null, // Obserwacja w obrębie viewportu
      rootMargin: '0px',
      threshold: 0.1 // Element jest widoczny w 10% przed uruchomieniem animacji
    };

    // Tworzenie obserwatora Intersection Observer
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        console.log("Observed entry", entry);
        
        // Dodawanie klasy 'show' do elementu, gdy staje się widoczny
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target); // Przestanie obserwować element po pojawieniu się
        }
      });
    }, observerOptions);

    // Znalezienie wszystkich ukrytych elementów i dodanie ich do obserwatora
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    // Usunięcie obserwacji elementów przy demontażu komponentu
    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  useEffect(() => {
    // Inicjalizacja efektu przełączania arkuszy stylów
    console.log("Stylesheet toggle initialized");
    const mobileStylesheet = document.getElementById('mobile-stylesheet');
    const desktopStylesheet = document.getElementById('desktop-stylesheet');

    // Funkcja do przełączania arkuszy stylów w zależności od szerokości okna
    const updateStylesheet = () => {
      console.log("Updating stylesheet based on window width", window.innerWidth);
      if (window.innerWidth <= 768) {
        if (mobileStylesheet) mobileStylesheet.removeAttribute('disabled');
        if (desktopStylesheet) desktopStylesheet.setAttribute('disabled', 'true');
      } else {
        if (mobileStylesheet) mobileStylesheet.setAttribute('disabled', 'true');
        if (desktopStylesheet) desktopStylesheet.removeAttribute('disabled');
      }
    };

    // Inicjalizacja stanu stylów przy pierwszym renderze
    updateStylesheet();
    // Dodanie nasłuchiwania na zmianę rozmiaru okna
    window.addEventListener('resize', updateStylesheet);

    // Usunięcie nasłuchiwania na zmianę rozmiaru przy demontażu komponentu
    return () => {
      window.removeEventListener('resize', updateStylesheet);
    };
  }, []);

  // Komponent nie renderuje nic na stronie
  return null;
};

export default CustomScript;
