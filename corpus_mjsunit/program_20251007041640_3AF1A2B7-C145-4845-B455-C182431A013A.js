function x_min() {
    if (arguments.length < 3) {
        if (arguments[0] < arguments[1]) {
            return arguments[0];
        } else {
            return arguments[1];
        }
    }
    return 1;
}
function test0() {
    x_min(15, 2);
}
for (let i20 = 0; i20 < 100; i20++) {
    test0();
}
