const v2 = { configurable: true };
var proto = Object.create(null, { foo: v2 });
const v8 = { configurable: true };
var descs = { bar: v8 };
const v12 = { configurable: true };
descs[Symbol.for("quux")] = v12;
var target = Object.create(proto, descs);
const v20 = new Proxy(target, {});
for (const v25 of [v20,Proxy.revocable(target, {}).proxy]) {
    ({}).hasOwnProperty.call(v25, "foo");
    ({}).hasOwnProperty.call(v25, "bar");
    ({}).hasOwnProperty.call(v25, "quux");
    const v42 = Symbol("quux");
    ({}).hasOwnProperty.call(v25, v42);
    ({}).hasOwnProperty.call(v25, "Symbol(quux)");
    const v53 = Symbol.for("quux");
    ({}).hasOwnProperty.call(v25, v53);
}
var called;
function f60() {
    called = true;
}
function f62() {
}
var handler = { getOwnPropertyDescriptor: f60, has: f62 };
const v69 = new Proxy({}, handler);
for (const v74 of [v69,Proxy.revocable({}, handler).proxy]) {
    called = false;
    ({}).hasOwnProperty.call(v74, "foo");
}
