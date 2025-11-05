function f() {
    this.__proto__ = 42;
}
var count = 0;
const v5 = new f();
for (const v6 in v5) {
    count++;
}
