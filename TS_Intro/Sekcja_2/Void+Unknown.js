// Void
function printText(text) {
    console.log(text);
}
var person2 = undefined; // undefined -> brak wartości (zupełnie nic -> czegoś nie ma); null -> jest pole ale brak wartości -> jest ale nie wartości
{
    // Unknown
    var xx = void 0;
    xx = "Michal";
    xx = 33;
    xx == {};
    xx = function () { };
    if (typeof xx === "number") {
        var xage = xx;
    }
    if (typeof xx === "function") {
        xx();
    }
}
