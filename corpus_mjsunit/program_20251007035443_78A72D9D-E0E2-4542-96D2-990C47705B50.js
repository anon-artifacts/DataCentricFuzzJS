var obj = {};
Object.defineProperty(obj, "test", { configurable: false, writable: false, value: "hey" });
Object.defineProperty(obj, "test", { configurable: false, writable: false });
const v16 = new Proxy(obj, {});
var wrapper = v16;
Object.defineProperty(wrapper, "test", { configurable: false, writable: false });
wrapper.test;
