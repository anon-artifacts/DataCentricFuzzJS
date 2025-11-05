var x = "x.original";
function f2() {
    x = "x.original";
}
var reset = f2;
function f5() {
    var z = "z.original";
    function innerTest() {
        x = "x.overwritten";
        z = x;
    }
    innerTest();
    return z;
}
var test = f5;
test();
reset();
test();
reset();
function makeGlobalPropertyReadOnly(a17) {
    Object.defineProperty(this, a17, { writable: false });
}
function reportGlobalPropertyDescriptor(a24) {
    print((a24 + ".configurable = ") + Object.getOwnPropertyDescriptor(this, a24).configurable);
    print((a24 + ".writable = ") + Object.getOwnPropertyDescriptor(this, a24).writable);
}
reportGlobalPropertyDescriptor("x");
makeGlobalPropertyReadOnly("x");
reportGlobalPropertyDescriptor("x");
var result = test();
print("x: " + x);
print("result: " + result);
