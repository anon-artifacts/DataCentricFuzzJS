function f0() {
}
var BUGNUMBER = 466905;
var summary = "Do not assert: v_ins->isCall() && v_ins->callInfo() == &js_FastNewArray_ci";
var actual = "";
var expect = "";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    function f(a15) {
        for (const v16 of a15) {
            [v16 > 5 ? "A" : "B"];
        }
    }
    f([true,8]);
    f([2]);
    f0(expect, actual, summary);
}
