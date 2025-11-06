function foo(a1) {
    return 1 + ((1 == 0) && undefined);
}
foo(false);
foo(false);
foo(true);
