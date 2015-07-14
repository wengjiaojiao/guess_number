/**
 * Created by wengjiaojiao on 15/7/13.
 */
'use strict';

function AnswerGenerator() {
    
}

AnswerGenerator.RandomNumberGetter = function () {
    var number = 0;
    var mathCollection = "";
    var collectionLength = 4;

    while(mathCollection.length < collectionLength) {
        number = Math.floor(Math.random() * 10);
        if(mathCollection.indexOf(number) === -1) {
            mathCollection += number;
        }
    }
    return mathCollection;
}

module.exports = AnswerGenerator;
