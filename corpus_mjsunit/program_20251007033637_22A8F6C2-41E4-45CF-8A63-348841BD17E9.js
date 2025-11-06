function foo() {
    return arguments;
}
function baz(a3, a4, a5) {
    return (a3 + a4) + a5;
}
function bar(a9, a10, a11) {
    let v13;
    try { v13 = foo(a10, a11, 42); } catch (e) {}
    var args = v13;
    const v16 = void 0;
    let v17;
    try { v17 = baz.apply(v16, args); } catch (e) {}
    return v17;
}
try { noInline(bar); } catch (e) {}
for (let i21 = 0; i21 < 10000; ++i21) {
    let v30;
    try { v30 = bar(1, 2, 3); } catch (e) {}
    var result = v30;
    if (result != 47) {
        throw "Error: bad result: " + result;
    }
}
