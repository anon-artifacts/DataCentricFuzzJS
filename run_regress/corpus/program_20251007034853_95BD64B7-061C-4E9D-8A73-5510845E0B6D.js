function foo() {
    function bar() {
        function baz() {
            arguments.callee.caller === null;
        }
        for (let i10 = 0; i10 < 10; i10++) {
            baz();
        }
    }
    bar();
}
foo();
