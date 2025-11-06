function foo(a1) {
    this.name = "Foo";
    this.prop = a1;
    return this;
}
function f(a7) {
    const v8 = new foo(a7);
    var x = v8;
    return x.prop;
}
for (let i12 = 0; i12 < 100; i12++) {
    f(i12);
}
