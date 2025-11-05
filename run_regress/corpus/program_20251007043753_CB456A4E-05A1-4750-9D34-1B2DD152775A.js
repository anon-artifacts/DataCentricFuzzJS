const v2 = {
    get p() {
        return 42;
    },
};
var obj = v2;
var desc = Object.getOwnPropertyDescriptor(obj, "p");
var getter = desc.get;
Object.defineProperty(obj, "p", { enumerable: false });
obj.p;
(desc = Object.getOwnPropertyDescriptor(obj, "p")).enumerable;
desc.configurable;
desc.get;
desc.set;
desc.hasOwnProperty("value");
desc.hasOwnProperty("writable");
