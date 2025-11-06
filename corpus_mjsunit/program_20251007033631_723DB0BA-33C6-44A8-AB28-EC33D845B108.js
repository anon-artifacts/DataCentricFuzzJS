function foo() {
}
const v7 = new Boolean(true);
const v9 = new Boolean(false);
const v12 = +0;
const v14 = -0;
const v20 = -1;
const v22 = -5;
const v29 = -1026;
const v31 = +98768.2546;
const v33 = -88754.15478;
const v36 = 1 << 32;
const v40 = -(1 << 32);
const v45 = (1 << 32) - 1;
const v48 = 1 << 31;
const v52 = -(1 << 31);
const v55 = 1 << 25;
const v59 = -1 << 25;
const v63 = Number.MAX_VALUE;
const v64 = Number.MIN_VALUE;
const v65 = Number.NaN;
const v66 = Number.POSITIVE_INFINITY;
const v67 = Number.NEGATIVE_INFINITY;
const v68 = new Number(NaN);
const v71 = new Number(+0);
const v74 = new Number(-0);
const v76 = new Number(0);
const v78 = new Number(1);
const v80 = new Number(10);
const v82 = new Number(10.1);
const v84 = new Number(Number.MAX_VALUE);
const v86 = new Number(Number.MIN_VALUE);
const v88 = new Number(Number.NaN);
const v90 = new Number(Number.POSITIVE_INFINITY);
const v92 = new Number(Number.NEGATIVE_INFINITY);
const v97 = "hel" + "lo";
const v106 = new String("");
const v108 = new String("hello");
const v112 = new String("he" + "llo");
const v114 = new Object();
const v118 = [1,2,3];
const v119 = new Object();
var all = [,null,true,false,v7,v9,NaN,v12,v14,0,1,10,10.1,v20,v22,5,124,248,654,987,v29,v31,v33,v36,v40,v45,v48,v52,v55,v59,65536,46341,v63,v64,v65,v66,v67,v68,v71,v74,v76,v78,v80,v82,v84,v86,v88,v90,v92,"","hello",v97,"+0","-0","0","1","10.0","10.1",v106,v108,v112,v114,v118,v119,[1,2,3],foo];
function AsmModule(a127, a128, a129) {
    'use asm';
    var i1 = 65;
    var d1 = 4.6;
    var i2 = -5;
    var d2 = -84.6587;
    var fi1 = a128.i1 | 0;
    var fi2 = a128.i2 | 0;
    var fd1 = +a128.d1;
    var fd2 = +a128.d2;
    var fun1 = a128.fun1;
    var fun2 = a128.fun2;
    var sInf = a127.Infinity;
    var sNaN = a127.NaN;
    var acos = a127.Math.acos;
    var asin = a127.Math.asin;
    var atan = a127.Math.atan;
    var cos = a127.Math.cos;
    var sin = a127.Math.sin;
    var tan = a127.Math.tan;
    var ceil = a127.Math.ceil;
    var floor = a127.Math.floor;
    var exp = a127.Math.exp;
    var log = a127.Math.log;
    var sqrt = a127.Math.sqrt;
    var abs = a127.Math.abs;
    var atan2 = a127.Math.atan2;
    var pow = a127.Math.pow;
    var imul = a127.Math.imul;
    var E = a127.Math.E;
    var LN10 = a127.Math.LN10;
    var LN2 = a127.Math.LN2;
    var LOG2E = a127.Math.LOG2E;
    var LOG10E = a127.Math.LOG10E;
    var PI = a127.Math.PI;
    var SQRT1_2 = a127.Math.SQRT1_2;
    var SQRT2 = a127.Math.SQRT2;
    const t80 = a127.Int8Array;
    const v232 = new t80(a129);
    var a = v232;
    const t83 = a127.Int16Array;
    const v235 = new t83(a129);
    var b = v235;
    const t86 = a127.Int32Array;
    const v238 = new t86(a129);
    var c = v238;
    const t89 = a127.Uint8Array;
    const v241 = new t89(a129);
    var d = v241;
    const t92 = a127.Uint16Array;
    const v244 = new t92(a129);
    var e = v244;
    const t95 = a127.Uint32Array;
    const v247 = new t95(a129);
    var f = v247;
    const t98 = a127.Float32Array;
    const v250 = new t98(a129);
    var g = v250;
    const t101 = a127.Float64Array;
    const v253 = new t101(a129);
    var h = v253;
    function setModuleVar(a256) {
        a256 = +a256;
        var i = 0;
        fi1 = (i1 = (i = ~(~a256)));
        fi2 = (i2 = imul(i, i) | 0);
        fd1 = (d1 = a256);
        fd2 = (d2 = a256 * a256);
    }
    function f1() {
        return i1 | 0;
    }
    function f2() {
        return i2 | 0;
    }
    function f3() {
        return fi1 | 0;
    }
    function f4() {
        return fi2 | 0;
    }
    function f5() {
        return +d1;
    }
    function f6() {
        return +d2;
    }
    function f7() {
        return +fd1;
    }
    function f8() {
        return +fd2;
    }
    const v286 = {
        set: setModuleVar,
        f1: f1,
        f2: f2,
        f3: f3,
        f4: f4,
        f5: f5,
        f6: f6,
        f7: f7,
        f8: f8,
    };
    return v286;
}
const v297 = {
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
var global = v297;
function f299(a300) {
    print(a300);
}
function f303(a304, a305) {
    print(a304, a305);
}
const v314 = {
    fun1: f299,
    fun2: f303,
    i1: 155,
    i2: 658,
    d1: 68.25,
    d2: 3.14156,
    f1: 48.1523,
    f2: 14896.2514,
};
var env = v314;
const v320 = new ArrayBuffer(1 << 20);
var buffer = v320;
var asmModule = AsmModule(global, env, buffer);
for (let i325 = 0; i325 < all.length; ++i325) {
    print((((("set  (a[" + i325) + "](") + all[i325]) + "))= ") + asmModule.set(all[i325]));
    print("i1|0;    " + asmModule.f1());
    print("i2|0;    " + asmModule.f2());
    print("fi1|0;   " + asmModule.f3());
    print("fi2|0;   " + asmModule.f4());
    print("+d1;     " + asmModule.f5());
    print("+d2;     " + asmModule.f6());
    print("+fd1;    " + asmModule.f7());
    print("+fd2;    " + asmModule.f8());
}
