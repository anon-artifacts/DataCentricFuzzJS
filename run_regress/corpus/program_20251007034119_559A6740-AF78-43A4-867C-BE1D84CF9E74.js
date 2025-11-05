try {
    function f0() {
    }
    var BUGNUMBER = 650574;
    var summary = "Check for too-deep stack when converting a value to source";
    const v7 = (BUGNUMBER + ": ") + summary;
    try { f0(v7); } catch (e) {}
    try {
        let v11;
        try { v11 = Error(""); } catch (e) {}
        var e = v11;
        e.fileName = e;
        try { e.toSource(); } catch (e) {}
        let v15;
        try { v15 = new Error("should have thrown"); } catch (e) {}
        throw v15;
    } catch(e16) {
        e16 instanceof InternalError;
    }
    if (typeof f0 === "function") {
        try { f0(true, true); } catch (e) {}
    }
    try { f0("All tests passed!"); } catch (e) {}
} catch(e29) {
}
