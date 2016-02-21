define(['event', 'employee'], function(Event, Employee) {
    return (function() {
        function Party(options) {
            Event.call(this, options);
            checkIsValidEmployee(options.organiser);

            this._isCatered = options.isCatered;
            this._isBirthday = options.isBirthday;
            this._organiser = options.organiser;
        }

        Party.extends(Event);

        Party.prototype.checkIsBirthday = function() {
            return this._isBirthday;
        };

        Party.prototype.checkIsCatered = function() {
            return this._isCatered;
        };

        Party.prototype.getOrganiser = function() {
            return this._organiser;
        };

        function checkIsValidEmployee(employee) {
            if(!(employee instanceof Employee)) {
                throw new Error('Invalid employee');
            }
        }

        return Party;

    })();
});

