/* Triangle – consists of three points A(x, y), B(x, y) and C(x, y). Also has a color (in hexadecimal format)*/

var geometry = geometry || {};

(function(scope) {
    function Triangle(pointA, pointB, pointC, color) {
        geometry.Shape.call(this, color);
        this._verticeA = pointA;
        this._verticeB = pointB;
        this._verticeC = pointC;
    }

    Triangle.extends(scope.Shape);
    Triangle.prototype.toString = function() {
        return 'VerticeA: ' + this._verticeA.toString() + ', verticeB: ' + this._verticeB + ', verticeC: ' + this._verticeC + ', ' + scope.Shape.prototype.toString.call(this);
    };

    scope.Triangle = Triangle;
})(geometry);