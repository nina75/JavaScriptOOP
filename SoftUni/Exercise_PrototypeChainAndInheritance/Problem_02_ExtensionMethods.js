/* Write a function getRandom() which works on arrays and returns random elements from the array it’s been called on. 
The function should work like this:
•	Arrays - should return a random element in the array
    var arr = [1, 3, 5, 10];
    arr.getRandom(); // 5 (or some other random item)
•	Strings – should return a random character in the string
    var str = "This is an example string";
    str.getRandom(); // "s" (or some other random item)
•	Objects – should return a random property (key-value pair) from the object
    var obj = {
        name: "Gosho",
        age: 25,
        grade: 5.95,
        isActive: true,
        languages: ["English", "French"]
    };
obj.getRandom(); // { grade: 5.95 } (or some other random property) */

Array.prototype.getRandom = function() {
    var randomIndex = Math.floor(Math.random() * this.length);
    return this[randomIndex];
};

String.prototype.getRandom = function() {
    return Array.prototype.getRandom.call(this);
};

Object.prototype.getRandom = function() {
    var keys = Object.keys(this);
    var randomKey = Array.prototype.getRandom.call(keys);
    return '{ ' + randomKey + ': ' + this[randomKey] + ' }';
};

var arr = [1, 3, 5, 10];
console.log(arr.getRandom());

var str = "This is an example string";
console.log(str.getRandom());

var obj = {
    name: "Gosho",
    age: 25,
    grade: 5.95,
    isActive: true,
    languages: ["English", "French"]
};
console.log(obj.getRandom());