'use strict';

var Guess = require('../../src/model/Guess');
var compareNumber = require('../../src/model/compareNumber');
var answerGenerator = require('../../src/model/answerGenerator');

describe('Guess', function() {
    describe('#guessNumber()', function() {
        var returnCompareNumber;
        var returnRandomNumber;
        var input;

        beforeEach(function() {
            spyOn(compareNumber, "compare").and.callFake(function(value) {
                if(value === input) {
                    return returnCompareNumber;
                }
            });
            spyOn(answerGenerator.prototype, "randomNumberGetter").and.callFake(function() {
                return returnRandomNumber;
            });
        });

        it('give same number and position should return 4A0B', function() {
            returnRandomNumber = "9527";
            returnCompareNumber = "4A0B";
            input = "9527";
            var result = new Guess().guessNumber(input);

            expect(result).toBe("4A0B");
        });
    });
});