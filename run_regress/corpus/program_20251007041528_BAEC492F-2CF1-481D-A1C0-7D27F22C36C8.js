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
var proto = {};
var object = Object.preventExtensions(Object.create(proto));
shouldBe(Object.setPrototypeOf(object, proto), object);
const v21 = () => {
    Object.setPrototypeOf(object, {});
};
shouldThrow(v21, `TypeError: Attempted to assign to readonly property.`);
shouldBe(Reflect.getPrototypeOf(object), proto);
shouldBe(Reflect.setPrototypeOf(object, proto), true);
shouldBe(Reflect.setPrototypeOf(object, {}), false);
shouldBe(Reflect.getPrototypeOf(object), proto);
object.__proto__ = proto;
const v38 = () => {
    object.__proto__ = {};
};
shouldThrow(v38, `TypeError: Attempted to assign to readonly property.`);
shouldBe(object.__proto__, proto);
