/* Create a module for working with the console object. The module should support the following functionality:
 •	Writing a line to the console
 •	Writing a line to the console using formatting (with placeholders, like in C#). The first placeholder is {0}, the second is {1} and so on
 o	For simplicity, assume that no message will need to contain the string "{0}", i. e. all numbers between { and } should be considered placeholders
 o	Throw an error if there are not enough arguments passed to the function. For example, specialConsole.writeLine("Message: {1}", hello"); should not work
 •	Writing errors, warnings and messages to the console with and without format
 o	Check the documentation for console.error(), console.warn() and console.info()
 •	If there are some objects passed to any of the functions, their toString() method must be called  */
var specialConsole = (function() {
    function replacePlaceholders() {
        var params = arguments[0];
        var str, regex;
        str = params[0];
        params.slice(1).forEach(function(arg, index) {
            regex = new RegExp('\\{' + index + '}', 'g');
            str = str.replace(regex, arg);
        });

        return str;
    }

    function writeLine() {
        var str, args, regex, hasError, errorMsg;
        if(!arguments.length) {
            console.log();
        } else {
            str = arguments[0];
            args = Array.prototype.slice.call(arguments, 1);
            args.forEach(function(arg, index) {
                regex = new RegExp('\\{' + index + '}', 'g');
                if(!regex.test(str)) {
                    errorMsg = 'Error: Placeholder ' + index + ' not exists';
                    hasError = true;
                }
                str = str.replace(regex, arg);
            });
            if(/\{\d+}/.test(str)) {
                errorMsg = 'Error: Not enough arguments';
                hasError = true;
            }
            if(!hasError) {
                console.log(str);
            } else {
                console.error(errorMsg);
            }
        }
    }

    function writeError() {
        var args = Array.prototype.slice.call(arguments);
        console.error(replacePlaceholders(args));
    }

    function writeWarning() {
        var args = Array.prototype.slice.call(arguments);
        console.warn(replacePlaceholders(args));
    }

    function writeInfo() {
        var args = Array.prototype.slice.call(arguments);
        console.info(replacePlaceholders(args));
    }

    return {
        writeLine: writeLine,
        writeError: writeError,
        writeWarning : writeWarning,
        writeInfo: writeInfo
    }
})();

specialConsole.writeLine("Message: hello");
specialConsole.writeLine("Message: {0}", "hello");
specialConsole.writeLine("Object: {0}", { name: "Gosho", toString: function() { return this.name; }});

specialConsole.writeError("Error: {0}", "A fatal error has occurred.");
specialConsole.writeWarning("Warning: {0}", "You are not allowed to do that!");
specialConsole.writeInfo("Info: {0}", "Hi there! Here is some info for you.");
specialConsole.writeError("Error object: {0}", { msg: "An error happened", toString: function() { return this.msg }});