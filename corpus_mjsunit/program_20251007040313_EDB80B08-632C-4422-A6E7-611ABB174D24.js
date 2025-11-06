var shouldBailout = false;
var count = 0;
function test0() {
    function f5() {
        h = d;
    }
    var func1 = f5;
    var d = 309820929.1;
    function f11() {
        count++;
        return 3;
    }
    d = { valueOf: f11 };
    const v17 = shouldBailout ? 1 : 1;
    v17 ? +d : 1;
}
test0();
test0();
shouldBailout = true;
test0();
if (count == 1) {
    print("Passed");
} else {
    print("FAILED");
}
