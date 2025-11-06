for (let i1 = 0; i1 < 20; i1++) {
    m = Math.min(4294967295, 0);
}
m == 0;
const v18 = new ArrayBuffer(4);
var buffer = v18;
const v21 = new Int32Array(buffer);
var int32View = v21;
const v24 = new Uint32Array(buffer);
var uint32View = v24;
int32View[0] = -1;
var m;
for (let i31 = 0; i31 < 20; i31++) {
    m = Math.min(uint32View[0], 0);
}
m == 0;
