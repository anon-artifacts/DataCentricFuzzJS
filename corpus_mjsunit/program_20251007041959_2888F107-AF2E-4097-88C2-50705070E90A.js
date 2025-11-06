function foo(a1, a2) {
    return Math.floor(a1 / a2);
}
function bar(a7, a8) {
    return foo(a7 + 1, a8 + 1);
}
foo(16, "4");
bar(64, 2);
bar(64, 2);
