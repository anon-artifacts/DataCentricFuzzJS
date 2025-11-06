function f0() {
}
function f(a2) {
    'use strict';
    a2.bar;
}
var actual;
try {
    f();
    actual = "no error";
} catch(e8) {
    actual = e8 instanceof TypeError ? "type error" : "some other error";
    actual += /use strict/.test(e8) ? " with directive" : " without directive";
}
f0("type error without directive", actual, "decompiled expressions in error messages should not include directive prologues");
