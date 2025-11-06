function f0() {
}
var BUGNUMBER = 476447;
var summary = "Array getter/setter";
var actual = "";
var expect = "";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    function f15() {
        return this[this.length - 1];
    }
    Array.prototype.__defineGetter__("lastElement", f15);
    function f26(a27) {
        this[this.length - 1] = a27;
    }
    Array.prototype.__defineSetter__("lastElement", f26);
    var testArr = [1,2,3,4];
    f0(expect = 4, actual = testArr.lastElement, summary);
}
