function f0() {
}
const v3 = new ArrayBuffer(5);
var ab = v3;
const v7 = new Proxy(ab, {});
var p = v7;
var ps = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set;
var new_proto = {};
ps.call(p, new_proto);
f0(ab.__proto__, new_proto);
