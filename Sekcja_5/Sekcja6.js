{
    var age = { value: 5 };
    var michal = { value: "michal" };
    // Typy generyczne w funkcji
    function wrap(x) {
        return {
            value: x
        };
    }
    var age2 = { value: 5 };
    var michal2 = { value: "michal" };
    wrap(5);
    var numberX = wrap(5);
    console.log(19, numberX);
    wrap("michal2");
    var person = wrap({ name: "Michal", age: 40 });
    console.log(29, person);
}
