<?php

    //t

    //pętla która wyświetli liczby od 2 do 6
    for ($i = 2; $i < 6; $i++) {
        //pętla która wyświetla potęgi liczb od jakiej liczby jest potęga
        for ($j = 2; $j <= 6; $j++) {
            //wyświetlenie zmiennej $i która ma zwykłą liczbę następnie zmienna $j która jest potęgą wyświetla pow spowoduje ze wyświetli wynik dla podanych potęg
            echo '<span style="margin-right: 20px;">'.$i . '<sup>'.$j.'</sup> = ' . pow($i, $j) . '</span>';
        }
        //enter
        echo '<br>';
    }

    //pow - potęga w php

    echo "<br>";

    for ($i = 3; $i < 3; $i++) {
        for ($j = 2; $j <= 6; $j++) {
            echo '<span style="margin-right: 20px;">'.$i . '<sup>'.$j.'</sup> = ' . pow($i, $j) . '</span>';
        }
    }

    echo "<br>";

    for ($i = 7; $i < 8; $i++) {
        for ($j = 2; $j <= 13; $j++) {
            echo '<span style="margin-right: 20px;">'.$i . '<sup>'.$j.'</sup> = ' . pow($i, $j) . '</span>';
        }
    }

    for ($i = 10; $i < 11; $i++) {
        for ($j = 2; $j <= 111; $j++) {
            echo '<span style="margin-right: 20px;">'.$i . '<sup>'.$j.'</sup> = ' . pow($i, $j) . '</span>';
        }
    }

    /*
    
            for ($i = 2; $i < 6; $i++) {
                for ($j = 2; $j <= 6; $j++) {
                    echo '<span style="margin-right: 20px;">'.$i . '<sup>'.$j.'</sup> = </span>';
                }
                echo '<br>';
            }

    */

?>