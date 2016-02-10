/*Create a class that maintains a list of numbers in ascending order.
  The class will have two methods:
     •	add(num) will add num to the list
     •	get(index) will get the value at the ith index in the list
  You should also provide a length property (not method) that gives the length of the list. */

var SortedList = (function() {
    function SortedList(){
        this._list = [];
        this._len = 0;
    }

    Object.defineProperty(SortedList.prototype, 'len', {
        get: function(){
            return this._len;
        }
    });

    SortedList.prototype.add = function(num) {
        var index = findIndex(this._list, num);
        this._list.splice(index, 0, num);
        this._len++;
    };
    SortedList.prototype.get = function(index) {
        return this._list[index];
    };

    SortedList.prototype.toString = function() {
        return this._list.join(', ');
    };

    function findIndex(arr, element) {
        if(element <= arr[0] || arr.length === 0) {
            return 0;
        }
        if(element >= arr[arr.length - 1]) {
            return arr.length;
        }
        for (var i = 0, len = arr.length; i < len; i += 1) {
            if(arr[i] <= element && element <= arr[i + 1]) {
                return i + 1;
            }
        }
    }

    return SortedList;
})();

var sortedList = new SortedList();
var sl = new SortedList();
sortedList.add(-20);
sortedList.add(5);
sortedList.add(5);
sortedList.add(7);
sortedList.add(-7);
sortedList.add(3);
sortedList.add(-10);
sortedList.add(-0.4);
sortedList.add(6);

sl.add(3);
sl.add(4);
sl.add(1);

console.log('Sorted list: ' + sortedList.toString());
console.log('List\'s lenght = ' + sortedList.len);
console.log('List[3] = ' +  sortedList.get(3));
console.log('------------------------------------------');

console.log('Sorted list: ' + sl.toString());
console.log('List\'s lenght = ' + sl.len);
console.log('List[2] = ' +  sl.get(2));
