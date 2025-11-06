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
for (let i21 = 0; i21 < 10000; ++i21) {
    o.f = i21;
}
o.f = 42;
for (let i29 = 0; i29 < 10000; ++i29) {
    let v35;
    try { v35 = foo(o); } catch (e) {}
    if (v35 !== 4200) {
        const v41 = "bad result: " + result;
        let v42;
        try { v42 = new Error(v41); } catch (e) {}
        throw v42;
    }
    let v43;
    try { v43 = foo(f); } catch (e) {}
    var result = v43;
    let v46;
    try { v46 = Number.isNaN(result); } catch (e) {}
    if (!v46) {
        throw "Error: bad result: " + result;
    }
}
var q = {};
q.f = 43;
let v53;
try { v53 = foo(q); } catch (e) {}
var result = v53;
if (result != (100 * 43)) {
    throw "Error: bad result at end: " + result;
}
