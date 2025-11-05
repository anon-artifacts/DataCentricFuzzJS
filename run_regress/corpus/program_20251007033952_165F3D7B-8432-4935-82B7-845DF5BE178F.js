function test1(a1) {
    var i = 0;
    if (a1) {
        if (a1) {
            i += 1;
        } else {
            i += 10;
        }
        i += 100;
    } else {
        if (a1) {
            i += 1000;
        } else {
            i += 10000;
        }
        i += 100000;
    }
    i += 1000000;
    return i;
}
function test() {
    test1(true);
    test1(false);
}
for (let i19 = 0; i19 < 100; i19++) {
    test();
}
