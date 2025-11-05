function foo() {
    return arguments;
}
function bar(a3, a4, a5, a6) {
    let v8;
    try { v8 = foo(a4, a5, 42); } catch (e) {}
    var args = v8;
    return args?.[a6];
}
try { noInline(bar); } catch (e) {}
var expected = [2,3,42];
for (let i19 = 0; i19 < 10000; ++i19) {
    const v29 = i19 % 3;
    let v30;
    try { v30 = bar(1, 2, 3, v29); } catch (e) {}
    var result = v30;
    if (result != expected?.[i19 % 3]) {
        throw "Error: bad result: " + result;
    }
}
