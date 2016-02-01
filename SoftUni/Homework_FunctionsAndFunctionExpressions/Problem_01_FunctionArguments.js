// Create a function printArgsInfo() with no parameters. For each argument passed to it,
// the function should return its type and its value.
function printArgsInfo() {
    var args = Array.prototype.slice.call(arguments);
    args.forEach(function(el) {
       console.log('%s (%s)', el, Array.isArray(el) ? 'array' : typeof el);
    });
}

//printArgsInfo(2, 3, 2.5, -110.5564, false);
//printArgsInfo(null, undefined, "", 0, [], {}) ;
//printArgsInfo([1, 2], ["string", "array"], ["single value"]);
//printArgsInfo("some string", [1, 2], ["string", "array"], ["mixed", 2, false, "array"], {name: "Peter", age: 20});
printArgsInfo([[1, [2, [3, [4, 5]]]], ["string", "array"]]);