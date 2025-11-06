function justAdd(a1, a2) {
    return a1 + a2;
}
function f4(a5, a6, a7) {
    return a7[0] * a7[1];
}
var handler = { apply: f4 };
const v14 = new Proxy(justAdd, handler);
for (const v18 of [v14,Proxy.revocable(justAdd, handler).proxy]) {
    v18(2, 3);
}
