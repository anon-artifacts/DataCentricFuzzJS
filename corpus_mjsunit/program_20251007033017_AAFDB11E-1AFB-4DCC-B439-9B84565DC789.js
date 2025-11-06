function f() {
    for (let i2 = 0; i2 < 100; i2++) {
        const v9 = { id: 1 };
        var obj = { data: v9 };
    }
    function f16() {
        return this.data.id;
    }
    Object.defineProperty(obj, "id", { configurable: true, enumerable: false, get: f16 });
    return obj.id;
}
f();
function f2() {
    for (let i28 = 0; i28 < 100; i28++) {
        const v35 = { id: 1 };
        var obj = { data: v35 };
    }
    function f42() {
        return this.data.id;
    }
    function f46(a47) {
        const t21 = this.data;
        t21.id = a47;
    }
    Object.defineProperty(obj, "id", { configurable: true, enumerable: false, get: f42, set: f46 });
    obj.id = 3;
    return obj.id;
}
f2();
