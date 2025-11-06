function foo() {
    return arguments.length;
}
for (let i4 = 0; i4 < 100000; ++i4) {
    var r = foo(11, 12, 13, 18, 19, 20);
    if (r != 6) {
        throw "Error: " + r;
    }
}
