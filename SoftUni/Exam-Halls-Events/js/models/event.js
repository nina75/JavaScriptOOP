define([], function() {
    return (function() {
        function Event(options) {
            if (this.constructor === Event) {
                throw new Error("Can't instantiate abstract class!");
            }
            checkIsValidString(options.title);
            checkIsValidString(options.type);
            checkIsNumber(options.duration);
            checkIsValidDate(options.date);

            this._title = options.title;
            this._type = options.type;
            this._duration = options.duration;
            this._date = options.date;
        }

        Event.prototype.getTitle = function() {
            return this._title;
        };
        Event.prototype.getType = function() {
            return this._type;
        };
        Event.prototype.getDuration = function() {
            return this._duration;
        };
        Event.prototype.getDate = function() {
            return this._date;
        };

        function checkIsValidString(str) {
            if(!/^[A-z ]+$/.test(str)) {
                throw new Error('Invalid title or type');
            }
        }

        function checkIsNumber(num) {
            if(isNaN(num)) {
                throw new Error('Invalid duration');
            }
        }

        function checkIsValidDate(date) {
            if(!(date instanceof Date)) {
                throw new Error('Invalid date');
            }
        }

       return Event;

    })();
});

