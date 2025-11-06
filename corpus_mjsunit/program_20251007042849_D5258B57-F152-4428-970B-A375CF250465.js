var shouldBailout = false;
var failed = 0;
var valueCalls = 0;
function FAILED(a7) {
    console.log("FAILED  #", a7);
    failed++;
}
function test0() {
    function f13() {
        return g <= h;
    }
    var func2 = f13;
    var g = 1;
    var h = 1;
    obj.x = 1;
    if (shouldBailout) {
        function f24() {
            valueCalls++;
            return 3;
        }
        h = { valueOf: f24 };
    }
    if (func2(g)) {
    } else {
        FAILED(1);
    }
    return obj.x;
}
function test1() {
    function f33() {
        return g <= h;
    }
    var func2 = f33;
    var g = 1;
    var h = 1;
    obj.x = 1;
    if (shouldBailout) {
        function f44() {
            valueCalls++;
            return 3;
        }
        h = { valueOf: f44 };
    }
    if (!func2(g)) {
        FAILED(2);
    }
    return obj.x;
}
function test2() {
    function f54() {
        return g > h;
    }
    var func2 = f54;
    var g = 0;
    var h = 1;
    obj.x = 1;
    if (shouldBailout) {
        function f65() {
            valueCalls++;
            return 3;
        }
        h = { valueOf: f65 };
    }
    if (func2(g)) {
        FAILED(3);
    }
    return obj.x;
}
function test3() {
    function f74() {
        return g == h;
    }
    var func2 = f74;
    var g = 0;
    var h = 1;
    obj.x = 1;
    if (shouldBailout) {
        function f85() {
            valueCalls++;
            return 3;
        }
        h = { valueOf: f85 };
    }
    if (func2(g)) {
        FAILED(4);
    }
    return obj.x;
}
function test4() {
    function f94() {
        return g != h;
    }
    var func2 = f94;
    var g = 3;
    var h = 3;
    obj.x = 1;
    if (shouldBailout) {
        function f105() {
            valueCalls++;
            return 3;
        }
        h = { valueOf: f105 };
    }
    if (func2(g)) {
        FAILED(5);
    }
    return obj.x;
}
const v114 = new Object();
var obj = v114;
obj.x = 1;
test0();
test1();
test2();
test3();
test4();
test0();
test1();
test2();
test3();
test4();
shouldBailout = true;
test0();
test1();
test2();
test3();
test4();
if (valueCalls != 5) {
    FAILED(6);
}
if (failed == 0) {
    console.log("Passed");
}
