function t1() {
    function f1(a2) {
        var target = {};
        const v7 = new Proxy(target, {});
        let p = v7;
        const v9 = new a2();
        let map = v9;
        map.set(p, 101);
        console.log(map.get(p), 101);
        p.x = 20;
        console.log(target.x, 20);
    }
    ([WeakMap,Map]).forEach(f1);
}
t1();
function t2() {
    function f27(a28) {
        var target = {};
        const v33 = new Proxy(target, {});
        let p = v33;
        const v35 = new a28();
        let map = v35;
        map.set(p, 101);
        console.log(map.get(p), 101);
        map.delete(p);
        console.log(map.get(p), undefined);
        map.set(p, 102);
        console.log(map.get(p), 102);
        p.x = 20;
        console.log(target.x, 20);
    }
    ([WeakMap,Map]).forEach(f27);
}
t2();
function t3() {
    var target = {};
    var handler = {};
    var getOwnPropertyDescriptorCalled = false;
    function f68() {
        assert.fail("This function will not be called as 'getOwnPropertyDescriptor' will add accessor");
    }
    handler["defineProperty"] = f68;
    function f73(a74, a75) {
        getOwnPropertyDescriptorCalled = true;
        function f78() {
        }
        Object.defineProperty(a74, "abc", { set: f78 });
        return Reflect.getOwnPropertyDescriptor(a74, a75);
    }
    handler["getOwnPropertyDescriptor"] = f73;
    const v86 = new Proxy(target, handler);
    var proxy = v86;
    proxy.abc = undefined;
    console.log(getOwnPropertyDescriptorCalled);
}
t3();
function t4() {
    var target = {};
    var handler = {};
    var getOwnPropertyDescriptorCalled = false;
    function f99() {
        assert.fail("This function will not be called as 'getOwnPropertyDescriptor' will add property with writable false");
    }
    handler["defineProperty"] = f99;
    function f104(a105, a106) {
        getOwnPropertyDescriptorCalled = true;
        Object.defineProperty(a105, "abc", { value: 1, writable: false });
        return Reflect.getOwnPropertyDescriptor(a105, a106);
    }
    handler["getOwnPropertyDescriptor"] = f104;
    const v118 = new Proxy(target, handler);
    var proxy = v118;
    proxy.abc = undefined;
    console.log(getOwnPropertyDescriptorCalled);
}
t4();
function t5() {
    var target = {};
    var handler = {};
    var definePropertyCalled = false;
    var getOwnPropertyDescriptorCalled = false;
    function f133() {
        definePropertyCalled = true;
    }
    handler["defineProperty"] = f133;
    function f136(a137, a138) {
        getOwnPropertyDescriptorCalled = true;
        return Reflect.getOwnPropertyDescriptor(a137, a138);
    }
    handler["getOwnPropertyDescriptor"] = f136;
    const v144 = new Proxy(target, handler);
    var proxy = v144;
    proxy.abc = undefined;
    console.log(definePropertyCalled);
    console.log(getOwnPropertyDescriptorCalled);
}
t5();
function t6() {
    var targetCalled = false;
    function f154() {
        targetCalled = true;
    }
    var func4 = f154;
    const v159 = new Proxy(func4, {});
    var v0 = v159;
    function f161() {
        var a;
        v0(a) > 1;
    }
    var sc0 = { foo: f161 };
    sc0.v0 = v0;
    sc0.foo();
    console.log(targetCalled);
}
t6();
function t7() {
    try {
        const v175 = {};
        function f176() {
            return true;
        }
        const v179 = new Proxy(v175, { has: f176 });
        const v183 = new Uint32Array();
        Reflect.set(v179, "abc", 1145324612, v183);
    } catch(e186) {
    }
    try {
        const v188 = {};
        function f189() {
            return true;
        }
        const v192 = new Proxy(v188, { has: f189 });
        const v196 = new Uint32Array();
        Reflect.set(v192, "abc", 1145324612, v196);
    } catch(e199) {
    }
    const v201 = {};
    const v203 = new Proxy(v201, {});
    var obj1 = Object.create(v203);
    obj1[Symbol.species] = 0;
}
t7();
function t8() {
    var trapCalled = false;
    function f214() {
    }
    var func4 = f214;
    function f216(a217, a218, a219) {
        trapCalled = true;
    }
    var handler = { apply: f216 };
    const v224 = new Proxy(func4, handler);
    var v0 = v224;
    function f226() {
        var a;
        v0(a) > 1;
    }
    var sc0 = { foo: f226 };
    sc0.v0 = v0;
    sc0.foo();
    console.log(trapCalled);
}
t8();
function t9() {
    var trapCalled = false;
    function f241(a242, a243) {
        trapCalled = true;
        obj.revoke();
        return {};
    }
    var handler = { getPrototypeOf: f241 };
    var obj = Proxy.revocable({}, handler);
    Object.getPrototypeOf(obj.proxy);
    console.log(trapCalled);
}
t9();
function t10() {
    var trapCalled = false;
    function f263(a264, a265) {
        trapCalled = true;
        obj.revoke();
        return true;
    }
    var handler = { setPrototypeOf: f263 };
    var obj = Proxy.revocable({}, handler);
    const v276 = obj.proxy;
    var ret = Object.setPrototypeOf(v276, {});
    console.log(trapCalled);
}
t10();
function t11() {
    var trapCalled = false;
    function f287(a288, a289) {
        trapCalled = true;
        obj.revoke();
        return true;
    }
    var handler = { isExtensible: f287 };
    var obj = Proxy.revocable({}, handler);
    var ret = Object.isExtensible(obj.proxy);
    console.log(trapCalled);
}
t11();
function t12() {
    var trapCalled = false;
    function f310(a311, a312) {
        trapCalled = true;
        obj.revoke();
    }
    var handler = { preventExtensions: f310 };
    var obj = Proxy.revocable({}, handler);
    try {
        Object.preventExtensions(obj.proxy);
    } catch(e325) {
    }
    console.log(trapCalled);
}
t12();
function t13() {
    var trapCalled = false;
    function f332(a333, a334, a335) {
        trapCalled = true;
        obj.revoke();
    }
    var handler = { getOwnPropertyDescriptor: f332 };
    var obj = Proxy.revocable({}, handler);
    Object.getOwnPropertyDescriptor(obj.proxy, "a");
    console.log(trapCalled);
}
t13();
function t14() {
    var trapCalled = false;
    function f355(a356, a357, a358) {
        trapCalled = true;
        obj.revoke();
        const v363 = new String();
        a356[undefined] = v363;
    }
    var handler = { getOwnPropertyDescriptor: f355 };
    var obj = Proxy.revocable({}, handler);
    Object.getOwnPropertyDescriptor(obj.proxy);
    console.log(trapCalled);
}
t14();
function t15() {
    var trapCalled = false;
    function f380(a381, a382, a383) {
        trapCalled = true;
        let result = Object.getOwnPropertyDescriptor(obj, "proxy");
        obj.revoke();
        return result;
    }
    var handler = { getOwnPropertyDescriptor: f380 };
    var obj = Proxy.revocable({}, handler);
    Object.getOwnPropertyDescriptor(obj.proxy);
    console.log(trapCalled);
}
t15();
function t16() {
    var trapCalled = false;
    const v414 = {
        get(a407, a408) {
            trapCalled = true;
            if (a408 === "getOwnPropertyDescriptor") {
                obj.revoke();
            }
        },
    };
    var handler = v414;
    const v417 = { a: 0 };
    const v420 = new Proxy({}, handler);
    var obj = Proxy.revocable(v417, v420);
    Object.getOwnPropertyDescriptor(obj.proxy, "a");
    console.log(trapCalled);
}
t16();
function t17() {
    var trapCalled = false;
    function f433(a434, a435, a436) {
        trapCalled = true;
        obj.revoke();
        return false;
    }
    var handler = { has: f433 };
    var obj = Proxy.revocable({}, handler);
    "a" in obj.proxy;
    console.log(trapCalled);
}
t17();
function t18() {
    var trapCalled = false;
    function f456(a457, a458, a459) {
        trapCalled = true;
        obj.revoke();
        return {};
    }
    var handler = { get: f456 };
    var obj = Proxy.revocable({}, handler);
    var ret = obj.proxy.a;
    console.log(trapCalled);
}
t18();
function t19() {
    var trapCalled = false;
    function f479(a480, a481, a482) {
        trapCalled = true;
        obj.revoke();
        return {};
    }
    var handler = { set: f479 };
    var obj = Proxy.revocable({}, handler);
    const t311 = obj.proxy;
    t311.a = 10;
    console.log(trapCalled);
}
t19();
function t20() {
    var trapCalled = false;
    function f501(a502, a503, a504) {
        trapCalled = true;
        obj.revoke();
        return {};
    }
    var handler = { deleteProperty: f501 };
    var obj = Proxy.revocable({}, handler);
    const t325 = obj.proxy;
    delete t325.a;
    console.log(trapCalled);
}
t20();
function t21() {
    var trapCalled = false;
    function f523(a524, a525, a526) {
        trapCalled = true;
        obj.revoke();
        return {};
    }
    var handler = { ownKeys: f523 };
    var obj = Proxy.revocable({}, handler);
    Object.keys(obj.proxy);
    console.log(trapCalled);
}
t21();
function t22() {
    var keys = ["a"];
    keys[100] = "b";
    const v551 = { a: 1, b: 2 };
    function f552() {
        return keys;
    }
    const v554 = new Proxy(v551, { ownKeys: f552 });
    var proxy = v554;
    try {
        Object.keys(proxy);
    } catch(e558) {
    }
}
t22();
function t23() {
    var trapCalled = false;
    const v567 = {
        get apply() {
            trapCalled = true;
            obj.revoke();
        },
    };
    var handler = v567;
    const v569 = () => {
    };
    var obj = Proxy.revocable(v569, handler);
    obj.proxy();
    console.log(trapCalled);
}
t23();
function t24() {
    var trapCalled = false;
    const v586 = {
        get construct() {
            trapCalled = true;
            obj.revoke();
            const v584 = () => {
                return {};
            };
            return v584;
        },
    };
    var handler = v586;
    function f588() {
    }
    var obj = Proxy.revocable(f588, handler);
    const t390 = obj.proxy;
    new t390();
    console.log(trapCalled);
}
t24();
function t25() {
    function parent() {
        this.noTrap = true;
    }
    const v603 = new Proxy(parent, {});
    var proxyNoTrap = v603;
    function f605() {
        this.other = true;
        return { trap: true };
    }
    var handler = { construct: f605 };
    const v612 = new Proxy(parent, handler);
    var proxyWithTrap = v612;
    class C614 extends proxyNoTrap {
        constructor() {
            super();
            this.own = true;
        }
        a() {
            return true;
        }
    }
    class C619 extends proxyWithTrap {
        constructor() {
            super();
            this.own = true;
        }
        a() {
            return true;
        }
    }
    const v624 = new C614();
    var notrap = v624;
    console.log(notrap.own);
    console.log(notrap.a());
    console.log(notrap.noTrap);
    const v633 = new C619();
    var withtrap = v633;
    console.log(withtrap.own);
    withtrap.a;
    console.log(withtrap.trap);
    withtrap.other;
    withtrap.noTrap;
}
t25();
function t26() {
    function Foo(a645) {
        this.x = a645;
    }
    const v649 = new Proxy(Foo, {});
    var proxy = v649;
    const v652 = new Proxy(proxy, {});
    var proxy1 = v652;
    const v655 = new Proxy(proxy1, {});
    var proxy2 = v655;
    const v658 = new proxy2(10);
    var obj1 = v658;
    console.log(10, obj1.x);
    var obj2 = Reflect.construct(proxy2, [20]);
    console.log(20, obj2.x);
}
t26();
function t27() {
    const v675 = {};
    function f676(a677) {
        return ["a","a"];
    }
    const v682 = new Proxy(v675, { ownKeys: f676 });
    var proxy = v682;
    try {
        Object.keys(proxy);
    } catch(e686) {
    }
}
t27();
function t28() {
    const desc = {};
    let counter = 0;
    function f693(a694, a695, a696) {
        return Reflect.defineProperty(a694, a695, a696);
    }
    let handler = { defineProperty: f693 };
    function f702() {
        ++counter;
        return true;
    }
    Object.defineProperty(desc, "writable", { get: f702 });
    const v710 = new Proxy({}, handler);
    Object.defineProperty(v710, "test", desc);
    console.log(1, counter);
}
t28();
