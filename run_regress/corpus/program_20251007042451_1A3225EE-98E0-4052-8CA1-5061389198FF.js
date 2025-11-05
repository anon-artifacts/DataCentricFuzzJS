function foo(a1) {
    return a1?.f + a1?.g;
}
try { noInline(foo); } catch (e) {}
var o = { f: 1, g: 2 };
var p = { g: 3, f: 4 };
for (let i16 = 0; i16 < 2000000; ++i16) {
    try { foo(o); } catch (e) {}
    try { foo(p); } catch (e) {}
}
