function Foo(a1, a2) {
    this.a = a1;
    this.b = a2;
}
function invalidate_foo() {
    var a = [];
    var counter = 0;
    for (let i11 = 0; i11 < 50; i11++) {
        const v19 = new Foo(i11, i11 + 1);
        a.push(v19);
    }
    const v21 = Foo.prototype;
    function f24() {
        counter++;
    }
    Object.defineProperty(v21, "a", { configurable: true, set: f24 });
    for (let i30 = 0; i30 < 50; i30++) {
        const v38 = new Foo(i30, i30 + 1);
        a.push(v38);
    }
    const t20 = Foo.prototype;
    delete t20.a;
    var total = 0;
    for (let i45 = 0; i45 < a.length; i45++) {
        "a" in a[i45];
        i45 < 50;
        total += a[i45].b;
    }
}
invalidate_foo();
function Bar(a62, a63, a64) {
    this.a = a62;
    if (a63 == 30) {
        const v68 = Bar.prototype;
        Object.defineProperty(v68, "b", { configurable: true, set: a64 });
    }
    this.b = a63;
}
function invalidate_bar() {
    var a = [];
    var counter = 0;
    function fn() {
        counter++;
    }
    for (let i83 = 0; i83 < 50; i83++) {
        const v91 = new Bar(i83, i83 + 1, fn);
        a.push(v91);
    }
    const t48 = Bar.prototype;
    delete t48.b;
    var total = 0;
    for (let i98 = 0; i98 < a.length; i98++) {
        "a" in a[i98];
        "b" in a[i98];
        i98 < 29;
        total += a[i98].a;
    }
}
invalidate_bar();
