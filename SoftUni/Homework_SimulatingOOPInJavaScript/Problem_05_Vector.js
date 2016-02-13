/*Vectors have a lot of applications in programming, mathematics and science. Your task is to write a relatively simple implementation of a vector class. Refer to the example code for more information on how your class is expected to behave.
 All vectors have dimensions. A dimension (also called component) is nothing more than a number. So, a three-dimensional (3D) vector consists of three numbers, a one-dimensional (1D) vector consists of one number, and a 10D vector consists of ten numbers. Your class should contain all dimensions of the vector.
 All vectors have the following methods:
 •	vector.add(other) – returns the sum of the two vectors. It is a new vector with the sum of the components of the original vectors: (1, 2, 3) + (4, 5, 6) = (5, 7, 9)
 •	vector.substract(other) – returns the difference of the two vectors. It is a new vector with the difference of the components of the original vectors: (1, 2, 3) - (4, 5, 6) = (-3, -3, -3)
 •	vector.dot(other) – returns the dot product of the two vectors. It is the sum of the products of the components of the original vectors: (1, 2, 3) . (4, 5, 6) = 1 * 4 + 2 * 5 + 3 * 6 = 32
 •	vector.norm() – returns the square root of the sum of the squared components of the vector. Note that this is a number, not a vector: norm((1, 2, 3)) = sqrt(1 * 1 + 2 * 2 + 3 * 3) = sqrt(14) = 3.7416573867…
 •	vector.toString() – returns a user-friendly representation of the vector. Refer to the example to see how to implement this
 The dimensions of vector and other must always be the same. Throw an exception if this does not happen.
 */

var Vector = (function() {
    function Vector() {
        if (arguments.length === 0) {
            throw new Error('Argument\'s missing');
        }
        if(!Array.isArray(arguments[0]) || arguments[0].length === 0) {
            throw new Error('Incorrect argument');
        }
        this._elements = arguments[0];
        this._dimension = arguments[0].length;
    }

    Vector.prototype.toString = function() {
        return '(' + this._elements.join(', ') + ')';
    };

    Vector.prototype.add = function(other) {
        if(this._dimension !== other._dimension) {
            throw new Error('Invalid operation!');
        }
        var result = [];
        this._elements.forEach(function(el, i) {
           result.push(el + other._elements[i]);
        });

        return new Vector(result);
    };

    Vector.prototype.subtract = function(other) {
        if(this._dimension !== other._dimension) {
            throw new Error('Invalid operation!');
        }
        var result = [];
        this._elements.forEach(function(el, i) {
            result.push(el - other._elements[i]);
        });

        return new Vector(result);
    };

    Vector.prototype.dot = function(other) {
        if(this._dimension !== other._dimension) {
            throw new Error('Invalid operation!');
        }
        var result = 0;
        this._elements.forEach(function(el, i) {
            result += (el * other._elements[i]);
        });

        return result;
    };

    Vector.prototype.norm = function () {
        var sum = 0;
        this._elements.forEach(function(el) {
            sum += (el * el);
        });

        return Math.sqrt(sum);
    };

    return Vector;
})();

var a = new Vector([1, 2, 3]);
var b = new Vector([4, 5, 6]);
var c = new Vector([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
console.log(a.toString());
console.log(c.toString());

// The following throw errors
//var wrong = new Vector();
//var anotherWrong = new Vector([]);
var result = a.add(b);
console.log(result.toString());

//a.add(c); // Error

var a = new Vector([1, 2, 3]);
var b = new Vector([4, 5, 6]);
var c = new Vector([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
var result = a.subtract(b);
console.log(result.toString());

try {
    a.subtract(c);
} catch(ex){
    console.error(ex); // Error
}

var result1 = a.dot(b);
console.log(result1);

//a.dot(c); // Error
console.log(a.norm());
console.log(b.norm());
console.log(c.norm());
console.log(a.add(b).norm());
