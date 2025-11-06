function Foo() {
    this._f = 42;
}
function f4() {
    return this?._f;
}
const v7 = Foo?.prototype;
try { v7.__defineGetter__("f", f4); } catch (e) {}
function f10(a11) {
    this._f = a11;
}
const v13 = Foo?.prototype;
try { v13.__defineSetter__("f", f10); } catch (e) {}
function foo(a16, a17) {
    for (let i19 = 0; i19 < 1000; ++i19) {
        a16.f = a17;
    }
    return a16?.f;
}
try { noInline(foo); } catch (e) {}
for (let i29 = 0; i29 < 10000; ++i29) {
    let v35;
    try { v35 = new Foo(); } catch (e) {}
    let v37;
    try { v37 = foo(v35, 42); } catch (e) {}
    var result = v37;
    if (result != 42) {
        throw "Error: bad result: " + result;
    }
}
