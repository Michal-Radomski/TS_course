{
    var michal = {
        //email jest opcjonalny
        name: "Michal",
        age: 32
    };
    michal = { name: "Michal", age: 40, email: "test@op.pl" };
    var kinga = {
        name: "Kinga",
        age: 34
    };
}
function sendEmail(people) {
    people
        .filter(function (person) { return person.email; })
        .forEach(function (person) {
        console.log("Sending email " + person.name + " to " + person.email);
    });
}
// Funkcja strzałkowa
var sendEmail2 = function (people) {
    people
        .filter(function (person) { return person.email; })
        .forEach(function (person) {
        console.log("Sending email " + person.name + " to " + person.email);
    });
    return people;
};
{
    var sendEmail3 = function (people) {
        people
            .filter(function (person) { return person.email; })
            .forEach(function (person) {
            console.log("Sending email " + person.name + " to " + person.email);
        });
        return people;
    };
}
