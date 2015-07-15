'use strict';

var Guess = require('../../src/model/guess');

describe('Guess', function() {
    describe('#guessNumber()', function() {
        beforeEach(function() {
            spyOn(Math, "random").and.callFake(function() {
            return "1234";
            });
        });

        it('give same number should print 4A0B', function() {
            var input = '1234';
            var result = new Guess().guessNumber(input);

            expect(result).toBe("4A0B");
        });

        it('give difference position should print 0A4B', function() {
            var input = '4321';
            var result = new Guess().guessNumber(input);

            expect(result).toBe("0A4B");
        });

        it('give difference number should print 0A0B', function() {
            var input = '5678';
            var result = new Guess().guessNumber(input);

            expect(result).toBe("0A0B");
        });
    });
});
