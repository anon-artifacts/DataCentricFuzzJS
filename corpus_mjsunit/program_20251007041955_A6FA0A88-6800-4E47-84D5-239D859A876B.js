function f0() {
}
var BUGNUMBER = 451946;
var summary = "Do not crash with SELinux execheap protection";
var actual = "No Crash";
var expect = "No Crash";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    f0("This test is only valid with SELinux targetted policy with exeheap protection");
    var i;
    for ((() => {
            i = 0;
        })();
        i < 2000000;
        i++) {
    }
    f0(expect, actual, summary);
}
