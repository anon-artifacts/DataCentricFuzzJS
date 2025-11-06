function bar(a1) {
    return a1 + a1;
}
bar(0.1);
function baz(a6) {
    return { y: a6 };
}
baz(null);
baz(0);
function foo(a13) {
    return !baz(bar(a13.x)).y;
}
foo({ x: 1 });
foo({ x: 1 });
foo({ x: 1 });
