function foo(a1) {
    return Number.parseInt((a1 = a1 | 2147483648) + 65535, 8);
}
-72161;
foo();
-72161;
foo();
-72161;
foo();
