const v1 = {};
const v5 = {
    getOwnPropertyDescriptor() {
        return { configurable: true };
    },
};
const v6 = new Proxy(v1, v5);
var p = v6;
var desc = Object.getOwnPropertyDescriptor(p, "x");
const v16 = { value: undefined, writable: false, enumerable: false, configurable: true };
