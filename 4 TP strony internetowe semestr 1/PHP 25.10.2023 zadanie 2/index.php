<?php

    //stworzenie tablicy o nazwie array która przehcowuje rzeczy
    $array = ['test', 'szymon', 'mc donalds', 'czasowo'];
    //stworznie tablicy asocjacyjnej która ma 3 rzeczy
    $array2 = ['szymon' => 'mcDonalds', 'praca' => 'true', 'kanapki' => 'normalnie'];

    //wyświetlanie tablicy pierwszej o numerze 2 czyli mc donalds
    echo $array[2];

    //zrobienie enter
    echo "<br>";

    //wyświetlanie tablicy asocjacyjnej odwołując się poprzez nazwę
    //czyli słowo kanapki wyświetli nam słowo duzo
    echo $array2['kanapki'];

?>