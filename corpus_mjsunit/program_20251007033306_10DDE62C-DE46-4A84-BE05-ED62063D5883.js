function deep1(a1) {
    if (a1 > 90) {
        return 1;
    }
    return 2;
}
function deep2() {
    for (let i8 = 0; i8 < 100; ++i8) {
        deep1(i8);
    }
    return "ok";
}
deep2();
