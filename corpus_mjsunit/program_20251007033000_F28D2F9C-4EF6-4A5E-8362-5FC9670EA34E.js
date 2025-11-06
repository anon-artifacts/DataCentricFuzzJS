function foo(a1) {
    return (a1 = +a1) > 0 ? a1 : 0 - a1;
}
foo(1);
foo(-1);
foo(0);
foo(-2147483648);
