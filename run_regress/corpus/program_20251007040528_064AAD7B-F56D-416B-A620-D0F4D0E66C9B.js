function getter(a1, a2, a3) {
    a3[0] = a1?.[a2];
}
function test(a6, a7, a8) {
    try { a8(a7, 0, a6); } catch (e) {}
    try { a8(a7, 1, a6); } catch (e) {}
    a6?.[0] == a7?.[1];
}
try { noInline(test); } catch (e) {}
const v21 = [2147483648,1];
let v22;
try { v22 = new Uint32Array(v21); } catch (e) {}
var arr = v22;
var resultArr = [];
for (let i27 = 0; i27 < 10000; i27++) {
    try { test(resultArr, arr, getter); } catch (e) {}
}
