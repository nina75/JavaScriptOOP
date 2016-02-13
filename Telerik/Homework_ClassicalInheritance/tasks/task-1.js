/* Task Description */
/* 
 Create a function constructor for Person. Each Person must have:
 *	properties `firstname`, `lastname` and `age`
 *	firstname and lastname must always be strings between 3 and 20 characters, containing only Latin letters
 *	age must always be a number in the range 0 150
 *	the setter of age can receive a convertible-to-number value
 *	if any of the above is not met, throw Error
 *	property `fullname`
 *	the getter returns a string in the format 'FIRST_NAME LAST_NAME'
 *	the setter receives a string is the format 'FIRST_NAME LAST_NAME'
 *	it must parse it and set `firstname` and `lastname`
 *	method `introduce()` that returns a string in the format 'Hello! My name is FULL_NAME and I am AGE-years-old'
 *	all methods and properties must be attached to the prototype of the Person
 *	all methods and property setters must return this, if they are not supposed to return other value
 *	enables method-chaining
 */
function solve() {
    var Person = (function () {
        function Person(firstname, lastname, age) {
            this.firstname = firstname;
            this.lastname = lastname;
            this.age = age;
        }

        Object.defineProperty(Person.prototype, 'firstname', {
            get: function() {
                return this._firstname;
            },
            set: function(value) {
                checkName(value);
                this._firstname = value;
            },
            enumerable: true
        });
            
        Object.defineProperty(Person.prototype, 'lastname', {
            get: function() {
                return this._lastname;
            },
            set: function(value) {
                checkName(value);
                this._lastname = value;
            },
            enumerable: true
        });
        
        Object.defineProperty(Person.prototype, 'age', {
            get: function() {
                return this._age;
            },
            set: function(value) {
                checkAge(value);
                this._age = value;
            },
            enumerable: true
        });
        
        Object.defineProperty(Person.prototype, 'fullname', {
            get: function(){
                return this.firstname + ' ' + this.lastname;
            },
            set: function(value) {
                var parts = value.trim().split(/\s+/);
                this.firstname = parts[0];
                this.lastname = parts[1];
            },
            enumerable: true
        });

        Person.prototype.introduce = function() {
            return 'Hello! My name is ' + this.fullname + ' and I am ' + this.age + '-years-old';
        }

        function checkName(input) {
            if(!(/^[A-z]{3,20}$/.test(input))) {
                throw new Error('Invalid name');
            } 
        }  
        
        function checkAge(input) {
            if(isNaN(input) || +input < 0 || +input > 150) {
                throw new Error('Invalid age');
            }
        }
    
            return Person;
    } ());

    return Person;
}
module.exports = solve;
solve();
