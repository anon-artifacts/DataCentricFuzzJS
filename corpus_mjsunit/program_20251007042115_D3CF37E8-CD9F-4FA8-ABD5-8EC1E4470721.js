function bar(a1) {
    a1.constructor;
}
bar([]);
bar([]);
function foo() {
    var x = -0;
    bar(x + 1);
}
foo();
