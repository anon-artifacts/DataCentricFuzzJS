function write(a1) {
    print(a1 + "");
}
function modByNeg(a7) {
    return 32 % a7;
}
function modByNonPowerOf2(a11) {
    return 32 % a11;
}
function modOfNeg(a15, a16) {
    return (a15 = a15 | 0) % a16;
}
function runTest() {
    write(modByNeg(16));
    write(modByNeg(-3));
    write(modByNonPowerOf2(16 * 16));
    write(modByNonPowerOf2(23));
    write(modOfNeg(100, 32));
    write(modOfNeg(-12, 32));
    for (let i46 = 0; i46 < 500; i46++) {
        modByNeg(-3);
    }
}
runTest();
