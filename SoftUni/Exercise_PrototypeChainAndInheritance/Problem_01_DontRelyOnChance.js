//In JavaScript everything is public and everything can be overwritten.
// To prove this, make the following function work without throwing an error:

Math.random = function(){return 5};

function getRandomNum() {
    var randomNum = Math.floor(Math.random() * 10);
    return randomNum;
}
var mysteryNum = getRandomNum();
for(var i = 0; i < 10; i++) {
    var currentMysteryNum = getRandomNum();
    if(currentMysteryNum != mysteryNum) {
        throw new Error("No chance for you today!");
    }
}
