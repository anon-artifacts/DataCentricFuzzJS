function f0() {
}
var BUGNUMBER = 344959;
var summary = "Functions should not lose scope chain after exception";
var actual = "";
var expect = "with";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    var x = "global";
    with ({ x: "with" }) {
        function f18() {
            try {
            } catch(e19) {
            }
            return x;
        }
        actual = f18();
    }
    f0(expect, actual, summary + ": 1");
    with ({ x: "with" }) {
        function f26() {
            try {
                throw 1;
            } catch(e28) {
            }
            return x;
        }
        actual = f26();
    }
    f0(expect, actual, summary + ": 2");
}
