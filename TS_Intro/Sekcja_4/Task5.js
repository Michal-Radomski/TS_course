var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
{
    var Weapon = /** @class */ (function () {
        function Weapon(name, damage, ammoLeft, ammoMax, rateOfFire, range) {
            this.name = name;
            this.damage = damage;
            this.ammoLeft = ammoLeft;
            this.ammoMax = ammoMax;
            this.rateOfFire = rateOfFire;
            this.range = range;
        }
        return Weapon;
    }());
    var Unit = /** @class */ (function () {
        function Unit(name, hitPointsLeft, maxHitPoints, moveDistance, weapons) {
            this.name = name;
            this.hitPointsLeft = hitPointsLeft;
            this.maxHitPoints = maxHitPoints;
            this.moveDistance = moveDistance;
            this.weapons = weapons;
        }
        return Unit;
    }());
    var Infantry = /** @class */ (function (_super) {
        __extends(Infantry, _super);
        function Infantry(name, hitPointsLeft, maxHitPoints, moveDistance, weapons) {
            return _super.call(this, name, hitPointsLeft, maxHitPoints, moveDistance, weapons) || this;
        }
        return Infantry;
    }(Unit));
    var Vehicle = /** @class */ (function (_super) {
        __extends(Vehicle, _super);
        function Vehicle(name, hitPointsLeft, maxHitPoints, moveDistance, weapons, maxFuel, fuelConsumptionPerMove, fuelLeft) {
            var _this = _super.call(this, name, hitPointsLeft, maxHitPoints, moveDistance, weapons) || this;
            _this.maxFuel = maxFuel;
            _this.fuelConsumptionPerMove = fuelConsumptionPerMove;
            _this.fuelLeft = fuelLeft;
            return _this;
        }
        return Vehicle;
    }(Unit));
}
