function foo(a1) {
    return a1 ? [42] : null;
}
try { noInline(foo); } catch (e) {}
for (let i9 = 0; i9 < 100; ++i9) {
    try { foo(true); } catch (e) {}
}
let v18;
try { v18 = new Array(); } catch (e) {}
var array = v18;
function f21() {
}
const v22 = Array?.prototype;
try { v22.__defineSetter__("0", f21); } catch (e) {}
for (let i25 = 0; i25 < 100000; ++i25) {
    try { foo(false); } catch (e) {}
}
