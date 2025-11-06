function Foo() {
    this._f = 42;
}
function f4() {
    return this?._f;
}
const v7 = Foo?.prototype;
try { v7.__defineGetter__("f", f4); } catch (e) {}
function foo(a10) {
    var result = 0;
    for (let i14 = 0; i14 < 1000; ++i14) {
        result += a10?.f;
    }
    return result;
}
try { noInline(foo); } catch (e) {}
for (let i24 = 0; i24 < 10000; ++i24) {
    let v30;
    try { v30 = new Foo(); } catch (e) {}
    let v31;
    try { v31 = foo(v30); } catch (e) {}
    var result = v31;
    if (result != (1000 * 42)) {
        throw "Error: bad result: " + result;
    }
}
