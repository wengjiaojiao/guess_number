/**
 * Created by wengjiaojiao on 15/7/13.
 */
'use strict';

function compareNumber() {

}


compareNumber.compare = function(answer, input) {
    var numberA = 0;
    var numberB = 0;

    for(var i=0; i < answer.length; i ++) {
        if(answer[i] === input[i]) {
            numberA ++;
            continue;
        }
        if(input.indexOf(answer[i]) > -1) {
            numberB ++;
        }
    }
    return numberA + 'A' + numberB + 'B';
}


module.exports = compareNumber;
