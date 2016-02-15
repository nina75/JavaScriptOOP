var geometry = geometry || {};

(function(scope) {
    function Shape(color) {
        this._color = color;
    }

    Shape.prototype.toString = function() {
        return 'color: ' + this._color;
    };

    scope.Shape = Shape;

})(geometry);