function foo() {
    return 42;
}
function bar() {
    let v5;
    try { v5 = foo.apply(this, arguments); } catch (e) {}
    return v5;
}
function baz() {
    let v10;
    try { v10 = bar(1, 2, 3); } catch (e) {}
    return v10;
}
try { noInline(baz); } catch (e) {}
for (let i14 = 0; i14 < 10000; ++i14) {
    let v20;
    try { v20 = baz(); } catch (e) {}
    var result = v20;
    if (result != 42) {
        throw "Error: bad result: " + result;
    }
}
