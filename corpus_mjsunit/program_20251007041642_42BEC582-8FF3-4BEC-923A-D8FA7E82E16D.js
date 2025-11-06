function TestContextAllocation() {
    function* g1(a2, a3, a4) {
        yield 1;
        return [a2,a3,a4];
    }
    function* g2() {
        yield 1;
        return arguments;
    }
    function* g3() {
        yield 1;
        return this;
    }
    function* g4() {
        var x = 10;
        yield 1;
        return x;
    }
    function* g5(a22) {
        'use strict';
        yield 1;
        for (const v25 in a22) {
            yield v25;
        }
    }
    g1();
    g2();
    g3();
    g4();
    g5(["foo"]);
}
TestContextAllocation();
function TestGeneratorObject() {
    function* g() {
        yield 1;
    }
    var iter = g();
    g.prototype;
    Object.getPrototypeOf(iter);
    iter instanceof g;
    String(iter);
    [];
    Object.getOwnPropertyNames(iter);
    iter !== g();
    Object.prototype.toString.call(iter);
    var gf = iter.__proto__.constructor;
    Object.prototype.toString.call(gf);
    const v63 = () => {
        let v64;
        try { v64 = new g(); } catch (e) {}
        return v64;
    };
    v63();
}
TestGeneratorObject();
function TestGeneratorObjectMethods() {
    function* g() {
        yield 1;
    }
    var iter = g();
    function TestNonGenerator(a74) {
        function f75() {
            const v76 = iter.next;
            try { v76.call(a74); } catch (e) {}
        }
        f75();
        function f80() {
            const v82 = iter.next;
            try { v82.call(a74, 1); } catch (e) {}
        }
        f80();
        function f85() {
            const v87 = iter.throw;
            try { v87.call(a74, 1); } catch (e) {}
        }
        f85();
    }
    TestNonGenerator(1);
    TestNonGenerator({});
    function f94() {
    }
    TestNonGenerator(f94);
    TestNonGenerator(g);
    TestNonGenerator(g.prototype);
}
TestGeneratorObjectMethods();
function TestPrototype() {
    function* g() {
    }
    let g_prototype = g.prototype;
    [];
    Reflect.ownKeys(g_prototype);
    let generator_prototype = Object.getPrototypeOf(g_prototype);
    Object.getPrototypeOf(g).prototype;
    Object.getPrototypeOf(g());
    {
        let proto = {};
        g.prototype = proto;
        Object.getPrototypeOf(g());
    }
    g.prototype = null;
    Object.getPrototypeOf(g());
}
TestPrototype();
function TestComputedPropertyNames() {
    function* f1() {
        const v125 = yield;
        return { [v125]: 42 };
    }
    var g1 = f1();
    g1.next();
    g1.next("a").value.a;
    function* f2() {
        const v136 = yield;
        return { ["a"]: v136 };
    }
    var g2 = f2();
    g2.next();
    g2.next(42).value.a;
}
TestComputedPropertyNames();
