{
    var logical = true;
    var age = 3;
    var name_1 = "Michal";
    if (typeof age === "number") {
        console.log("age to liczba");
    }
    var something = void 0;
    if (typeof something === "string") {
        something.length;
    }
    else if (typeof something === "number") {
        something.toString();
    }
    else if (typeof something === "function") {
        something();
    }
}
