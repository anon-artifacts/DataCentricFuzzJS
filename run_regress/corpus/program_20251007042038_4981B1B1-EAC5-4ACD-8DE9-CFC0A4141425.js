function test1() {
    function getchar(a2, a3) {
        return a2[a3];
    }
    for (let i6 = 0; i6 < 70; i6++) {
        getchar("foo", 0);
        getchar("bar", 2);
    }
    getchar("foo", 3);
}
test1();
