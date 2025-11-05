function dumpArgs6(a1) {
    if (a1 == 90) {
        return funapply6.arguments.length;
    }
    return [a1];
}
function funapply6() {
    return dumpArgs6.apply({}, arguments);
}
function test6(a13) {
    return funapply6(a13, 1, 2, 3);
}
test6(89)[0];
test6(0.2);
