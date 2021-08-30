"use strict";
{
    // Stwórz funkcje, która zwróci wynik dodawana dwóch liczb,
    // przyjmujemy jednak, że parametry do funkcji przychodzą z
    // zewnątrz, nie przeszły żadnej kontroli
    var sum_1 = function (a, b) {
        if (typeof a === "number" && typeof b === "number") {
            return a + b;
        }
        else {
            throw new Error("Niepoprawne parametry dla funkcji");
        }
    };
    console.log("" + sum_1(5, 5));
    sum_1("dwa", "trzy");
}
