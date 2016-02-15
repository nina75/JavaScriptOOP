/*	Line – holds two points A(x, y) and B(x, y), has a color (in hexadecimal format)*/

var geometry = geometry || {};

(function(scope) {
    function Line(pointA, pointB, color) {
        scope.Shape.call(this, color);
        this._pointA = pointA;
        this._pointB = pointB;
    }

    Line.extends(scope.Shape);
    Line.prototype.toString = function() {
        return 'PointA: ' + this._pointA + ', PointB: ' + this._pointB + ', ' + scope.Shape.prototype.toString.call(this);
    };

    scope.Line = Line;

})(geometry);