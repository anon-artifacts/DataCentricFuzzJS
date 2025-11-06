function g(a1, a2) {
    a1.foo = a2;
    a1.foo;
    a2 + 1;
}
function f() {
    const v13 = {
        get foo() {
            return this.x;
        },
        set foo(a10) {
            this.x = a10 + 1;
        },
    };
    var o2 = Object.create(v13);
    for (let i18 = 0; i18 < 1200; i18++) {
        g(o2, i18);
    }
}
f();
