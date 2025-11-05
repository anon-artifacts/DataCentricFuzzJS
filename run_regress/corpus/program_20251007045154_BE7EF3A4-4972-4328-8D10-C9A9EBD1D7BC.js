console.log("Tests that code that is dead, unreachable, and contains a chain of nodes that use each other in an untyped way doesn't result in the IR getting corrupted.");
function foo(a4) {
    function bar(a6) {
        if (a6) {
            var x = a4;
        }
        return 5;
    }
    return bar;
}
for (let i10 = 0; i10 < 200; i10++) {
    const t11 = foo(42);
    t11(false);
}
const t14 = foo(0);
t14(true);
