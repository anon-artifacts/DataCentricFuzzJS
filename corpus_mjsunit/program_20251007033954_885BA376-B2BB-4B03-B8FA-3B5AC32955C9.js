var target = {};
var called = false;
function f4(a5) {
    called = true;
    return [];
}
var handler = { ownKeys: f4 };
const v13 = new Proxy(target, handler);
for (const v17 of [v13,Proxy.revocable(target, handler).proxy]) {
    Object.getOwnPropertyNames(v17).length;
}
