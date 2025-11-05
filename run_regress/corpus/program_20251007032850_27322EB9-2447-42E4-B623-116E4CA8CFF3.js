function InitPolymorphicFunctionArray(a1) {
}
function test0() {
    const v4 = new Array();
    var IntArr2 = v4;
    IntArr2[5] = 4294967295;
    IntArr2[0] = 2534257383681730048;
    IntArr2[IntArr2.length] = 3;
    function bar0() {
    }
    const v11 = new Array(bar0);
    InitPolymorphicFunctionArray(v11);
    function f13(a14, a15) {
        {
            return a14 + a15;
        }
    }
    print(IntArr2.slice(0, 23).reduce(f13));
}
test0();
test0();
test0();
