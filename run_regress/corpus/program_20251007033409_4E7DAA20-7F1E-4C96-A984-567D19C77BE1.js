console.log("Tests that the DFG doesn't crash if we constant fold the first read of a local variable in a block that is the result of merging two blocks, where the first doesn't touch the local and the second reads it.");
function foo(a4, a5) {
    var o = {};
    if (a5 == 5) {
        o.f = 42;
    }
    var z = o.f;
    if (a4 == 5) {
        if (a5 == 5) {
            return z;
        }
    }
}
function bar(a18) {
    return foo(a18, 5);
}
for (let i22 = 0; i22 < 200; i22++) {
    bar(5);
}
bar(5);
