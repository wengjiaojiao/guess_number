'use strict';

var answerGenerator = require('../../src/model/answerGenerator');

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
        var result = new answerGenerator();

        expect(result.randomNumberGetter()).toBe("1597");
    });

    it('should print 0579', function() {
        returnValue = [0.023,0.532,0.532,0.738,0.963];
        i = 0;
        var result = new answerGenerator();

        expect(result.randomNumberGetter()).toBe("0579");
    });
});
