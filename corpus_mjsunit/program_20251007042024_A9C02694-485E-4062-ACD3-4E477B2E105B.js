function test0() {
    var GiantPrintArray = [];
    var IntArr1 = [];
    for (let i6 = 0; i6 < 2; ++i6) {
        var id30 = IntArr1;
        IntArr1 = IntArr1.pop();
        IntArr1 = id30;
        GiantPrintArray.push(IntArr1[IntArr1.length]);
        GiantPrintArray.push(test0a());
    }
    function test0a() {
        try {
        } catch(e21) {
        }
    }
}
test0();
test0();
print("pass");
