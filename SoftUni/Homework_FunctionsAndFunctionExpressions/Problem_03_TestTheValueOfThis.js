/* Create a function testContext() with no parameters. The function should print the this object. Call the function three times:
 •	From the global scope
 •	Inside another function
 •	As an object (for example, using new testContext())
 Write a comment inside your code explaining the different behaviour. */
function testContext() {
    console.log(this);
    console.log(this == global);
}

//from the global scope
testContext(); //window or global

//from another function
function printContext() {
    testContext(); //window or global
}
printContext();

//as function constructor
function Person(name, age) {
    this.name = name;
    this.age = age;
    console.log(this.name + ' ' + this.age);
}

new Person('Pesho', 19); //Pesho 19

//as an object
var obj = {
    name: 'Pesho',
    getThis: function(){console.log(this.name);}
};

obj.getThis(); //Pesho