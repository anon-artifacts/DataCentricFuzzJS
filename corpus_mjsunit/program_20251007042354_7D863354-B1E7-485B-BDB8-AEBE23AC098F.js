try {
    function f0() {
    }
    var BUGNUMBER = 1456512;
    var summary = "rogue read barrier";
    try { f0(BUGNUMBER); } catch (e) {}
    try { f0(summary); } catch (e) {}
    let v8;
    try { v8 = new WeakMap(); } catch (e) {}
    var wm = v8;
    let v11;
    try { v11 = grayRoot(); } catch (e) {}
    v11.map = wm;
    wm = null;
    try { gczeal(13, 7); } catch (e) {}
    let v18;
    try { v18 = newGlobal(); } catch (e) {}
    var lfOffThreadGlobal = v18;
    if (typeof f0 == "function") {
        try { f0(true, true, "ok"); } catch (e) {}
    }
} catch(e27) {
}
