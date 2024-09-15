//załądowanie domcontenloaded
document.addEventListener("DOMContentLoaded", (event) => {
  //Stworzenie zmiennej o nazwie tablica z liczbami
  const tablica = [10, 7, 5, 30, 21];
  //stworzenie zmiennej o nazwie lista element w javascript znajdujemy element po id myList
  const ulElement = document.getElementById("myList");

  //nie dzieje się w tym samym czasie funkcja o nazwie bubbleSort
  async function bubbleSort() {
    //pęlta for ma zmienną i która ma wartośc 0 zmienna i jest mneijsza od tablicy zliczenia przesunięcie w lewo i zwiększanie
    for (let i = 0; i < tablica.length - 1; i++) {
      //pętla for ma zmienną o nazwie j która ma wartośc 0 i zmienna j jest mniejsza od zmiennej tablicy i zmniejszanie zmiennej i 
      // oraz -1 i zwiększanie zmiennej j
      for (let j = 0; j < tablica.length - i - 1; j++) {
        //jeśli zmienna tablica oraz zmienna j jest większe to wykonaj dodanie + 1
        if (tablica[j] > tablica[j + 1]) {
          // Zamień elementy tablicy
          const temp = tablica[j];
          tablica[j] = tablica[j + 1];
          tablica[j + 1] = temp;

          //wykonanie kodu po kolei tworzy nową obietnicę. Obietnica ma funkcję zwrotną (callback) resolve, która zostanie wywołana, aby oznaczyć, że obietnica została rozwiązana.
          //ustawienie czasu ile ma się dziac ta animacja w sekundach
          await new Promise((resolve) => setTimeout(resolve, 1000));

          // Wyczyść listę i dodaj elementy na nowo
          ulElement.innerHTML = "";
          //storzenie pętli for która ma zmienną k która ma wartośc 0 i k jest mniejsze od tablicy zliczania znaków i zwiększanie zmiennej k++
          for (let k = 0; k < tablica.length; k++) {
            //stworzenie w zmiennej liElement czyli stworzenie listy nieuporządkowanej
            const liElement = document.createElement("li");
            //zmienna o nazwie liElement ma wyświetlic zawartośc na stronie internetowej z pętki która ma zmienną k
            liElement.textContent = tablica[k];
            //podanie nazwy zmiennej ulElement i wepnięcie na stronę internetową
            ulElement.appendChild(liElement);
          }
        }
      }
    }
  }

  // Uruchom sortowanie przy załadowaniu strony
  bubbleSort();
});