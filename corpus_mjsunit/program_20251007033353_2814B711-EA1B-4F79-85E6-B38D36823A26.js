function Module(a1, a2, a3) {
    'use asm';
    const t2 = a1.Uint8Array;
    const v5 = new t2(a3);
    var MEM8 = v5;
    function load(a8) {
        a8 = a8 | 0;
        a8 = MEM8[a8] | 0;
        return a8 | 0;
    }
    function store(a17, a18) {
        MEM8[a17 = a17 | 0] = a18 = a18 | 0;
    }
    return { load: load, store: store };
}
const v25 = {};
const v28 = new ArrayBuffer(1);
var m = Module(this, v25, v28);
m.store(0, 255);
for (let i35 = 1; i35 < 64; ++i35) {
    m.store(((i35 * 1) * 32) * 1024, i35);
}
m.load(0);
for (let i52 = 1; i52 < 64; ++i52) {
    m.load(((i52 * 1) * 32) * 1024);
}
