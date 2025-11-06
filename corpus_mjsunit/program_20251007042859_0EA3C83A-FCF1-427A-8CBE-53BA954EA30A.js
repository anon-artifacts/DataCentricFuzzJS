function arity1(a1) {
    return a1 == undefined ? 1 : 0;
}
function missingArgTest() {
    var q;
    for (let i11 = 0; i11 < 10; i11++) {
        q = arity1();
    }
    return q;
}
missingArgTest();
