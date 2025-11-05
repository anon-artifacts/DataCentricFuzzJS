console.log("Tests that the DFG knows that a Math.sqrt could potentially use value in arbitrary ways, and not just in a context that converts values to numbers.");
function foo(a4, a5) {
    var x = a4[a5];
    return Math.sqrt(x);
}
function bar(a11) {
    return a11;
}
for (let i13 = 0; i13 < 200; ++i13) {
    if (i13 == 190) {
        Math.sqrt = bar;
    }
    var array;
    var expected;
    if (i13 >= 190) {
        array = [,1.5];
        expected = "void 0";
    } else {
        array = [1.5];
        expected = "Math.sqrt(1.5)";
    }
    foo(array, 0);
}
