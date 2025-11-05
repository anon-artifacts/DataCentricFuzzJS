try {
    function test() {
        class C1 {
        }
        class C2 {
            static name() {
            }
        }
        return (C1?.name === "foo") && (typeof C2?.name === "function");
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
