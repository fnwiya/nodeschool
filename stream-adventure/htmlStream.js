var through = require('through2');
var trumpet = require('trumpet');

var tr = trumpet();
var loudStream = tr.select('.loud').createStream();
var upper = through(function (buf, _, next) {
    this.push(buf.toString().toUpperCase());
    next();
});
loudStream.pipe(upper).pipe(loudStream);
process.stdin.pipe(tr).pipe(process.stdout);
