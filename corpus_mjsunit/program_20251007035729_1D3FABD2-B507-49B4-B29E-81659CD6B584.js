function bar() {
    const t1 = foo.arguments;
    t1.length = 10;
}
function foo(a5) {
    var a = arguments;
    var n = 0;
    bar();
    a.length;
}
foo(5);
