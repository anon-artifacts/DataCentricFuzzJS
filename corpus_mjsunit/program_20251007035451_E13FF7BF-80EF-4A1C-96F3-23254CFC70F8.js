try {
    function f0() {
    }
    let v2;
    try { v2 = new WeakMap(); } catch (e) {}
    var wm = v2;
    let v5;
    try { v5 = grayRoot(); } catch (e) {}
    v5.map = wm;
    wm = null;
    try { gczeal(13, 7); } catch (e) {}
    let v12;
    try { v12 = newGlobal(); } catch (e) {}
    var lfOffThreadGlobal = v12;
    try { f0("do not crash", "do not crash", "did not crash!"); } catch (e) {}
} catch(e18) {
}
