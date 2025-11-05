function f0() {
}
function TestGeneratorObject() {
    function* g() {
        yield 1;
    }
    var iter = g();
    Object.getPrototypeOf(iter);
    g.prototype;
    iter instanceof g;
    String(iter);
    Object.getOwnPropertyNames(iter);
    [];
    g();
}
TestGeneratorObject();
function TestGeneratorObjectMethods() {
    function* g() {
        yield 1;
    }
    var iter = g();
    iter.next.length;
    iter.return.length;
    iter.throw.length;
    function TestNonGenerator(a34) {
        function f35() {
            const v36 = iter.next;
            try { v36.call(a34); } catch (e) {}
        }
        f35();
        function f40() {
            const v42 = iter.next;
            try { v42.call(a34, 1); } catch (e) {}
        }
        f40();
        function f45() {
            const v47 = iter.return;
            try { v47.call(a34, 1); } catch (e) {}
        }
        f45();
        function f50() {
            const v52 = iter.throw;
            try { v52.call(a34, 1); } catch (e) {}
        }
        f50();
        function f55() {
            const v56 = iter.close;
            try { v56.call(a34); } catch (e) {}
        }
        f55();
    }
    TestNonGenerator(1);
    TestNonGenerator({});
    function f63() {
    }
    TestNonGenerator(f63);
    TestNonGenerator(g);
    TestNonGenerator(g.prototype);
}
TestGeneratorObjectMethods();
if (typeof f0 == "function") {
    f0(true, true);
}
