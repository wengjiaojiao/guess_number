'use strict';

var AnswerGenerator = require('../../src/model/AnswerGenerator');

describe('AnswerGenerator', function() {
    var returnValue;
    var i;

    beforeEach(function() {
       spyOn(Math,"random").and.callFake(function() {
            return returnValue[i++];
       });
    });

    it('should print 1597', function() {
        returnValue = [0.123,0.532,0.963,0.738];
        i = 0;
        var result = new AnswerGenerator();

        expect(result.RandomNumberGetter()).toBe("1597");
    });

    it('should print 0579', function() {
        returnValue = [0.023,0.532,0.532,0.738,0.963];
        i = 0;
        var result = new AnswerGenerator();

        expect(result.RandomNumberGetter()).toBe("0579");
    });
});
