function bar() {
    return (0 / 0) && 1;
}
bar();
bar();
function foo() {
    return (0 / 0) || 1;
}
foo();
foo();
