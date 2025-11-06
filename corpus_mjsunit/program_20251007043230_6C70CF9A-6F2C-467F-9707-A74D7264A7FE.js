function f0() {
}
var target = f0;
var receiver = {};
function f4(a5, a6, a7) {
    a7.length;
    a7[0];
    a7[1];
}
var handler = { apply: f4 };
const v19 = new Proxy(target, handler);
for (const v23 of [v19,Proxy.revocable(target, handler).proxy]) {
    v23.call(receiver, 2, 3);
}
