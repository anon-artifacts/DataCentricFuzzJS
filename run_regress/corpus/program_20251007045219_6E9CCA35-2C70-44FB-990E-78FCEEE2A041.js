function shouldBe(a1, a2) {
    if (a1 !== a2) {
        const v7 = new Error("bad value: " + a1);
        throw v7;
    }
}
function f11() {
    return arguments;
}
var argsSloppy = f11(1, 2, 3);
function f18() {
    'use strict';
    return arguments;
}
var argsStrict = f18(1, 2, 3);
shouldBe(Object.prototype.propertyIsEnumerable(argsSloppy, "length"), false);
shouldBe(Object.prototype.propertyIsEnumerable(argsStrict, "length"), false);
shouldBe(Object.keys(argsSloppy).length === Object.keys(argsStrict).length, true);
shouldBe(Object.keys(argsSloppy).indexOf("length"), -1);
shouldBe(Object.keys(argsStrict).indexOf("length"), -1);
