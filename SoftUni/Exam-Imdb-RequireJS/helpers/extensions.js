define([], function() {
    Object.prototype.extends = function(properties) {
        function Child(){}
        Child.prototype = Object.create(this);
        for(var prop in properties) {
            Child.prototype[prop] = properties[prop];
        }
        Child.prototype._parent = this;

        return new Child();
    };
});

