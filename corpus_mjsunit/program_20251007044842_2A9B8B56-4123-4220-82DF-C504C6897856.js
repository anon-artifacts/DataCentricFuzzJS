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
function testHeavy() {
    for (let i15 = 0; i15 <= 3; i15++) {
        heavyFn1(i15);
    }
}
testHeavy();
