try {
    function test() {
        function f1() {
        }
        var foo = f1;
        function baz() {
        }
        var bar = baz;
        return (foo?.name === "foo") && (bar?.name === "baz");
    }
    let v12;
    try { v12 = test(); } catch (e) {}
    if (!v12) {
        let v16;
        try { v16 = new Error("Test failed"); } catch (e) {}
        throw v16;
    }
} catch(e17) {
}
