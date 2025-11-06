function foo(a1) {
    return Object.is((a1 ? -0 : 0) - 0, -0);
}
foo(false);
foo(true);
