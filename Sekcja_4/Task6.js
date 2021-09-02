{
    var Point2D = /** @class */ (function () {
        function Point2D(x1, y1, x2, y2) {
            var _this = this;
            this.distanceBetween = function () {
                return Math.sqrt(Math.pow((_this.x2 - _this.x1), 2) + Math.pow((_this.y2 - _this.y1), 2));
            };
            this.x1 = x1;
            this.y1 = y1;
            this.x2 = x2;
            this.y2 = y2;
        }
        return Point2D;
    }());
    var distance1 = new Point2D(0, 0, 1, 1);
    var distance2 = new Point2D(0, 0, 3, 4);
    console.log(19, distance1.distanceBetween());
    console.log(20, distance2.distanceBetween());
}
