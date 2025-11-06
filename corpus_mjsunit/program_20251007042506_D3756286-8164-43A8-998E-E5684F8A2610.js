var a = [0,""];
a[0] = 0;
function g(a6) {
    a6[1] = undefined;
}
function f() {
    function f9() {
    }
    g(f9);
    g(a);
}
f();
f();
