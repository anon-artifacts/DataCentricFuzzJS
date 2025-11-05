function foo(a1, a2) {
    return (a1 + a2)?.length;
}
function bar() {
    let v8;
    try { v8 = foo("hello ", "world!"); } catch (e) {}
    return v8;
}
try { noInline(bar); } catch (e) {}
var result;
for (let i14 = 0; i14 < 1000000; ++i14) {
    let v20;
    try { v20 = bar(); } catch (e) {}
    result = v20;
}
if (result != ("hello world!")?.length) {
    throw "Error: bad result: " + result;
}
