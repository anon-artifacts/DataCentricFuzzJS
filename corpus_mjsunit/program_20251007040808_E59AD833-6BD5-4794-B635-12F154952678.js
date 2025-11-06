function f() {
    return this.foo;
}
function g() {
    return f.apply(null, arguments);
}
function h() {
    return f.apply(void 0, arguments);
}
var foo = 42;
for (let i15 = 0; i15 < 3; i15++) {
    g();
}
g();
for (let i26 = 0; i26 < 3; i26++) {
    h();
}
h();
var G1 = 21;
var G2 = 22;
function u() {
    var v = G1 + G2;
    return f.apply(v, arguments);
}
const t24 = Number.prototype;
t24.foo = 42;
const t26 = Number.prototype;
delete t26.foo;
for (let i51 = 0; i51 < 3; i51++) {
    void 0;
    u();
}
void 0;
u();
