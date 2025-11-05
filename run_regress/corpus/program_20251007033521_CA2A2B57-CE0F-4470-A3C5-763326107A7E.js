function foo(a1, a2) {
    var x = a1 >>> 0;
    a2.f = x | 0;
    for (let i9 = 0; i9 < 100; ++i9) {
        x++;
    }
}
try { noInline(foo); } catch (e) {}
for (let i19 = 0; i19 < 100; ++i19) {
    const v26 = {};
    try { foo(42, v26); } catch (e) {}
}
var o = { g: 43 };
try { foo(47, o); } catch (e) {}
if (o?.f != 47) {
    throw "Error: o.f is " + o?.f;
}
