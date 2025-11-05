try {
    function fatty() {
        try {
            try { fatty(); } catch (e) {}
        } catch(e2) {
            try { foo(); } catch (e) {}
        }
    }
    let v7;
    try { v7 = evalcx("(function foo() { foo.bar() })"); } catch (e) {}
    foo = v7;
    let v10;
    try { v10 = evalcx("(function bar() {})"); } catch (e) {}
    foo.bar = v10;
    try { fatty(); } catch (e) {}
} catch(e13) {
}
