let p = Object.create({ foo: 1 });
let o = Object.create(p);
let other = { foo: 10 };
function foo() {
    return o.foo;
}
for (let i13 = 0; i13 < 10; i13++) {
    foo();
}
p.foo = null;
gc();
if (foo() !== null) {
    const v28 = new Error("bad get by id access");
    throw v28;
}
