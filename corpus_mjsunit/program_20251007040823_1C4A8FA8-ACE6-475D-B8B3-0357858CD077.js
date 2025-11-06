function dead1(a1, a2) {
    (a1 | 0) + (a2 | 0);
    return a1;
}
function dead2(a9, a10) {
    a9 | 0;
    a10 | 0;
    return a9;
}
function dead3(a16, a17) {
    a16 == 2 ? a16 | 0 : a17 | 0;
    return a16;
}
function dead4(a26) {
    var z = 3;
    for (i = 0; i < 3; i++) {
        (z | 0) + 3;
    }
    return a26;
}
function dead5(a41) {
    var z = 3;
    for (i = 0; i < 3; i++) {
        (z | 0) + 3;
        z++;
    }
    var w = z + a41;
    return a41;
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
