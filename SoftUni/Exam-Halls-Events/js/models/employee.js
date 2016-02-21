define([], function(){
    return (function() {
        function Employee(name, workHours) {
            this._name = name;
            this._workHours = workHours;
        }

        Employee.prototype.getName = function() {
            return this._name;
        };

        Employee.prototype.getWorkhours = function() {
            return this._workHours;
        };

        return Employee;
    })();
});

