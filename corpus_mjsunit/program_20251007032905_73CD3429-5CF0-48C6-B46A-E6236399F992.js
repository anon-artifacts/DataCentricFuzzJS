function foo(a1, a2) {
    var result = 0;
    for (let i6 = 0; i6 < 100; ++i6) {
        result += a1?.f;
    }
    return result;
}
try { noInline(foo); } catch (e) {}
var o = {};
o.f = 42;
var f = {};
f.f = 43;
f.g = 44;
for (let i23 = 0; i23 < 10000; ++i23) {
    o.f = i23;
}
o.f = 42;
for (let i31 = 0; i31 < 10000; ++i31) {
    var p;
    if (i31 & 1) {
        p = o;
    } else {
        let v42;
        try { v42 = Object.create(o); } catch (e) {}
        p = v42;
    }
    let v43;
    try { v43 = foo(p); } catch (e) {}
    var result = v43;
    if (result != (100 * 42)) {
        throw "Error: bad result: " + result;
    }
}
var q = {};
q.f = 43;
let v54;
try { v54 = foo(q); } catch (e) {}
var result = v54;
if (result != (100 * 43)) {
    throw "Error: bad result at end: " + result;
}
