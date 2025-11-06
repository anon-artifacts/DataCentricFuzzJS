function foo(a1) {
    this.name = "Foo";
    this.prop = a1;
}
function f(a6) {
    const v7 = new foo(a6);
    var x = v7;
    return x.prop;
}
for (let i11 = 0; i11 < 100; i11++) {
    f(i11);
}
