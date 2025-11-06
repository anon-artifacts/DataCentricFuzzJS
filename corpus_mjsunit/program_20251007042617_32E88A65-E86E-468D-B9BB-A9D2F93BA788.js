var desc = Object.getOwnPropertyDescriptor(this, "WeakMap");
desc.enumerable;
desc.configurable;
desc.writable;
typeof WeakMap;
Object.keys(WeakMap).length;
WeakMap.length;
WeakMap.name;
Object.getPrototypeOf(WeakMap.prototype);
Object.prototype;
const v24 = WeakMap.prototype;
Object.prototype.toString.call(v24);
const v29 = new WeakMap();
Object.prototype.toString.call(v29);
Object.keys(WeakMap.prototype).join();
WeakMap.prototype.constructor;
function checkMethod(a41, a42) {
    var desc = Object.getOwnPropertyDescriptor(WeakMap.prototype, a41);
    desc.enumerable;
    desc.configurable;
    desc.writable;
    typeof desc.value;
    desc.value.name;
    desc.value.length;
}
checkMethod("get", 1);
checkMethod("has", 1);
checkMethod("set", 2);
checkMethod("delete", 1);
