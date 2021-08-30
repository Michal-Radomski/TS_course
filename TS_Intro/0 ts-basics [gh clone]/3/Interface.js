"use strict";
{
    var pawel_1 = {
        name: "Pawel",
        age: 32
    };
    pawel_1 = {
        name: "Pawel",
        age: 32,
        email: "pawel@kurstypescripta.pl"
    };
    var kinga = {
        name: "Kinga",
        age: 35
    };
    var sendEmail = function (people) {
        people.filter(function (person) { return person.email; }).forEach(function (person) {
            console.log("Sending email to " + person.email + "...");
        });
        return people;
    };
}
