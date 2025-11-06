function test(a1) {
    print("test apply simple call with one argument: " + a1);
}
test.apply(null, ["val1","val2","val3"]);
function test1(a13, a14, a15) {
    print((((("test apply simple call with  3 arguments: " + a13) + " , ") + a14) + " , ") + a15);
}
test1.apply(null, ["p1","p2","p3"]);
function test2(a33, a34) {
    print("In test2 apply ");
    this.a = a33;
    this.b = a34;
}
const v41 = new Object();
var o1 = v41;
test2.apply(o1, [9,"secondValue"]);
print((("test apply call to function that sets properties in 'this': " + o1.a) + " , ") + o1.b);
function test3() {
    print("In test3 apply ");
    this.a = "param1";
    this.b = 99;
}
test3.apply();
print((("test apply call to function that sets properties in global 'this': " + a) + " , ") + b);
function testArg(a73, a74, a75) {
    print("**run tests with Arguments object");
    test.apply(null, arguments);
    test1.apply(null, arguments);
    const v84 = new Object();
    var o1 = v84;
    test2.apply(o1, arguments);
    print((("test apply call to function that sets properties in 'this': " + o1.a) + " , ") + o1.b);
}
testArg("1stArg", "2ndArg", "3rdArg");
