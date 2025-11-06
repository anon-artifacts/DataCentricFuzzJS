function testNestedExitStackInner(a1, a2) {
    ++a2;
    var b = 0;
    for (let i7 = 1; i7 <= 9; i7++) {
        ++b;
        var a;
        if (a1 < 9) {
            a = 1;
        } else {
            a = 0;
        }
        ++b;
        b += a;
    }
    return a2 + b;
}
function testNestedExitStackOuter() {
    var counter = 0;
    for (let i26 = 1; i26 <= 9; ++i26) {
        for (let i33 = 1; i33 <= 9; ++i33) {
            counter = testNestedExitStackInner(i26, counter);
        }
    }
    return counter;
}
