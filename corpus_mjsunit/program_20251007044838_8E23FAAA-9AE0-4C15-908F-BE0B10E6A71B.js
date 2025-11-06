function test0(a1) {
    var b = 1 << (a1 &= 1);
    var c = 0;
    if (a1) {
        const v8 = +b;
        b = v8;
        c = v8 * 1.1;
    }
    return ~b;
}
print("test0: " + test0(1));
function test1() {
    var o = {};
    var a = ~o;
    if (a === 1.1) {
        a = 1;
    }
    return a + 1;
}
print("test1: " + test1());
var shouldBailout = false;
function testrem() {
    function leaf(a36) {
        return a36;
    }
    var obj0 = {};
    function f39(a40, a41, a42) {
        g += k;
        return k;
    }
    var func0 = f39;
    function f46(a47) {
        const v54 = (r ^ ++q) % ~1;
        func0 = leaf;
        shouldBailout ? leaf : 1;
        k -= v54 * (1 - func0(1, 1)) ? 1 : d;
    }
    var func1 = f46;
    function f68(a69, a70, a71) {
        func0(1, 1, 1, 1, --d, 1);
    }
    var func2 = f68;
    obj0.method0 = func2;
    var b = 2147483647;
    var d = -984599814;
    var g = 1;
    var k = 1;
    var q = 7269577916309359616;
    var r = -264469094;
    obj0.prop0 = 1;
    q += b;
    const v108 = func1() * obj0.method0(1, 1, 1, 1);
    const v109 = {
        prop7: 1,
        prop6: 1,
        prop5: 1,
        prop4: 1,
        prop3: 1,
        prop2: 1,
        prop1: b,
        prop0: v108,
    };
    obj0.length = v109;
    obj0.prop0 -= g;
    print("obj0.prop0 = " + (obj0.prop0 | 0));
}
testrem();
testrem();
function test2() {
    function f119(a120) {
        for (; (__loopvar0 != 2) && (d < a120);) {
            __loopvar0 += 3;
        }
    }
    var func1 = f119;
    const v131 = new Int32Array();
    var i32 = v131;
    var d = -1865727919761880064;
    var uniqobj0 = Object();
    var __loopvar0 = -1;
    var count = 1;
    for (; count ? true : func1(uniqobj0); i32[1317940107]) {
        count--;
    }
}
test2();
test2();
