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
    // Abstrakcja i Polimorfizm
    var Shape = /** @class */ (function () {
        function Shape() {
        }
        return Shape;
    }());
    var Rectangle = /** @class */ (function (_super) {
        __extends(Rectangle, _super);
        function Rectangle(a, b) {
            var _this = _super.call(this) || this;
            _this.area = function () {
                return _this.a * _this.b;
            };
            _this.a = a;
            _this.b = b;
            return _this;
        }
        return Rectangle;
    }(Shape));
    var prostokat = new Rectangle(10, 5);
    var Square = /** @class */ (function (_super) {
        __extends(Square, _super);
        function Square(a) {
            var _this = _super.call(this, a, a) || this;
            _this.toString = function () {
                return "Jestem kwadratem o boku " + _this.a; //może być super.area()
            };
            return _this;
        }
        return Square;
    }(Rectangle));
    var Circle = /** @class */ (function (_super) {
        __extends(Circle, _super);
        function Circle(r) {
            var _this = _super.call(this) || this;
            _this.area = function () {
                return _this.radius * _this.radius * Math.PI;
            };
            _this.radius = r;
            return _this;
        }
        return Circle;
    }(Shape));
    var kwadrat = new Square(5);
    console.log(41, prostokat.area());
    console.log(42, kwadrat.area());
    console.log(43, kwadrat.toString());
    // wykorzystanie abstract
    var cos = new Circle(5);
    console.log(46, cos.area());
    var something = new Square(10);
    console.log(48, something.area());
    var prostokat2 = new Square(12);
    console.log(50, prostokat2.area());
    console.log(51, prostokat2.toString());
}
