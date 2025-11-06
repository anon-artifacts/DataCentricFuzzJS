try {
    function test() {
        for (const v3 in { qux: 1 }) {
            return ((i === "q") && (j === "u")) && (k === "x");
        }
    }
    let v15;
    try { v15 = test(); } catch (e) {}
    if (!v15) {
        let v19;
        try { v19 = new Error("Test failed"); } catch (e) {}
        throw v19;
    }
} catch(e20) {
}
