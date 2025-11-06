function runNearStackLimit(a1) {
    function t() {
        try {
            t();
        } catch(e4) {
            a1();
        }
    }
    try {
        t();
    } catch(e7) {
    }
}
function g(a9) {
    return a9.bar;
}
function f1() {
}
function f2() {
}
const v13 = {};
var x = Object.defineProperty(v13, "bar", { get: f1 });
g(x);
g(x);
const v21 = {};
var y = Object.defineProperty(v21, "bar", { get: f2 });
g(y);
function f27() {
    g(y);
}
runNearStackLimit(f27);
