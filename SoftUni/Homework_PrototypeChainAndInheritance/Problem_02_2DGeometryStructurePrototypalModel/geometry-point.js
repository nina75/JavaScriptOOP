var geometry = geometry || {};

(function(app) {
    var point = {
        init: function(xCoord, yCoord) {
            this._x = xCoord;
            this._y = yCoord;
            return this;
        },
        toString: function() {
            return '(' + this._x + ', ' + this._y + ')';
        }
    };

    app.point = point;
})(geometry);