//Napisz funkcje która po otrzymaniu tablicy z liczbami zwróci srednią tą liczb

//znaleśc oferty pracy na junior php i nauczyc się tych technologi 

document.addEventListener("DOMContentLoaded", event => {

    var array = [2, 5, 3, 4, 5];

    function average(arrayToGetAverage) {

        var sum = 0;
    
        for (var i = 0; i < arrayToGetAverage.length; i++) {        
            //console.log(array[i]);
            sum += arrayToGetAverage[i];
        }
//        console.log(sum/arrayToGetAverage.length);
        return[sum/arrayToGetAverage.length];
    }

    console.log(average(array));
});

//robienie zadan między zajęciamni uczenie się logiki