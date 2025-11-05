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
    const v19 = { bar: 42 };
    const v22 = { fuzz: 41, foo: 43 };
    var array = [v17,v19,v22,{ baz: 47 }];
    var result = 0;
    for (let i30 = 0; i30 < 1000000; ++i30) {
        result += foo(array);
    }
    return result;
}
var result = bar();
if (result != 10000000) {
    throw "Bad result: " + result;
}
