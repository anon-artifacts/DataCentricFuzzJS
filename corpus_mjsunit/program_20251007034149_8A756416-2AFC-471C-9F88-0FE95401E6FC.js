try {
    function test() {
        var get = [];
        const v4 = {};
        function f5(a6, a7) {
            try { get.push(a7); } catch (e) {}
            return a6?.[a7];
        }
        const v10 = { get: f5 };
        let v11;
        try { v11 = new Proxy(v4, v10); } catch (e) {}
        var p = v11;
        const v14 = RegExp?.prototype;
        let v17;
        try { v17 = Object.getOwnPropertyDescriptor(v14, "flags"); } catch (e) {}
        const v18 = v17?.get;
        try { v18.call(p); } catch (e) {}
        return (get + "") === "global,ignoreCase,multiline,dotAll,unicode,sticky";
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
