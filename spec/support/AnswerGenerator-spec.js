'use strict';

var AnswerGenerator = require('../../src/model/AnswerGenerator');

describe('AnswerGenerator', function() {
    var returnValue;
    var i = -1;

    beforeEach(function() {
       spyOn(Math,"random").and.callFake(function() {
            return returnValue[i++];
       });
    });


    it('should print 1597', function() {
        returnValue = [0.123,0.532,0.963,0.738];
        i ++;
        var result = AnswerGenerator.RandomNumberGetter();

        expect(result).toBe("1597");
    });
});
