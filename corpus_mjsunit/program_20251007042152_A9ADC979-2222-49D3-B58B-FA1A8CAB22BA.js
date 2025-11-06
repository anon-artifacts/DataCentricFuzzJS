function dead1(a1, a2) {
    a1 * a2;
    a1 << a2;
    a1 >> a2;
    a1 >>> a2;
    a1 | a2;
    a1 & a2;
    a1 ^ a2;
    return a1;
}
function dead2(a11, a12) {
    (a11 | 0) * a12;
    (a11 | 0) << a12;
    (a11 | 0) >> a12;
    (a11 | 0) >>> a12;
    (a11 | 0) | a12;
    (a11 | 0) & a12;
    (a11 | 0) ^ a12;
    return a11;
}
function dead3(a35, a36) {
    a35 == 2 ? a35 * a36 : a36 * a35;
    return a35;
}
function dead4(a43) {
    var z = 3;
    for (i = 0; i < 3; i++) {
        z * 3;
    }
    return a43;
}
function dead5(a56) {
    var z = 3;
    for (i = 0; i < 3; i++) {
        z * 3;
        z++;
    }
    var w = z * a56;
    return a56;
}
dead1(33, 32) == 33;
dead2(33, 32) == 33;
dead3(33, 32) == 33;
dead4(33) == 33;
dead5(33) == 33;
dead1(34, 7) == 34;
dead2(34, 7) == 34;
dead3(34, 7) == 34;
dead4(34) == 34;
dead5(34) == 34;
dead1(3.4, 0.1) == 3.4;
dead2(3.4, 0.1) == 3.4;
dead3(3.4, 0.1) == 3.4;
dead4(3.4) == 3.4;
dead5(3.4) == 3.4;
