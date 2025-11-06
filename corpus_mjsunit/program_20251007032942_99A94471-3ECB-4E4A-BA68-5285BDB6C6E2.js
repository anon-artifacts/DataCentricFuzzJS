function foo() {
    var a;
    var b;
    function f5() {
        b = "hello world";
        a = "hello world";
    }
    var bar = f5;
    bar();
    return a;
}
foo();
