function Module(a1, a2, a3) {
    'use asm';
    const t2 = a1.Int16Array;
    const v5 = new t2(a3);
    var MEM16 = v5;
    function load(a8) {
        a8 = a8 | 0;
        a8 = MEM16[a8 >> 1] | 0;
        return a8 | 0;
    }
    function loadm1() {
        var i = -1 << 1;
        return MEM16[i >> 1] | 0;
        return 0;
    }
    function store(a31, a32) {
        a31 = a31 | 0;
        a32 = a32 | 0;
        MEM16[a31 >> 1] = a32;
    }
    function storem1(a40) {
        a40 = a40 | 0;
        var i = -1 << 1;
        MEM16[i >> 1] = a40;
    }
    return { load: load, loadm1: loadm1, store: store, storem1: storem1 };
}
const v52 = {};
const v55 = new ArrayBuffer(2);
var m = Module(this, v52, v55);
m.store(-1000, 4);
m.load(-1000);
m.loadm1();
m.storem1(1);
m.loadm1();
m.store(0, 32767);
for (let i76 = 1; i76 < 64; ++i76) {
    m.store(((i76 * 2) * 32) * 1024, i76);
}
m.load(0);
for (let i93 = 1; i93 < 64; ++i93) {
    m.load(((i93 * 2) * 32) * 1024);
}
