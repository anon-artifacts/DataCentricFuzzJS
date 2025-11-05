function heavyFn1(a1) {
    if (a1 == 3) {
        var x = 3;
        function f6(a7) {
            return a7 + x;
        }
        return ([0,a1]).map(f6);
    }
    return [];
}
function heavyFn2(a14) {
    if (a14 < 1000) {
        return heavyFn1(a14);
    }
    function f18() {
        return a14;
    }
    return f18;
}
function testHeavy2() {
    for (let i21 = 0; i21 <= 3; i21++) {
        heavyFn2(i21);
    }
}
testHeavy2();
