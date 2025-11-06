function deferredWithRegex() {
    const v2 = /[\uD800\uDC00\uFFFF]/;
    let v3;
    try { v3 = v2.test("￿"); } catch (e) {}
    return v3;
}
let v4;
try { v4 = deferredWithRegex(); } catch (e) {}
if (v4) {
    try { WScript.Echo("Pass"); } catch (e) {}
}
