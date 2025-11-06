function baz(a1, a2) {
    return a1.length;
}
function bar(a5, a6) {
    if (a6) {
    }
    function f7() {
        return a5;
    }
    baz(a5, f7);
}
function foo(a10) {
    bar(a10, "");
}
foo(["a"]);
