function Module(a1, a2, a3) {
    'use asm';
    const t2 = a1.Float64Array;
    const v5 = new t2(a3);
    var MEM64 = v5;
    function load(a8) {
        return +MEM64[(a8 = a8 | 0) >> 3];
    }
    function store(a16, a17) {
        a16 = a16 | 0;
        a17 = +a17;
        MEM64[a16 >> 3] = a17;
    }
    return { load: load, store: store };
}
const v25 = {};
const v28 = new ArrayBuffer(8);
var m = Module(this, v25, v28);
m.store(0, 3.12);
for (let i35 = 1; i35 < 64; ++i35) {
    m.store(((i35 * 8) * 32) * 1024, i35);
}
m.load(0);
for (let i52 = 1; i52 < 64; ++i52) {
    m.load(((i52 * 8) * 32) * 1024);
}
