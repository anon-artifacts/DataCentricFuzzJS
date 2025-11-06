console.log("This tests that an early return in the first basic block does not crash the DFG's bytecode parser whilst inlining.");
function foo(a4) {
    {
        return a4;
    }
}
function bar(a6) {
    return foo(a6);
}
for (let i9 = 0; i9 < 100; ++i9) {
    bar(i9);
}
foo(42);
bar(42);
var successfullyParsed = true;
