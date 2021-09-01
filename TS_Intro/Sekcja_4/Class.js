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
        return Person;
    }());
    var michal = new Person("Michal", new Email("michal", "kurs_ts.pl"));
    console.log(michal.toString());
}
