/* Task description */
/*
 Write a function that finds all the prime numbers in a range
 1) it should return the prime numbers in an array
 2) it must throw an Error if any on the range params is not convertible to `Number`
 3) it must throw an Error if any of the range params is missing
 */



function findPrimes(from, to) {
    var primes = [];
    if(isNaN(from) || isNaN(to)) {
        throw Error('Invalid arguments');
    }
    if(from == undefined || to == undefined) {
        throw Error('Missing arguments');
    }
    for (var i = +from; i <= +to; i += 1) {
        if(isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
    function isPrime(num) {
        if(num == 0 || num == 1) {
            return false;
        }
        var limit = Math.sqrt(num) | 0;
        for(var i = 2; i <= limit; i += 1) {
            if(!(num % i)) {
                return false;
            }
        }

        return true;
    }
}

module.exports = findPrimes;

