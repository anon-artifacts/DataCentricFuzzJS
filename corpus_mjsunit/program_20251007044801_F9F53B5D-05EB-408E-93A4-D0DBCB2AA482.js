function f0() {
}
let v3;
try { v3 = new Int32Array(2); } catch (e) {}
var obj = v3;
obj[0] = 100;
const v7 = { get: undefined };
const v9 = { set: undefined };
const v12 = { get: undefined, set: undefined };
function f13() {
}
const v14 = { get: f13 };
function f15() {
}
const v16 = { set: f15 };
function f17() {
}
function f18() {
}
const v19 = { get: f17, set: f18 };
const v21 = { configurable: true };
const v23 = { enumerable: false };
const v25 = { writable: false };
const v28 = { configurable: true, writable: true };
const v31 = { enumerable: false, configurable: false };
var throws = [v7,v9,v12,v14,v16,v19,v21,v23,v25,v28,v31,{ configurable: true, value: 15 }];
for (const v37 of throws) {
    function f38() {
        try { Object.defineProperty(obj, 0, v37); } catch (e) {}
    }
    try { f38(); } catch (e) {}
    function f44() {
        const v45 = { 0: v37 };
        try { Object.defineProperties(obj, v45); } catch (e) {}
    }
    try { f44(); } catch (e) {}
}
const v50 = {};
try { Object.defineProperty(obj, 0, v50); } catch (e) {}
const v55 = { configurable: false };
try { Object.defineProperty(obj, 0, v55); } catch (e) {}
const v59 = { enumerable: true };
try { Object.defineProperty(obj, 0, v59); } catch (e) {}
const v63 = { writable: true };
try { Object.defineProperty(obj, 0, v63); } catch (e) {}
obj?.[0];
const v70 = { configurable: false, value: 15 };
try { Object.defineProperty(obj, 0, v70); } catch (e) {}
obj?.[0];
const v77 = { enumerable: true, value: 16 };
try { Object.defineProperty(obj, 0, v77); } catch (e) {}
obj?.[0];
const v84 = { writable: true, value: 17 };
try { Object.defineProperty(obj, 0, v84); } catch (e) {}
obj?.[0];
const v90 = { value: 18 };
try { Object.defineProperty(obj, 0, v90); } catch (e) {}
obj?.[0];
let v95;
try { v95 = Object.getOwnPropertyDescriptor(obj, 0); } catch (e) {}
var desc = v95;
desc?.configurable;
desc?.enumerable;
desc?.writable;
desc?.value;
"get" in desc;
"set" in desc;
const v112 = { value: 20 };
const v114 = { value: 42 };
const v115 = { 0: v112, 1: v114 };
try { Object.defineProperties(obj, v115); } catch (e) {}
obj?.[0];
obj?.[1];
const v121 = (a122) => {
    let v124;
    try { v124 = new a122(4); } catch (e) {}
    var obj = v124;
    obj[0] = 100;
    obj[1] = 200;
    const v131 = -10;
    let v135;
    try { v135 = Math.pow(2, 32); } catch (e) {}
    let v138;
    try { v138 = Math.pow(2, 32); } catch (e) {}
    for (const v142 of [20,300,v131,v135,-v138,NaN]) {
        const v144 = { value: v142 };
        try { Object.defineProperty(obj, 0, v144); } catch (e) {}
        obj[1] = v142;
        obj?.[0];
        obj?.[1];
    }
};
try { anyTypedArrayConstructors.forEach(v121); } catch (e) {}
try { f0(true, true, "test"); } catch (e) {}
