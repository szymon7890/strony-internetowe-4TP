//dolny śląsk

document.addEventListener("DOMContentLoaded", (event) => {
  var button = document.getElementById("button");

  button.addEventListener('click', function(){
      var p = document.createElement("p");
      var outputSection = document.querySelector('.output-section');
      var select = document.querySelector('#powiat');
      var text = select.options[select.selectedIndex].value;

      var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      var numbs = '';

      for (var i = 0; i < 5; i++) {
          numbs += numbers[Math.floor(Math.random() * 10)];
      }

      // Wygeneruj numer rejestracyjny i wstaw do sekcji output
      p.innerHTML = 'D' + text + numbs;
      outputSection.innerHTML = '';  // Wyczyść poprzedni wynik
      outputSection.appendChild(p);
  });
});

//konkatenacja w javascript + w php .

/*
		var countries = document.getElementById("powiat");

		var selectedValue = document.querySelector(".selected-value");

		document.addEventListener('DOMContentLoaded', () => {
		  selectedValue.innerText = p.countries.value;
		});

		countries.addEventListener("change", (event) => {
		  selectedValue.innerText = event.target.value;
		});
*/