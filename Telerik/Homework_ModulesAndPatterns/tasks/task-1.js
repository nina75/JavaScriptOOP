/*
 * Create a module for a Telerik Academy course
 * The course has a title and presentations
 * Each presentation also has a title
 * There is a homework for each presentation
 * There is a set of students listed for the course
 * Each student has firstname, lastname and an ID
 * IDs must be unique integer numbers which are at least 1
 * Each student can submit a homework for each presentation in the course
 * --Create method init
 * --Accepts a string - course title
 * --Accepts an array of strings - presentation titles
 * --Throws if there is an invalid title
 * --Titles do not start or end with spaces
 * --Titles do not have consecutive spaces
 * --Titles have at least one character
 * --Throws if there are no presentations
 * --Create method addStudent which lists a student for the course
 * --Accepts a string in the format 'Firstname Lastname'
 * --Throws if any of the names are not valid
 * --Names start with an upper case letter
 * --All other symbols in the name (if any) are lowercase letters
 * --Generates a unique student ID and returns it
 * --Create method getAllStudents that returns an array of students in the format:
 * --{firstname: 'string', lastname: 'string', id: StudentID}
 * --Create method submitHomework
 * --Accepts studentID and homeworkID
 * homeworkID 1 is for the first presentation
 * homeworkID 2 is for the second one
 * ...
 * --Throws if any of the IDs are invalid
 * --Create method pushExamResults
 * --Accepts an array of items in the format {StudentID: ..., Score: ...}
 * StudentIDs which are not listed get 0 points
 * Throw if there is an invalid StudentID
 * Throw if same StudentID is given more than once ( he tried to cheat (: )
 * Throw if Score is not a number
 * Create method getTopStudents which returns an array of the top 10 performing students
 * Array must be sorted from best to worst
 * If there are less than 10, return them all
 * The final score that is used to calculate the top performing students is done as follows:
 * 75% of the exam result
 * 25% the submitted homework (count of submitted homeworks / count of all homeworks) for the course
 */

function solve() {
    var count = 0;

    var course = {
        init: function(title, presentations) {
            checkIsValidTitle(title);
            checkIsValidPresentations(presentations);
            this._title = title;
            this._presentations = presentations;
            this._students = [];
            return this;
        },
        addStudent: function(name) {
            var names,
                firstname,
                lastname,
                student;
            checkIsValidStudentName(name);
            names = name.split(' ');
            firstname = names[0];
            lastname = names[1];
            student = {firstname: firstname, lastname: lastname, id: getStudentId(), homeworks:[], examResult: 0, score: 0};
            this._students.push(student);
            return student.id;
        },
        getAllStudents: function() {
            return this._students.map(function(st) {
                return {firstname: st.firstname, lastname: st.lastname, id: st.id}
            });
        },
        submitHomework: function(studentID, homeworkID) {
            checkStudentId(studentID, this._students);
            checkHomeworkId(homeworkID, this._presentations);
            var student = this._students.filter(function(s){
                return s.id === studentID;
            })[0];
            student.homeworks.push(homeworkID);
        },
        pushExamResults: function(results) {
            var students = this._students;
            results.forEach(function(studentData) {
                var id = studentData.StudentID,
                    score = studentData.score;
                checkStudentId(id, students);
                checkScore(score);
                var student = students.filter(function(s){
                    return s.id === id;
                })[0];

                student.examResult = score;
            });

        },
        getTopStudents: function() {
            var totalHomeworksCount = this._presentations.length,
                topStudents = [];
            this._students.forEach(function(s) {
                s.score = calcScore(s.examResult, 500, s.homeworks.length, totalHomeworksCount );
            });
            this._students.sort(function(x, y) {
                return y.score - x.score;
            });
            topStudents = this._students.slice(0, 10).map(function(s){
                return {firstname: s.firstname, lastname: s.lastname, id: s.id}
            });

            return topStudents;
        }
    };
    function getStudentId() {
        return ++count;
    }

    function checkScore(score){
        if(isNaN(score)) {
            throw new Error('Score must be number');
        }
        if(score < 0) {
            throw new Error('Score can not be negative');
        }
    }

    function checkStudentId(id, arr) {
        if(isNaN(id)) {
            throw new Error('Invalid ID');
        }
        if(!arr.some(function(el){return el.id === id})) {
            throw new Error('No student with ID ' + id);
        }
    }

    function checkHomeworkId(id, arr) {
        if(isNaN(id)) {
            throw new Error('Invalid ID');
        }
        if(id < 1 || id > arr.length) {
            throw new Error('No homework with ID ' + id);
        }
    }

    function checkIsValidStudentName(name){
        if(!/^[A-Z][a-z]*\s[A-Z][a-z]*$/.test(name)) {
            throw new Error('Invalid name');
        }
    }

    function checkIsValidTitle(title){
        if(typeof title !== 'string') {
            throw new Error('Presentation\'s name must be string');
        }
        if(title.length < 1) {
            throw new Error('Presentation\'s name must be at least one symbol');
        }
        if(title.trim() !== title) {
            throw new Error('Presentation\'s name cannot start or end with space');
        }
        if(title.replace(/\s+/, ' ') !== title) {
            throw new Error('Presentation\'s name cannot  have consecutive spaces');
        }
    }

    function checkIsValidPresentations(arr) {
        if(!Array.isArray(arr)) {
            throw new Error('Presentations must be an array');
        }
        if(arr.length === 0) {
            throw new Error('Presentations must be non empty array');
        }
        arr.forEach(function(el) {
            checkIsValidTitle(el);
        });
    }

    function calcScore(examResult, totalExamPoints, homeworksCount, totalHomeworksCount) {
        return 75 * (examResult * 100 / 500) / 100 + 25 * (homeworksCount * 100 / totalHomeworksCount) / 100;
    }

    return course;

}

var jsoop = Object.create(solve());
jsoop.init('JS OOP', [
    'sasa' + 'sasas',
    'pesho' + ' ' + 'gosho',
    'roamda' + '  ' + 'sersem'
]);

//solve();
module.exports = solve;