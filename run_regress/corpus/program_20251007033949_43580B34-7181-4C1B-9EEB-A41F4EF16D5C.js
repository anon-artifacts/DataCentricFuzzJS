function foo(a1) {
    var x = a1;
    if (x != x) {
        return true;
    }
    return false;
}
foo("three");
foo(NaN);
