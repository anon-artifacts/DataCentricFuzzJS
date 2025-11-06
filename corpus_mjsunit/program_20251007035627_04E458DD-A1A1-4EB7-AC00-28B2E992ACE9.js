function f0() {
}
var BUGNUMBER = 452498;
var summary = "TM: upvar2 regression tests";
var actual = "";
var expect = "";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    {
        let a = 0;
        let b = 1;
        let c = 2;
    }
    try {
    } catch(e22) {
    }
    try {
        for (const v24 in y) {
            var x;
        }
    } catch(e27) {
    }
    try {
        if (true && foo) {
        }
    } catch(e31) {
    }
    for (let i33 = 0; i33 < 3; i33++) {
        function f39() {
        }
        new f39();
    }
    f0(expect, actual, summary);
}
