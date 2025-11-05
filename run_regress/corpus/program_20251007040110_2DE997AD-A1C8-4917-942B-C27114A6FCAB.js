function foo() {
    var a = arguments;
    return (a[0] + a[1]) + a[2];
}
function bar(a9, a10, a11) {
    return foo(a10, a11, 42);
}
for (let i15 = 0; i15 < 200000; ++i15) {
    var result = bar(1, 2, 3);
    if (result != 47) {
        throw "Bad result: " + result;
    }
}
