// Typ string
var firstName = "Michal";
var someText = "to jest moje imi\u0119: " + firstName;
// Typ liczbowy
var age = 40;
var weight = 78.5;
var imaginarySalary = 1000000000;
// Typ logiczny
var male = true;
var female = false;
var x = 23;
// Tablice
var arr = [];
arr.push(33);
// Krotka
var tuple = ["Michal", 40];
// Any -> raczej nie używać, przydaje się przy migracji z JS do TS
var xx;
xx = "Michal";
xx = 33;
xx == {};
xx = function () { };
// Funkcje
function sum(a, b) {
    return a + b;
}
var s = sum(5, 5);
var suma2 = function (a, b) { return a + b; };
suma2(5, 5);
// Łączenie typów -> przydaje się przy migracji
var ux;
ux = 5;
ux = "X";
ux = true;
// Typy jako zbiory wartości
{
    var age_1;
    var name_1;
    var someVar = void 0;
    var dice = void 0;
    dice = 6;
    var dontChangeMe = void 0;
    dontChangeMe = "dom";
    var flagIsSet = true;
    var anotherFlag = false;
    anotherFlag = flagIsSet;
}
