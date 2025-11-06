function f() {
}
var o = {};
function* f3() {
    yield 0;
}
o.gf = f3;
let v6;
try { v6 = o.gf(); } catch (e) {}
let v7;
try { v7 = v6.next(); } catch (e) {}
if (v7?.value === 0) {
    try { WScript.Echo("passed"); } catch (e) {}
} else {
    try { WScript.Echo("failed"); } catch (e) {}
}
