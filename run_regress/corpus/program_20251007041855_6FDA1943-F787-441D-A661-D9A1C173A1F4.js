fail = false;
function test0() {
    function leaf() {
        return 100;
    }
    var obj1 = {};
    function f7() {
        return leaf();
    }
    var func0 = f7;
    function f10() {
        if (!(func0.call() % -2147483646)) {
        }
    }
    var func2 = f10;
    obj1.method1 = func2;
    obj1.method1();
}
test0();
test0();
test0();
test0();
function foo(a24, a25) {
    return a25 = a25 >> (a24 %= 3);
}
base1 = foo(4, 2);
foo(4, 2);
foo(4, 2);
foo(4, 2);
foo(4, 2);
case1 = foo(4, 2);
if (base1 != case1) {
    print("ERROR: Functional error in jit - Case1");
    fail = true;
}
function foo1(a57) {
    a57 %= 94;
    a57 = a57 & 255;
    return a57;
}
base2 = foo1(123);
foo1(123);
foo1(123);
foo1(123);
foo1(123);
foo1(123);
case2 = foo1(123);
if (base2 != case2) {
    print("ERROR: Functional error in jit - Case2");
    fail = true;
}
if (!fail) {
    print("PASS");
}
