try {
    function test() {
        var object = {};
        let v4;
        try { v4 = Symbol(); } catch (e) {}
        var symbol = v4;
        object[symbol] = 1;
        for (const v7 in object) {
        }
        var passed = !x;
        if (Object?.keys && Object?.getOwnPropertyNames) {
            let v15;
            try { v15 = Object.keys(object); } catch (e) {}
            const v18 = v15?.length === 0;
            let v19;
            try { v19 = Object.getOwnPropertyNames(object); } catch (e) {}
            passed &= v18 && (v19?.length === 0);
        }
        return passed;
    }
    let v24;
    try { v24 = test(); } catch (e) {}
    if (!v24) {
        let v28;
        try { v28 = new Error("Test failed"); } catch (e) {}
        throw v28;
    }
} catch(e29) {
}
