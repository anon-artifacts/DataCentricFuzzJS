function foo(a1) {
    var result = 0;
    for (let i5 = 0; i5 != 100; ++i5) {
        result += a1?.f;
    }
    return result;
}
try { noInline(foo); } catch (e) {}
var p = { f: 42 };
let v18;
try { v18 = Object.create(p); } catch (e) {}
var o = v18;
for (let i21 = 0; i21 < 500000; ++i21) {
    p.f = i21;
    try { foo(o); } catch (e) {}
}
