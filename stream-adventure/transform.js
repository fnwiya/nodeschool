var through = require('through2');
function write(buffer, encoding, next) {
    var str = buffer.toString();
    var upStr = str.toUpperCase();
    this.push(upStr);
    next();
}
function end(done) {
    done();
}
var stream = through(write, end);
process.stdin.pipe(stream).pipe(process.stdout);
