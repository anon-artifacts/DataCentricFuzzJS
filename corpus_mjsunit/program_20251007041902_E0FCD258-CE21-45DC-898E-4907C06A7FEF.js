function dead1(a1, a2) {
    a1 + a2;
    return a1;
}
function dead2(a5, a6) {
    a5 | 0;
    a6 | 0;
    return a5;
}
function dead3(a12, a13) {
    a12 == 2 ? a12 : a13;
    return a12;
}
function dead4(a18) {
    var z = 3;
    for (i = 0; i < 3; i++) {
        z + 3;
    }
    return a18;
}
function dead5(a31) {
    var z = 3;
    for (i = 0; i < 3; i++) {
        z + 3;
        z++;
    }
    var w = z + a31;
    return a31;
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
