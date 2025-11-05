function foo() {
    return (arguments[0] + arguments[1]) + arguments[2];
}
function bar(a10, a11, a12) {
    return foo(a11, a12, 42);
}
for (let i16 = 0; i16 < 200000; ++i16) {
    var result = bar(1, 2, 3);
    if (result != 47) {
        throw "Bad result: " + result;
    }
}
