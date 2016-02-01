/* Write a function compose(f, g) which returns the function composition of f() and g(). compose(f, g) (where f and g are functions)
   should return another function, and compose(f, g)(x) should return the value of the composition applied to the argument x.
   For simplicity, assume that f() can take only one argument. */

function add(x, y) {
    return x + y;
}
function addOne(x) {
    return x + 1;
}
function square(x) {
    return x * x;
}

//it's my creation... it even works! :D
function compose(f,  g) {
    return function() {
        var args = Array.prototype.slice.call(arguments);
        return f(g.apply(null, args));
    }
}
//addOne(square(5))
console.log(compose(addOne, square)(5));
console.log(compose(addOne, add)(5, 6));
console.log(compose(Math.cos, addOne)(-1));
console.log(compose(addOne, Math.cos)(-1));

var compositeFunction = compose(Math.sqrt, Math.cos);
console.log(compositeFunction(0.5));
console.log(compositeFunction(1));
console.log(compositeFunction(-1));

