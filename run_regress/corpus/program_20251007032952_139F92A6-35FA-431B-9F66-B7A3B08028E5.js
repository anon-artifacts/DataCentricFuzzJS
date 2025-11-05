var g = 0;
const v3 = RegExp.prototype;
function f5() {
    ++g;
}
Object.defineProperty(v3, "test", { get: f5 });
function f() {
    for (let i12 = 0; i12 < 100; ++i12) {
        /a/.exec("a");
    }
}
f();
