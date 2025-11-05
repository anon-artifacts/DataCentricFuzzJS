function f0() {
    function foo(a2) {
        return a2.slice(-1);
    }
    foo("");
    foo("a");
    foo("ab");
    foo("abc");
    foo("");
    foo("a");
    foo("ab");
    foo("abc");
}
f0();
function f31() {
    function foo(a33) {
        return a33.slice(-1, undefined);
    }
    foo("");
    foo("a");
    foo("ab");
    foo("abc");
    foo("");
    foo("a");
    foo("ab");
    foo("abc");
}
f31();
