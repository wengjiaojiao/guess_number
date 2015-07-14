var answerGenerator = require('./answerGenerator');
var compareNumber = require('./compareNumber');

function Guess() {

}
Guess.prototype.guessNumber = function(input) {
    var answergenerator = new answerGenerator();
    var answer = answergenerator.randomNumberGetter();
    var result = compareNumber.compare(answer, input);
    
    return result;
}

module.exports = Guess;
