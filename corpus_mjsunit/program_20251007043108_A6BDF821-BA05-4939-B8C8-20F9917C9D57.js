console.log("This tests that an identity node in the inlined function does not crash the DFG's code generator.");
function f6() {
    return (((this.x1 + ",") + this.x2) + ",") + this.x3;
}
var o = { x1: 0, x2: 0, x3: 0, toKey: f6 };
var a = [];
var x1Adjust = 1.3;
var x2Adjust = 2.7;
var x3Adjust = 1.2;
function foo(a30) {
    o.x1 += x1Adjust;
    o.x2 += x2Adjust;
    o.x3 += x3Adjust;
    a[a30] = o.toKey();
}
function test() {
    for (let i34 = 0; i34 < 1000; i34++) {
        foo(i34);
    }
}
test();
var successfullyParsed = true;
