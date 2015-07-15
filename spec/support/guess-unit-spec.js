'use strict';

var Guess = require('../../src/model/guess');
var compareNumber = require('../../src/model/compare-number');
var answerGenerator = require('../../src/model/answer-generator');

describe('Guess', function() {
    describe('#guessNumber()', function() {
        var returnCompareNumber;
        var returnRandomNumber;
        var input;

        beforeEach(function() {
            spyOn(answerGenerator.prototype, 'randomNumberGetter').and.callFake(function() {
                return returnRandomNumber;
            });
            
            spyOn(compareNumber, 'compare').and.callFake(function(input) {
                if(input === '9527') {
                    return returnCompareNumber;
                }
            });
        });

        it('give same number and position should return 4A0B', function() {
            returnRandomNumber = '9527';
            returnCompareNumber = '4A0B';
            var result = new Guess().guessNumber('9527');

            expect(result).toBe('4A0B');
        });
    });
});
