function testNonConstructable() {
    const v2 = {};
    const v4 = new Proxy(v2, {});
    var proxy = v4;
    function f6() {
        try { new proxy(); } catch (e) {}
    }
    f6();
    const v11 = new Proxy(proxy, {});
    var proxy2 = v11;
    function f13() {
        try { proxy2(); } catch (e) {}
    }
    f13();
}
testNonConstructable();
function testFailingConstructRevoked() {
    var pair = Proxy.revocable(Array, {});
    const t18 = pair.proxy;
    const v24 = new t18();
    var instance = v24;
    pair.revoke();
    function f27() {
        const v28 = pair.proxy;
        try { new v28(); } catch (e) {}
    }
    f27();
}
testFailingConstructRevoked();
function testFailingGetTrap() {
    const v37 = {
        get() {
            let v36;
            try { v36 = TypeError(); } catch (e) {}
            throw v36;
        },
    };
    var handler = v37;
    const v40 = {};
    const v42 = new Proxy(v40, {});
    var proxy = v42;
    const v45 = new Proxy({}, proxy);
    var proxy2 = v45;
    function f47() {
        try { new proxy2(); } catch (e) {}
    }
    f47();
}
testFailingGetTrap();
function testConstructFallback() {
    var called = false;
    function Target() {
        called = true;
        this.property1 = "value1";
    }
    Target.prototype = {};
    const v62 = new Proxy(Target, {});
    var proxy = v62;
    const v64 = new proxy();
    var instance = v64;
    instance.property1;
    Target.prototype;
    Reflect.getPrototypeOf(instance);
    const v72 = new Proxy(proxy, {});
    var proxy2 = v72;
    called = false;
    const v75 = new proxy2();
    var instance2 = v75;
    instance2.property1;
    Target.prototype;
    Reflect.getPrototypeOf(instance);
}
testConstructFallback();
function testConstructTrapDirectReturn() {
    function Target(a84, a85) {
        this.sum = a84 + a85;
    }
    const v94 = {
        construct(a89, a90, a91) {
            return { sum: 42 };
        },
    };
    var handler = v94;
    const v97 = new Proxy(Target, handler);
    var proxy = v97;
    const v102 = new proxy(1, 2);
    v102.sum;
}
testConstructTrapDirectReturn();
function testConstructTrap() {
    function Target(a107, a108) {
        this.arg1 = a107;
        this.arg2 = a108;
    }
    var seen_target;
    var seen_arguments;
    var seen_new_target;
    const v123 = {
        construct(a118, a119, a120) {
            seen_target = a118;
            seen_arguments = a119;
            seen_new_target = a120;
            return Reflect.construct(a118, a119, a120);
        },
    };
    var handler = v123;
    const v126 = new Proxy(Target, handler);
    var proxy = v126;
    const v130 = new proxy("a", "b");
    var instance = v130;
    Target();
    ["a","b"];
    instance.arg1;
    instance.arg2;
    var instance2 = Reflect.construct(proxy, ["a1","b1"], Array);
    Target();
    ["a1","b1"];
    instance2.arg1;
    instance2.arg2;
}
testConstructTrap();
function testConstructTrapNonConstructor() {
    function target() {
    }
    function f159() {
        return 0;
    }
    const v162 = new Proxy(target, { construct: f159 });
    var p = v162;
    function f164() {
        try { new p(); } catch (e) {}
    }
    f164();
    const v172 = {
        construct(a169, a170, a171) {
            return a170;
        },
    };
    var handler = v172;
    const v175 = new Proxy(Array, handler);
    var proxy = v175;
    const v177 = new proxy();
    var result = v177;
    Array.prototype;
    Reflect.getPrototypeOf(result);
    let v183;
    try { v183 = new OtherProxy(Array, handler); } catch (e) {}
    var otherProxy = v183;
    let v185;
    try { v185 = new otherProxy(); } catch (e) {}
    var otherResult = v185;
    Array?.prototype;
    try { Reflect.getPrototypeOf(otherResult); } catch (e) {}
    let v190;
    try { v190 = new otherProxy2(); } catch (e) {}
    var otherResult2 = v190;
    Array?.prototype;
    try { Reflect.getPrototypeOf(otherResult2); } catch (e) {}
}
try { testConstructTrapNonConstructor(); } catch (e) {}
function testReflectConstructCrossReal() {
    Array.prototype;
    try { Reflect.getPrototypeOf(result); } catch (e) {}
    try { Reflect.getPrototypeOf(result2); } catch (e) {}
    try { Reflect.getPrototypeOf(result3); } catch (e) {}
    try { Reflect.getPrototypeOf(result4); } catch (e) {}
}
try { testReflectConstructCrossReal(); } catch (e) {}
