function f() {
    var res = 0;
    for (let i4 = 0; i4 < 100; i4++) {
        if (/a/.exec("a")) {
            res++;
        }
    }
}
const t8 = RegExp.prototype;
delete t8.test;
gc();
f();
function f21() {
}
const t14 = RegExp.prototype;
t14.test = f21;
gc();
f();
const v27 = RegExp.prototype;
function f29() {
}
Object.defineProperty(v27, "test", { get: f29 });
gc();
f();
