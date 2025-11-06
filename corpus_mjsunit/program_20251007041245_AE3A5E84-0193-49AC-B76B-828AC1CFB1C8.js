try {
    function test() {
        let v3;
        try { v3 = Symbol("foo"); } catch (e) {}
        var sym1 = v3;
        let v5;
        try { v5 = Symbol(); } catch (e) {}
        var sym2 = v5;
        function f7() {
        }
        function f8() {
        }
        var o = { [sym1]: f7, [sym2]: f8 };
        return (o?.[sym1]?.name === "[foo]") && (o?.[sym2]?.name === "");
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
