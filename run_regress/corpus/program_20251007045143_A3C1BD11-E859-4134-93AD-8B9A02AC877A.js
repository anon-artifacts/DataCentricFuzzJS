function f() {
    var sum = 0;
    for (let i4 = 99; i4 < 100; i4++) {
        for (let i11 = 5; i11 < 6; i11++) {
            for (let i18 = 0; i18 < 1000; i18++) {
                var x = i11 + 2;
                var y = x + 5;
                var z = y + 3;
                sum += z;
            }
            if (true) {
                break;
            }
        }
        if (true) {
            break;
        }
    }
    return sum;
}
f();
f();
f();
