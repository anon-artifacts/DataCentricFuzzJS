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
function ReturnObject() {
    this.hello = "yay2";
    const v57 = new Object();
    var o = v57;
    o.obj = this;
    return o;
}
function test1() {
    const v61 = new ReturnObject();
    var o = v61;
    o.constructor == Object.prototype.constructor;
    o.hello == undefined;
    o.obj.constructor == ReturnObject;
    o.obj.hello == "yay2";
}
function ReturnInt() {
    this.hello = "yay3";
    return 3;
}
function test2() {
    const v83 = new ReturnInt();
    var o = v83;
    o.constructor == ReturnInt;
    o.hello == "yay3";
}
function ReturnFloat() {
    this.hello = "yay4";
    return 3.3;
}
function test3() {
    const v95 = new ReturnFloat();
    var o = v95;
    o.constructor == ReturnFloat;
    o.hello == "yay4";
}
function ReturnString() {
    this.hello = "yay5";
    return "blah" + this.hello;
}
function test4() {
    const v110 = new ReturnString();
    var o = v110;
    o.constructor == ReturnString;
    o.hello == "yay5";
}
function ReturnBool() {
    this.hello = "yay6";
    return this.hello == "yay6";
}
function test5() {
    const v125 = new ReturnBool();
    var o = v125;
    o.constructor == ReturnBool;
    o.hello == "yay6";
}
runtest("test1", test1, false);
runtest("test2", test2, false);
runtest("test3", test3, false);
runtest("test4", test4, false);
runtest("test5", test5, false);
if (failed == 0) {
    print("Passed");
}
