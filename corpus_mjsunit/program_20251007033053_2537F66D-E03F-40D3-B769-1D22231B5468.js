function f(a1) {
    if (a1) {
        return true;
    }
    return false;
}
f(NaN);
f(-0);
f(3.3);
f(0);
f(3);
f("hi");
f("");
f(true);
f(false);
f(undefined);
f({});
f(null);
