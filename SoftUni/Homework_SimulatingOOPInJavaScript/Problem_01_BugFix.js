/* A fellow programmer tried to create a simple "class" in JavaScript but he's got a problem getting it to work.
   Fix any bugs you may find in his code. */

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.name = this.firstName + " " + this.lastName;
}

var peter = new Person("Peter", "Jackson");
console.log(peter.name);
console.log(peter.firstName);
console.log(peter.lastName);
