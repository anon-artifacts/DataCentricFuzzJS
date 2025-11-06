const v2 = new Uint8Array(1);
var uint8 = v2;
function test() {
    uint8[0] = 2147483818;
    uint8[0];
}
test();
test();
test();
test();
const v14 = new Uint32Array(1);
var uint32 = v14;
function test2() {
    uint32[0] = 9.228496132430807e+18;
    uint32[0];
}
test2();
test2();
test2();
