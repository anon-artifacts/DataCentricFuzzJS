function foo(a1) {
    Object.seal(a1);
    a1[3] = 4;
    "" + a1;
}
foo([1,2,3]);
