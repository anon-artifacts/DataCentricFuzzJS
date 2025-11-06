const v1 = {};
const v18 = {
    getOwnPropertyDescriptor(a3, a4) {
        if (a4 === "a") {
            function f8(a9) {
            }
            return { configurable: true, get: f8 };
        } else {
            return { configurable: true, writable: false, value: 15 };
        }
    },
    defineProperty() {
        throw "not invoked";
    },
};
const v19 = new Proxy(v1, v18);
var y = v19;
const v21 = () => {
    y.a = 1;
    return 1;
};
v21();
const v25 = () => {
    y.b = 2;
    return 2;
};
v25();
if (typeof reportCompare === "function") {
    reportCompare(true, true);
}
