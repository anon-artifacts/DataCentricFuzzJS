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
    var object = { Cocoa: "Cocoa", Cappuccino: "Cappuccino" };
    object.Matcha = "Matcha";
    shouldBe(object.Matcha, "Matcha");
    Object.freeze(object);
    shouldBe(object.Matcha, "Matcha");
    shouldBe(Reflect.isExtensible(object), false);
    const v31 = () => {
        object.Mocha = "Mocha";
        return "Mocha";
    };
    shouldThrow(v31, `TypeError: Attempted to assign to readonly property.`);
}
f13();
function f36() {
    'use strict';
    var object = { Cocoa: "Cocoa", Cappuccino: "Cappuccino" };
    object.Matcha = "Matcha";
    shouldBe(object.Matcha, "Matcha");
    Object.seal(object);
    shouldBe(object.Matcha, "Matcha");
    shouldBe(Reflect.isExtensible(object), false);
    const v54 = () => {
        object.Mocha = "Mocha";
        return "Mocha";
    };
    shouldThrow(v54, `TypeError: Attempted to assign to readonly property.`);
}
f36();
