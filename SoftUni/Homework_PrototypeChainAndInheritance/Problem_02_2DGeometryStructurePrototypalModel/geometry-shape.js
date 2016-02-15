var geometry = geometry || {};

(function(app) {
    var shape = {
        init: function(color) {
            this._color = color;
            return this;
        },
        toString: function() {
            return 'color: ' + this._color;
        }
    };

    app.shape = shape;
})(geometry);