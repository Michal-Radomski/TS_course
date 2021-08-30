"use strict";
{
    var Email_1 = /** @class */ (function () {
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
                return _this.firstName + " " + _this.email.toString();
            };
            this.firstName = name;
            this.email = email;
        }
        return Person;
    }());
    var pawel_1 = new Person_1("Pawel", new Email_1("pawel", "kurstypescripta.pl"));
    console.log(pawel_1.toString());
}
