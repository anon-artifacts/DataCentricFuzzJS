function test1() {
    const v1 = {};
    function f2() {
        const v4 = { needMarshal: true };
        const t4 = this.obj2;
        t4.prop4 = v4;
    }
    var sc4 = { obj2: v1, test: f2 };
    const v10 = {};
    function f11(a12, a13, a14) {
        Reflect.set(a14);
    }
    const v18 = new Proxy(v10, { set: f11 });
    var obj1 = v18;
    sc4.obj2 = obj1;
    sc4.test();
    obj1.prop4 = { needMarshal: false };
    obj1.prop5 = { needMarshal: false };
}
test1();
function test2() {
    const v30 = new Array(1);
    const v31 = () => {
        return true;
    };
    const v34 = new Proxy(v30, { has: v31 });
    var bug = v34;
    var a = bug.concat();
    if ((a[0] !== undefined) || (a.length !== 1)) {
        console.log("FAIL");
    }
}
test2();
function test3() {
    var obj1 = {};
    var arrObj0 = {};
    var x = 1;
    var proxyHandler = {};
    function f58() {
    }
    proxyHandler["get"] = f58;
    function f60(a61, a62, a63) {
        return Reflect.defineProperty(a61, a62, a63);
    }
    proxyHandler["defineProperty"] = f60;
    function f67(a68) {
        arrObj0.prop0;
        const v71 = new Proxy(arrObj0, proxyHandler);
        arrObj0 = v71;
        return Reflect.isExtensible(a68);
    }
    proxyHandler["isExtensible"] = f67;
    const v76 = new Proxy(arrObj0, proxyHandler);
    arrObj0 = v76;
    const v77 = new Proxy(arrObj0, proxyHandler);
    arrObj0 = v77;
    do {
        function f78() {
            arrObj0.length = arrObj0[obj1];
        }
        var sc3 = { test: f78 };
        sc3.obj1 = obj1;
        sc3.arrObj0 = arrObj0;
        sc3.test();
    } while (x--)
}
test3();
function test4() {
    function f86() {
    }
    var func3 = f86;
    var ary = Array();
    var proxyHandler = {};
    var ownkeys = Reflect.ownKeys(ary);
    function f96() {
        func3() == 0;
        return ownkeys;
    }
    proxyHandler["ownKeys"] = f96;
    const v102 = new Proxy(ary, proxyHandler);
    ary = v102;
    function f103() {
        for (const v104 in ary) {
        }
    }
    var sc2 = { test: f103 };
    sc2.ary = ary;
    sc2.func3 = func3;
    sc2.test();
}
test4();
function test5() {
    function makeArrayLength() {
    }
    function leaf() {
    }
    var obj1 = {};
    var arrObj0 = {};
    function f116() {
    }
    var func1 = f116;
    obj1.method0 = func1;
    obj1.method1 = func1;
    var protoObj1 = Object();
    var proxyHandler = {};
    const v125 = new Proxy(obj1.method0, proxyHandler);
    var v0 = v125;
    var sc9 = {};
    sc9.arrObj0 = arrObj0;
    sc9.obj1 = obj1;
    sc9.protoObj1 = protoObj1;
    sc9.v0 = v0;
    sc9.makeArrayLength = makeArrayLength;
    sc9.leaf = leaf;
    function f129() {
        var b = 1;
        arrObj0.length = makeArrayLength(arrObj0.length != arrObj0.prop4);
        const v137 = -866043558;
        protoObj1.length >>>= v137;
        protoObj1.prop0 = 1;
        new v0(v137, 1, leaf, leaf);
        const v147 = (b ? 1 : 16678541) & (typeof arrObj0.prop4 == "number");
        const v152 = (1 * obj1.length) - b;
        d %= v152;
        const v154 = 1 * v152;
        const v161 = "a" instanceof (typeof RegExp == "function" ? RegExp : Object);
        const v163 = "prop0" in arrObj0;
        const v166 = v154 + obj1.method0.call(arrObj0, v161, v163, leaf, leaf);
        var d = obj1.method1.call(protoObj1, v147, v166, leaf, leaf);
        var uniqobj21 = Object.create(arrObj0);
        arrObj0.length = makeArrayLength(1 % -520343586);
    }
    var sc9_cctx = { test: f129 };
    sc9_cctx.test();
}
test5();
function test6() {
    var OProxy = Proxy;
    var desc;
    const v186 = {};
    function f187(a188, a189, a190) {
        return desc = a190;
    }
    const v192 = new OProxy(v186, { defineProperty: f187 });
    var p = v192;
    p.a = 0;
}
test6();
function test7() {
    var obj0 = {};
    var arrObj0 = {};
    function f201() {
        return typeof func3.caller == "object";
    }
    var func3 = f201;
    obj0.method0 = func3;
    var protoObj0 = Object(obj0);
    var proxyHandler = {};
    do {
    } while (protoObj0.method0())
    const v216 = new Proxy(obj0.method0, proxyHandler);
    var v0 = v216;
    var sc0 = {};
    sc0.v0 = v0;
    sc0.arrObj0 = arrObj0;
    sc0.obj0 = obj0;
    sc0.protoObj0 = protoObj0;
    function f220() {
        const v224 = typeof arrObj0.prop0 == "object";
        function f225(a226) {
            var _oo1obj = {};
            _oo1obj.prop1 = v0(arrObj0);
            return _oo1obj;
        }
        var _oo1obj = f225(v224);
    }
    var sc0_cctx = { foo: f220 };
    sc0_cctx.foo();
}
test7();
function f236() {
    function f237(a238, a239, a240) {
        return Object.defineProperty(a238, a239, a240);
    }
    var g = { test: f237 };
    const v246 = {};
    const v247 = g.test;
    const v249 = new Proxy(v246, { defineProperty: v247 });
    var p = v249;
    g.test(p, "abc", { value: 1 });
}
f236();
function f256() {
    function f257(a258, a259) {
        delete a258.name;
    }
    var g = { test: f257 };
    const v264 = {};
    const v265 = g.test;
    const v267 = new Proxy(v264, { deleteProperty: v265 });
    var p = v267;
    g.test(p);
}
f256();
function f271() {
    function f272(a273) {
        a273.name;
    }
    var g = { test: f272 };
    const v278 = {};
    const v279 = g.test;
    const v281 = new Proxy(v278, { get: v279 });
    var p = v281;
    g.test(p);
}
f271();
function f285() {
    function f286(a287, a288) {
        Object.getOwnPropertyDescriptor(a287, a288);
    }
    var g = { test: f286 };
    const v294 = {};
    const v295 = g.test;
    const v297 = new Proxy(v294, { getOwnPropertyDescriptor: v295 });
    var p = v297;
    g.test(p);
}
f285();
function f301() {
    function f302(a303) {
        a303.name;
        return a303.__proto__;
    }
    var g = { test: f302 };
    const v309 = {};
    const v310 = g.test;
    const v312 = new Proxy(v309, { getPrototypeOf: v310 });
    var p = v312;
    g.test({ name: p });
}
f301();
function f317() {
    function f318(a319, a320) {
        a320 in a319;
    }
    var g = { test: f318 };
    const v325 = {};
    const v326 = g.test;
    const v328 = new Proxy(v325, { has: v326 });
    var p = v328;
    g.test(p);
}
f317();
function f332() {
    function f333(a334) {
        return Object.isExtensible(a334);
    }
    var g = { test: f333 };
    const v340 = {};
    const v341 = g.test;
    const v343 = new Proxy(v340, { isExtensible: v341 });
    var p = v343;
    g.test(p);
}
f332();
function f347() {
    function f348(a349) {
        return Object.getOwnPropertyNames(a349);
    }
    var g = { test: f348 };
    function f355() {
    }
    const v356 = g.test;
    const v358 = new Proxy(f355, { ownKeys: v356 });
    var p = v358;
    g.test(p);
}
f347();
function f362() {
    function f363(a364) {
        return Object.preventExtensions(a364);
    }
    var g = { test: f363 };
    const v370 = {};
    const v371 = g.test;
    const v373 = new Proxy(v370, { preventExtensions: v371 });
    var p = v373;
    g.test(p);
}
f362();
function f377() {
    function f378(a379, a380, a381) {
        a379[a380] = a381;
    }
    var g = { test: f378 };
    const v385 = {};
    const v386 = g.test;
    const v388 = new Proxy(v385, { set: v386 });
    var p = v388;
    g.test(p, "abc", 1);
}
f377();
function f394() {
    function f395(a396, a397) {
        return Object.setPrototypeOf(a396, a397);
    }
    var g = { test: f395 };
    const v403 = {};
    const v404 = g.test;
    const v406 = new Proxy(v403, { setPrototypeOf: v404 });
    var p = v406;
    g.test(p, {});
}
f394();
