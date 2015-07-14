/**
 * Created by wengjiaojiao on 15/7/13.
 */
'use strict';

var compareNumber = require('../../src/model/compareNumber');

describe('compareNumber',function() {
    describe('.compare()', function() {
        var answerOne = '9527';
        var inputOne= '9527';

        it('should return 4A0B',function() {
          var result = compareNumber.compare(answerOne, inputOne);

          expect(result).toBe('4A0B');
        });

        var answerTwo = '9527';
        var inputTwo = '9725';

        it('should return 2A2B',function() {
            var result = compareNumber.compare(answerTwo, inputTwo);

            expect(result).toBe('2A2B');
        });

        var answerThree = '9527';
        var inputThree = '7259';

        it('should return 0A4B',function() {
            var result = compareNumber.compare(answerThree, inputThree);

            expect(result).toBe('0A4B');
        });
        var answerFour = '9527';
        var inputFour = '1346';

        it('should return 0A0B',function() {
            var result = compareNumber.compare(answerFour, inputFour);

            expect(result).toBe('0A0B');
        });
    });
});
