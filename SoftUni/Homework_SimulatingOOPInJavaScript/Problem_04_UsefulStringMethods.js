/*Write the following methods which work on strings. All methods should return new strings, and should not modify the existing string instances.
 •	string.startsWith(substring) – returns true if the string starts with the provided substring and false otherwise
 •	string.endsWith(substring) – returns true if the string ends with the provided substring and false otherwise
 •	string.left(count) – returns the first count characters of the string. If count is greater than the length of the string, returns the whole string
 •	string.right(count) – returns the last count characters of the string. If count is greater than the length of the string, returns the whole string
 •	string.padLeft(count, character) – returns a new string which contains count times the specified character at its beginning. character is optional and defaults to space
 •	string.padRight(count, character) – returns a new string which contains count times the specified character at its end. character is optional and defaults to space
 •	string.repeat(count) – repeats the provided string count times. Do not use the default implementation here, write your own
  Try to make all methods as efficient as possible (they should consume little memory and take little time to complete). Assume that all parameters will be correct (e. g. substring will be a string, count will be a number, etc.).
 */

String.prototype.startsWith = function(substring) {
    return new RegExp('^' + substring).test(this);
};

String.prototype.endsWith = function(substring) {
    return new RegExp(substring + '$').test(this);
};

String.prototype.left = function(count) {
    return this.substr(0, count);
};

String.prototype.right = function(count) {
    var len = this.length - count < 0 ? 0 : this.length - count;
    return this.substr(len, count);
};

String.prototype.padLeft = function(count, character) {
    var character = character || ' ',
        count = count - this.length < 0 ? 0 : count - this.length;
    return character.repeat(count) + this;
};

String.prototype.padRight = function(count, character) {
    var character = character || ' ',
        count = count - this.length < 0 ? 0 : count - this.length;
    return this + character.repeat(count);
};

//String.prototype.repeat = function(count) {
//    var result = '';
//    for (var i = 0; i < this.length; i += 1) {
//        result += this;
//    }
//    return result;
//};

var example = "This is an example string used only for demonstration purposes.";
console.log(example.startsWith("This")); //true
console.log(example.startsWith("this")); //false
console.log(example.startsWith("other")); //false

console.log(example.endsWith("poses."));
console.log(example.endsWith ("example"));
console.log(example.startsWith("something else"));

console.log(example.left(9));
console.log(example.left(90));

console.log(example.right(9));
console.log(example.right(90));

// Combinations must also work
var example1 = "abcdefgh";
console.log(example1.left(5).right(2));

var hello = "hello";
console.log(hello.padLeft(5));
console.log(hello.padLeft(10));
console.log(hello.padLeft(5, "."));
console.log(hello.padLeft(10, "."));
console.log(hello.padLeft(2, "."));

console.log(hello.padRight(5));
console.log(hello.padRight(10));
console.log(hello.padRight(5, "."));
console.log(hello.padRight(10, "."));
console.log(hello.padRight(2, "."));

var character = "*";
console.log(character.repeat(5));
// Alternative syntax
console.log("~".repeat(3));
// Another combination
console.log("*".repeat(5).padLeft(10, "-").padRight(15, "+"));


