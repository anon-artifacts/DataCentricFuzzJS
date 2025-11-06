let v3;
try { v3 = new ArrayBuffer(100); } catch (e) {}
let v6;
try { v6 = new Int32Array(v3, 4, 1); } catch (e) {}
var a = v6;
if (a?.length != 1) {
}
if (a?.byteOffset != 4) {
}
if (a?.byteLength != 4) {
}
function foo(a18) {
    var tmp = a?.length;
    if (tmp != 1) {
    }
    tmp = a?.byteOffset;
    if (tmp != 4) {
    }
    tmp = a?.byteLength;
    if (tmp != 4) {
    }
}
for (let i30 = 0; i30 < 1000000; ++i30) {
    try { foo("loop"); } catch (e) {}
}
const v38 = a?.buffer;
try { transferArrayBuffer(v38); } catch (e) {}
var didThrow = false;
try {
    try { foo("after transfer"); } catch (e) {}
} catch(e45) {
    didThrow = true;
}
