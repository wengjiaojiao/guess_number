var answerGenerator = require('./answerGenerator');
var compareNumber = require('./compareNumber');

function Guess() {
    this.answer = new answerGenerator().randomNumberGetter();
}
Guess.prototype.guessNumber = function(input) {
    //var answergenerator = new answerGenerator();
    //var answer = answergenerator.randomNumberGetter();
    var result = compareNumber.compare(this.answer, input);

    return result;
}

module.exports = Guess;
