var fs = require('fs');
fs.readFile(process.argv[2], function (err, data) {
    var str = data.toString();
    var list = str.split('\n');
    console.log(list.length-1);
});
