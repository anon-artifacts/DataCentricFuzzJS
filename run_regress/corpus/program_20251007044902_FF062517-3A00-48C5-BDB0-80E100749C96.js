function CreateConstructableProxy(a1) {
    function f3() {
    }
    const v4 = new Proxy(f3, a1);
    return v4;
}
function f5() {
    var prototype = { x: 1 };
    var log = [];
    const v15 = {
        get(a12) {
            log.push("get trap");
            return prototype;
        },
    };
    var proxy = CreateConstructableProxy(v15);
    var o = Reflect.construct(Number, [100], proxy);
    ["get trap"];
    Object.getPrototypeOf(o) === prototype;
    Number.prototype.valueOf.call(o);
}
f5();
function f34() {
    var prototype = { x: 1 };
    var log = [];
    const v45 = {
        get(a41) {
            log.push("get trap");
            return 10;
        },
    };
    var proxy = CreateConstructableProxy(v45);
    var o = Reflect.construct(Number, [100], proxy);
    ["get trap"];
    Object.getPrototypeOf(o) === Number.prototype;
    Number.prototype.valueOf.call(o);
}
f34();
function f65() {
    var prototype = { x: 1 };
    var log = [];
    const v75 = {
        get(a72) {
            log.push("get trap");
            return prototype;
        },
    };
    var proxy = CreateConstructableProxy(v75);
    var o = Reflect.construct(Function, ["return 1000"], proxy);
    ["get trap"];
    Object.getPrototypeOf(o) === prototype;
    o();
}
f65();
function f92() {
    var prototype = { x: 1 };
    var log = [];
    const v102 = {
        get(a99) {
            log.push("get trap");
            return prototype;
        },
    };
    var proxy = CreateConstructableProxy(v102);
    var o = Reflect.construct(Array, [1,2,3], proxy);
    ["get trap"];
    Object.getPrototypeOf(o) === prototype;
    [1,2,3];
}
f92();
