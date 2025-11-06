function AsmModule(a1, a2, a3) {
    'use asm';
    function add(a5, a6) {
        return +((a5 = +a5) + (a6 = +a6));
    }
    function f2(a12, a13) {
        a12 = +a12;
        a13 = +a13;
        var i = 0;
        var t = 1;
        return +(i = +fTableDbOp[t & 3](a12, a13));
    }
    var fTableDbOp = [add,add,add,add];
    return { f2: f2 };
}
const v40 = {
    Math: Math,
    Int8Array: Int8Array,
    Int16Array: Int16Array,
    Int32Array: Int32Array,
    Uint8Array: Uint8Array,
    Uint16Array: Uint16Array,
    Uint32Array: Uint32Array,
    Float32Array: Float32Array,
    Float64Array: Float64Array,
    Infinity: Infinity,
    NaN: NaN,
};
var stdlib = v40;
var env = {};
const v48 = new ArrayBuffer(1 << 20);
var buffer = v48;
var asmModule = AsmModule(stdlib, env, buffer);
var x = 1;
var y = 2;
print(asmModule.f2(x, y));
print(asmModule.f2(x, y));
