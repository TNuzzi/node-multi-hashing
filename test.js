/* 
    To test run the following
    npm update
    node-gyp clean
    node-gyp configure
    node-gyp build --debug
*/
var mh = require('./build/Debug/multihashing.node');

var scryptnHeader = "";
console.log("Testing ScryptN");
console.log(mh.scryptn(Buffer.from('1234test1234test1234test1234dasd'), 20));

console.log("Testing Skein");
console.log(mh.skein(Buffer.from('1234test1234test1234test1234dasd')));

// More test to follow when I work on fixing the rest
//testing a webhook


