/* Circle – holds a center point O with coordinates x and y \ (written for simplicity as O(x, y)).
   Also has a radius r (number) and a color (in hexadecimal format)*/

var geometry = geometry || {};

(function(scope) {
    function Circle(center, radius, color) {
        scope.Shape.call(this, color);
        this._center = center;
        this._radius = radius;
    }

    Circle.extends(scope.Shape);
    Circle.prototype.toString = function() {
        return 'Center: ' + this._center.toString() + ', radius: ' + this._radius + ', ' +  scope.Shape.prototype.toString.call(this);
    };

    scope.Circle = Circle;
})(geometry);