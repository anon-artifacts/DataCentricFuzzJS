var stdlib = this;
const v6 = new ArrayBuffer(64 * 1024);
var buffer = v6;
var foreign = {};
function Module(a11, a12, a13) {
    'use asm';
    const t6 = a11.Float32Array;
    const v15 = new t6(a13);
    var MEM32 = v15;
    function load(a18) {
        return +MEM32[(a18 = a18 | 0) >> 2];
    }
    function store(a26, a27) {
        a26 = a26 | 0;
        a27 = +a27;
        MEM32[a26 >> 2] = a27;
    }
    function load8(a34) {
        return +MEM32[((a34 = a34 | 0) + 8) >> 2];
    }
    function store8(a44, a45) {
        a44 = a44 | 0;
        a45 = +a45;
        MEM32[(a44 + 8) >> 2] = a45;
    }
    return { load: load, store: store, load8: load8, store8: store8 };
}
var m = Module(stdlib, foreign, buffer);
m.load(-8);
m.load8(-16);
m.store(0, 42);
m.load8(-8);
m.store8(-8, 99);
m.load(0);
m.load8(-8);
