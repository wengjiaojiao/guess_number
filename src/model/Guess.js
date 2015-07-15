var answerGenerator = require('./answer-generator');
var compareNumber = require('./compare-number');

function Guess() {
    this.answer = new answerGenerator().randomNumberGetter();
}
Guess.prototype.guessNumber = function(input) {
    var result = compareNumber.compare(this.answer, input);

    return result;
}

module.exports = Guess;
