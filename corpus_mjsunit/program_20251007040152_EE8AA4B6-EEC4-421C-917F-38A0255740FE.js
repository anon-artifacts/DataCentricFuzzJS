try {
    function f0() {
    }
    if (typeof getBuildConfiguration === "undefined") {
        const v6 = SpecialPowers?.Cu;
        let v7;
        try { v7 = v6.getJSTestingFunctions(); } catch (e) {}
        var getBuildConfiguration = v7?.getBuildConfiguration;
    }
    const v13 = typeof document !== "undefined";
    let v14;
    try { v14 = getBuildConfiguration(); } catch (e) {}
    var functionDeclarationsConfigurable = v13 && !v14?.release_or_beta;
    var o = { f: "string-f" };
    with (o) {
        let v25;
        try { v25 = Object.getOwnPropertyDescriptor(this, "f"); } catch (e) {}
        var desc = v25;
        desc?.value;
        desc?.writable;
        desc?.enumerable;
        desc?.configurable;
        function f() {
            return "fun-f";
        }
    }
    o?.f;
    try { f(); } catch (e) {}
    try { f0(true, true); } catch (e) {}
} catch(e44) {
}
