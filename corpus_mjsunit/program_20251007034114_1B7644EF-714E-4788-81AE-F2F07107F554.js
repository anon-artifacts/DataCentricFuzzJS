function foo(a1) {
    a1++;
    a1 = Math.max(0, a1);
    a1++;
    return a1;
}
foo(0);
foo(0);
foo(2147483646);
