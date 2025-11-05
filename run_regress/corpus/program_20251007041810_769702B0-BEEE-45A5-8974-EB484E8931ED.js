var standalone = false;
if (standalone) {
    function f2(a3) {
        if (a3 != true) {
            print("FAILURE");
        }
    }
    assertTrue = f2;
    function f10(a11) {
        if (a11 != false) {
            print("FAILURE");
        }
    }
    assertFalse = f10;
    function f18(a19, a20) {
        if (a19 !== a20) {
            print("FAILURE");
        }
    }
    assertEquals = f18;
    function f26(a27) {
    }
    empty_func = f26;
    assertUnoptimized = empty_func;
    assertOptimized = empty_func;
    optimize = empty_func;
    clearFunctionTypeFeedback = empty_func;
    deoptimizeFunction = empty_func;
} else {
    function f35(a36) {
    }
    optimize = f35;
    function f38(a39) {
    }
    clearFunctionTypeFeedback = f38;
    function f41(a42) {
    }
    deoptimizeFunction = f41;
}
function base_getter_test(a45) {
    var calls = 0;
    function f48(a49) {
        var x = a49[0];
        return x + 3;
    }
    foo = f48;
    var a = a45();
    var ap = [];
    function f60() {
        calls++;
        return 0;
    }
    ap.__defineGetter__(0, f60);
    foo(a);
    foo(a);
    foo(a);
    delete a[0];
    a.__proto__ = ap;
    foo(a);
    foo(a);
    optimize(foo);
    foo(a);
    clearFunctionTypeFeedback(foo);
    deoptimizeFunction(foo);
    clearFunctionTypeFeedback(foo);
    calls = 0;
    a = a45();
    var ap2 = [];
    a.__proto__ = ap2;
    foo(a);
    foo(a);
    foo(a);
    delete a[0];
    ap2.__proto__ = ap;
    foo(a);
    foo(a);
    foo(a);
    clearFunctionTypeFeedback(foo);
    deoptimizeFunction(foo);
    clearFunctionTypeFeedback(foo);
    calls = 0;
    a = a45();
    a.__proto__ = ap2 = [];
    foo(a);
    foo(a);
    foo(a);
    optimize(foo);
    foo(a);
    delete a[0];
    ap2.__proto__ = ap;
    foo(a);
    clearFunctionTypeFeedback(foo);
    calls = 0;
    a = a45();
    a.__proto__ = ap2;
    function f116(a117) {
        return a117[3] + 600;
    }
    bar = f116;
    bar(a);
    bar(a);
    bar(a);
    optimize(bar);
    bar(a);
    delete a[3];
    function f132() {
        calls++;
        return 0;
    }
    ap2.__defineGetter__(3, f132);
    bar(a);
    clearFunctionTypeFeedback(foo);
    deoptimizeFunction(foo);
    clearFunctionTypeFeedback(foo);
    clearFunctionTypeFeedback(bar);
    deoptimizeFunction(bar);
    clearFunctionTypeFeedback(bar);
}
function f144() {
    return [,,,,,,5];
}
create_func_smi = f144;
function f149() {
    return [,,,,,,5.5];
}
create_func_double = f149;
function f154() {
    return [,,,,,,true];
}
create_func_fast = f154;
var cf = [create_func_smi,create_func_double,create_func_fast];
for (let i165 = 0; i165 < cf.length; i165++) {
    base_getter_test(cf[i165]);
}
var a = [3.5,,,3.5];
function f178(a179) {
    return a179[0] + 5.5;
}
fun = f178;
fun(a);
fun(a);
fun(a);
optimize(fun);
fun(a);
delete a[0];
fun(a);
a.__proto__ = [];
fun(a);
var a = [3.5,,,,3.5];
var ap = [,,3.5];
ap.__proto__ = a.__proto__;
a.__proto__ = ap;
fun(a);
optimize(fun);
fun(a);
var calls = 0;
delete a[0];
function f214() {
    calls++;
    return 0;
}
ap.__defineGetter__(0, f214);
fun(a);
