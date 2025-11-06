var o = {};
function f3() {
    return arguments.callee.caller.caller;
}
Object.defineProperty(o, "p", { get: f3 });
function f() {
    function g() {
        return o.p;
    }
    return g();
}
for (let i16 = 0; i16 < 2; i16++) {
    f();
    f();
}
