/* Call the function printArgsInfo() using call() and apply() as follows:
	Using call() without arguments
	Using call() with arguments
	Using apply() without arguments
	Using apply() with arguments  */

printArgsInfo.call({name: 'Pesho', age: 32});
printArgsInfo.call({name: 'Pesho', age: 32}, 5, 8, 7, false, [1, 2]);
printArgsInfo.apply({name: 'Pesho', age: 54});
printArgsInfo.apply({name: 'Pesho', age: 32}, [5, 8, 7, false, [1, 2]]);


function printArgsInfo() {
    var args = Array.prototype.slice.call(arguments);
    args.forEach(function(el) {
        console.log('%s (%s)', el, Array.isArray(el) ? 'array' : typeof el);
    });
    this.name = arguments[0];
    console.log(this.name);
}
