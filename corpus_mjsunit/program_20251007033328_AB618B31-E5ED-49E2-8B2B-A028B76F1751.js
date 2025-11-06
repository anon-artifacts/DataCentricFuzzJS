try {
    function test() {
        function foo() {
        }
        const v2 = {};
        let v3;
        try { v3 = foo.bind(v2); } catch (e) {}
        const v6 = v3?.name === "bound foo";
        const v7 = {};
        function f8() {
        }
        let v9;
        try { v9 = f8.bind(v7); } catch (e) {}
        return v6 && (v9?.name === "bound ");
    }
    let v14;
    try { v14 = test(); } catch (e) {}
    if (!v14) {
        let v18;
        try { v18 = new Error("Test failed"); } catch (e) {}
        throw v18;
    }
} catch(e19) {
}
