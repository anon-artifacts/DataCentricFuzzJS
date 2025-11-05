function testSideEffects(a1, a2) {
    var counter = 0;
    function f5() {
        return counter++;
    }
    var side_effect_object = { valueOf: f5 };
    a2.lastIndex = side_effect_object;
    a2.exec(a1);
    a2.lastIndex = side_effect_object;
    a2.test(a1);
}
testSideEffects("zzzz", /a/);
testSideEffects("zzzz", /a/g);
testSideEffects("xaxa", /a/);
testSideEffects("xaxa", /a/g);
