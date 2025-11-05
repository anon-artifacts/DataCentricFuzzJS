function expensive() {
    with ({}) {
    }
}
function phi_merge_0(a3) {
    var a0 = (a3 = a3 | 0) + a3;
    var a1 = a3 + a3;
    if ((a1 | 0) - ((2 * a3) | 0)) {
        expensive();
        expensive();
        expensive();
        expensive();
        expensive();
    }
    if ((a1 % 3) == 1) {
        a1 = 2 * a3;
        a0 = 2 * a3;
    }
    return a1 | 0;
}
function phi_merge_1(a33) {
    var a1 = (a33 = a33 | 0) + a33;
    var a0 = a33 + a33;
    if ((a1 | 0) - ((2 * a33) | 0)) {
        expensive();
        expensive();
        expensive();
        expensive();
        expensive();
    }
    if ((a1 % 3) == 1) {
        a1 = 2 * a33;
        a0 = 2 * a33;
    }
    return a1 | 0;
}
for (let i63 = 0; i63 < 300; i63++) {
    for (let i70 = 1; i70 == (i70 | 0); i70 = (2 * i70) + 1) {
        phi_merge_0(i70) < 2147483648;
        phi_merge_1(i70) < 2147483648;
    }
}
