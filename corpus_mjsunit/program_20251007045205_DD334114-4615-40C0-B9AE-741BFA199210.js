const v1 = {};
const v4 = {
    getPrototypeOf() {
    },
    get() {
    },
};
const v5 = new Proxy(v1, v4);
this.__proto__ = v5;
