function bar(a1) {
    try { a1[a1](true); } catch (e) {}
}
function foo(a6) {
    return bar(1);
}
function f9() {
    bar([foo]);
}
f9();
