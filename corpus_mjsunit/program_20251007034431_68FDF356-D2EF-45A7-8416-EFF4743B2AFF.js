const v2 = new Uint8Array();
v2[4294967296] &= 4;
function f3(a4) {
    a4[0] = 2147829340;
}
const v7 = new Uint32Array();
for (let v8 = 0; v8 < 50; v8++) {
    f3(v7);
}
