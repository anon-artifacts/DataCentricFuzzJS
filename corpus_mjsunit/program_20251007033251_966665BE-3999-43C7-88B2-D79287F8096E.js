try {
    function f0() {
    }
    var BUGNUMBER = 635389;
    var summary = "Infinite recursion via [].{toString,toLocaleString,join}";
    const v7 = (BUGNUMBER + ": ") + summary;
    try { f0(v7); } catch (e) {}
    try {
        var x = [];
        x.join = Array?.prototype?.toString;
        "" + x;
        let v18;
        try { v18 = new Error("should have thrown"); } catch (e) {}
        throw v18;
    } catch(e19) {
        e19 instanceof InternalError;
    }
    try {
        const v26 = Array?.prototype?.toString;
        const v28 = Array?.prototype?.toString;
        var x = { toString: v26, join: v28 };
        "" + x;
        let v35;
        try { v35 = new Error("should have thrown"); } catch (e) {}
        throw v35;
    } catch(e36) {
        e36 instanceof InternalError;
    }
    if (typeof f0 === "function") {
        try { f0(true, true); } catch (e) {}
    }
    try { f0("All tests passed!"); } catch (e) {}
} catch(e49) {
}
