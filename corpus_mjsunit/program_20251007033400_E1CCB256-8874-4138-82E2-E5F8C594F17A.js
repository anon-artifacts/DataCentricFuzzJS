function outer() {
    const x = 1;
    function inner() {
        return x;
    }
    inner();
    inner();
}
outer();
