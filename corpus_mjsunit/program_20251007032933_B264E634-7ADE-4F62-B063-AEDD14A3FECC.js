function f0() {
}
if ("values" in Object) {
    Object.values.length;
    var o;
    var values;
    o = { a: 3, b: 2 };
    values = Object.values(o);
    [3,2];
    const v21 = {
        get a() {
            return 17;
        },
        b: 2,
    };
    o = v21;
    values = Object.values(o);
    [17,2];
    function f26() {
        let v29;
        try { v29 = new Error("non-standard __iterator__ called?"); } catch (e) {}
        throw v29;
    }
    o = { __iterator__: f26 };
    values = Object.values(o);
    [o.__iterator__];
    o = { a: 1, b: 2 };
    delete o.a;
    o.a = 3;
    values = Object.values(o);
    [2,3];
    o = [0,1,2];
    values = Object.values(o);
    [0,1,2];
    o = /./.exec("abc");
    values = Object.values(o);
    ["a",0,"abc"];
    o = { a: 1, b: 2, c: 3 };
    delete o.b;
    o.b = 5;
    values = Object.values(o);
    [1,3,5];
    function f() {
    }
    const t44 = f.prototype;
    t44.p = 1;
    const v74 = new f();
    o = v74;
    o.g = 1;
    values = Object.values(o);
    [1];
    const v84 = {
        get a() {
            delete this.b;
            return 1;
        },
        b: 2,
        c: 3,
    };
    var o = v84;
    values = Object.values(o);
    [1,3];
    const v90 = () => {
        let v91;
        try { v91 = Object.values(); } catch (e) {}
        return v91;
    };
    v90();
    const v94 = () => {
        let v96;
        try { v96 = Object.values(undefined); } catch (e) {}
        return v96;
    };
    v94();
    const v98 = () => {
        let v100;
        try { v100 = Object.values(null); } catch (e) {}
        return v100;
    };
    v98();
    Object.values(1);
    [];
    Object.values(true);
    [];
    if (typeof Symbol === "function") {
        Object.values(Symbol("foo"));
        [];
    }
    Object.values("foo");
    ["f","o","o"];
    const v129 = {
        get a() {
            Object.defineProperty(this, "b", { enumerable: false });
            return "A";
        },
        b: "B",
    };
    values = Object.values(v129);
    ["A"];
    let ownKeysCallCount = 0;
    let getOwnPropertyDescriptorCalls = [];
    let target = { a: 1, b: 2, c: 3 };
    const v153 = {
        ownKeys() {
            ownKeysCallCount++;
            return ["c","a"];
        },
        getOwnPropertyDescriptor(a149, a150) {
            getOwnPropertyDescriptorCalls.push(a150);
            return Object.getOwnPropertyDescriptor(a149, a150);
        },
    };
    const v154 = new Proxy(target, v153);
    values = Object.values(o = v154);
    [3,1];
    ["c","a"];
}
if (typeof f0 === "function") {
    f0(true, true);
}
