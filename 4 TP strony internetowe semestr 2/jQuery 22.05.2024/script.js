$(document).ready(function() {
    // Zmiana obrazków co 1.5 sekundy
    let images = ["stockholm1.png", "stockholm2.png", "stockholm3.png", "stockholm4.png"];
    setInterval(function() {
        let random = Math.floor(Math.random() * images.length);
        $('#welcomeImage').attr('src', images[random]);
    }, 1500);

    // Obserwator do animacji sekcji
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                $(entry.target).addClass('show');
            } else {
                $(entry.target).removeClass('show');
            }
        });
    });

    $('.hidden').each(function() {
        observer.observe(this);
    });
});
