function f(a1) {
    function f2() {
        return this.a;
    }
    var x = { g: f2 };
    const t5 = x.g.prototype;
    t5.a = a1;
    x.g.prototype.a;
    return x;
}
f(1);
f(2);
f(3);
