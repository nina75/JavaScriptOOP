define([], function() {
    return (function() {
        function Course(name, numberOfLectures) {
            this._name = name;
            this._numberOfLectures = numberOfLectures;
        }

        Course.prototype.getName = function() {
            return this._name;
        };

        Course.prototype.getNumberOfLectures = function() {
            return this._numberOfLectures;
        };

        return Course;

    })();
});

