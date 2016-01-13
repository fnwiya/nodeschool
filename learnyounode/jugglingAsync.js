var http = require('http');

var urls = [];
urls.push(process.argv[2]);
urls.push(process.argv[3]);
urls.push(process.argv[4]);

var counter = 0;
var results = new Array(urls.length);

function getCallbackClosure(index) {
  return function(response) {
    var buf = '';
    response.on('data', function(data) {
      buf += data.toString();
    });

    response.on('end', function() {
      results[index] = buf;
      counter++;
      if (counter === results.length) {
        results.forEach(function(elm) {
          console.log(elm);
        });
      }
    });
  };
}

for (var i = 0; i < urls.length; i++) {
  http.get(urls[i], getCallbackClosure(i));
};
