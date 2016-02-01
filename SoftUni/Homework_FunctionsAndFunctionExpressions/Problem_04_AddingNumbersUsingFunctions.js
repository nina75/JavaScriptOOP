/* Write a function add() which adds numbers in a functional manner. It should work as follows:
 •	add(1) // returns 1
 •	add(2)(3) // returns 5
 •	add(1)(1)(1)(1)(1) // returns 5
 •	add(1)(0)(-1)(-1) // returns -1
 We should also be able to store the result and reuse it:
 var addTwo = add(2);
 console.log(addTwo); // 2
 console.log(addTwo(3)); // 5  */

function add(a) {
    var sum = a;
    function f(b) {
        sum += b;
        return f;
    }
    f.toString = function() { return sum; };

    return f;
}

console.log( +add(1)(2) ) ; // 3
console.log( +add(5)(-1)(2) );  // 6
console.log( +add(6)(-1)(-2)(-3) ); // 0
console.log( +add(0)(1)(2)(3)(4)(5) ) ; // 15
var addTwo = add(2);
console.log(+addTwo);
//var addTwo = add(2);
//console.log(+addTwo(3));
//var addTwo = add(2);
//console.log(+addTwo(3)(5));





