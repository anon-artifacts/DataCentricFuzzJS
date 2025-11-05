try {
    function g(a1, a2, a3, a4) {
    }
    function f(a6, a7, a8) {
        let v10;
        try { v10 = getMaxArgs(); } catch (e) {}
        arguments.length = v10 + 1;
        try { g.apply(this, arr); } catch (e) {}
    }
    let x = [];
    let v20;
    try { v20 = getMaxArgs(); } catch (e) {}
    x.length = v20 + 1;
    var args = [[5],[5],[5],[5],[5],[5],[5],[5],[5],[5],[5],x];
    try {
        for (let i48 = 0; i48 < args?.length; i48++) {
            arr = args?.[i48];
            try { f(); } catch (e) {}
        }
        let v59;
        try { v59 = new Error("didn't throw"); } catch (e) {}
        throw v59;
    } catch(e60) {
        e60 instanceof RangeError;
        "wrong exception: " + e60;
    }
    try {
        for (let i67 = 0; i67 < args?.length; i67++) {
            arr = args?.[i67];
            try { f(); } catch (e) {}
        }
        let v78;
        try { v78 = new Error("didn't throw"); } catch (e) {}
        throw v78;
    } catch(e79) {
        e79 instanceof RangeError;
        "wrong exception: " + e79;
    }
} catch(e85) {
}
