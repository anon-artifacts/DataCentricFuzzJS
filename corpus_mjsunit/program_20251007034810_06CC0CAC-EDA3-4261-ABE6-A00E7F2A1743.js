function f0() {
    const v1 = [f0];
    function f2() {
        return f2;
    }
    v1.__defineGetter__(f0, f2);
    return f0;
}
f0();
