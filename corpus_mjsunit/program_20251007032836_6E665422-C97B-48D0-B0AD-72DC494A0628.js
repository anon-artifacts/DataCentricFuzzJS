function shouldBe(a1, a2) {
}
function shouldThrow(a4, a5) {
    var error = null;
    try {
        a4();
    } catch(e9) {
        error = e9;
    }
}
function regExpLastIndex() {
    const v13 = new RegExp("Cocoa");
    var regexp = v13;
    regexp.lastIndex = "Hello";
    shouldBe(Reflect.get(regexp, "lastIndex"), "Hello");
    regexp.lastIndex = 42;
    shouldBe(Reflect.get(regexp, "lastIndex"), 42);
    regexp.lastIndex = "Hello";
    shouldBe(Reflect.get(regexp, "lastIndex"), "Hello");
    shouldBe(Reflect.defineProperty(regexp, "lastIndex", { value: 42, writable: false }), true);
    shouldBe(Reflect.get(regexp, "lastIndex"), 42);
    function f42() {
        'use strict';
        regexp.lastIndex = "NG";
    }
    shouldThrow(f42, `TypeError: Attempted to assign to readonly property.`);
    shouldBe(Reflect.get(regexp, "lastIndex"), 42);
    function f50() {
        'use strict';
        regexp.lastIndex = "NG";
    }
    shouldThrow(f50, `TypeError: Attempted to assign to readonly property.`);
    function f54() {
        'use strict';
        Object.defineProperty(regexp, "lastIndex", { value: "NG" });
    }
    shouldThrow(f54, `TypeError: Attempting to change value of a readonly property.`);
    shouldBe(Reflect.get(regexp, "lastIndex"), 42);
}
regExpLastIndex();
