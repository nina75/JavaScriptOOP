/* Task Description */
/* 
 Write a function that sums an array of numbers:
 numbers must be always of type Number
 returns `null` if the array is empty
 throws Error if the parameter is not passed (undefined)
 throws if any of the elements is not convertible to Number
 */

function sum(arr) {
    if(!arr.length) {
        return null;
    }
    if(arr == undefined) {
        throw Error;
    }
    return arr.reduce(function (sum, number) {
        number = +number;
        if(isNaN(number)) {
            throw new Error();
        }
        return sum + number;
    }, 0);
}
console.log(sum([1, 2, 3]));
module.exports = sum;