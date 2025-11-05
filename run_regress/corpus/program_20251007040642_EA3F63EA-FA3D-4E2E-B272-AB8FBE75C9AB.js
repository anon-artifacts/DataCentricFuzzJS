function foo(a1) {
    return a1?.f;
}
try { noInline(foo); } catch (e) {}
let v7;
try { v7 = Object.create(null); } catch (e) {}
var o = v7;
for (let i10 = 0; i10 < 10000; ++i10) {
    let v16;
    try { v16 = foo(o); } catch (e) {}
    var result = v16;
    if (result !== void 0) {
        throw "Error: bad result in loop: " + result;
    }
}
o.f = 42;
let v24;
try { v24 = foo(o); } catch (e) {}
var result = v24;
if (result !== 42) {
    throw "Error: bad result at end: " + result;
}
