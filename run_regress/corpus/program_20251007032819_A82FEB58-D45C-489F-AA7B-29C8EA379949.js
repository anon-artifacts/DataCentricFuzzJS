var GiantPrintArray = [];
function f2() {
    GiantPrintArray.push(g);
}
var func1 = f2;
var g = 1;
func1();
g = -(-2 - 2147483648) << 0;
func1();
print(GiantPrintArray);
var eqObj5;
const v22 = new Array();
var IntArr0 = v22;
eqObj5 = -2147483647;
IntArr0[4] = 1;
test0();
++eqObj5;
test0();
function test0() {
    IntArr0.push(eqObj5);
    return IntArr0[IntArr0.length];
}
print("PASSED test0");
var GiantPrintArray = [];
function test1() {
    var v386361 = -2147483646;
    {
        const v386361 = 1;
        GiantPrintArray.push(v386361);
    }
    GiantPrintArray.push(v386361);
}
test1();
test1();
print("PASSED test1");
function test2(a52) {
    print(a52.push(-2147483646));
}
const v58 = new Array(1);
var arr3 = v58;
test2(arr3);
test2(arr3);
var GiantPrintArray = [];
function f64() {
    function v2629() {
    }
    GiantPrintArray.push(-2147483646);
    v2629();
}
var missingItemFunc = f64;
for (i = 0; i < 1; i++) {
    missingItemFunc();
    missingItemFunc();
}
print("PASSED Test3");
