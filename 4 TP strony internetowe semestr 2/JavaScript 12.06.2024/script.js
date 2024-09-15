document.addEventListener("DOMContentLoaded", () => {
    const bar = document.getElementById("bar");
    const input = document.getElementById("input");

    input.addEventListener('keyup', function() {
        const inputLength = input.value.length;
        
        // Zmiana szerokości paska w zależności od długości input
        bar.style.width = (inputLength * 10) + "px";
        
        // Zmiana koloru paska w zależności od długości hasła
        if (inputLength <= 5) {
            bar.style.backgroundColor = "red";
        } else if (inputLength <= 10) {
            bar.style.backgroundColor = "yellow";
        } else {
            bar.style.backgroundColor = "green";
        }
    });
});

// zrobic pasek z zmieniającym się kolorem podczas wpisywania w input hasła i rózne znaki

// im więcej znaków w input tym szeroki będzie pasek