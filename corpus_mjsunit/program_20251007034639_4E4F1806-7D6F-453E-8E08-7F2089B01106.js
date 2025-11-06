function f0() {
}
var BUGNUMBER = 533254;
var summary = "init-method late in table-big initialiser screwup";
f0(BUGNUMBER);
f0(summary);
function f() {
    var proto = { p8: 8 };
    function f31() {
        return 42;
    }
    const v33 = {
        p0: 0,
        p1: 1,
        p2: 2,
        p3: 3,
        p4: 4,
        p5: 5,
        p6: 6,
        p7: 7,
        p8: 8,
        p9: 9,
        p10: 0,
        p11: 1,
        p12: 2,
        p13: 3,
        p14: 4,
        p15: 5,
        p16: 6,
        p17: 7,
        p18: 8,
        p19: 9,
        m: f31,
    };
    var obj = v33;
    return obj;
}
var expect = f();
var actual = f();
f0(expect += "", actual += "", summary);
f0("All tests passed!");
