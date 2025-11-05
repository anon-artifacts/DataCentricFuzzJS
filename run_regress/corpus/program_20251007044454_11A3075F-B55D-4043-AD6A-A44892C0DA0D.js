function f0() {
}
var BUGNUMBER = 369666;
var summary = "inner function declaration in let-induced outer " + "function body gets wrong scope.";
var actual = "No Crash";
var expect = "No Crash";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    function foo() {
        let x = 42;
        function bar() {
            return x;
        }
        return bar;
    }
    const t17 = foo();
    f0(t17());
    baz = false;
    function foo2() {
        let x = 42;
        function bar() {
            return x;
        }
        try {
            if (baz) {
                return bar;
            }
        } finally {
            f0("finally", x);
        }
        return bar;
    }
    const t34 = foo2();
    f0(t34());
    f0(expect, actual, summary);
}
