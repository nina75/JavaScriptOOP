var geometry = geometry || {};

(function(app) {
    var circle = app.shape.extends({
        init: function(center, radius, color) {
            this._parent.init.call(this, color);
            this._center = center;
            this._radius = radius;
            return this;
        },
        toString: function() {
            return  'Center: ' + this._center.toString() + ', radius: ' + this._radius + ', ' + this._parent.toString.call(this);
        }
    });

    //Закоментираното е, ако не използваме extends метода:
    //var circle = Object.create(app.shape);
    //circle.init = function(center, radius, color) {
    //    app.shape.init.call(this, color);
    //    this._center = center;
    //    this._radius = radius;
    //    return this;
    //};
    //circle.toString = function () {
    //    return 'Center: ' + this._center.toString() + ', radius: ' + this._radius + ', ' + app.shape.toString.call(this);
    //};

    app.circle = circle;
})(geometry);