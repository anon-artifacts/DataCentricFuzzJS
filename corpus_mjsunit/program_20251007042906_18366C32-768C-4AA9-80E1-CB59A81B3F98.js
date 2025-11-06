function test1() {
    function mod(a2, a3) {
        return a2 % a3;
    }
    for (let i6 = 0; i6 < 60; i6++) {
        mod(4, 2);
        mod(5.5, 2.5);
        mod(10.3, 0);
        mod(-0, -3);
        -0;
    }
}
test1();
