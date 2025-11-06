function foo(a1) {
    try { Math.fround(a1); } catch (e) {}
}
foo(1);
foo(2);
function f8() {
    foo(Symbol());
}
f8();
