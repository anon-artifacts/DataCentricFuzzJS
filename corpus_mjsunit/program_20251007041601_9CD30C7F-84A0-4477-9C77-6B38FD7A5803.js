function f0() {
}
var BUGNUMBER = 1463421;
var summary = "rogue read barrier";
f0(BUGNUMBER);
f0(summary);
var exc;
try {
    const v10 = new WeakMap();
    var __v_1173 = v10;
    const t10 = grayRoot();
    t10.map = __v_1173;
    __v_1173 = null;
    gczeal(13, 7);
    if (!isNaN()) {
    }
    function __f_252() {
        const t17 = {};
        t17();
    }
    __f_252();
} catch(e26) {
    exc = e26;
}
if (typeof f0 == "function") {
    f0("" + exc, "TypeError: ({}) is not a function", "ok");
}
