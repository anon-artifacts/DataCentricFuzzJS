function f() {
    var test = { x: 1 };
    var a = test;
    a = 42;
    a.x = 42;
    return test.x;
}
f();
