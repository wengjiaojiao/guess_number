/**
 * Created by wengjiaojiao on 15/7/13.
 */
'use strict';

function answerGenerator() {
    this.mathCollection = "";
}

answerGenerator.prototype.randomNumberGetter = function () {
    var number = 0;

    var collectionLength = 4;

    while(this.mathCollection.length < collectionLength) {
        number = Math.floor(Math.random() * 10);
        if(this.mathCollection.indexOf(number) === -1) {
            this.mathCollection += number;
        }
    }
    return this.mathCollection;
}

module.exports = answerGenerator;
