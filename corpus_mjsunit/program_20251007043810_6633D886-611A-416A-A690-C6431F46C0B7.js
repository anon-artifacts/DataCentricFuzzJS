function f0() {
}
var BUGNUMBER = 495773;
var summary = "Read upvar from trace-entry frame from JSStackFrame instead of tracing native stack";
var actual = "";
var expect = "010101";
function f() {
    var q = [];
    for (let i13 = 0; i13 < 3; ++i13) {
        function f19() {
            for (let i21 = 0; i21 < 2; ++i21) {
                function f27() {
                    for (let i29 = 0; i29 < 1; ++i29) {
                        q.push(i21);
                    }
                }
                f27();
            }
        }
        f19();
    }
    return q.join("");
}
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    f0(expect, actual = f(), summary);
}
