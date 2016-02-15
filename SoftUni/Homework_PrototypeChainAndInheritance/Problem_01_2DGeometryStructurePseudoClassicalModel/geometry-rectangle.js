/* Rectangle – holds the coordinates of its top left corner A(x, y), width (number),
   height (number) and color (in hexadecimal format) */

var geometry = geometry || {};

(function(scope) {
    function Rectangle(corner, width, height, color) {
        geometry.Shape.call(this, color);
        this._corner = corner;
        this._width = width;
        this._height = height;
    }

    Rectangle.extends(scope.Shape);
    Rectangle.prototype.toString = function() {
       return 'Corner: ' + this._corner.toString() + ', width: ' + this._width + ', height: ' + this._height + ', ' + scope.Shape.prototype.toString.call(this);
    };

    scope.Rectangle = Rectangle;
})(geometry);