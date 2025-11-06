function DeoptimizeArgCallFunctionGeneric() {
    var a = [];
    function f1(a4, a5, a6, a7) {
        'push';
    }
    function f2() {
    }
    function bar(a10, a11, a12) {
        a12("push", a, [a10], a11 + 0);
    }
    function foo() {
        return bar(arguments[0], arguments[1], arguments[2]);
    }
    function baz(a27, a28) {
        return foo("x", a28, a27);
    }
    baz(f1, 0);
    baz(f2, 0);
    baz(f1, "deopt");
}
DeoptimizeArgCallFunctionGeneric();
function DeoptimizeArgGlobalFunctionGeneric() {
    var a = [];
    var f1;
    function f43(a44, a45, a46, a47) {
        'push';
    }
    f1 = f43;
    function bar(a49, a50, a51) {
        f1("push", a, [a49], a50 + 0);
    }
    function foo() {
        return bar(arguments[0], arguments[1]);
    }
    function baz(a64) {
        return foo("x", a64);
    }
    baz(0);
    baz(0);
    baz("deopt");
}
DeoptimizeArgGlobalFunctionGeneric();
function DeoptimizeArgCallFunctionRuntime() {
    var a = [];
    var f1;
    function f79(a80, a81, a82, a83) {
        'push';
    }
    f1 = f79;
    function bar(a85, a86) {
    }
    function foo() {
        return bar(arguments[0], arguments[1]);
    }
    function baz(a94) {
        return foo(0, a94);
    }
    baz(0);
    baz(0);
    baz("deopt");
}
DeoptimizeArgCallFunctionRuntime();
