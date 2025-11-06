function foo(a1) {
    return a1?.f;
}
try { noInline(foo); } catch (e) {}
var p = { f: 42 };
let v9;
try { v9 = Object.create(p); } catch (e) {}
var o = v9;
for (let i12 = 0; i12 < 100; ++i12) {
    p["i" + i12] = i12;
    for (let i21 = 0; i21 < 100; ++i21) {
        let v27;
        try { v27 = foo(o); } catch (e) {}
        var result = v27;
        if (result != 42) {
            throw "Error: bad result: " + result;
        }
    }
}
for (let i34 = 0; i34 < 100; ++i34) {
    var tmp = o?.f;
}
p.f = 43;
let v43;
try { v43 = foo(o); } catch (e) {}
var result = v43;
if (result != 43) {
    throw "Error: bad result at end: " + result;
}
