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
    t14.global = "Cocoa";
}
shouldThrow(f13, "TypeError: Attempted to assign to readonly property.");
function f19() {
    'use strict';
    const t20 = RegExp.prototype;
    t20.global = "Cocoa";
}
shouldThrow(f19, "TypeError: Attempted to assign to readonly property.");
function f25() {
    'use strict';
    const t26 = RegExp.prototype;
    delete t26.global;
    const t27 = RegExp.prototype;
    t27.global = "Cocoa";
    shouldBe(RegExp.prototype.global, "Cocoa");
    shouldBe(/Cappuccino/.global, "Cocoa");
}
f25();
