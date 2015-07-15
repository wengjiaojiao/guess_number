/**
 * Created by wengjiaojiao on 15/7/13.
 */
'use strict';

var compareNumber = require('../../src/model/compare-number');

describe('compareNumber',function() {
    describe('.compare()', function() {

        it('should return 4A0B',function() {
          var result = compareNumber.compare('9527', '9527');

          expect(result).toBe('4A0B');
        });

        it('should return 2A2B',function() {
            var result = compareNumber.compare('9527', '9725');

            expect(result).toBe('2A2B');
        });

        it('should return 0A4B',function() {
            var result = compareNumber.compare('9527', '7259');

            expect(result).toBe('0A4B');
        });

        it('should return 0A0B',function() {
            var result = compareNumber.compare('9527', '1346');

            expect(result).toBe('0A0B');
        });
    });
});
