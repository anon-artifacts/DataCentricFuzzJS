try {
    function test() {
        const v1 = [];
        if (!({ __proto__: v1 } instanceof Array)) {
            return false;
        }
        var __proto__ = [];
        return !({ __proto__: __proto__ } instanceof Array);
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
