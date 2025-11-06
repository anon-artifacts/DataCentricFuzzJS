try {
    function test() {
        var get = [];
        function f4() {
            return null;
        }
        const v6 = { exec: f4 };
        function f7(a8, a9) {
            try { get.push(a9); } catch (e) {}
            return a8?.[a9];
        }
        const v12 = { get: f7 };
        let v13;
        try { v13 = new Proxy(v6, v12); } catch (e) {}
        var p = v13;
        const v19 = RegExp?.prototype?.[Symbol?.replace];
        try { v19.call(p); } catch (e) {}
        p.global = true;
        const v24 = RegExp?.prototype?.[Symbol?.replace];
        try { v24.call(p); } catch (e) {}
        return (get + "") === "global,exec,global,unicode,exec";
    }
    let v30;
    try { v30 = test(); } catch (e) {}
    if (!v30) {
        let v34;
        try { v34 = new Error("Test failed"); } catch (e) {}
        throw v34;
    }
} catch(e35) {
}
