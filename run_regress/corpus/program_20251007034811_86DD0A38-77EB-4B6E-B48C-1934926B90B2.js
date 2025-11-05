console.log("Tests that the (x%-1)|0 case in the DFG is handled correctly even when there is some interesting register allocation going on.");
function foo(a4, a5, a6, a7) {
    return (a4 + a5) + ((a6 % a7) | 0);
}
for (let i14 = 0; i14 < 100; ++i14) {
    foo(0, 0, i14, -1);
}
