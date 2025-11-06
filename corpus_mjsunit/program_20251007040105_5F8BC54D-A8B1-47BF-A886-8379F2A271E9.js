function foo() {
    return arguments;
}
function Baz(a3, a4, a5) {
    this.f = (a3 + a4) + a5;
}
try { noInline(Baz); } catch (e) {}
function bar(a12, a13, a14) {
    let v16;
    try { v16 = foo(a13, a14, 42); } catch (e) {}
    var args = v16;
    let v18;
    try { v18 = new Baz(...args); } catch (e) {}
    return v18;
}
try { noInline(bar); } catch (e) {}
for (let i21 = 0; i21 < 10000; ++i21) {
    let v30;
    try { v30 = bar(1, 2, 3); } catch (e) {}
    var result = v30;
    if (result?.f != 47) {
        throw "Error: bad result: " + result?.f;
    }
}
