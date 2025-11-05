function test(a1) {
    var alwaysFalse = a1 && !a1;
    var k = [];
    var g;
    if (!alwaysFalse) {
        const v12 = alwaysFalse ? "failure" : "success";
        g = v12;
        k[0] = v12;
        return g;
    }
}
test("anything");
