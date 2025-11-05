var globalObject = this;
function test1() {
    var o = {};
    function f6() {
        return 1234;
    }
    var result = o.__defineGetter__("a", f6);
    console.log(result === undefined);
    console.log(o.a === 1234);
    var d = Object.getOwnPropertyDescriptor(o, "a");
    console.log(d.enumerable);
    console.log(d.configurable);
}
test1();
function test2() {
    var o = { v: 0 };
    function f32(a33) {
        const v35 = new Error();
        throw v35;
    }
    var result = o.__defineSetter__("a", f32);
    console.log(result === undefined);
    try {
        o.a = 1234;
    } catch(e43) {
    }
    var d = Object.getOwnPropertyDescriptor(o, "a");
    console.log(d.enumerable);
    console.log(d.configurable);
}
test2();
function test3() {
    var o = {};
    function f57() {
        return 1234;
    }
    o.__defineGetter__("a", f57);
    function f61(a62) {
    }
    o.__defineSetter__("b", f61);
    var da = Object.getOwnPropertyDescriptor(o, "a");
    var db = Object.getOwnPropertyDescriptor(o, "b");
    console.log(da.set === undefined);
    console.log(db.get === undefined);
    o.a = 10;
    console.log(o.a === 1234);
    console.log(o.b === undefined);
}
test3();
function test4() {
    var o = { x: 1, y: 2, z: 3 };
    function f97() {
        return (this.x + this.y) + this.z;
    }
    o.__defineGetter__("a", f97);
    function f108(a109) {
        this.x = a109;
        this.y = a109 * 2;
        this.z = a109 * 3;
    }
    o.__defineSetter__("b", f108);
    console.log(o.a === 6);
    o.b = 2;
    console.log(o.a === 12);
}
test4();
function test5() {
    var o = {};
    function f133() {
        return 1;
    }
    o.__defineGetter__("a", f133);
    function f137(a138) {
        const v141 = new Error(2);
        throw v141;
    }
    o.__defineSetter__("a", f137);
    function f144(a145) {
        const v148 = new Error(3);
        throw v148;
    }
    o.__defineSetter__("b", f144);
    function f151() {
        return 4;
    }
    o.__defineGetter__("b", f151);
    console.log(o.a === 1);
    function f159() {
        try {
            o.a = 0;
        } catch(e161) {
            return e161.description;
        }
        return null;
    }
    console.log(f159() === "2");
    function f168() {
        try {
            o.b = 0;
        } catch(e170) {
            return e170.description;
        }
        return null;
    }
    console.log(f168() === "3");
    console.log(o.b === 4);
}
test5();
function test6() {
    function testBadArg(a184) {
        var o = {};
        try {
            o.__defineGetter__("a", a184);
        } catch(e189) {
        }
        try {
            o.__defineSetter__("a", a184);
        } catch(e192) {
        }
    }
    testBadArg(undefined);
    testBadArg(null);
    testBadArg(0);
    testBadArg(1234);
    testBadArg("hello");
    testBadArg({ a: 1, b: 2 });
    testBadArg([1,2]);
}
test6();
function test7() {
    function testWithExistingDescriptor(a214) {
        var shouldThrow = a214.configurable ? false : true;
        var o = {};
        Object.defineProperty(o, "a", a214);
        function f225() {
            function f227() {
                return undefined;
            }
            o.__defineGetter__("a", f227);
        }
        var fnDefGet = f225;
        function f231() {
            function f233(a234) {
            }
            o.__defineSetter__("a", f233);
        }
        var fnDefSet = f231;
        if (shouldThrow) {
            try {
                fnDefGet();
            } catch(e238) {
            }
            try {
                fnDefSet();
            } catch(e240) {
            }
        } else {
            fnDefGet();
            fnDefSet();
            var owndesc = Object.getOwnPropertyDescriptor(o, "a");
            console.log(owndesc.hasOwnProperty("writable"));
            console.log(owndesc.hasOwnProperty("value"));
            console.log(owndesc.get !== undefined);
            console.log(owndesc.set !== undefined);
            console.log(owndesc.configurable);
            console.log(owndesc.enumerable);
        }
    }
    testWithExistingDescriptor({ configurable: true });
    testWithExistingDescriptor({ enumerable: true });
    testWithExistingDescriptor({ configurable: true, enumerable: true });
    testWithExistingDescriptor({ configurable: false });
    testWithExistingDescriptor({ enumerable: false });
    testWithExistingDescriptor({ configurable: false, enumerable: false });
    testWithExistingDescriptor({ value: 10 });
    testWithExistingDescriptor({ writable: true });
    testWithExistingDescriptor({ value: 10, writable: true });
    testWithExistingDescriptor({ value: 10, enumerable: true });
    testWithExistingDescriptor({ writable: true, enumerable: true });
    testWithExistingDescriptor({ value: 10, writable: true, enumerable: true });
    testWithExistingDescriptor({ value: 10, configurable: true });
    testWithExistingDescriptor({ writable: true, configurable: true });
    testWithExistingDescriptor({ value: 10, writable: true, configurable: true });
    testWithExistingDescriptor({ value: 10, configurable: true, enumerable: true });
    testWithExistingDescriptor({ writable: true, configurable: true, enumerable: true });
    testWithExistingDescriptor({ value: 10, writable: true, configurable: true, enumerable: true });
    function f337() {
    }
    testWithExistingDescriptor({ get: f337, configurable: false });
    function f341(a342) {
    }
    testWithExistingDescriptor({ set: f341, configurable: false });
}
test7();
function test8() {
    var builtinDefineProperty = Object.defineProperty;
    function f351(a352, a353, a354) {
        const v357 = new Error("Should not execute this");
        throw v357;
    }
    Object.defineProperty = f351;
    var o = {};
    function f361() {
        return 1234;
    }
    o.__defineGetter__("a", f361);
    function f365(a366) {
        const v368 = new Error();
        throw v368;
    }
    o.__defineSetter__("a", f365);
    console.log(o.a === 1234);
    try {
        o.a = 0;
    } catch(e376) {
    }
    var d = Object.getOwnPropertyDescriptor(o, "a");
    console.log(d.get !== undefined);
    console.log(d.set !== undefined);
    console.log(d.configurable);
    console.log(d.enumerable);
    Object.defineProperty = builtinDefineProperty;
}
test8();
function test9() {
    console.log(Object.prototype.__defineGetter__.length === 2);
    console.log(Object.prototype.__defineSetter__.length === 2);
    console.log(Object.prototype.__lookupGetter__.length === 1);
    console.log(Object.prototype.__lookupSetter__.length === 1);
}
test9();
function test10() {
    try {
        function f424() {
            return undefined;
        }
        Object.prototype.__defineGetter__.call(undefined, "test10_undefined_getter", f424);
    } catch(e430) {
    }
    try {
        function f433() {
            return undefined;
        }
        Object.prototype.__defineGetter__.call(null, "test10_null_getter", f433);
    } catch(e439) {
    }
    try {
        function f442(a443) {
        }
        Object.prototype.__defineSetter__.call(undefined, "test10_undefined_setter", f442);
    } catch(e448) {
    }
    try {
        function f451(a452) {
        }
        Object.prototype.__defineSetter__.call(null, "test10_null_setter", f451);
    } catch(e457) {
    }
    console.log(globalObject.hasOwnProperty("test10_undefined_getter"));
    console.log(globalObject.hasOwnProperty("test10_null_getter"));
    console.log(globalObject.hasOwnProperty("test10_undefined_setter"));
    console.log(globalObject.hasOwnProperty("test10_null_setter"));
}
test10();
function test11() {
    const v477 = {
        get a() {
            return undefined;
        },
        set b(a476) {
        },
    };
    var o = v477;
    var a = Object.getOwnPropertyDescriptor(o, "a").get;
    var b = Object.getOwnPropertyDescriptor(o, "b").set;
    var f = o.__lookupGetter__("a");
    console.log(f !== undefined);
    console.log(typeof f === "function");
    console.log(f === a);
    console.log((f = o.__lookupSetter__("b")) !== undefined);
    console.log(typeof f === "function");
    console.log(f === b);
}
test11();
function test12() {
    function f514() {
        return undefined;
    }
    var a = f514;
    function f517(a518) {
    }
    var b = f517;
    function Foo() {
    }
    const v521 = Foo.prototype;
    Object.defineProperty(v521, "a", { get: a });
    const v526 = Foo.prototype;
    Object.defineProperty(v526, "b", { set: b });
    const v530 = new Foo();
    var o = v530;
    var f = o.__lookupGetter__("a");
    console.log(f !== undefined);
    console.log(typeof f === "function");
    console.log(f === a);
    console.log((f = o.__lookupSetter__("b")) !== undefined);
    console.log(typeof f === "function");
    console.log(f === b);
}
test12();
function test13() {
    function f558() {
        return undefined;
    }
    var getfn = f558;
    function f561(a562) {
    }
    var setfn = f561;
    function Foo() {
    }
    const v565 = Foo.prototype;
    Object.defineProperty(v565, "geta", { get: getfn });
    const v570 = Foo.prototype;
    Object.defineProperty(v570, "getb", { get: getfn });
    const v574 = Foo.prototype;
    Object.defineProperty(v574, "seta", { set: setfn });
    const v578 = Foo.prototype;
    Object.defineProperty(v578, "setb", { set: setfn });
    const v582 = new Foo();
    var o = v582;
    Object.defineProperty(o, "geta", { set: setfn, configurable: true, enumerable: true });
    Object.defineProperty(o, "getb", { value: 123, configurable: true, enumerable: true, writable: true });
    Object.defineProperty(o, "seta", { get: getfn, configurable: true, enumerable: true });
    Object.defineProperty(o, "setb", { value: 123, configurable: true, enumerable: true, writable: true });
    console.log(o.__lookupGetter__("geta"));
    console.log(o.__lookupGetter__("geta") === undefined);
    console.log(o.__lookupGetter__("getb") === getfn);
    console.log(o.__lookupSetter__("seta") === undefined);
    console.log(o.__lookupSetter__("setb") === setfn);
}
test13();
function test14() {
    try {
        __defineGetter__.call(this, "x", 23);
    } catch(e637) {
    }
    try {
        this.__defineSetter__("y", {});
    } catch(e642) {
    }
}
test14();
