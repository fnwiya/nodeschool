var filteredLs = require('./filteredLs');
var dir = process.argv[2];
var filterStr = process.argv[3];

filteredLs(dir, filterStr, function (err, list) {
    if (err){
        return console.error(err);
    }
  list.forEach(function (file) {
    console.log(file);
  });
});
