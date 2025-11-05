function unaryMinusTest(a1) {
    var g = (1 << a1) | 0;
    return ((g & -g) - 1) | 0;
}
unaryMinusTest(3);
unaryMinusTest(3);
unaryMinusTest(3);
unaryMinusTest();
unaryMinusTest(31);
unaryMinusTest(31);
unaryMinusTest(31);
unaryMinusTest();
