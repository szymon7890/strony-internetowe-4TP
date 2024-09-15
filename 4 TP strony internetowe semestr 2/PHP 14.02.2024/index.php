<?php

    function tripletTricks($a, $b, $c) {
        // Inicjalne wartości do pętli
        $tempA = $a;
        $tempB = $b;
        $tempC = $c;

        // Sprawdź, czy wszystkie zmienne są różne od zera
        if ($a != 0 && $b != 0 && $c != 0) {
            $a = 2 * ($b + $c) - $a;
            $b = 2 * ($c + $tempA) - $b;
            $c = 2 * ($tempA + $tempB) - $c;
        } else {
            // Jeśli którakolwiek zmienna jest równa zeru, zwróć odpowiednią wiadomość
            return ['a' => $a, 'b' => $b, 'c' => $c, 'message' => 'One or more inputs are zero'];
        }

        return ['a' => $a, 'b' => $b, 'c' => $c];
    }

    $a = 6;
    $b = 10;
    $c = 35;

    $result = tripletTricks($a, $b, $c);
    print_r($result);

?>