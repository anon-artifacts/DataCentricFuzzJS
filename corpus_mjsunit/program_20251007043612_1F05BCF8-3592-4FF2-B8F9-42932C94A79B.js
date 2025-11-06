try {
    var r1 = /abc/gi;
    r1.source;
    r1.global;
    r1.ignoreCase;
    r1.multiline;
    r1.sticky;
    r1.unicode;
    var r2 = { __proto__: r1 };
    function f11() {
        r2?.source;
    }
    f11();
    function f15() {
        r2?.global;
    }
    f15();
    function f18() {
        r2?.ignoreCase;
    }
    f18();
    function f21() {
        r2?.multiline;
    }
    f21();
    function f24() {
        r2?.sticky;
    }
    f24();
    function f27() {
        r2?.unicode;
    }
    f27();
    var r3 = /I/;
    var string = "iIiIi";
    var expected = "iXiIi";
    r3.global;
    r3.ignoreCase;
    r3.flags;
    string.replace(r3, "X");
    var get_count = 0;
    function f45() {
        get_count++;
        return true;
    }
    Object.defineProperty(r3, "global", { get: f45 });
    function f52() {
        get_count++;
        return true;
    }
    Object.defineProperty(r3, "ignoreCase", { get: f52 });
    r3.global;
    r3.ignoreCase;
    r3.flags;
    function testName(a65) {
        a65 === "source" ? "(?:)" : undefined;
        const v72 = RegExp.prototype;
        v72[v72];
        "get " + a65;
        Object.getOwnPropertyDescriptor(RegExp.prototype, a65).get.name;
    }
    testName("global");
    testName("ignoreCase");
    testName("multiline");
    testName("source");
    testName("sticky");
    testName("unicode");
    const t61 = RegExp.prototype;
    t61.flags = "setter should be undefined";
    RegExp("").flags;
    /./.flags;
    RegExp("", "yugmi").flags;
    /foo/mygiu.flags;
    var descriptor = Object.getOwnPropertyDescriptor(RegExp.prototype, "flags");
    descriptor.configurable;
    descriptor.enumerable;
    descriptor.get;
    descriptor.set;
    function testGenericFlags(a121) {
        const v122 = descriptor.get;
        let v123;
        try { v123 = v122.call(a121); } catch (e) {}
        return v123;
    }
    testGenericFlags({});
    testGenericFlags({ ignoreCase: true });
    testGenericFlags({ global: 0, sticky: 1, unicode: 1 });
    const v139 = { multiline: true };
    testGenericFlags({ __proto__: v139 });
    function f142() {
        testGenericFlags();
    }
    f142();
    function f145() {
        testGenericFlags(undefined);
    }
    f145();
    function f149() {
        testGenericFlags(null);
    }
    f149();
    function f153() {
        testGenericFlags(true);
    }
    f153();
    function f157() {
        testGenericFlags(false);
    }
    f157();
    function f161() {
        testGenericFlags("");
    }
    f161();
    function f165() {
        testGenericFlags(42);
    }
    f165();
    var counter = 0;
    var map = {};
    const v183 = {
        get global() {
            map.g = counter++;
        },
        get ignoreCase() {
            map.i = counter++;
        },
        get multiline() {
            map.m = counter++;
        },
        get unicode() {
            map.u = counter++;
        },
        get sticky() {
            map.y = counter++;
        },
    };
    var object = v183;
    testGenericFlags(object);
    const v191 = {
        g: 0,
        i: 1,
        m: 2,
        u: 3,
        y: 4,
    };
} catch(e192) {
}
