class C0 {
}
const v2 = {
    get x() {
        return this;
    },
};
const v5 = Object.getOwnPropertyDescriptor(v2, "x");
const t8 = v5.get;
t8.prototype = v5;
const v9 = {
    set x(a8) {
    },
};
Object.defineProperty(Object.getOwnPropertyDescriptor(v9, "x").set, "prototype", { configurable: true, enumerable: true, value: C0 });
