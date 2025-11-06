function f(a1) {
    a1[{}] = 1;
    with (Object) {
    }
}
f(Object.prototype);
