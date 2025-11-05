function testBranchingUnstableObject() {
    var x = { s: "a" };
    var t = "";
    for (let i7 = 0; i7 < 100; ++i7) {
        if (i7 == 51) {
            x.s = 5;
        }
        t += x.s;
    }
    return t.length;
}
testBranchingUnstableObject();
