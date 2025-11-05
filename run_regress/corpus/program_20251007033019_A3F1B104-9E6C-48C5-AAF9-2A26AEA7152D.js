function foo() {
    return arguments;
}
function baz(a3, a4, a5) {
    return (a3 + a4) + a5;
}
try { noInline(baz); } catch (e) {}
function bar(a11, a12, a13) {
    let v15;
    try { v15 = foo(a12, a13, 42); } catch (e) {}
    var args = v15;
    const v18 = void 0;
    let v19;
    try { v19 = baz.apply(v18, args); } catch (e) {}
    return v19;
}
try { noInline(bar); } catch (e) {}
for (let i22 = 0; i22 < 10000; ++i22) {
    let v31;
    try { v31 = bar(1, 2, 3); } catch (e) {}
    var result = v31;
    if (result != 47) {
        throw "Error: bad result: " + result;
    }
}
