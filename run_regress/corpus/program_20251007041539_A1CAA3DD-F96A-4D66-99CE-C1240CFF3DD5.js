function f0() {
    function f() {
        return this.foo();
    }
    var t = this;
    function f6() {
        print(this);
    }
    var x = { foo: f6 };
    x.f = f;
    x.f();
    try {
        f();
    } catch(e14) {
        print(e14.message);
    }
    print(t === this);
}
f0();
function f23() {
    function f(a25) {
        return a25.foo();
    }
    function f27() {
        print(this);
    }
    var x = { foo: f27 };
    f(x);
}
f23();
function test() {
    function f36() {
        return this;
    }
    const t34 = Object.prototype;
    t34["foo"] = f36;
    var c = {};
    var x;
    x + c.foo("a");
    function f48() {
        return 1;
    }
    f48().foo();
}
print(test());
print(test());
