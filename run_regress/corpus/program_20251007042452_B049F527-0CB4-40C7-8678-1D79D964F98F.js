console.log("Tests that attempts by the DFG simplification to short-circuit a Phantom to a GetLocal on a variable that is SetLocal'd in the same block, and where the predecessor block(s) make no mention of that variable, do not result in crashes.");
function baz() {
    function f4() {
    }
    return f4;
}
function stuff(a6) {
}
function foo(a8, a9) {
    var a = arguments;
    baz();
    var z = a8;
    stuff(z);
    return 42;
}
function f16(a17) {
}
var o = { g: f16 };
function thingy(a21) {
    var p = {};
    var result;
    if (a21.g) {
        p.f = true;
    }
    if (p.f) {
        result = foo("hello", 2);
    }
    return result;
}
for (let i33 = 0; i33 < 200; i33++) {
    thingy(o);
}
thingy(o);
