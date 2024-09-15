//ten kod w jQuerry to jest jak DomContentLoaded z JavaScript
$(document).ready(function() {

    // Sprawdzanie, czy działa jQuery.
    console.log('gotowy');

    // Wybieranie elementów w jQuery przy pomocy ID.
    $('#mojIdentyfikator');

    // Wybieranie elementów w jQuery przy pomocy klasy.
    $('div.mojaKlasa');

    // Wybieranie elementów po atrybutach.
    $('input[imie_i_nazwisko="imie"]');

    // Wybieranie elementów za pomocą złożonego selektora CSS.
    $('#spis ul.ludzie li');

    // Pseudoselektory.
    $('a.zewnetrzny:first');
    $('tr:odd');

    // Wybieranie wszystkich pol na formularzu.
    $('#mojFormularz :input');
    
    // Wybieranie widocznych elementów div.
    $('div:visible');

    // Wybieranie wszystkich elementów div za wyjątkiem 3 pierwszych.
    $('div:gt(2)');

    // Wybieranie elementów div, które są aktualnie animowane.
    $('div:animated');

    // Znajdź wszystkie elementy <a>, których atrybut 'rel' kończy się na "cosTam".
    $("a[rel$='cosTam']");

    if ($('div.foo').length) {
        // Kod zostanie wykonany, jeśli co najmniej jeden element pasuje do selektora.
    }

    // Przykład zapisu wyników wyboru w zmiennej.
    var divy = $('div');

    // Elementy div.foo, które zawierają akapity.
    $('div.foo').has('p');

    // Elementy h1, które nie mają klasy "bar".
    $('h1').not('.bar');

    // Pozycje z nieuporządkowanej listy o klasie "current".
    $('ul li').filter('.current');

    // Pierwsza pozycja z nieuporządkowanej listy.
    $('ul li').first();

    // Szósta pozycja z nieuporządkowanej listy.
    $('ul li').eq(5);

    // Pozyskiwanie wszystkich elementów formularza.
    $('#mojFormularz :input');

    // Wyszukiwanie elementu o ID "tresc" i modyfikacja trzeciego nagłówka h3.
    $('#tresc').find('h3').eq(2).html('Nowa treść dla trzeciego nagłówka h3');

    // Modyfikacja pierwszego nagłówka h1.
    $('h1').html('Witaj, świecie');

    // Zapisanie elementu h2 w zmiennej.
    var h2 = $('h2');

    // Dodawanie i usuwanie klasy "big" z elementu h2.
    h2.addClass('big');
    h2.removeClass('big');
    h2.toggleClass('big');

    if (h2.hasClass('big')) {
        // Kod zostanie wykonany, jeśli element h2 ma klasę "big".
    }

    // Ustawienie szerokości dla wszystkich nagłówków h1.
    $('h1').width('50px');

    // Pobieranie szerokości pierwszego nagłówka h1.
    $('h1').width();

    // Ustawienie wysokości dla wszystkich nagłówków h1.
    $('h1').height('50px');

    // Pobieranie wysokości pierwszego nagłówka h1.
    $('h1').height();

    // Pobieranie pozycji drugiego nagłówka h2 względem jego pozycjonowanego przodka.
    $('h2').position();

    // Manipulacja atrybutami.
    $('#mojDiv a:first').attr('href', 'nowaLokalizacja.html');

    // Manipulacja wieloma atrybutami.
    $('#mojDiv a:first').attr({
        href: 'nowaLokalizacja.html',
        rel: 'super-swietny'
    });

    // Korzystanie z funkcji, aby określić nową wartość atrybutu.
    $('#mojDiv a:first').attr({
        rel: 'super-swietny',
        href: function (idx, href) {
            return '/nowy/' + href;
        }
    });

    // Manipulacja atrybutem "href" za pomocą funkcji.
    $('#mojDiv a:first').attr('href', function (idx, href) {
        return '/nowy/' + href;
    });

//Po uporządkuj ten kod w jquery oraz wyjaśnij wszytsko od a do z co robi dany kod i do czego służy oraz stwórz z tego notatkę. //ten kod w jQuerry to jest jak DomContentLoaded z JavaScript
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
    $('h1').width('50px');
    //Pobieranie szerokości pierwszego nagłówka h1
    $('h1').width();
    //Ustawienie wysokości dla wszystkich nagłówków h1
    $('h1').height('50px');
    //Pobieranie wykości pierwszego nagłówka
    $('h1').height();
    //zwraca obiekt zawieający informacje na temat
    $('h1').position();
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

    /*
    
        Istnieje wiele sposobów na przenoszenie elementów w obrębie struktury DOM. Ogólnie wyróżnia się dwa podejścia:
        Umieszczamy wybrane elementy względem innego elementu
        Umieszczamy element względem wybranyych elementów

        Przykładowo w biliotece jQuery dostępne są metody $.fn.insertAfter oraz $.fn.after. 
        Metoda $.fn.insertAfter umieszcza wybrane elementy za tym elementem, który przekaże
        się jej jako argument. Z kolei metoda $.fn.after umieszcza element będący jej argumentem
        za wybranym elementem. W podobny sposób działa jeszcze kilka innych metod:
        $.fn.insertBefore i $.fn.before; $.fn.appendTo i $.fn.append, czy $.fn.prependTo oraz
        $.fn.prepend.

        Wybór odpowiedniej metody zależy od wybranych elementów, a także od tego, czy będziesz 
        musiał przechowywać odwołania do elementów dodawanych na stronę. Jeśli potrzebujemy
        odwołań, zawsze korzystamy z pierwszego sposobu — umieszczamy wybrane elementy
        względem innego elementu. Wówczas umieszczane przez nas elementy są zwracane. W tym
        przypadku należy wybrać metody $.fn.insertAfter, $.fn.insertBefore, $.fn.appendTo
        oraz $.fn.prependTo.

    */

    //przenosimy pierwszą pozycję z listy na sam koniec
    var $li = $('#mojaLista li:first').appendTo('#mojaLista');

    //inny sposób
    $('#mojaLista').append($('#mojaLista li:first'));

    // zauważ, że nie mamy dostępu
    // do przeniesionej pozycji z listy, ponieważ zwracana jest
    // sama lista

    //Klonowanie elementów

    /*
    
        Metody takie jak $.fn.appendTo służą do przenoszenia elementów. Zdarza się jednak, że zamiast przenosić element wolelibyśmy go skopiować — w takim wypadku najpierw musimy użyć metody $.fn.clone.
    
    */    

    // kopiujemy pierwszą pozycję z listy na sam koniec
    $('#mojaLista li:first').clone().appendTo('#mojaLista');

    //Usuwanie elementów

    /*
    
        Są dwa sposoby usuwania elementów ze strony: $.fn.remove i $.fn.detach. Jeśli chcesz usunąć wybrane elementy ze strony na stałe, skorzystaj z metody $.fn.remove — metoda ta zwraca usunięte elementy, lecz nie powiązane z nimi
        dane i zdarzenia.

        Jeśli jednak zależy ci na zachowaniu danych i zdarzeń, użyj metody $.fn.detach. Podobnie jak w przypadku $.fn.remove wybrane elementy zostają zwrócone, ale powiązane z nim dane i zdarzenia są zachowane. Dzięki temu będziesz mógł później je przywrócić na stronę.
    
    */

    
    //Tworzenie nowych elementów

    /*
    
        W bibliotece jQuery znajdziemy banalnie prosty, a zarazem elegancki sposób na utwórzenie nowych elementów — używamy wówczas tej samej metody $(), która służy nam do wybierania elementów.

    */

    $('<p>To jest nowy akapit</p>');
    $('<li class="new">nowa pozycja na liście</li>');
    
    //tworzenie nowy element z obiektem atrybutu
    $('<a/>',{
        html : "To jest <strong>nowy</strong> odnośnik",
        'class' : 'new',
        href : 'foo.html'
    });

    //Pobieranie nowego elementu na stronę

    var $mojNowyElement = $('<p>Nowy element</p>');
    $mojNowyElement.appendTo('#tresc');

    $mojNowyElement.insertAfter('ul:last'); // akapit zostanie usunięty z elementu #tresc!
    $('ul').last().after($mojNowyElement.clone());  // klonujemy akapit — teraz mamy dwa


    //Tworzenie i dodawanie elementu na stronę
    $('ul').append('<li>pozycja na liście</li>');

    var mojePozycje = [], $mojaLista = $('#mojaLista');

    for (var i=0; i<100; i++) {
        mojePozycje.push('<li>pozycja ' + i + '</li>');
    }
    
    $mojaLista.append(mojePozycje.join(''));


    //manipulowanie atrybutami

    //manipulowanie pojedynczym atrybutem
    $('#mojDiv a:first').attr('href', 'nowaLokalizacja.html');

    //Manipulacja wieloma atrybutami
    $('#mojDiv a:first').attr({
        href : 'nowaLokalizacja.html',
        rel : 'super-swietny'
    });

    //Korzystamy z funkcji, aby określic nową wartośc atrybutu
    $('#mojDiv a:first').attr({
        rel : 'super-swietny',
        href : function(idx, href) {
            return '/nowy/' + href;
        }
    });

    $('#mojDiv a:first').attr('href', function(idx, href) {
        return '/nowy/' + href;
    });
    

});    

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
