var failed = 0;
function runtest(a3, a4, a5) {
    try {
        a4();
        if (a5) {
            print(a3 + ": Test failed, unexpected no exception thrown");
            failed++;
        } else {
            print(a3 + ": Test passed, expected no exception thrown");
        }
    } catch(e16) {
        if (!a5 || ((e16.name != "TypeError") && (e16.name != "ReferenceError"))) {
            print((((a3 + ": test failed, unexpected ") + e16.name) + "-") + e16.message);
            failed++;
        } else {
            print((((a3 + ": Test passed, expected ") + e16.name) + "-") + e16.message);
        }
    }
}
function assert(a48) {
    if (!a48) {
        const v52 = new Error("AssertFailed");
        throw v52;
    }
}
function test1() {
    var i = 1;
    new i();
}
function test2() {
    const t30 = null;
    new t30();
}
function test3() {
    const t34 = 1;
    new t34();
}
function test4() {
    const v65 = new Object();
    var o = v65;
}
function test5() {
    const v69 = new Object();
    var o = v69;
    new o();
}
function test6() {
    new Blah();
}
function test7() {
    const v77 = new Object();
    var o = v77;
    new o();
}
function ClassProto() {
    this.hello = "yay";
}
function f83() {
    return 3;
}
const t60 = ClassProto.prototype;
t60.func = f83;
function test8() {
    const v87 = new ClassProto();
    var o = v87;
    o.constructor == ClassProto;
    o.hello == "yay";
    o.func() == 3;
}
function PlainFunction() {
    this.hello = "yay2";
}
function test9() {
    const v101 = new PlainFunction();
    var o = v101;
    o.constructor == PlainFunction;
    o.hello == "yay2";
}
runtest("test1", test1, true);
runtest("test2", test2, true);
runtest("test3", test3, true);
runtest("test4", test4, false);
runtest("test5", test5, true);
runtest("test6", test6, true);
runtest("test7", test7, true);
runtest("test8", test8, false);
runtest("test9", test9, false);
if (failed == 0) {
    print("Passed");
}
