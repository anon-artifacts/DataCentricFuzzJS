try {
    function test() {
        function foo() {
        }
        const v4 = foo?.name === "foo";
        function f5() {
        }
        return v4 && (f5?.name === "");
    }
    let v10;
    try { v10 = test(); } catch (e) {}
    if (!v10) {
        let v14;
        try { v14 = new Error("Test failed"); } catch (e) {}
        throw v14;
    }
} catch(e15) {
}
