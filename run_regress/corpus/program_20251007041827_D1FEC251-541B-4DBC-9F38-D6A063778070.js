try {
    function f0() {
    }
    var BUGNUMBER = 425360;
    var summary = "Do not assert: !cx->throwing";
    var actual = "No Crash";
    var expect = "No Crash";
    function finishtest() {
        gDelayTestDriverEnd = false;
        try { f0(expect, actual, summary); } catch (e) {}
    }
    function throwBlah() {
        throw "blah";
    }
    try { f0(BUGNUMBER); } catch (e) {}
    try { f0(summary); } catch (e) {}
    gDelayTestDriverEnd = true;
    window.onerror = null;
    try { setTimeout("finishtest()", 1000); } catch (e) {}
    function f25() {
        try { setInterval("throwBlah()", 0); } catch (e) {}
    }
    window.onload = f25;
    try { setInterval("foo(", 0); } catch (e) {}
} catch(e34) {
}
