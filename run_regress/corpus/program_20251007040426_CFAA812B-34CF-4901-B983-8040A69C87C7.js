var o = {};
function f3(a4) {
    throw 7;
}
Object.defineProperty(o, "x", { set: f3 });
function foo(a10) {
    var x = 1;
    try {
        a10.x = 2;
    } catch(e14) {
        x = e14;
    }
    return x;
}
foo(o);
foo(o);
foo(o);
