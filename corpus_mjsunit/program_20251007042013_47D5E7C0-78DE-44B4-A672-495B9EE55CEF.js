function f0() {
}
var BUGNUMBER = 454704;
var summary = "Do not crash with defineGetter and XPC wrapper";
var actual = "";
var expect = "";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    if (typeof XPCSafeJSObjectWrapper != "undefined") {
        gDelayTestDriverEnd = true;
        document.addEventListener("load", boom, true);
    } else {
        actual = "Test requires XPCSafeJSObjectWrapper.";
        expect = "Test requires XPCSafeJSObjectWrapper.";
        f0("Test requires XPCSafeJSObjectWrapper.");
        f0(expect, actual, summary);
    }
}
function boom() {
    try {
        var a = [];
        g = [];
        g.__defineGetter__("f", g.toSource);
        a[0] = g;
        a[1] = XPCSafeJSObjectWrapper(a);
        f0("" + a);
    } catch(e42) {
    }
    gDelayTestDriverEnd = false;
    f0(expect, actual, summary);
}
