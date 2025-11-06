console.log("Tests that the DFG knows that a function that appears like Math.max could potentially use value in arbitrary ways, and not just in a context that converts values to numbers.");
function foo(a4, a5, a6) {
    return a4(a5[a6], 2.5);
}
function bar(a11) {
    return a11;
}
for (let i13 = 0; i13 < 200; ++i13) {
    var f;
    var array;
    var expected;
    if (i13 == 190) {
        f = bar;
        array = [,1.5];
        expected = void 0;
    } else {
        f = Math.max;
        array = [1.5];
        expected = Math.max(1.5, 2.5);
    }
    foo(f, array, 0) === expected;
}
