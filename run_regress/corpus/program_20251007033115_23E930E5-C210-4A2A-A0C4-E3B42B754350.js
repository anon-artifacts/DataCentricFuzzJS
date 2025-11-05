function f(a1, a2) {
    return a1[a2];
}
a = { a: 1, 1: "a" };
f(a, "a");
f(a, "a");
f(a, 1);
