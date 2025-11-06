function setFoo(a1, a2) {
    this.foo = a1 + a2;
}
function f5(a6, a7) {
    const v10 = a7[0] * a7[1];
    return { foo: v10 };
}
var handler = { construct: f5 };
const v15 = new Proxy(setFoo, handler);
for (const v19 of [v15,Proxy.revocable(setFoo, handler).proxy]) {
    const v22 = new v19(2, 3);
    var obj1 = v22;
    obj1.foo;
    obj1.bar = v19;
    const t14 = obj1.bar;
    const v29 = new t14(2, 3);
    var obj2 = v29;
    obj2.foo;
}
