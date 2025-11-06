function f0() {
    const a = {};
    const b = {};
    function foo() {
        return a === b;
    }
    foo();
    foo();
    foo();
}
f0();
function f11() {
    const a = {};
    const b = null;
    function foo() {
        return a === b;
    }
    foo();
    foo();
    foo();
}
f11();
function f22() {
    const a = {};
    const b = undefined;
    function foo() {
        return a === b;
    }
    foo();
    foo();
    foo();
}
f22();
function f33() {
    const a = {};
    const b = {};
    function foo(a39) {
        return a39 === b;
    }
    foo(b);
    foo(a);
    foo(b);
    foo(a);
    foo(b);
    foo(a);
}
f33();
function f48() {
    const a = {};
    const b = null;
    function foo(a54) {
        return a54 === b;
    }
    foo(b);
    foo(a);
    foo(b);
    foo(a);
    foo(b);
    foo(a);
}
f48();
function f63() {
    const a = {};
    const b = undefined;
    function foo(a69) {
        return a69 === b;
    }
    foo(b);
    foo(a);
    foo(b);
    foo(a);
    foo(b);
    foo(a);
}
f63();
function f78() {
    const a = {};
    const b = {};
    function foo(a84, a85) {
        return a84 === a85;
    }
    foo(b, b);
    foo(a, b);
    foo(a, a);
    foo(b, a);
    foo(a, a);
    foo(b, a);
    foo(null, b);
    foo();
}
f78();
function f97() {
    const a = {};
    const b = null;
    function foo(a103, a104) {
        return a103 === a104;
    }
    foo(b, b);
    foo(a, b);
    foo(a, a);
    foo(b, a);
    foo(a, a);
    foo(b, a);
    foo(1, b);
    foo();
}
f97();
function f116() {
    const a = {};
    const b = undefined;
    function foo(a122, a123) {
        return a122 === a123;
    }
    foo(b, b);
    foo(a, b);
    foo(a, a);
    foo(b, a);
    foo(a, a);
    foo(b, a);
    foo(1, b);
    foo();
}
f116();
