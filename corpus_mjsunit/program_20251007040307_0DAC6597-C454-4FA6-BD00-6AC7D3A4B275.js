function f1() {
    return f1;
}
f1.foo = undefined;
f1.prototype = 1;
f1.foo = 1;
