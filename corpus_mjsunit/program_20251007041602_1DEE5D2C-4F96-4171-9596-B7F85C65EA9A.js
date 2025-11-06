try {
    function f0() {
    }
    for (const v2 of anyTypedArrayConstructors) {
        let v4;
        try { v4 = new v2(1024); } catch (e) {}
        var testArray = v4;
        const v11 = {
            get() {
                let v10;
                try { v10 = new Error("FAIL: Buffer accessed directly"); } catch (e) {}
                throw v10;
            },
        };
        try { Object.defineProperty(testArray, "buffer", v11); } catch (e) {}
        try { testArray.sort(); } catch (e) {}
    }
    if (typeof f0 === "function") {
        try { f0(true, true); } catch (e) {}
    }
} catch(e21) {
}
