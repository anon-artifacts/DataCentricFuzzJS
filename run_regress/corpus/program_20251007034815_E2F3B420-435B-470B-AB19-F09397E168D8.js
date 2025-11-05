function f0() {
    function f(a2) {
        a2.x = 42;
    }
    f({});
    f(this);
    f(this);
}
f0();
function f11() {
    function f(a13) {
        a13.y = 153;
    }
    const v17 = {};
    const v19 = new Proxy(v17, {});
    Object.setPrototypeOf(this, v19);
    f({});
    f(this);
    f(this);
}
f11();
function f29() {
    function f(a31) {
        a31.z = 153;
    }
    const v36 = {
        get z() {
        },
    };
    const v38 = new Proxy(v36, {});
    Object.setPrototypeOf(this, v38);
    f({});
    f(this);
    f(this);
}
f29();
