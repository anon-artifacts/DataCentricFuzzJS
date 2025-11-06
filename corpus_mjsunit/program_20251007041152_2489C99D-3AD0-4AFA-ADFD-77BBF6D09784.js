var handler = {};
var target = { a: 1 };
const v6 = new Proxy(target, handler);
var proxy = v6;
target.propertyIsEnumerable("a");
proxy.propertyIsEnumerable("a");
target.propertyIsEnumerable("b");
proxy.propertyIsEnumerable("b");
function f16(a17, a18) {
    return { configurable: true, enumerable: true, value: 10 };
}
handler.getOwnPropertyDescriptor = f16;
target.propertyIsEnumerable("a");
proxy.propertyIsEnumerable("a");
target.propertyIsEnumerable("b");
proxy.propertyIsEnumerable("b");
function f31(a32, a33) {
    return { configurable: true, enumerable: false, value: 10 };
}
handler.getOwnPropertyDescriptor = f31;
target.propertyIsEnumerable("a");
proxy.propertyIsEnumerable("a");
target.propertyIsEnumerable("b");
proxy.propertyIsEnumerable("b");
