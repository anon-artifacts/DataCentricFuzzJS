var test = { x: 1, y: 2 };
delete test.x;
function f6() {
    return 1;
}
function f8(a9) {
    Object.defineProperty(this, "foo", { value: a9 });
    this.foo;
}
Object.defineProperty(test, "foo", { get: f6, set: f8, configurable: true });
test.other = 0;
test.foo;
test.foo = 33;
test.foo;
var arr = [];
for (const v30 in test) {
    arr.push(v30);
}
"" + arr;
