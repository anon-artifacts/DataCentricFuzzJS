console.log("This tests that function inlining in the DFG JIT doesn't get confused by constants being reused between inliner and inlinee.");
function foo(a4, a5) {
    if (a5) {
        return a4 + 4;
    }
    return a5 + 5;
}
function bar(a11, a12) {
    return foo(a11, a12) + 5;
}
for (let i17 = 0; i17 < 1000; ++i17) {
    bar(i17, i17 + 1);
}
bar(6, 0);
bar(6, 1);
bar(6, false);
bar(6, true);
