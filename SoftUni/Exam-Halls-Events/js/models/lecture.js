define(['event', 'trainer', 'course'], function(Event, Trainer, Course) {
    return (function() {
        function Lecture(options) {
            Event.call(this, options);
            checkIsValidTrainer(options.trainer);
            checkIsValidCourse(options.course);
            this._trainer = options.trainer;
            this._course = options.course;
        }

        Lecture.extends(Event);

        Lecture.prototype.getTrainer = function() {
            return this._trainer;
        };

        Lecture.prototype.getCourse = function() {
            return this._course;
        };

        function checkIsValidTrainer(instance) {
            if(!(instance instanceof Trainer)) {
                throw new Error('Invalid trainer');
            }
        }
        function checkIsValidCourse(instance) {
            if(!(instance instanceof Course)) {
                throw new Error('Invalid course');
            }
        }

        return Lecture;

    })();
});

