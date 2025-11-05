function f0() {
    const a = Symbol("a");
    const b = Symbol("b");
    function foo() {
        return a == b;
    }
    foo();
    foo();
    foo();
}
f0();
function f14() {
    const a = Symbol("a");
    const b = Symbol("b");
    function foo() {
        return a != b;
    }
    foo();
    foo();
    foo();
}
f14();
function f28() {
    const a = Symbol("a");
    const b = Symbol("b");
    function foo(a37) {
        return a37 == b;
    }
    foo(b);
    foo(a);
    foo(b);
    foo(a);
    foo(b);
    foo(a);
    foo();
    foo("a");
    foo();
    foo("a");
    foo();
}
f28();
function f53() {
    const a = Symbol("a");
    const b = Symbol("b");
    function foo(a62) {
        return a62 != b;
    }
    foo(b);
    foo(a);
    foo(b);
    foo(a);
    foo(b);
    foo(a);
    foo("a");
    foo();
    foo("a");
    foo();
}
f53();
function f77() {
    const a = Symbol("a");
    const b = Symbol("b");
    function foo(a86, a87) {
        return a86 == a87;
    }
    foo(b, b);
    foo(a, b);
    foo(a, a);
    foo(b, a);
    foo(a, a);
    foo(b, a);
    foo("a", b);
    foo();
    foo("a", b);
    foo();
}
f77();
function f102() {
    const a = Symbol("a");
    const b = Symbol("b");
    function foo(a111, a112) {
        return a111 != a112;
    }
    foo(b, b);
    foo(a, b);
    foo(a, a);
    foo(b, a);
    foo(a, a);
    foo(b, a);
    foo("a", b);
    foo();
    foo("a", b);
    foo();
}
f102();
