function test0() {
    console.log("test0 : Object.keys with symbols");
    var sym = Symbol();
    var o = {};
    o[sym] = "blah";
    const v12 = new Proxy(o, {});
    var p = v12;
    console.log(Object.keys(p).length);
}
function test1() {
    console.log("test1: Object.prototype.propertyIsEnumerable");
    var sym = Symbol();
    var o = {};
    Object.defineProperty(o, sym, { value: 5, enumerable: true });
    console.log(o.propertyIsEnumerable(sym));
}
function test2() {
    console.log("test2: Object.getOwnPropertyDescriptor");
    const v39 = {};
    const v41 = new Proxy(v39, {});
    var desc = { value: v41, writable: true, enumerable: true, configurable: true };
    function f47() {
        console.log("getown");
        return desc;
    }
    var traps = { getOwnPropertyDescriptor: f47 };
    const v53 = new Proxy({}, traps);
    var p = v53;
    console.log(Object.getOwnPropertyDescriptor(p).value);
    function f59() {
        console.log("proxy getown");
        function f62() {
            return 5;
        }
        desc.get = f62;
        const v65 = new Proxy(desc, {});
        return v65;
    }
    traps.getOwnPropertyDescriptor = f59;
    try {
        Object.getOwnPropertyDescriptor(p);
        console.log("Expected to throw TypeError");
    } catch(e69) {
        if (e69 instanceof TypeError) {
            if (e69.message !== "Invalid property descriptor: cannot both specify accessors and a 'value' attribute") {
                console.log("FAIL");
            }
        } else {
            console.log("FAIL");
        }
    }
}
function test3() {
    function f80(a81, a82) {
        console.log("has trap for prop :" + a82);
        return Reflect.has(a81, a82);
    }
    function f89(a90, a91) {
        console.log("getOwnPropertyDescriptor trap for prop: " + a91);
        const v99 = new Proxy(desc, traps);
        return v99;
    }
    var traps = { has: f80, getOwnPropertyDescriptor: f89 };
    var desc = { value: 1, writable: true, configurable: true };
    desc.a = 1;
    const v109 = new Proxy(desc, traps);
    var p = v109;
    Object.getOwnPropertyDescriptor(p, "a");
}
function test4() {
    var keys = ["a"];
    function f118() {
        console.log("plain key trap!");
        return keys;
    }
    function f122(a123, a124) {
        console.log("getOwn");
        return { enumerable: true, configurable: true };
    }
    var traps = { ownKeys: f118, getOwnPropertyDescriptor: f122 };
    const v135 = new Proxy({}, traps);
    var p = v135;
    console.log(Object.keys(p).length);
    function f142(a143, a144) {
        console.log("proxy key trap!");
        const v148 = new Proxy(keys, {});
        return v148;
    }
    traps.ownKeys = f142;
    console.log(Object.keys(p).length);
}
function test5() {
    var keys = ["a"];
    function f156() {
        console.log("plain key trap!");
        return keys;
    }
    function f160(a161, a162) {
        console.log("getOwn :" + a162);
        return { enumerable: true, configurable: true };
    }
    var traps = { ownKeys: f156, getOwnPropertyDescriptor: f160 };
    const v174 = new Proxy({}, traps);
    var p = v174;
    function f176(a177, a178) {
        console.log("proxy key trap!");
        return { 0: "a", 2: "3", length: 1 };
    }
    traps.ownKeys = f176;
    console.log(Object.keys(p).length);
}
function test6() {
    var arr = [1,2,3];
    function f199(a200, a201) {
        console.log("get trap : " + a201);
        if (a201 == "length") {
            return a200.length;
        }
    }
    const v210 = new Proxy(arr, { get: f199 });
    Math.max.apply(null, v210);
}
function test7() {
    function f215(a216, a217) {
        console.log("get trap :" + a217);
        return Reflect.get(a216, a217);
    }
    function f224(a225) {
        console.log("ownKeys trap : ");
        return Reflect.ownKeys(a225);
    }
    function f231(a232, a233) {
        console.log("getOwnPropertyDescriptor trap : " + a233.toString());
        return Reflect.getOwnPropertyDescriptor(a232, a233);
    }
    var traps = { get: f215, ownKeys: f224, getOwnPropertyDescriptor: f231 };
    var proto = { inherited: "blah" };
    var props = Object.create(proto);
    var sym1 = Symbol();
    Object.defineProperty(props, "a", { value: 5 });
    Object.defineProperty(props, "b", { value: 5 });
    Object.defineProperty(props, sym1, { value: 5 });
    const v264 = new Proxy(props, traps);
    var proxy_props = v264;
    var o1 = Object.create(proto, proxy_props);
    var o2 = Object.defineProperties({}, proxy_props);
}
function test8() {
    function f272() {
        console.log("test");
    }
    var test = f272;
    function f278(a279, a280) {
        console.log("has");
    }
    function f284(a285, a286) {
        console.log("get : " + a286);
        return Reflect.get(a285, a286);
    }
    const v294 = new Proxy(test, { has: f278, get: f284 });
    var p = v294;
    p.bind({});
}
function test9() {
    function f299() {
        console.log("test");
    }
    var test = f299;
    function f305(a306) {
        console.log("apply");
    }
    const v311 = new Proxy(test, { apply: f305 });
    var p = v311;
    p.call();
}
function test10() {
    function test() {
        console.log("test called");
    }
    const v321 = new Proxy(test, {});
    var p = v321;
    var x = p.bind({}, 1, 2);
    const v329 = new Proxy(x, {});
    var proxy_x = v329;
    console.log(x.name);
    console.log(proxy_x.name);
    console.log(p.name);
    p();
    x();
    proxy_x();
}
function test11() {
    function f342(a343, a344) {
        console.log("get trap: " + a344);
        return Reflect.get(a343, a344);
    }
    function f351(a352) {
        console.log("getPrototypeOf trap");
        return { a: "a" };
    }
    function f358(a359, a360) {
        console.log("getOwnPropertyDescriptor trap: " + a360);
        return Reflect.getOwnPropertyDescriptor(a359, a360);
    }
    var trap = { get: f342, getPrototypeOf: f351, getOwnPropertyDescriptor: f358 };
    function test(a370, a371) {
    }
    var t = test.bind({}, 1);
    const v377 = new Proxy(test, trap);
    var p = v377;
    var x = p.bind({}, 1);
    const v384 = new Proxy(x, {});
    var proxy_x = v384;
    console.log(Object.getPrototypeOf(proxy_x).a === "a");
    console.log(Object.getPrototypeOf(x).a === "a");
}
function test12() {
    var o = {};
    function f402() {
        return 5;
    }
    function f404(a405) {
    }
    Object.defineProperty(o, "A", { get: f402, set: f404 });
    function f410(a411, a412) {
        console.log("getOwnPropertyDescriptor trap :" + a412);
        return Reflect.getOwnPropertyDescriptor(a411, a412);
    }
    function f419(a420, a421) {
        console.log("get trap :" + a421);
        return Reflect.get(a420, a421);
    }
    const v429 = new Proxy(o, { getOwnPropertyDescriptor: f410, get: f419 });
    var p = v429;
    p.__lookupGetter__("A");
    p.__lookupSetter__("A");
}
function test13() {
    function Foo() {
    }
    Object.defineProperty(Foo, "length", { value: 123, enumerable: true, configurable: false });
    console.log(Foo.length);
    function f448(a449) {
        console.log("my proxy ownKeys");
        return Reflect.ownKeys(a449);
    }
    const v455 = new Proxy(Foo, { ownKeys: f448 });
    var x = v455;
    console.log(Object.keys(x));
}
function test14() {
    function f460() {
        this.foo = "f1";
        this.bar = "f2";
    }
    var x = f460;
    function f467(a468, a469) {
        console.log("construct x");
        return Reflect.construct(a468, a469);
    }
    const v476 = new Proxy(x, { construct: f467 });
    var x1 = v476;
    function f478(a479, a480) {
        console.log("construct x1");
        return Reflect.construct(a479, a480);
    }
    const v487 = new Proxy(x1, { construct: f478 });
    var p = v487;
    const v489 = new p();
    var a = v489;
    console.log((a.foo + ":") + a.bar);
}
function f498(a499, a500) {
    console.log("get trap " + a500);
    var x = Reflect.get(a499, a500);
    if (a500 == "constructor") {
        const v512 = new Proxy(x, handler);
        x = v512;
    }
    return x;
}
function f513(a514, a515) {
    console.log("constructor trap");
    return Reflect.construct(a514, a515);
}
function f521(a522, a523, a524) {
    console.log("apply trap");
    return Reflect.apply(a522, a523, a524);
}
var handler = { get: f498, construct: f513, apply: f521 };
function test15() {
    var a = [1,2,3];
    const v540 = new Proxy(Array, handler);
    var p = v540;
    p.of = Array.of;
    console.log(p.of(1, 2));
}
function test16() {
    var a = [1,2,3];
    const v556 = new Proxy(Array, handler);
    var p = v556;
    p.from = Array.from;
    console.log(p.from([1,2]));
}
function test17() {
    function foo() {
        this.x = 1;
    }
    const v570 = new Proxy(foo, handler);
    var pFoo = v570;
    const v572 = new Proxy(pFoo, handler);
    var proxyOfpFoo = v572;
    var x = proxyOfpFoo.bind(1);
    const v577 = new Proxy(x, handler);
    var y = v577;
    const v579 = new y();
    console.log(v579.x == 1);
}
function test18() {
    function f587() {
    }
    var Obj = { a: "foo", m: f587 };
    const v591 = new Proxy(Obj, handler);
    var p = v591;
    p.m = Obj.m;
    p.m();
}
function test19() {
    function foo(a597) {
        this.abc = a597;
    }
    const v601 = new Proxy(foo, {});
    var _ = v601;
    var p = _.bind();
    const v606 = new p("def");
    var x = v606;
    console.log(x.abc);
}
function test20() {
    function foo(a613) {
        this.abc = a613;
    }
    const v617 = new Proxy(foo, {});
    var _ = v617;
    var p = _.bind();
    var x = Reflect.construct(p, ["ade"]);
    console.log(x.abc);
}
function test21() {
    function foo() {
        this.a = "b";
    }
    const v635 = new Proxy(foo, {});
    var x = v635;
    const v637 = new x();
    var y = v637;
    console.log(y.a);
}
function test22() {
    var x = Object.getOwnPropertyDescriptor(Proxy, "length");
    console.log("value : " + x.value);
    console.log("configurable : " + x.configurable);
    console.log("writable : " + x.writable);
    console.log("enumerable : " + x.enumerable);
    const v665 = {};
    var revocable = Proxy.revocable(v665, {});
    var revokeFunction = revocable.revoke;
    console.log(Object.prototype.hasOwnProperty.call(revokeFunction, "prototype"));
    console.log(Object.prototype.hasOwnProperty.call(revokeFunction, "name"));
    revocable.revoke();
    try {
        const v684 = new Proxy({}, revocable.proxy);
        var x = v684;
    } catch(e686) {
        console.log("expected :" + e686.message);
    }
    try {
        const v691 = revocable.proxy;
        const v693 = new Proxy(v691, {});
        var x = v693;
    } catch(e695) {
        console.log("expected :" + e695.message);
    }
    console.log("Proxy.prototype = " + Object.hasOwnProperty.call(Proxy, "prototype"));
    const v706 = {};
    const v710 = Object.defineProperty(v706, "x", { value: 1 });
    Reflect.defineProperty(v710, "x", { value: 2 });
    console.log("done test22");
}
function test23() {
    function f720() {
    }
    const v722 = new Proxy(f720, {});
    var proxy = v722;
    Object.setPrototypeOf(proxy, null);
    console.log("test23 done.");
}
function test24() {
    var o = {};
    var s1 = Symbol("b");
    var s2 = Symbol("c");
    Object.defineProperty(o, "a", { value: 5, enumerable: true });
    Object.defineProperty(o, s1, { value: 5, enumerable: true });
    Object.defineProperty(o, s2, { value: 5, enumerable: false });
    const v756 = new Proxy(o, {});
    var proxy = v756;
    var propNames = Object.getOwnPropertyNames(proxy);
    var propSyms = Object.getOwnPropertySymbols(proxy);
    var propKeys = Reflect.ownKeys(proxy);
    console.log("*** ownPropertyNames");
    for (const v768 in propNames) {
        console.log(propNames[v768].toString());
    }
    console.log("*** ownPropertySymbols");
    for (const v774 in propSyms) {
        console.log(propSyms[v774].toString());
    }
    console.log("*** ownKeys");
    for (const v780 in propKeys) {
        console.log(propKeys[v780].toString());
    }
}
function test25() {
    var get = [];
    function f789(a790, a791) {
        get.push(a791);
        return a790[a791];
    }
    const v795 = new Proxy(Function, { get: f789 });
    var p = v795;
    new p();
    for (const v798 in get) {
        console.log(get[v798].toString());
    }
    console.log(get.length);
    console.log(get);
}
function test26() {
    var ownKeysCalled = 0;
    const v811 = {};
    function f812(a813) {
        ownKeysCalled++;
        return Object.keys(a813);
    }
    const v818 = new Proxy(v811, { ownKeys: f812 });
    var p = v818;
    JSON.stringify({ a: p, b: p });
    console.log(ownKeysCalled);
    console.log(ownKeysCalled === 2);
}
function test27() {
    function f829(a830, a831) {
        console.log("getTrap, property : " + a831);
        if (a831 == "foo123") {
            function f838() {
                console.log("foo called");
                return 23;
            }
            return f838;
        }
        return Reflect.get(a830, a831);
    }
    function f844(a845, a846) {
        console.log("hasTrap, property : " + a846);
        return Reflect.has(a845, a846);
    }
    function f853(a854, a855) {
        console.log("deleteTrap, property : " + a855);
        return Reflect.deleteProperty(a854, a855);
    }
    var handler = { get: f829, has: f844, deleteProperty: f853 };
    var x = "foo123";
    var y = "bar123";
    var o = {};
    const v871 = new Proxy(o, handler);
    var p = v871;
    Reflect.has(p, "p1");
    "p2" in p;
    Reflect.deleteProperty(p, "p3");
    typeof p[y];
    p[x]();
}
function test28() {
    var o2 = { p: 43 };
    var receiver = { p: 44 };
    var result = Reflect.set(o2, "p", 42, receiver);
    console.log(o2.p);
    console.log(receiver.p);
}
function test29() {
    var get = [];
    const v906 = new Proxy(Function, {});
    var p = v906;
    const v918 = new p("b", "c", "d", "e", "f", "g", "h", "i", "j", "return 1;");
    var funcInstance = v918;
    if (funcInstance.length != 9) {
        console.log("FAIL");
    }
}
function test30() {
    const v927 = [];
    var o = Proxy.revocable(v927, {});
    o.revoke();
    try {
        const v933 = o.proxy;
        Array.prototype.concat.call(v933);
    } catch(e938) {
        console.log("expected :" + e938.message);
    }
    try {
        const v944 = o.proxy;
        const v945 = o.proxy;
        Array.prototype.join.call(v944, v945);
    } catch(e950) {
        console.log("expected :" + e950.message);
    }
    try {
        const v956 = o.proxy;
        Object.prototype.toString.call(v956);
    } catch(e961) {
        console.log("expected :" + e961.message);
    }
    try {
        function foo() {
            return this;
        }
        var p = Proxy.revocable(foo, {});
        p.revoke();
        const t527 = p.proxy;
        const v974 = new t527();
        var pp = v974;
    } catch(e976) {
        console.log("expected :" + e976.message);
    }
}
test0();
test1();
test2();
test3();
test4();
test5();
test6();
test7();
test8();
test9();
test10();
test11();
test12();
test13();
test14();
test15();
test16();
test17();
test18();
test19();
test20();
test21();
test22();
test23();
test24();
test25();
test26();
test27();
test28();
test29();
test30();
