const v1 = {};
function f2() {
    return { value: 1, configurable: true, writable: true };
}
function f7() {
}
const v10 = new Proxy(v1, { getOwnPropertyDescriptor: f2, defineProperty: f7 }, null);
var p = v10;
var o = Object.create(p);
o.a = 1;
