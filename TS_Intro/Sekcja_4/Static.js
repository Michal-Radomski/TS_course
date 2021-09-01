{
    var Email = /** @class */ (function () {
        function Email(name, domain) {
            var _this = this;
            this.toString = function () {
                return _this.name + "@" + _this.domain;
            };
            this.name = name;
            this.domain = domain;
        }
        return Email;
    }());
    var Person = /** @class */ (function () {
        function Person(name, email) {
            var _this = this;
            this.toString = function () {
                return _this.firstName + " has email: " + _this.email.toString();
            };
            this.firstName = name;
            this.email = email;
        }
        Person.info = "Text"; // statyczna zmienna jest współdzielona w obrębie klasy!
        return Person;
    }());
    Person.info; // static bez użycia instancji (obiektu)
    var person = new Person("Mich", new Email("mich", "op.pl"));
    //- person.info // błąd na obiekcie
}
// ------------------------------------------------------
{
    var Email = /** @class */ (function () {
        function Email(name, domain) {
            var _this = this;
            this.toString = function () {
                return _this.name + "@" + _this.domain;
            };
            this.name = name;
            this.domain = domain;
        }
        return Email;
    }());
    var Person_1 = /** @class */ (function () {
        function Person(name, email) {
            var _this = this;
            this.toString = function () {
                return Person.firstName + " has email: " + _this.email.toString();
            };
            Person.firstName = name;
            this.email = email;
        }
        Person.info = "Text";
        return Person;
    }());
    Person_1.info; // static bez użycia instancji (obiektu)
    var person = new Person_1("Mich", new Email("mich", "op.pl"));
    //- person.info // błąd na obiekcie
}
