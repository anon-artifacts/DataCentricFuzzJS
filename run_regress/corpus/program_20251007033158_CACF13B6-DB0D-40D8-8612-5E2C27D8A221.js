function foo(a1) {
    var result = 0;
    for (let i5 = 0; i5 < a1.length; ++i5) {
        result += a1[i5];
    }
    return result;
}
function bar() {
    return foo(arguments);
}
var result = 0;
for (let i18 = 0; i18 < 10000; ++i18) {
    result += bar(i18, i18 + 1, i18 + 2, i18 + 3);
}
if (result != 200040000) {
    throw "Bad result: " + result;
}
