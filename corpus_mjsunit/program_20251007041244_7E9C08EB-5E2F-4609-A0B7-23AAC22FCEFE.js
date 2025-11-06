var a = [0];
function bar(a4) {
    return a4;
}
function foo() {
    return a.reduce(bar);
}
foo();
foo();
foo();
