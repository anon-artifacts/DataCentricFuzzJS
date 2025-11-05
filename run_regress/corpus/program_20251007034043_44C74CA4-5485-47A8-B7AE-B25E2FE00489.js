function Foo(a1) {
    this.g_ = a1;
}
function f4() {
    return this?.g_ + 32;
}
const v9 = Foo?.prototype;
try { v9.__defineGetter__("f", f4); } catch (e) {}
function f12() {
    return this?.g_ + 33;
}
const v17 = Foo?.prototype;
try { v17.__defineGetter__("g", f12); } catch (e) {}
function f20() {
    return this?.g_ + 34;
}
const v25 = Foo?.prototype;
try { v25.__defineGetter__("h", f20); } catch (e) {}
function f28() {
    return this?.g_ + 35;
}
const v33 = Foo?.prototype;
try { v33.__defineGetter__("i", f28); } catch (e) {}
function f36() {
    return this?.g_ + 36;
}
const v41 = Foo?.prototype;
try { v41.__defineGetter__("j", f36); } catch (e) {}
function f44() {
    return this?.g_ + 37;
}
const v49 = Foo?.prototype;
try { v49.__defineGetter__("k", f44); } catch (e) {}
function foo(a52) {
    return a52?.f + (a52?.k * 1000);
}
try { noInline(foo); } catch (e) {}
for (let i61 = 0; i61 < 100; ++i61) {
    let v68;
    try { v68 = new Foo(5); } catch (e) {}
    let v69;
    try { v69 = foo(v68); } catch (e) {}
    var result = v69;
    if (result != ((32 + 5) + ((37 + 5) * 1000))) {
        throw "Error: bad result: " + result;
    }
}
