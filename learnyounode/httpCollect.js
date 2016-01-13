var http = require('http');
var url = process.argv[2];

http.get(url, function (response) {
    var count = 0;
    var content = '';
    response.setEncoding('utf8');
    response.on('data', function (data) {
        count += data.length;
        content += data;
    });
    response.on('end', function () {
        console.log(count);
        console.log(content);
    });
    response.on('err', function () {
        console.error(err);
    });
}
);
