function f0() {
    const a = {};
    const b = {};
    function foo() {
        return a == b;
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
        return a == b;
    }
    foo();
    foo();
    foo();
}
f11();
function f22() {
    const a = null;
    const b = {};
    function foo() {
        return a == b;
    }
    foo();
    foo();
    foo();
}
f22();
function f33() {
    const a = {};
    const b = undefined;
    function foo() {
        return a == b;
    }
    foo();
    foo();
    foo();
}
f33();
function f44() {
    const a = undefined;
    const b = {};
    function foo() {
        return a == b;
    }
    foo();
    foo();
    foo();
}
f44();
function f55() {
    const a = {};
    const b = {};
    function foo(a61) {
        return a61 == b;
    }
    foo(b);
    foo(a);
    foo(b);
    foo(a);
    foo(b);
    foo(a);
    foo(null);
    foo();
}
f55();
function f73() {
    const a = null;
    const b = {};
    function foo(a79) {
        return a79 == b;
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
f73();
function f91() {
    const a = undefined;
    const b = {};
    function foo(a97) {
        return a97 == b;
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
f91();
function f109() {
    const a = {};
    const b = null;
    function foo(a115) {
        return a115 == b;
    }
    foo(b);
    foo(a);
    foo(b);
    foo(a);
    foo(b);
    foo(a);
    foo(null);
    foo(undefined);
    foo();
    foo(1);
    foo();
}
f109();
function f132() {
    const a = {};
    const b = undefined;
    function foo(a138) {
        return a138 == b;
    }
    foo(b);
    foo(a);
    foo(b);
    foo(a);
    foo(b);
    foo(a);
    foo(null);
    foo(undefined);
    foo();
    foo(1);
    foo();
}
f132();
