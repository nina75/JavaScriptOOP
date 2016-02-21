define(['employee'], function(Employee) {
    return (function() {
        function Trainer(name, workHours) {
            Employee.call(this, name, workHours);
            this.courses = [];
            this.feedbacks = [];
        }

        Trainer.extends(Employee);

        Trainer.prototype.addFeedback = function(feedback) {
            this.feedbacks.push(feedback);
        };

        Trainer.prototype.addCourse = function(course) {
            this.courses.push(course);
        };

        return Trainer;
    })();

});

