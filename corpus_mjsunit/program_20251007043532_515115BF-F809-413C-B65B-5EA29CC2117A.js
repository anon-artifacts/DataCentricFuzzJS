function TestReflectConstructBogusNewTarget1() {
    class C1 {
    }
    function g() {
        try { Reflect.construct(C1, arguments, 23); } catch (e) {}
    }
    function f() {
        const v8 = new g();
        return v8;
    }
    new C1();
    f();
    f();
    f();
}
TestReflectConstructBogusNewTarget1();
function TestReflectConstructBogusNewTarget2() {
    class C16 {
    }
    function g() {
        try { Reflect.construct(C16, arguments, unescape); } catch (e) {}
    }
    function f() {
        const v23 = new g();
        return v23;
    }
    new C16();
    f();
    f();
    f();
}
TestReflectConstructBogusNewTarget2();
function TestReflectConstructBogusTarget() {
    function g() {
        try { Reflect.construct(23, arguments); } catch (e) {}
    }
    function f() {
        const v37 = new g();
        return v37;
    }
    f();
    f();
    f();
}
TestReflectConstructBogusTarget();
function TestReflectApplyBogusTarget() {
    function g() {
        try { Reflect.apply(23, this, arguments); } catch (e) {}
    }
    function f() {
        return g();
    }
    f();
    f();
    f();
}
TestReflectApplyBogusTarget();
