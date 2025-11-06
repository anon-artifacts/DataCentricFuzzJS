if (typeof dis === "function") {
    function f4() {
        function foo() {
        }
        function bar(a7) {
            try {
                function f8() {
                }
            } catch(e9) {
                foo();
            }
        }
        dis(bar);
    }
    f4();
}
