/*After you've solved your friend's problem, now he's got another one. He wants to be able to change the names. Rewrite the function Person() so that it will work according to what his boss wants.
 You should be able to get and update the values of the first and last name. If you change the first or last name, the full name will need to change automatically. Also, if you change the full name, the first and last names must change too. Refer to the samples to get a better understanding. Assume that all data will be valid (e. g., for person.fullName you will always get two words, separated by a single space).
 Note that firstName, lastName and fullName are properties (not functions).
 Hint: You may need to check one of the rather "exotic" ways to work with properties in JavaScript.
 For the samples, assume the following variable exists:
 var person = new Person("Peter", "Jackson");
 */
function Person(fname, lname) {
    this.firstName = fname;
    this.lastName = lname;
}
Object.defineProperty(Person.prototype, 'fullName', {
    get: function() {
        return this.firstName + ' ' + this.lastName;
    },
    set: function(value) {
        var parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
});

var person = new Person("Peter", "Jackson");
// Getting values
console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName);
// Changing values
person.firstName = "Michael";
console.log(person.firstName);
console.log(person.fullName);
person.lastName = "Williams";
console.log(person.lastName);
console.log(person.fullName);
