function f(a1, a2, a3, a4, a5) {
    if (a1 && (a3 ? a4() : a5())) {
        return 0;
    }
}
f();
f();
f();
