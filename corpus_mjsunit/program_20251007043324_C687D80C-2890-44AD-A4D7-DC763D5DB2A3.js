var shouldBailout = false;
function test0() {
    var FloatArr0 = [231762358,-2147483648,438008391,138,2123558795608719872];
    FloatArr0[12] = 1;
    FloatArr0[6] = 1;
    FloatArr0[1] = "x";
    shouldBailout ? "x" : undefined;
    if (FloatArr0[1]) {
    }
}
test0();
test0();
test0();
runningJITtedCode = true;
test0();
shouldBailout = true;
test0();
print("Pass");
