function f0() {
    var o = [];
    o.__proto__ = {};
    function store(a5, a6, a7) {
        a5[a6] = a7;
    }
    store(o, 0, 0);
    store(o, 1, 0);
    store(o, 2, 0);
    const t6 = o.__proto__;
    t6[10000000] = 1;
    var set = 0;
    function f22() {
        return 100;
    }
    function f24(a25) {
        set = a25;
    }
    Object.defineProperty(o, "3", { get: f22, set: f24 });
    store(o, 3, 1000);
    o[3];
}
f0();
function f36() {
    const v39 = new Int32Array(1);
    var o = v39;
    const v41 = () => {
        function f43() {
        }
        const v44 = { get: f43 };
        let v46;
        try { v46 = Object.defineProperty(o, "0", v44); } catch (e) {}
        return v46;
    };
    v41();
    const v53 = { value: 0, writable: true, enumerable: true, configurable: false };
    Object.getOwnPropertyDescriptor(o, "0");
}
f36();
function f58() {
    function f() {
        const v61 = new Array();
        var a = v61;
        a[1] = 1.5;
        return a;
    }
    f();
    f();
    var a = f();
    a[2] = 2;
    a.length;
}
f58();
