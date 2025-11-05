function f0() {
    let v1 = "m";
    const v8 = {
        set a(a3) {
            ({"d":v1,} = this);
            function f4() {
                return f0;
            }
        },
        [v1](a6, a7) {
            if (v1) {
            } else {
            }
        },
    };
    return f0;
}
f0();
f0();
f0();
[-443017743,-7204,268435441,-2147483649,-6];
[441313477,-7,-2147483648,-1891975302,-140712941,-4294967296,1];
[653825351,1114203272,-13,64,-7187,-2,1000,-2,-1,-1764697865];
/keEn/gisu;
/(?<a>.)/vyi;
/y9/mygdiu;
function F21(a23) {
    if (!new.target) { throw 'must be called with new'; }
}
const v24 = new F21(9223372036854775807n);
const v25 = new F21(11440n);
new F21(9223372036854775807n);
function F27(a29, a30) {
    if (!new.target) { throw 'must be called with new'; }
}
const v31 = new F27(11440n, 9223372036854775807n);
new WeakSet();
try {
    v24.m(v31, v25);
} catch(e35) {
}
new F27(5n, 9223372036854775807n);
new F27(11440n, 11440n);
function f38() {
}
var BUGNUMBER = 1151149;
const v41 = %WasmStruct();
let v43;
try { v43 = newGlobal(); } catch (e) {}
var global = v43;
const v45 = global?.Array;
let v46;
try { v46 = v45(); } catch (e) {}
const v48 = global?.Symbol.iterator;
let v49;
try { v49 = v46[v48](); } catch (e) {}
var arrayIter = v49;
let v52;
try { v52 = Object.getPrototypeOf(Object); } catch (e) {}
var IteratorPrototype = v52;
