/*Implement a function flatten() which works on an array of arrays and returns a new array (does not modify the original one).
  The function extracts all inner arrays and merges all values into a single-dimensional array.*/

Array.prototype.flatten = function() {
    var resultArray = [];
    innerFlatten(this);
    function innerFlatten(arr) {
        arr.forEach(function(el) {
            if(Array.isArray(el)) {
                innerFlatten(el);
            } else {
                resultArray.push(el);
            }
        });
    }

    return resultArray;
};

var array = [1, 2, 3, 4];
console.log(array.flatten());// Not changed
var array = [1, 2, [3, 4], [5, 6]];
console.log(array.flatten());
var array = [0, ["string", "values"], 5.5, [[[1, 2], true], [3, 4, false]], 10];
console.log(array.flatten());
