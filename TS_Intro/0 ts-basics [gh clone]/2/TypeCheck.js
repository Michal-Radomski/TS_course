"use strict";
{
    var logical = true;
    var age_1 = 3;
    var name_1 = "Pawel";
    if (typeof age_1 === "number") {
        console.log("Age jest liczba");
    }
    var something = void 0;
    if (typeof something === "string") {
        something.length;
    }
    else if (typeof something === "number") {
    }
    else if (typeof something === "function") {
        something();
    }
}
