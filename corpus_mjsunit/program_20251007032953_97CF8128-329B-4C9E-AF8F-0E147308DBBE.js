function f0() {
    return 2;
}
const t3 = Object.prototype;
t3.foo = f0;
function construct(a5) {
    if (a5) {
        this.a = 1;
    }
    this.b = this.foo();
}
new construct(1);
new construct(1);
const v16 = new construct(1);
var c = v16;
print(c.a);
print(c.b);
