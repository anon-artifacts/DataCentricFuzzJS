function t1() {
    var called = false;
    const v4 = {};
    const v8 = {
        setPrototypeOf() {
            called = true;
            return false;
        },
    };
    const v9 = new Proxy(v4, v8);
    var proxy = v9;
    try {
        Object.setPrototypeOf(proxy, {});
    } catch(e14) {
    }
    console.log(called);
}
t1();
function t2() {
    var called = false;
    const v22 = {};
    const v26 = {
        setPrototypeOf() {
            called = true;
            return false;
        },
    };
    const v27 = new Proxy(v22, v26);
    var proxy = v27;
    try {
        proxy.__proto__ = {};
    } catch(e30) {
    }
    console.log(called);
}
t2();
