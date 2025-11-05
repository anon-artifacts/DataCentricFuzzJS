var o = {};
function f3() {
    throw 7;
}
Object.defineProperty(o, "x", { get: f3 });
function foo(a9) {
    var x = 1;
    try {
        a9.x;
    } catch(e13) {
        x = e13;
    }
    return x;
}
foo(o);
foo(o);
foo(o);
