console.log("This tests that converting a boxed double to an integer does not crash the register allocator.");
function boxedDoubleToInt(a4, a5) {
    var y = a4 / 2;
    var z = y + 2;
    return (y | 1) + z;
}
boxedDoubleToInt(1, 2);
boxedDoubleToInt(3, 4);
boxedDoubleToInt(5, 6);
boxedDoubleToInt(7, 8);
boxedDoubleToInt(9, 10);
