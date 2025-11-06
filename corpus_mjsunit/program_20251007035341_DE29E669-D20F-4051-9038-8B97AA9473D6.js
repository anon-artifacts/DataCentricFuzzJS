function f0() {
}
var gTestfile = "redefine-arguments-length.js";
var BUGNUMBER = 539766;
var summary = "Object.defineProperty sets arguments.length without setting the " + "length-overridden bit";
f0((BUGNUMBER + ": ") + summary);
function test_JSOP_ARGCNT() {
    var length = "length";
    Object.defineProperty(arguments, length, { value: 17 });
    arguments.length;
    arguments[length];
}
test_JSOP_ARGCNT();
function test_js_fun_apply() {
    var length = "length";
    Object.defineProperty(arguments, length, { value: 17 });
    function fun() {
        arguments.length;
        arguments[length];
        arguments[0];
        for (let i47 = 1; i47 < 17; i47++) {
            arguments[i47];
        }
    }
    fun.apply(null, arguments);
}
test_js_fun_apply("foo");
function test_array_toString_sub_1() {
    Object.defineProperty(arguments, "length", { value: 1 });
    arguments.join = ([]).join;
    ([]).toString.call(arguments);
}
test_array_toString_sub_1(1, 2);
function test_array_toString_sub_2() {
    Object.defineProperty(arguments, "length", { value: 1 });
    ([]).toLocaleString.call(arguments);
}
test_array_toString_sub_2(1, 2);
f0(true, true);
f0("All tests passed!");
