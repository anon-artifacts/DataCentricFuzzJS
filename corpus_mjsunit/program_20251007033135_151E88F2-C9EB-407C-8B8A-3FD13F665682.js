var obj = {};
var sym = Symbol();
var gets = 0;
var sets = [];
function f9() {
    return ++gets;
}
function f11(a12) {
    sets.push(a12);
}
Object.defineProperty(obj, sym, { get: f9, set: f11 });
for (let i18 = 1; i18 < 9; i18++) {
    obj[sym];
}
var expected = [];
for (let i28 = 0; i28 < 9; i28++) {
    obj[sym] = i28;
    expected.push(i28);
}
gets = 0;
sets = [];
let v37 = obj[sym];
v37++;
[2];
gets = 0;
sets = [];
obj[sym] *= 12;
[12];
if (typeof reportCompare === "function") {
    reportCompare(0, 0);
}
