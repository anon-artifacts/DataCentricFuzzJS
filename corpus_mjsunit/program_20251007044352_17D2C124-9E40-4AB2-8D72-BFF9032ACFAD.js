class C0 {
    constructor(a2) {
        this.a = a2;
    }
}
class C3 {
    constructor(a5) {
        this.a = a5;
    }
}
function foo() {
    const v8 = new C0(7);
    var x = v8;
    const v10 = new C3(x);
    var y = v10;
    var z = y.a;
    z.a;
}
foo();
foo();
foo();
foo();
foo();
