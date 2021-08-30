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
            this.preferences = [];
        }
        Person.prototype.setEmail = function (email) {
            this.email = email;
        };
        Person.prototype.getEmail = function () {
            console.log("Email filed was read");
            return this.email;
        };
        Person.prototype.getPreferences = function () {
            return Object.assign([], this.preferences);
        };
        Person.prototype.addPreference = function (pref) {
            this.preferences.push(pref);
            return this.preferences;
        };
        return Person;
    }());
    var email = new Email_1("pawel", "kurstypescripta.pl");
    var pawel_1 = new Person_1("Pawel", email);
    console.log(pawel_1.getEmail());
}
