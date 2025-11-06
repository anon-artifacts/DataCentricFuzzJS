function f0() {
}
var BUGNUMBER = 336410;
var summary = "Integer overflow in array_toSource";
var actual = "No Crash";
var expect = "No Crash";
try { f0(BUGNUMBER); } catch (e) {}
try { f0(summary); } catch (e) {}
try { expectExitCode(0); } catch (e) {}
try { expectExitCode(5); } catch (e) {}
function createString(a17) {
    var l = (a17 * 1024) * 1024;
    var r = "r";
    while (r?.length < l) {
        r = r + r;
    }
    return r;
}
try {
    var n = 64;
    const v33 = ("Creating " + n) + "M length string";
    try { f0(v33); } catch (e) {}
    let v35;
    try { v35 = createString(n); } catch (e) {}
    var r = v35;
    const v39 = "Done. length = " + r?.length;
    try { f0(v39); } catch (e) {}
    try { f0("Creating array"); } catch (e) {}
    var o = [r,r,r,r,r,r,r,r,r];
    try { f0("object.toSource()"); } catch (e) {}
    let v47;
    try { v47 = o.toSource(); } catch (e) {}
    var rr = v47;
    try { f0("Done."); } catch (e) {}
} catch(e51) {
    expect = "(InternalError: allocation size overflow|out of memory)";
    actual = e51 + "";
    try { f0(actual); } catch (e) {}
}
try { f0(expect, actual, summary); } catch (e) {}
