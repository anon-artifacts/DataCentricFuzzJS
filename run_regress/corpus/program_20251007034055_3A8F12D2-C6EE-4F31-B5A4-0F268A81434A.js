function f0() {
}
function f1() {
    return f1;
}
f0.prototype = { foo: f1 };
const v3 = new f0();
for (let v4 = 0; v4 < 100; v4++) {
    v3.foo();
}
