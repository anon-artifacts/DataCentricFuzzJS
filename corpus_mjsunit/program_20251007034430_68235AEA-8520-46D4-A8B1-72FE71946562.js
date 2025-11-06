var s = "12345";
function f2() {
    function foo() {
        return s[5];
    }
    foo();
    foo();
    foo();
    foo();
    foo();
}
f2();
function f11() {
    function foo(a13) {
        return s[s];
    }
    foo(0);
    foo(1);
    foo(5);
    foo(5);
    foo();
}
f11();
function f25() {
    function foo(a27) {
        return a27?.[5];
    }
    foo(s);
    foo(s);
    foo(s);
    foo(s);
    foo();
}
f25();
function f35() {
    function foo(a37, a38) {
        return a37?.[a37];
    }
    foo(s, 0);
    foo(s, 1);
    foo(s, 5);
    foo(s, 5);
    foo();
}
f35();
