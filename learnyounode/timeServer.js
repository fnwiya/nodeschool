var net = require("net");
var date = new Date();

var server = net.createServer(function (socket) {
    var now = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes();
    socket.end(now);
});
server.listen(process.argv[2]);
