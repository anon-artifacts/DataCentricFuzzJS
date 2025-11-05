function foo(a1) {
    var result = 0;
    for (let i5 = 0; i5 < a1.length; ++i5) {
        result <<= 1;
        result ^= "foo" in a1[i5];
    }
    return result;
}
function bar() {
    const v17 = { foo: 42 };
    var array = [v17,{ foo: 42 }];
    var result = 0;
    for (let i25 = 0; i25 < 1000000; ++i25) {
        result += foo(array);
    }
    return result;
}
var result = bar();
if (result != 3000000) {
    throw "Bad result: " + result;
}
