var concat = require('concat-stream');

process.stdin.pipe(concat(function (src) {
    var output = src.toString().split('').reverse().join('');
    console.log(output);
}));
