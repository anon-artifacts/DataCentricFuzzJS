function shouldBe(a1, a2) {
}
function shouldThrow(a4, a5) {
    var errorThrown = false;
    var error = null;
    try {
        a4();
    } catch(e11) {
        errorThrown = true;
        error = e11;
    }
}
function f13() {
    'use strict';
    const t14 = RegExp.prototype;
    t14.multiline = "ok";
}
shouldThrow(f13, "TypeError: Attempted to assign to readonly property.");
function f19() {
    'use strict';
    const t20 = RegExp.prototype;
    shouldBe(delete t20.global, true);
    shouldBe(RegExp.prototype.hasOwnProperty("global"), false);
    const t21 = RegExp.prototype;
    t21.global = "hello";
    shouldBe(RegExp.prototype.global, "hello");
}
f19();
function f37() {
    'use strict';
    const t30 = RegExp.prototype;
    t30.multiline = "ok";
}
shouldThrow(f37, "TypeError: Attempted to assign to readonly property.");
function f43() {
    'use strict';
    const t36 = RegExp.prototype;
    shouldBe(delete t36.multiline, true);
    shouldBe(RegExp.prototype.hasOwnProperty("multiline"), false);
    const t37 = RegExp.prototype;
    t37.multiline = "hello";
    shouldBe(RegExp.prototype.multiline, "hello");
}
f43();
