'use strict'

const async = require('async');
let counter = 0;

async.whilst(
    function() { return counter < 5; },
    function(callback) {
        counter++;
        setTimeout(function() {
            console.log(counter);
            callback('null', counter);
        }, 1000);
    },
    function (err, n) {
        // 5 seconds have passed, n = 5
        if(err) {
            console.log('error: ', err);
        } else {
            console.log('OK: ', n);
        }
    }
);

console.log('fim');