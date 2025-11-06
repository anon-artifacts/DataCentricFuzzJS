function foo() {
    const v1 = {};
    const v2 = {};
    return { 0: v1, x: v2 };
}
var ref = foo();
foo();
foo();
foo();
