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
            var result = new Guess().guessNumber('1234');

            expect(result).toBe("4A0B");
        });

        it('give difference position should print 0A4B', function() {
            var result = new Guess().guessNumber('4321');

            expect(result).toBe("0A4B");
        });

        it('give difference number should print 0A0B', function() {
            var result = new Guess().guessNumber('5678');

            expect(result).toBe("0A0B");
        });
    });
});
