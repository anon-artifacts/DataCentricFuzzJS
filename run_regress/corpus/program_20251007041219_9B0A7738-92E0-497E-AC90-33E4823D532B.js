function foo(a1, a2) {
    return a1 instanceof a2;
}
try { noInline(foo); } catch (e) {}
class C6 {
}
class C7 {
}
for (let i9 = 0; i9 < 10000; ++i9) {
    let v15;
    try { v15 = new C6(); } catch (e) {}
    let v16;
    try { v16 = foo(v15, C6); } catch (e) {}
    var result = v16;
    if (!result) {
        throw "Error: bad result in loop: " + result;
    }
}
let v21;
try { v21 = new C6(); } catch (e) {}
let v22;
try { v22 = foo(v21, C7); } catch (e) {}
var result = v22;
if (result) {
    throw "Error: bad result at end: " + result;
}
