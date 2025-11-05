var global = 0;
const v3 = Object.prototype;
function f5() {
    global++;
}
Object.defineProperty(v3, 0, { set: f5 });
for (let i10 = 0; i10 < 20; ++i10) {
    [1,2];
}
const v20 = Object.prototype;
function f22() {
    global++;
}
Object.defineProperty(v20, 1, { set: f22 });
for (let i27 = 0; i27 < 20; ++i27) {
    [1,2];
}
const v37 = Object.prototype;
function f39() {
    global++;
}
Object.defineProperty(v37, "b", { set: f39 });
for (let i44 = 0; i44 < 20; ++i44) {
    var s = { a: 0, b: 1, 0: 2, 1: 3 };
}
([42])[0];
([42]).length;
