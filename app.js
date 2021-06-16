const primaryNumbers = require('./find-primes');
const paintNumbers = require('./color-painter');
const {addFile,readfile} = require('./files-handler');
console.log(primaryNumbers(100,200));
const tester = [1,2,3,4,5]
paintNumbers(primaryNumbers(100,200));
const path = "./firstArray"
addFile('firstArray',primaryNumbers(100,200));
readfile(path);
