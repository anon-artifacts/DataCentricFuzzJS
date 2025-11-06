function f0() {
}
var BUGNUMBER = 71107;
var summary = "Propagate heavyweightness back up the function-nesting chain.";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    const t6 = outer();
    const t9 = t6();
    var actual = t9();
    var expect = 5;
    f0(expect, actual, summary);
}
function outer() {
    var outer_var = 5;
    function inner() {
        function way_inner() {
            return outer_var;
        }
        return way_inner;
    }
    return inner;
}
