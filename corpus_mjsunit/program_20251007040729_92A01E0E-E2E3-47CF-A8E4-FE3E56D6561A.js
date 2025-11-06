function f0() {
}
var BUGNUMBER = 338001;
var summary = "integer overflow in jsfun.c:Function";
var actual = "No Crash";
var expect = /No Crash|InternalError: allocation size overflow/;
try { f0(BUGNUMBER); } catch (e) {}
try { f0(summary); } catch (e) {}
try { expectExitCode(0); } catch (e) {}
try { expectExitCode(5); } catch (e) {}
var fe = "f";
try {
    for (i = 0; i < 25; i++) {
        fe += fe;
    }
    let v27;
    try { v27 = new Function(fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, "done"); } catch (e) {}
    var fu = v27;
} catch(e29) {
    actual = e29 + "";
}
const v33 = "Done: " + actual;
try { f0(v33); } catch (e) {}
try { f0(expect, actual, summary); } catch (e) {}
