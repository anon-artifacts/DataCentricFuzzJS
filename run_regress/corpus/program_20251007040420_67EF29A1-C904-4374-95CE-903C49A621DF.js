function foo(a1, a2) {
    gc();
    var z = a1 + a2;
    print(z);
}
foo(2147483632, 100);
