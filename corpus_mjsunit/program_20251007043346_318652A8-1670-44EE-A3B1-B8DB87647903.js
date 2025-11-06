function boo() {
    return foo.arguments[0];
}
function foo(a5, a6, a7) {
    if (a5 == 0) {
        a5 ^= 4;
        return boo();
    }
    return undefined;
}
function inlined() {
    return foo.apply({}, arguments);
}
inlined(1, 2, 3);
inlined(0, 1, 2);
