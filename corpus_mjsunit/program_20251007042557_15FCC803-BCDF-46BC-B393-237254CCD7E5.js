function get() {
    return x;
}
function set(a3) {
    this.x = a3;
}
var obj = { x: 1 };
obj.__defineGetter__("accessor", get);
obj.__defineSetter__("accessor", set);
const v13 = new Array();
var a = v13;
a[1] = 42;
obj[1] = 42;
var descIsData = Reflect.getOwnPropertyDescriptor(obj, "x");
descIsData.enumerable;
descIsData.writable;
descIsData.configurable;
var descIsAccessor = Reflect.getOwnPropertyDescriptor(obj, "accessor");
descIsAccessor.enumerable;
descIsAccessor.configurable;
descIsAccessor.get == get;
descIsAccessor.set == set;
var descIsNotData = Reflect.getOwnPropertyDescriptor(obj, "not-x");
descIsNotData == undefined;
var descIsNotAccessor = Reflect.getOwnPropertyDescriptor(obj, "not-accessor");
descIsNotAccessor == undefined;
var descArray = Reflect.getOwnPropertyDescriptor(a, "1");
descArray.enumerable;
descArray.configurable;
descArray.writable;
descArray.value;
var descObjectElement = Reflect.getOwnPropertyDescriptor(obj, "1");
descObjectElement.enumerable;
descObjectElement.configurable;
descObjectElement.writable;
descObjectElement.value;
const v61 = new String("foobar");
var a = v61;
for (let i64 = 0; i64 < a.length; i64++) {
    var descStringObject = Reflect.getOwnPropertyDescriptor(a, i64);
    descStringObject.enumerable;
    descStringObject.configurable;
    descStringObject.writable;
    descStringObject.value;
    a.substring(i64, i64 + 1);
}
a.x = 42;
a[10] = "foo";
var descStringProperty = Reflect.getOwnPropertyDescriptor(a, "x");
descStringProperty.enumerable;
descStringProperty.configurable;
descStringProperty.writable;
descStringProperty.value;
var descStringElement = Reflect.getOwnPropertyDescriptor(a, "10");
descStringElement.enumerable;
descStringElement.configurable;
descStringElement.writable;
descStringElement.value;
var proto = {};
proto[10] = 42;
const v100 = new Array();
var objWithProto = v100;
objWithProto.prototype = proto;
objWithProto[0] = "bar";
var descWithProto = Reflect.getOwnPropertyDescriptor(objWithProto, "10");
function f107() {
    return this;
}
var global = f107();
global[42] = 42;
function el_getter() {
    return 239;
}
function el_setter() {
}
Object.defineProperty(global, "239", { get: el_getter, set: el_setter });
var descRegularElement = Reflect.getOwnPropertyDescriptor(global, "42");
descRegularElement.value;
var descAccessorElement = Reflect.getOwnPropertyDescriptor(global, "239");
el_getter();
descAccessorElement.get;
el_setter();
descAccessorElement.set;
