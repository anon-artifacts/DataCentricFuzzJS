function test0() {
    var GiantPrintArray = [];
    function v2() {
        var v3 = 10;
        const v7 = new Array(v3);
        var v4 = v7;
        for (let i10 = 0; i10 < v3; i10++) {
            var v6 = { a: 0 };
            if (i10 % 2) {
                v6.p = 1;
            }
            v6.p = 1;
            v6.z = 1;
            v4[i10] = v6;
        }
        for (let i24 = 0; i24 < v3; i24++) {
            GiantPrintArray.push(((((("{ a: " + v4[i24].a) + ", p: ") + v4[i24].p) + ", z: ") + v4[i24].z) + "}");
        }
    }
    v2();
}
test0();
test0();
runningJITtedCode = true;
test0();
print("pass");
