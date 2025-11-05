function f0() {
    function foo() {
    }
    foo = null;
    function bar(a4) {
        try {
            function f5() {
            }
            throw 1;
        } catch(e7) {
            try { foo(); } catch (e) {}
        }
    }
    bar();
}
f0();
