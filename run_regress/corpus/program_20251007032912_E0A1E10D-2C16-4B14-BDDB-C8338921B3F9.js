function baz(a1, a2) {
    if (a2 === true) {
        a1[0] = 1;
    }
}
function bar(a7) {
    baz(Array.prototype, a7);
}
bar(false);
bar(false);
bar(true);
function foo() {
    ([]).push();
}
foo();
foo();
foo();
