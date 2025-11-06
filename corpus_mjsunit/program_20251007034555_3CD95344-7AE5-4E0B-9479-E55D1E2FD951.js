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
var s0 = Symbol("Cocoa");
var s1 = Symbol("Cappuccino");
var s2 = Symbol("");
var s3 = Symbol();
shouldBe(s0.description, "Cocoa");
shouldBe(s0.toString(), "Symbol(Cocoa)");
shouldBe(s1.description, "Cappuccino");
shouldBe(s1.toString(), "Symbol(Cappuccino)");
shouldBe(s2.description, "");
shouldBe(s2.toString(), "Symbol()");
shouldBe(s3.description, undefined);
shouldBe(s3.toString(), "Symbol()");
var o0 = Object(s0);
var o1 = Object(s1);
var o2 = Object(s2);
var o3 = Object(s3);
shouldBe(o0.description, "Cocoa");
shouldBe(o0.toString(), "Symbol(Cocoa)");
shouldBe(o1.description, "Cappuccino");
shouldBe(o1.toString(), "Symbol(Cappuccino)");
shouldBe(o2.description, "");
shouldBe(o2.toString(), "Symbol()");
shouldBe(o3.description, undefined);
shouldBe(o3.toString(), "Symbol()");
var descriptor = Object.getOwnPropertyDescriptor(Symbol.prototype, "description");
shouldBe(descriptor.enumerable, false);
shouldBe(descriptor.configurable, true);
shouldBe(descriptor.set, undefined);
shouldBe(typeof descriptor.get, "function");
const v99 = () => {
    'use strict';
    s0.description = "Matcha";
};
shouldThrow(v99, `TypeError: Attempted to assign to readonly property.`);
const v103 = () => {
    'use strict';
    o0.description = "Matcha";
};
shouldThrow(v103, `TypeError: Attempted to assign to readonly property.`);
const v107 = () => {
    const v108 = {};
    descriptor.get.call(v108);
};
shouldThrow(v107, `TypeError: Symbol.prototype.description requires that |this| be a symbol or a symbol object`);
const v113 = () => {
    descriptor.get.call(null);
};
shouldThrow(v113, `TypeError: Symbol.prototype.description requires that |this| be a symbol or a symbol object`);
const v119 = () => {
    descriptor.get.call(undefined);
};
shouldThrow(v119, `TypeError: Symbol.prototype.description requires that |this| be a symbol or a symbol object`);
const v125 = () => {
    descriptor.get.call(42);
};
shouldThrow(v125, `TypeError: Symbol.prototype.description requires that |this| be a symbol or a symbol object`);
const v131 = () => {
    descriptor.get.call("Hello");
};
shouldThrow(v131, `TypeError: Symbol.prototype.description requires that |this| be a symbol or a symbol object`);
const v137 = () => {
    descriptor.get.call(42.195);
};
shouldThrow(v137, `TypeError: Symbol.prototype.description requires that |this| be a symbol or a symbol object`);
const v143 = () => {
    descriptor.get.call(false);
};
shouldThrow(v143, `TypeError: Symbol.prototype.description requires that |this| be a symbol or a symbol object`);
shouldBe(descriptor.get.call(s0), "Cocoa");
shouldBe(descriptor.get.call(o0), "Cocoa");
o0.__proto__ = {};
shouldBe(descriptor.get.call(o0), "Cocoa");
