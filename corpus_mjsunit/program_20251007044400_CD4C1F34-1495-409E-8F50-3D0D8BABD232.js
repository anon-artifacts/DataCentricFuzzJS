function spin_loop() {
    for (let i2 = 0; i2 < 10000; i2++) {
    }
}
function check_timing(a9, a10) {
    if (a10 == -1) {
        print("TEST-UNEXPECTED-FAIL | TestPerf | " + a9);
        throwError();
    } else {
        print((("TEST-PASS | TestPerf | " + a9) + " = ") + a10);
    }
}
