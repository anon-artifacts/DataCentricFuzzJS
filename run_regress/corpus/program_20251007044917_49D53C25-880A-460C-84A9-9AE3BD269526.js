var desc = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__");
desc.enumerable;
desc.configurable;
typeof desc.get;
typeof desc.set;
function replaced_get() {
}
const v14 = Object.prototype;
Object.defineProperty(v14, "__proto__", { get: replaced_get });
desc = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__");
desc.enumerable;
desc.configurable;
replaced_get();
desc.get;
function replaced_set(a26) {
}
const v27 = Object.prototype;
Object.defineProperty(v27, "__proto__", { set: replaced_set });
desc = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__");
desc.enumerable;
desc.configurable;
replaced_set();
desc.set;
const v38 = Object.prototype;
Object.defineProperty(v38, "__proto__", { configurable: false });
desc = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__");
desc.enumerable;
desc.configurable;
replaced_get();
desc.get;
replaced_set();
desc.set;
Object.freeze(Object.prototype);
Object.isFrozen(Object.prototype);
