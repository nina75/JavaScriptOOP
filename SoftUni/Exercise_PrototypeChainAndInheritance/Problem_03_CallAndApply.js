//Pretend that Function.prototype.call() does not exist. Write JavaScript’s call() function using apply().

Function.prototype.fakeCall = function(obj) {
    var args = [];
    for (var i = 1; i < arguments.length; i += 1) {
        args.push(arguments[i]);
    }
    return this.apply(obj, args);
};


var obj = {0: 'Pesho', 1: 'Gosho', length: 4, '2': 'Simeon', 3: 'Stavri'};
var arr = Array.prototype.slice.fakeCall(obj, 1,3);
console.log(arr);