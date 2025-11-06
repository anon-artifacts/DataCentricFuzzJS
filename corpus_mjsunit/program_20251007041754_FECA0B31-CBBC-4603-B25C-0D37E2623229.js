function f() {
    const v1 = (a2) => {
        return !a2;
    };
    var g = v1;
    return "f:" + g(true);
}
f();
