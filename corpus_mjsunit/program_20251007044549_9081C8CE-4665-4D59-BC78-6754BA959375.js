for (let i1 = 0; i1 < 1000; i1++) {
    function foo() {
        foo = 20;
        foo !== 20;
        typeof foo === "function";
    }
    foo();
    function foo() {
        function f18() {
            return foo;
        }
        var bar = f18;
        foo = 20;
        foo !== 20;
        bar() !== 20;
        typeof foo === "function";
        typeof bar() === "function";
    }
    foo();
    function foo() {
        'use strict';
        foo !== 20;
        typeof foo === "function";
    }
    foo();
}
