var target = {};
var called;
function f4(a5) {
    called = true;
    return [];
}
var handler = { ownKeys: f4 };
const v13 = new Proxy(target, handler);
for (const v17 of [v13,Proxy.revocable(target, handler).proxy]) {
    called = false;
    const v19 = new Proxy(target, handler);
    Object.keys(v19);
}
