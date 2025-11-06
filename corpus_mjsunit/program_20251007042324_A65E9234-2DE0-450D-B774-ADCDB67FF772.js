function f0() {
}
var BUGNUMBER = 469044;
var summary = "type unstable globals";
var actual = "";
var expect = "";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    expect = "---000---000";
    actual = "";
    for (let i17 = 0; i17 < 2; ++i17) {
        for (let i24 = 0; i24 < 2; ++i24) {
        }
        var c = void 0;
        actual += "---";
        f0("---");
        for (let i36 = 0; i36 < 3; ++i36) {
            c <<= c;
            const v43 = "" + c;
            actual += v43;
            f0(v43);
        }
    }
    f0(expect, actual, summary + ": 1");
    expect = "00000000";
    actual = "";
    f0("");
    for (let i53 = 0; i53 < 2; ++i53) {
        for (let i60 = 0; i60 < 2; ++i60) {
        }
        var c = void 0;
        for (let i70 = 0; i70 < 3; ++i70) {
            c <<= c;
            const v77 = "" + c;
            actual += v77;
            f0(v77);
        }
        actual += c;
        f0(c);
    }
    f0(expect, actual, summary + ": 2");
    actual = "";
    f0("");
    for (let i87 = 0; i87 < 2; ++i87) {
        for (let i94 = 0; i94 < 2; ++i94) {
        }
        var c = void 0;
        for (let i104 = 0; i104 < 3; ++i104) {
            c <<= c;
            const v112 = "" + c;
            actual += v112;
            f0(v112);
        }
        actual += c;
        f0(c);
    }
    f0(expect, actual, summary + ": 3");
}
