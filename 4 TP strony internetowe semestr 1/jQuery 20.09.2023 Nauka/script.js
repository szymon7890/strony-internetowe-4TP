//ten kod w jQuerry to jest jak DomContentLoaded z JavaScript
$(document).ready(function() {
    //sprawdzanie czy działa jQuerry.
    console.log('gotowy');

    //wybieranie elementów w jQuerry przy pomocy id
    $('#mojIdentyfikator');

    //wybieranie elementów w jQuery przy pomocy class
    $('div.mojaKlasa')

    //wybieranie elementów po atrybutach
    $('input[imie_i_nazwisko = imie]');

    //wybieranie elemntów za pomocą złozonego selektora CSS
    $('#spis ul.ludzie li');

    //Pseudoselektory
    $('a.zewnetrzny:first');
    $('tr:odd');
    //wybieramy wszytskie pola wejściowe formularza
    $('#mojFormularz :input');
    $('div:visible');
    //wybieranie wszytskie elementy div za wyjątkiem 3 pierwsze
    $('div:gt(2)');
    //wszytskie elementy div, które są aktualnie animowane
    $('div:animated');

    ///

    //znajdź wszystkie elementy <a>. których atrybut rel kończy się na "cosTam"
    $("a[rel$='cosTam']");

    if($('div.foo').length) {

    }

    /*
    
        Nic to nie da. Jeśli dokonujesz wyboru przy pomocy konstrukcji $(), zawsze zwracany jest obiekt, co z kolei oznacza, że za każdym razem zwracana jest wartość true. Nawet jeśli nie udało ci się wbrać żadnych elementów, kod wewnątrz instrukcji if i tak zostanie wykonany.

        Zamiast tego powinnyśmy sprawdzić własność length dokonanego wyboru — dowiemy się wówczas ile elementów zostało wybranych. Jeśli liczba elementów wynosi zero, to sprawdzając własność length przy pomocy wyrażenia logicznego otrzymamy fałsz (false).

    */

    if ($('div.foo').length) {

    }

    //zamiast w jQuery normalnie zapisywac w pamięci podręcznej mozesz zapisac to na stałe

    var divy = $('div');

    //elementy div.foo które zaiwerają akapity
    $('div.foo').has('p');
    //elementy h1 które nie mają klasy bar
    $('h1').not('.bar');
    //pozycje z nieuporządkowanej listy o klasie current
    $('ul li').filter('.current')
    //pierwsza pozycja z nieuporządkowanej listy
    $('ul li').first();
    //szósta pozycja
    $('ul li').eq(5);

    /*
    
        :button
            Wybiera elementy button oraz elementy oznaczone jako type="button"
        :checkbox
            Oznacza pola wejściowe oznaczone jako type="checkbox"
        :checked
            Oznacza wszystkie pola wejściowe, które zostały zaznaczone
        :disabled
            Wybiera elementy dezaktywowane
        :enabled
            Wybiera aktywne elementy formularza
        :file
            Wybiera pola wejściowe oznaczone jako type="file"
        :image
            Wybiera pola wejściowe oznaczone jako type="image"
        :input
            Wybiera elementy input, textarea oraz select
        :password
            Wybiera pola wejściowe oznaczone jako type="password"
        :radio
            Wybiera pola wejściowe oznaczone jako type="radio"
        :reset
            Wybiera pola wejściowe oznaczone jako type="reset"
        :selected
            Wybiera opcje, które zostały zaznaczone
        :submit
        Wybiera pola wejściowe oznaczone jako type="submit"
        :text
            Wybiera pola wejściowe oznaczone jako type="text" 
    
    */    

    //Pozyskuje wszystskie elementy, które akceptują dane wejściowe
    $('#mojFormularz :input');

    //wyszukanie elemntu o id tresc następnie znajdujemy element z html h3 dla pierwszej pozycji ma byc tekst "nowa treśc dla trzeciego nagłówka h3"
    $('#tresc').find('h3').eq(2).html('nowa treśc dla trzeciego nagłówka h3')

    //to samo ale w innym ułozeniu
    $('#tresc')
        .find('h3')
        .eq(2)
        .html('nowa treśc dla trzeciego nagłówka h3');

    //to jest to samo co poprzednio ale jest jako łańcuch
    $('#tresc')
        .find('h3')
        .eq(2)
            .html('nowa treśc dla trzeciego nagłówka h3!')
        .end()
    //przywracanie wybór do wszystkich nagłówków h3 w elemencie #tresc
        .eq(0)
            .html('nowa treś dla pierwszego nagłówka h3!');

    //czyli ten kod wyszukuje element h1 gdzie ma wyświetlac napis 'witaj, świecie'
    $('h1').html('witaj, świecie');
    $('h1').html();

    //W JavaScript mozna uzywac css ale w sposób wielbłąca lub po przez dopisywanie -
    //obie te medoty zadziałaja
    $('h1').css('fontSize');
    $('h1').css('font-size');

    //ustawia pojedynczą włanośc w zapisie wielbłąda
    $('h1').css('fontSize', '100px');

    //ustawia dwie własności w zapise minus - posiadając {} mozesz wiele uzywac elementów z css
    $('h1').css({'fontSize' : '100px', 'color' : 'red'})
    
    $('h2').html('witaj h2');

    //stworzenie zmiennej o nazwie h2 która ma element h2 z html
    var h2 = $('h2');

    //podanie nazyw zmiennej i napisanie reguły css mozna zmieniac nazwę klasy
    h2.addClass('big');
    h2.removeClass('big');
    h2.toggleClass('big');

    if (h2.hasClass('big')) {

    }

    //klasy słuzą do tego zeby przechowywac informacje o stanie elementu i mozna dowiedziec się czy element został wybrany


    //Na tej stronie jest opisane wszytsko szczegółowo na temat dotyczących wymiarów http://api.jquery.com/category/dimensions/

    //Ustawienie szerokości dla wszystkich nagłówków h1
    $('h2').width('50px');
    //Pobieranie szerokości pierwszego nagłówka h1
    $('h2').width();
    //Ustawienie wysokości dla wszystkich nagłówków h1
    $('h2').height('50px');
    //Pobieranie wykości pierwszego nagłówka
    $('h2').height();
    //zwraca obiekt zawieający informacje na temat
    $('h2').position();
    //pozycji drugiego nagłówka h2 względem jego pozycjonowanego (prszesuniętego) alementu rodzica


    //atrybuty

    //dla wsyztskich elementów a masz po najechaniu na link wyświetlic wiadomośc w linku tylko title nam wyświetli po najechaniu na link wiadomośc
    $('a').attr('href', 'WszystkieMojeHrefSaTakieSame.html');
    $('a').attr({
        'title' : 'Wszystkie tytuły tez są takie same!',
        'href' : 'cosNowego.html'
    });

    //zwraca href pierwszego alemntu a w dokumencie
    $('a').attr('href');

    /*
    
    Przeglądanie elementów
    Zestaw wybranych elementów może posłużyć jako punkt wyjścia w celu odnalezienia innych elementów.
    pełno dokumentacje bibliotek znajdziesz tutaj https://api.jquery.com/category/traversing/

    */

    $('h1').next('p');
    $('div.visible').parent();
    $('input[imie_i_nazwisko=imie]').closest('from');
    $('#mojeLista').children();
    $('li.selected').siblings();


    /*
    
        Mozesz takze przy pomocy metody $ function i each przejść iteracyjnie przez zestaw wybranych 
        elementów. Metoda ta iteruje przez wszystkie wybrane elementy i dla każdego wykonuje 
        funkcję. Funkcja jako argumenty otrzymuje indeks obecnego elementu i sam element ze 
        struktury DOM. Wewnątrz funkcji element DOM jest domyślnie dostępny poprzez słowo this.
    
    */

    $('#mojaLista li').each(function(idx, el) {
        console.log(
            'Element ' + idx +
            'ma następujący html: ' +
            $(el).html()
        );
    });

    /*
    
        Pobieranie i ustawianie informacji na temat elementów 
                
        $.fn.html
            Pobiera lub ustawia treść HTML.
        $.fn.text
            Pobiera lub ustawia tekst; kod HTML zostanie usunięty. 
        $.fn.attr
            Pobiera lub ustawia wartość danego atrybutu. 
        $.fn.width
            Pobiera lub ustawia szerokość pierwszego zaznaczonego elementu w postaci liczby całkowitej. 
        $.fn.height
            Pobiera lub ustawia wysokość pierwszego zaznaczonego elementu w postaci liczby całkowitej. 
        $.fn.position
            Pobiera obiekt zawierający informacje na temat pozycji pierwszego wybranego elementu względem pierwszego pozycjonowanego przodka. Metoda ta może być wykorzystywana tylko jako metoda pobierająca. 
        $.fn.val
            Pobiera lub ustawia wartości elementów formularza. 
    
    */

    //wyszukanie elementu div o nazwie mojDiv gdzie ma paragraf i pierwszy paragraf ma miec inny teskt
    $('#mojDiv p:first')
        //zmiena tekstu dla paragrafu z orgianlengo na zmieniony w jQuerry
        .html('Nowy <strong>pierwszy</strong> akapit!');

    //Przenoszenie, kopiowanie i usuwanie elementów.

});

jQuery.expr.filters.hidden = function( elem ) {
    var width = elem.offsetWidth, height = elem.offsetHeight,
        skip = elem.nodeName.toLowerCase() === "tr";

    // does the element have 0 height, 0 width,
    // and it's not a <tr>?
    return width === 0 && height === 0 && !skip ?

        // then it must be hidden
        true :

        // but if it has width and height
        // and it's not a <tr>
        width > 0 && height > 0 && !skip ?

            // then it must be visible
            false :

            // if we get here, the element has width
            // and height, but it's also a <tr>,
            // so check its display property to
            // decide whether it's hidden
            jQuery.curCSS(elem, "display") === "none";
};

jQuery.expr.filters.visible = function( elem ) {
    return !jQuery.expr.filters.hidden( elem );
};
