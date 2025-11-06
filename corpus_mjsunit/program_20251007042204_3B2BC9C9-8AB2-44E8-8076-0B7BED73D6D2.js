function Module(a1, a2, a3) {
    'use asm';
    const t2 = a1.Int32Array;
    const v5 = new t2(a3);
    var MEM32 = v5;
    function load(a8) {
        a8 = a8 | 0;
        a8 = MEM32[a8 >> 2] | 0;
        return a8 | 0;
    }
    function store(a19, a20) {
        a19 = a19 | 0;
        a20 = a20 | 0;
        MEM32[a19 >> 2] = a20;
    }
    return { load: load, store: store };
}
const v29 = {};
const v32 = new ArrayBuffer(4);
var m = Module(this, v29, v32);
m.store(0, 305419896);
for (let i39 = 1; i39 < 64; ++i39) {
    m.store(((i39 * 4) * 32) * 1024, i39);
}
m.load(0);
for (let i56 = 1; i56 < 64; ++i56) {
    m.load(((i56 * 4) * 32) * 1024);
}
