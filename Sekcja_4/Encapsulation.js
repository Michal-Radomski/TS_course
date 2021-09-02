{
    // Enkapsulacja
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
            this.preferences = [];
        }
        // public setEmail(email: Email): void {
        //   this.email = email;
        // }
        Person.prototype.getEmail = function () {
            console.log(32, "Email was read");
            return this.email;
        };
        Person.prototype.getPreferences = function () {
            return this.preferences;
            // return Object.assign([], this.preferences); //zwraca kopię tablicy
        };
        return Person;
    }());
    var michal = new Person("Michal", new Email("michal", "kurs_ts.pl"));
    // console.log(michal.toString());
    // michal.email = new Email("michalRad", "kurs_node.pl");
    console.log(44, michal.toString());
    console.log(45, michal.getEmail());
    console.log(michal.getPreferences());
}
