function h(a1, a2) {
    var r = a1 + a2;
    function X() {
        return 42;
    }
    return r + X();
}
for (let i10 = 0; i10 < 5; i10++) {
    h(1, 2);
}
h(1, 2);
h("foo", 7);
