var geometry = geometry || {};

(function(scope) {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.toString = function() {
        return '(' + this.x + ', ' + this.y + ')';
    };

    scope.Point = Point;
})(geometry);