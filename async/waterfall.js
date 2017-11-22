'use strict'

const async = require('async');

async.waterfall([
    (callback) => {

        console.log('function 1');

        setTimeout(()=> {         
            console.log('timeout 1');   
            callback(null, 'one', 'two');
        }, 5000);

    },

    (arg1, arg2, callback) => {

        console.log('function 2');
        console.log('arg1: ', arg1);
        console.log('arg2: ', arg2);

        setTimeout(()=> {         
            console.log('timeout 2');      
            callback(null, 'three');
        }, 4000);

    },
    
    (arg1, callback) => {
        
        console.log('function 2');

        setTimeout(()=> {         
            console.log('timeout 2');      
            callback(null, 'done');
        }, 2000);

    },
], (err, results) => {
    
    if(err){
        console.log(err);
    } else {
        console.log(results);
    }
})

console.log('fim');