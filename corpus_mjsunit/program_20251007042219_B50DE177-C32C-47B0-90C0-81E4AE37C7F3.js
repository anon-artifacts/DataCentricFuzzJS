function foo(a1, a2) {
    return a1[a2];
}
var a = [1,2];
a["-1"] = 42;
foo(a, 0);
foo(a, 1);
foo(a, 3);
foo(a, -1);
