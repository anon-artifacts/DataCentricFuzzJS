expected = Object.prototype.toString;
foo = { foo: 1, bar: 20 };
delete foo.bar;
function test() {
    let toString = foo.toString;
    if (toString !== expected) {
        const v16 = new Error();
        throw v16;
    }
}
for (i = 0; i < 10; i++) {
    test();
}
foo.toString = 100;
expected = 100;
test();
