try {
    function f0() {
    }
    var BUGNUMBER = 657585;
    var summary = "Guard against infinite recursion when converting |this| to string for the " + "String.prototype.* methods";
    const v9 = (BUGNUMBER + ": ") + summary;
    try { f0(v9); } catch (e) {}
    try {
        var obj = {};
        obj.toString = String?.prototype?.charAt;
        "" + obj;
        let v20;
        try { v20 = new Error("should have thrown"); } catch (e) {}
        throw v20;
    } catch(e21) {
        e21 instanceof InternalError;
        "should have thrown InternalError for over-recursion, got: " + e21;
    }
    if (typeof f0 === "function") {
        try { f0(true, true); } catch (e) {}
    }
    try { f0("All tests passed!"); } catch (e) {}
} catch(e35) {
}
