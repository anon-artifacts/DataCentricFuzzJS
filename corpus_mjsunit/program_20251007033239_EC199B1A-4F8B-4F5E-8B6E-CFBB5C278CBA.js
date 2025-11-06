var iterProto = null;
function test(a3) {
    const v4 = new a3();
    var iter = v4[Symbol.iterator]();
    Reflect.ownKeys(iter);
    [];
    var proto1 = Object.getPrototypeOf(iter);
    Reflect.ownKeys(proto1);
    ["next",Symbol.toStringTag];
    var desc = Object.getOwnPropertyDescriptor(proto1, "next");
    desc.configurable;
    desc.enumerable;
    desc.writable;
    var proto2 = Object.getPrototypeOf(proto1);
    Object.getPrototypeOf(proto2);
    Object.prototype;
    Object.prototype.toString.call(proto2);
    Reflect.ownKeys(proto2);
    [Symbol.iterator];
    proto2[Symbol.iterator]();
    if (iterProto === null) {
        iterProto = proto2;
    } else {
    }
}
test(Array);
test(String);
test(Map);
test(Set);
