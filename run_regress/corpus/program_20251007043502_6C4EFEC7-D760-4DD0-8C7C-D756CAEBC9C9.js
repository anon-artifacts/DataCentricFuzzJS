const v1 = ([]).pop;
var obj = { pop: v1, 0: "zero" };
Object.defineProperty(obj, "length", { configurable: true, value: 1, writable: false });
const v14 = ([]).pop;
const v18 = {
    pop: v14,
    0: "zero",
    get length() {
        return 1;
    },
};
obj = v18;
