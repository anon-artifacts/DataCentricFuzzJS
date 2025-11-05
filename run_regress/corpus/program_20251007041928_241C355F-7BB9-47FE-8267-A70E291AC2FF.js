function foo(a1) {
    return foo;
}
function foo(a3, a4) {
    return a3 ^ a4;
}
for (let i7 = 0; i7 < 100000; ++i7) {
    var result = foo();
}
