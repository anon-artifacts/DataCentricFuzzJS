let v2;
try { v2 = new SharedArrayBuffer(4096); } catch (e) {}
var heap = v2;
let v5;
try { v5 = new Uint8Array(heap); } catch (e) {}
var Uint8ArrayView = v5;
function test(a8) {
    let v10;
    try { v10 = new Float32Array(); } catch (e) {}
    var d = v10;
    var c = d | 0;
    var b = 1 % c;
    var a = b | 0;
    Uint8ArrayView[a] = 0;
}
try { noInline(test); } catch (e) {}
for (let i25 = 0; i25 < 200; ++i25) {
    try { test(i25); } catch (e) {}
}
