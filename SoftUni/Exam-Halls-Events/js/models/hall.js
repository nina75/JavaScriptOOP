define(['lecture', 'party'], function(Lecture, Party) {
    return (function() {
        function Hall(name, capacity) {
            this._name = name;
            this._capacity = capacity;
            this.parties = [];
            this.lectures = [];
        }

        Hall.prototype.getName = function() {
            return this._name;
        };

        Hall.prototype.getCapacity = function() {
            return this._capacity;
        };

        Hall.prototype.addEvent = function(event) {
            if(event instanceof Party) {
                this.parties.push(event);
            }
            if(event instanceof Lecture) {
                this.lectures.push(event);
            }
        };
       return Hall;

    })();
});



