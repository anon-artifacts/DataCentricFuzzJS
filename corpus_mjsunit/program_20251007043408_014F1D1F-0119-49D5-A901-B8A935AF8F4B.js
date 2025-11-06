function f0() {
    function instanceof_check(a2) {
        a2() instanceof a2;
        a2(5) instanceof a2;
        a2(1, 2, 3) instanceof a2;
    }
    instanceof_check(Array);
    instanceof_check(Array);
    instanceof_check(Array);
}
f0();
