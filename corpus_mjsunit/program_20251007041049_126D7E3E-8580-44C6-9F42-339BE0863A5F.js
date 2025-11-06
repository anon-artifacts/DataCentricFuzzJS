console.log("Tests that the DFG knows that a function that appears like Math.sqrt could potentially use value in arbitrary ways, and not just in a context that converts values to numbers.");
function foo(a4, a5, a6) {
    return a4(a5[a6]);
}
function bar(a10) {
    return a10;
}
for (let i12 = 0; i12 < 200; ++i12) {
    var f;
    var array;
    var expected;
    if (i12 == 190) {
        f = bar;
        array = [,1.5];
        expected = void 0;
    } else {
        f = Math.sqrt;
        array = [1.5];
        expected = Math.sqrt(1.5);
    }
    foo(f, array, 0) === expected;
}
