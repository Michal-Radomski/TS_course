"use strict";
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
    var Square = /** @class */ (function (_super) {
        __extends(Square, _super);
        function Square(a) {
            var _this = _super.call(this, a, a) || this;
            _this.area = function () {
                return _this.a * _this.a;
            };
            _this.toStr = function () {
                return "Jestem kwadratem o boku " + _super.prototype.area.call(_this);
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
    var cos = new Circle(5);
    cos.area();
    var something = new Square(10);
    something.area();
    var prostokat = new Rectangle(5, 10);
    prostokat.area();
}
