var stdlib = this;
const v6 = new ArrayBuffer(64 * 1024);
var buffer = v6;
var foreign = {};
function Module(a11, a12, a13) {
    'use asm';
    const t6 = a11.Int32Array;
    const v15 = new t6(a13);
    var MEM32 = v15;
    function load(a18) {
        a18 = a18 | 0;
        a18 = MEM32[a18 >> 2] | 0;
        return a18 | 0;
    }
    function store(a29, a30) {
        a29 = a29 | 0;
        a30 = a30 | 0;
        MEM32[a29 >> 2] = a30;
    }
    function load8(a38) {
        a38 = a38 | 0;
        a38 = MEM32[(a38 + 8) >> 2] | 0;
        return a38 | 0;
    }
    function store8(a51, a52) {
        a51 = a51 | 0;
        a52 = a52 | 0;
        MEM32[(a51 + 8) >> 2] = a52;
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
