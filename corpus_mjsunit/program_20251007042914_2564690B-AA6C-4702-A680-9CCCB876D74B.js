function f0() {
}
const undetectable = f0;
function f2() {
    const a = undetectable;
    const b = {};
    function foo() {
        return a == b;
    }
    foo();
    foo();
    foo();
}
f2();
function f12() {
    const a = undetectable;
    const b = null;
    function foo() {
        return a == b;
    }
    foo();
    foo();
    foo();
}
f12();
function f22() {
    const a = null;
    const b = undetectable;
    function foo() {
        return a == b;
    }
    foo();
    foo();
    foo();
}
f22();
function f32() {
    const a = undetectable;
    const b = undefined;
    function foo() {
        return a == b;
    }
    foo();
    foo();
    foo();
}
f32();
function f42() {
    const a = undefined;
    const b = undetectable;
    function foo() {
        return a == b;
    }
    foo();
    foo();
    foo();
}
f42();
function f52() {
    const a = {};
    const b = undetectable;
    function foo(a57) {
        return a57 == b;
    }
    foo(b);
    foo(a);
    foo(b);
    foo(a);
    foo(b);
    foo(a);
    foo(1);
    foo();
}
f52();
function f69() {
    const a = undetectable;
    const b = {};
    function foo(a74, a75) {
        return a74 == a75;
    }
    foo(b, b);
    foo(a, b);
    foo(a, a);
    foo(b, a);
    foo(a, null);
    foo(b, null);
    foo(b, b);
    foo(a, b);
    foo(a, a);
    foo(b, a);
    foo(a, null);
    foo(b, null);
    foo();
    foo(1);
    foo();
}
f69();
