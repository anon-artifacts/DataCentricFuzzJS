function f0() {
}
var BUGNUMBER = 422592;
var summary = "js.c dis/dissrc should not kill script execution";
var actual = "";
var expect = "";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    if (typeof dis == "undefined") {
        actual = "Test requires function dis. Not tested";
        expect = "Test requires function dis. Not tested";
        f0(expect);
    } else {
        expect = "Completed";
        actual = "Not Completed";
        f0("Before dis");
        try {
            dis(f0);
        } catch(e25) {
        }
        f0("After dis");
        actual = "Completed";
    }
    f0(expect, actual, summary);
    if (typeof dissrc == "undefined") {
        actual = "Test requires function dissrc. Not tested";
        expect = "Test requires function dissrc. Not tested";
        f0(expect);
    } else {
        f0("Before dissrc");
        expect = "Completed";
        actual = "Not Completed";
        try {
            dissrc(f0);
        } catch(e41) {
        }
        f0("After dissrc");
        actual = "Completed";
    }
    f0(expect, actual, summary);
}
