function recompile() {
}
function foo() {
    if (arguments[0] == 9) {
        recompile();
    }
    return arguments[0];
}
function bar() {
    for (let i11 = 0; i11 < 10; i11++) {
        foo.apply(null, [i11]);
    }
}
bar();
