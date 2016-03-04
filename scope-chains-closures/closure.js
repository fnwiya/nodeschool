function foo() {
    var bar;
    quux = "foo";
    function zip() {
        var quux = "inside zip";
        bar = true;
    }
    return zip;
}
