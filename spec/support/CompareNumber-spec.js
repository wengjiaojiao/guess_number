/**
 * Created by wengjiaojiao on 15/7/13.
 */
'use strict';

var CompareNumber = require('../../src/model/CompareNumber');

describe('CompareNumber',function() {
    var answerOne = '9527';
    var inputOne= '9527';

    it('should print 4A0B',function() {
      var result = CompareNumber.compare(answerOne, inputOne);

      expect(result).toBe('4A0B');
    });

    var answerTwo = '9527';
    var inputTwo = '9725';

    it('should print 2A2B',function() {
        var result = CompareNumber.compare(answerTwo, inputTwo);

        expect(result).toBe('2A2B');
    });

    var answerThree = '9527';
    var inputThree = '9752';

    it('should print 1A3B',function() {
        var result = CompareNumber.compare(answerThree, inputThree);

        expect(result).toBe('1A3B');
    });
});
