function tryItOut() {
    function f() {
        const t2 = /x/;
        t2.a = this;
        Array(this) + "";
    }
    for (let i9 = 0; i9 < 1000; i9++) {
        f();
    }
}
tryItOut();
