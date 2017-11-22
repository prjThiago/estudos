'use strict'

const async = require('async');

async.parallel([
    (callback) => {

        console.log('function 1');

        setTimeout(()=> {         
            console.log('timeout 1');   
            callback(null, 'one');
        }, 5000);

    },

    (callback) => {

        console.log('function 2');

        setTimeout(()=> {         
            console.log('timeout 2');      
            callback(null, 'two');
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