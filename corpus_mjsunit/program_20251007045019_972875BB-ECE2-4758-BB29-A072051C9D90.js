function f0() {
}
var BUGNUMBER = 382532;
var summary = "instanceof,... broken by use of |prototype| in heavyweight constructor";
var actual = "";
var expect = "";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    var prototype;
    function Bug() {
        function f17() {
        }
        var func = f17;
    }
    expect = true;
    const v21 = new Bug();
    f0(expect, actual = v21 instanceof Bug, summary);
}
