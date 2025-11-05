var target = {};
var called;
function f4(a5, a6) {
    called = true;
}
var handler = { getOwnPropertyDescriptor: f4 };
const v14 = new Proxy(target, handler);
for (const v18 of [v14,Proxy.revocable(target, handler).proxy]) {
    called = false;
    Object.getOwnPropertyDescriptor(v18, "foo");
}
