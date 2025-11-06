const v13 = {
    get(a1, a2, a3) {
        return "bar";
    },
    getOwnPropertyDescriptor(a10, a11) {
        throw "FAIL";
    },
};
var handler = v13;
var target = {};
const v18 = new Proxy(target, handler);
var proto = v18;
var obj = Object.create(proto);
obj.foo;
var origObj = obj;
for (let i27 = 0; i27 < 4; i27++) {
    obj = Object.create(obj);
}
obj.foo;
obj = origObj;
for (let i37 = 0; i37 < 4; i37++) {
    const v44 = new Proxy(obj, {});
    obj = v44;
}
obj.foo;
