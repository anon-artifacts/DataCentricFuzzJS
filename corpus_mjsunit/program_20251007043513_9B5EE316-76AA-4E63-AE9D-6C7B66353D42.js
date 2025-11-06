function foo(a1, a2) {
    a1[0] = a2;
    return a1;
}
for (let i4 = 0; i4 < 3; ++i4) {
    var a = Array();
    a = foo(a, 1.5);
    a[0];
    a = foo(a, 2);
    a[0];
}
