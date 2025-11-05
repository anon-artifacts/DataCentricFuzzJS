function f0() {
    var x = 1;
    function f3() {
        return 1;
    }
    const t5 = x.__proto__;
    t5.f = f3;
    function g() {
    }
    function f7() {
        return 3;
    }
    const t12 = g.prototype;
    t12.f = f7;
    const v10 = new g();
    var y = v10;
    function f(a13) {
        return a13.f();
    }
    f(x);
    f(y);
    f(x);
    f(y);
    f(x);
    f(y);
}
f0();
function f24() {
    function f() {
        return 1;
    }
    function g() {
        return 2;
    }
    var global;
    function h(a32) {
        var fg;
        var a = 0;
        if (a32) {
            global = 0;
            a = 1;
            fg = f;
        } else {
            global = 1;
            fg = g;
        }
        return fg() + a;
    }
    h(0);
    h(0);
    h(1);
    h(1);
    h(0);
}
f24();
