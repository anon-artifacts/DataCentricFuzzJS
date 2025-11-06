try {
    function test() {
        function f1() {
        }
        function baz() {
        }
        var o = { foo: f1, bar: baz };
        function f5() {
        }
        o.qux = f5;
        return ((o?.foo?.name === "foo") && (o?.bar?.name === "baz")) && (o?.qux?.name === "");
    }
    let v20;
    try { v20 = test(); } catch (e) {}
    if (!v20) {
        let v24;
        try { v24 = new Error("Test failed"); } catch (e) {}
        throw v24;
    }
} catch(e25) {
}
