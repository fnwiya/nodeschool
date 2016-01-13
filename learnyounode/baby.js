var argc = process.argv.length - 2;
var argSum = 0;
for(var i = 0; i < argc; i++) {
    argSum += Number(process.argv[2 + i]);
}
console.log(argSum);
